"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MarkdownRendererProps {
	content: string;
	className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
	// Function to render markdown content
	const renderMarkdown = (text: string): React.ReactElement[] => {
		const lines = text.split('\n');
		const elements: React.ReactElement[] = [];
		let currentListItems: string[] = [];
		let key = 0;

		const flushList = () => {
			if (currentListItems.length > 0) {
				elements.push(
					<ul key={key++} className="list-disc list-inside space-y-2 my-4 text-slate-300">
						{currentListItems.map((item, index) => (
							<li key={index} className="ml-6">{item}</li>
						))}
					</ul>
				);
				currentListItems = [];
			}
		};

		lines.forEach((line) => {
			// Handle headers
			if (line.startsWith('#')) {
				flushList();
				const level = line.match(/^#+/)?.[0].length || 1;
				const text = line.replace(/^#+\s*/, '');
				const headingLevel = Math.min(level, 3);
				
				if (headingLevel === 1) {
					elements.push(
						<h1 key={key++} className="text-3xl md:text-4xl font-bold text-white mb-4 mt-8">
							{text}
						</h1>
					);
				} else if (headingLevel === 2) {
					elements.push(
						<h2 key={key++} className="text-2xl md:text-3xl font-bold text-white mb-4 mt-8">
							{text}
						</h2>
					);
				} else {
					elements.push(
						<h3 key={key++} className="text-xl md:text-2xl font-bold text-white mb-4 mt-8">
							{text}
						</h3>
					);
				}
			}
			// Handle list items
			else if (line.startsWith('-')) {
				const item = line.replace(/^-\s*/, '');
				currentListItems.push(item);
			}
			// Handle images
			else if (line.includes('![')) {
				flushList();
				const imageMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
				if (imageMatch) {
					const alt = imageMatch[1];
					const src = imageMatch[2];
					
					elements.push(
						<div key={key++} className="my-8">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="relative aspect-[16/9] rounded-xl overflow-hidden"
							>
								<Image
									src={src}
									alt={alt}
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
							</motion.div>
							{alt && (
								<p className="text-center text-slate-400 text-sm mt-2 italic">{alt}</p>
							)}
						</div>
					);
				}
			}
			// Handle paragraphs
			else if (line.trim()) {
				flushList();
				elements.push(
					<p key={key++} className="text-slate-300 leading-relaxed mb-4">
						{line}
					</p>
				);
			}
			// Handle empty lines
			else {
				flushList();
			}
		});

		flushList();
		return elements;
	};

	return (
		<div className={`prose prose-invert prose-lg max-w-none ${className}`}>
			{renderMarkdown(content)}
		</div>
	);
};

export default MarkdownRenderer;