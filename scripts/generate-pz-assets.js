#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

let sharp;
try {
  sharp = require('sharp');
} catch (err) {
  console.error('Missing dependency: sharp. Install with `npm install --save-dev sharp` and rerun.');
  process.exit(1);
}

const projectRoot = path.resolve(__dirname, '..');
const assetsRoot = path.join(projectRoot, 'public', 'brand-assets', 'pz');
const pngDir = path.join(assetsRoot, 'png');
const faviconsDir = path.join(assetsRoot, 'favicons');
const svgLogo = path.join(assetsRoot, 'pz-logo.svg');
const svgIcon = path.join(assetsRoot, 'pz-icon.svg');
const svgDensity = 600;
const logoRatio = 367 / 556;

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function renderPng(inputPath, outputPath, width, height) {
  return sharp(inputPath, { density: svgDensity })
    .resize(width, height, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outputPath)
    .then(() => {
      console.log(`✓ ${path.relative(projectRoot, outputPath)} (${width}x${height})`);
    });
}

async function run() {
  ensureDir(pngDir);
  ensureDir(faviconsDir);

  const logoSizes = [160, 320].map((width) => ({
    width,
    height: Math.round(width * logoRatio),
  }));

  const iconSizes = [32, 64, 128, 256, 512];
  const faviconSizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
  ];

  const jobs = [];

  logoSizes.forEach(({ width, height }, index) => {
    const suffix = index === 0 ? '@1x' : '@2x';
    const output = path.join(pngDir, `pz-logo${suffix}.png`);
    jobs.push(renderPng(svgLogo, output, width, height));
  });

  iconSizes.forEach((size) => {
    const output = path.join(pngDir, `pz-icon-${size}.png`);
    jobs.push(renderPng(svgIcon, output, size, size));
  });

  faviconSizes.forEach(({ name, size }) => {
    const output = path.join(faviconsDir, name);
    jobs.push(renderPng(svgIcon, output, size, size));
  });

  await Promise.all(jobs);
  console.log('PZ assets generated.');
}

run().catch((err) => {
  console.error('Asset generation failed:', err);
  process.exit(1);
});
