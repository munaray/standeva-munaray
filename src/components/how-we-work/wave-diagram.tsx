"use client";

import type { FC } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

interface WaveData {
	id: string;
	title: string;
	highlight: string[];
	body: string[];
	bullets: string[];
	closing: string[];
	color: string;
	x: number;
	width: number;
}

const WaveDiagram: FC = () => {
	const [hoveredWave, setHoveredWave] = useState<number | null>(null);
	const mouseX = useMotionValue(0);

	const waveData: WaveData[] = [
		{
			id: "wave-1",
			title: "wave 1 efficiency",
			highlight: ["Reduce cost", "Free capacity"],
			body: [
				"This is where every engagement starts.",
				"We focus on improving how your existing processes run.",
			],
			bullets: [
				"Reduce operating costs",
				"Remove repetitive, manual work",
				"Free people from low-value tasks",
				"Create capacity for higher-value work",
			],
			closing: ["Fast impact", "Lowest risk"],
			color: "rgba(16,185,129,0.08)",
			x: 80,
			width: 346,
		},
		{
			id: "wave-2",
			title: "wave 2 growth",
			highlight: ["Remove bottlenecks", "Scale output"],
			body: [
				"Once efficiency is under control, we focus on growth constraints.",
				"AI is used to accelerate expansion.",
			],
			bullets: [
				"Remove bottlenecks across teams and systems",
				"Improve decisions where they limit throughput",
				"Enable the business to handle more volume",
				"Scale output without increasing headcount",
			],
			closing: [],
			color: "rgba(56,189,248,0.08)",
			x: 426,
			width: 346,
		},
		{
			id: "wave-3",
			title: "wave 3 expansion",
			highlight: ["Create new products", "and services"],
			body: [
				"With an AI-first mindset established, new opportunities emerge.",
			],
			bullets: [
				"Develop products or services you would not previously have considered",
				"Use AI as a core capability, not an add-on",
				"Sell new offerings to existing customers",
				"Reach new customers without rebuilding the business",
			],
			closing: ["This stage is earned and optional"],
			color: "rgba(129,140,248,0.08)",
			x: 772,
			width: 348,
		},
	];

	const handleMouseMove = (
		e: React.MouseEvent<SVGElement>,
		index: number
	) => {
		const svgRect = e.currentTarget.getBoundingClientRect();
		const x = ((e.clientX - svgRect.left) / svgRect.width) * 1200;
		mouseX.set(x);
		setHoveredWave(index);
	};

	const handleMouseLeave = () => {
		setHoveredWave(null);
	};

	return (
		<div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8 }}
				className="overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950/70 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.9)] sm:p-8 relative">
				<svg
					viewBox="0 0 1200 580"
					role="img"
					aria-label="three-wave ai adoption graph"
					style={{ fontFamily: "var(--font-geist-sans)" }}
					className="h-80 w-full sm:h-[380px] md:h-[520px] cursor-pointer"
					onMouseLeave={handleMouseLeave}>
					<defs>
						<linearGradient
							id="waveStroke"
							x1="0"
							y1="0"
							x2="1"
							y2="0">
							<stop offset="0%" stopColor="#34d399" />
							<stop offset="50%" stopColor="#38bdf8" />
							<stop offset="100%" stopColor="#818cf8" />
						</linearGradient>
						<linearGradient
							id="waveFill"
							x1="0"
							y1="0"
							x2="0"
							y2="1">
							<stop
								offset="0%"
								stopColor="rgba(56,189,248,0.35)"
							/>
							<stop offset="100%" stopColor="rgba(15,23,42,0)" />
						</linearGradient>
						<filter
							id="glow"
							x="-50%"
							y="-50%"
							width="200%"
							height="200%">
							<feGaussianBlur
								stdDeviation="3"
								result="coloredBlur"
							/>
							<feMerge>
								<feMergeNode in="coloredBlur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>

					<motion.rect
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						x="80"
						y="60"
						width="1040"
						height="460"
						rx="24"
						fill="#0f172a"
					/>
					{waveData.map((wave, i) => (
						<g key={wave.id}>
							<motion.rect
								initial={{ opacity: 0, scaleX: 0 }}
								whileInView={{ opacity: 1, scaleX: 1 }}
								transition={{ delay: 0.3 + i * 0.1 }}
								x={wave.x}
								y="60"
								width={wave.width}
								height="460"
								fill={wave.color}
								onMouseEnter={(e) => handleMouseMove(e, i)}
								whileHover={{ opacity: 0.15 }}
							/>
							<motion.text
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.2 + i * 0.2 }}
								x={wave.x + wave.width / 2}
								y={wave.x < 500 ? 130 : 140} // Adjust y based on position
								fill="#f8fafc"
								fontSize="20"
								fontWeight="600"
								textAnchor="middle"
								onMouseEnter={(e) => handleMouseMove(e, i)}>
								{wave.title}
							</motion.text>
							<motion.text
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.3 + i * 0.2 }}
								x={wave.x + wave.width / 2}
								y={wave.x < 500 ? 160 : 170}
								fill="#cbd5f5"
								fontSize="14"
								textAnchor="middle"
								onMouseEnter={(e) => handleMouseMove(e, i)}>
								{wave.highlight.map((sub, sI) => (
									<tspan
										key={sI}
										x={wave.x + wave.width / 2}
										dy={sI === 0 ? "0" : "20"}>
										{sub}
									</tspan>
								))}
							</motion.text>
						</g>
					))}

					<motion.line
						initial={{ pathLength: 0 }}
						whileInView={{ pathLength: 1 }}
						transition={{ delay: 0.6, duration: 1 }}
						x1="100"
						y1="520"
						x2="1100"
						y2="520"
						stroke="rgba(148,163,184,0.4)"
						strokeWidth="2"
					/>
					<motion.line
						initial={{ pathLength: 0 }}
						whileInView={{ pathLength: 1 }}
						transition={{ delay: 0.6, duration: 1 }}
						x1="100"
						y1="520"
						x2="100"
						y2="80"
						stroke="rgba(148,163,184,0.4)"
						strokeWidth="2"
					/>
					{([190, 300, 410] as const).map((y, i) => (
						<motion.line
							key={y}
							initial={{ pathLength: 0 }}
							whileInView={{ pathLength: 1 }}
							transition={{ delay: 0.7 + i * 0.1, duration: 0.8 }}
							x1="100"
							y1={y}
							x2="1100"
							y2={y}
							stroke="rgba(148,163,184,0.15)"
							strokeDasharray="6 10"
						/>
					))}

					<motion.path
						initial={{ pathLength: 0, opacity: 0 }}
						whileInView={{ pathLength: 1, opacity: 1 }}
						transition={{
							delay: 0.8,
							duration: 1.5,
							ease: "easeOut",
						}}
						d="M 100 480 C 200 400, 290 340, 420 340 C 520 340, 600 390, 700 330 C 800 270, 880 260, 980 260 C 1040 260, 1080 240, 1100 220"
						fill="none"
						stroke="url(#waveStroke)"
						strokeWidth="6"
						strokeLinecap="round"
						filter="url(#glow)"
					/>
					<motion.path
						initial={{ pathLength: 0, opacity: 0 }}
						whileInView={{ pathLength: 1, opacity: 1 }}
						transition={{
							delay: 1.0,
							duration: 1.5,
							ease: "easeOut",
						}}
						d="M 100 480 C 200 400, 290 340, 420 340 C 520 340, 600 390, 700 330 C 800 270, 880 260, 980 260 C 1040 260, 1080 240, 1100 220 L 1100 520 L 100 520 Z"
						fill="url(#waveFill)"
					/>

					<motion.text
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 1.5 }}
						x="1040"
						y="540"
						fill="#94a3b8"
						fontSize="16">
						time (t)
					</motion.text>
					<motion.text
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 1.5 }}
						x="-30"
						y="260"
						fill="#94a3b8"
						fontSize="16"
						transform="rotate(-90 60 260)">
						ai adoption and implementation
					</motion.text>
				</svg>

				{hoveredWave !== null && (
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 10 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 10 }}
						transition={{ duration: 0.2 }}
						style={{
							position: "absolute",
							top: "20%",
							left: `${
								(waveData[hoveredWave].x / 1200) * 100 +
								(waveData[hoveredWave].width / 1200) * 50
							}%`,
							transform: "translateX(-50%)",
							zIndex: 10,
							pointerEvents: "none",
						}}
						className="max-w-sm rounded-2xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-sm p-4 shadow-2xl text-sm text-slate-200">
						<h4 className="font-semibold text-slate-100 mb-2">
							{waveData[hoveredWave].title}
						</h4>
						<div className="space-y-1 mb-3">
							{waveData[hoveredWave].highlight.map((line) => (
								<p
									key={line}
									className="text-emerald-300 font-medium">
									• {line}
								</p>
							))}
						</div>
						<div className="space-y-1 text-xs">
							{waveData[hoveredWave].body.map((line) => (
								<p key={line}>{line}</p>
							))}
						</div>
						<ul className="mt-2 space-y-1 text-xs">
							{waveData[hoveredWave].bullets.map((bullet) => (
								<li key={bullet} className="flex gap-1">
									<span className="text-emerald-400">→</span>
									<span>{bullet}</span>
								</li>
							))}
						</ul>
						{waveData[hoveredWave].closing.length > 0 && (
							<div className="mt-2 pt-2 border-t border-slate-700/50 text-xs italic text-slate-400">
								{waveData[hoveredWave].closing.map((line) => (
									<p key={line}>{line}</p>
								))}
							</div>
						)}
					</motion.div>
				)}
			</motion.div>
		</div>
	);
};

export default WaveDiagram;
