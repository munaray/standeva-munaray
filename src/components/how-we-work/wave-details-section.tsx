"use client";

import type { FC } from "react";
import { motion } from "framer-motion";

const waveDetails = [
	{
		id: "wave-1",
		title: "wave 1 efficiency",
		highlight: ["Reduce cost", "Free capacity"],
		body: [
			"This is where every engagement starts",
			"We focus on improving how your existing processes run",
		],
		bullets: [
			"Reduce operating costs",
			"Remove repetitive, manual work",
			"Free people from low-value tasks",
			"Create capacity for higher-value work",
		],
		closing: ["Fast impact", "Lowest risk"],
		icon: "⚡",
	},
	{
		id: "wave-2",
		title: "wave 2 growth",
		highlight: ["Remove bottlenecks", "Scale output"],
		body: [
			"Once efficiency is under control, we focus on growth constraints",
			"AI is used to",
		],
		bullets: [
			"Remove bottlenecks across teams and systems",
			"Improve decisions where they limit throughput",
			"Enable the business to handle more volume",
			"Scale output without increasing headcount",
		],
		closing: [],
		icon: "📈",
	},
	{
		id: "wave-3",
		title: "wave 3 expansion",
		highlight: ["Create new products and services with AI"],
		body: [
			"With an AI-first mindset established, new opportunities emerge",
		],
		bullets: [
			"Develop products or services you would not previously have considered",
			"Use AI as a core capability, not an add-on",
			"Sell new offerings to existing customers",
			"Reach new customers without rebuilding the business",
		],
		closing: ["This stage is earned and optional"],
		icon: "🚀",
	},
];

const WaveDetailsSection: FC = () => {
	return (
		<div className="grid gap-6 px-8">
			{waveDetails.map((wave, index) => (
				<motion.article
					key={wave.id}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: index * 0.1 }}
					whileHover={{
						y: -4,
						scale: 1.02,
						boxShadow: "0 32px 80px rgba(15,23,42,1)",
					}}
					className="group flex h-full flex-col rounded-3xl border border-slate-800/50 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-slate-900/70 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.9)] transition-all duration-300 hover:border-emerald-400/30 sm:p-8">
					<div className="mb-4 flex items-center justify-between">
						<span className="text-2xl transition-transform duration-300 group-hover:scale-110">
							{wave.icon}
						</span>
						<span className="inline-flex items-center rounded-full border border-emerald-800/50 bg-emerald-900/50 px-3 py-1 text-xs font-medium text-emerald-200">
							wave {index + 1}
						</span>
					</div>

					<h3 className="mb-3 text-xl font-semibold text-slate-50 sm:text-2xl">
						{wave.title}
					</h3>

					<div className="mb-4 space-y-1">
						{wave.highlight.map((line, hIndex) => (
							<motion.p
								key={line}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.2 + hIndex * 0.1 }}
								className="inline-flex items-center gap-2 rounded-lg border border-emerald-800/30 bg-emerald-900/30 px-3 py-2 text-sm font-semibold text-emerald-200 transition-colors duration-200 hover:bg-emerald-900/50 sm:text-base">
								<span className="text-emerald-400">→</span>
								{line}
							</motion.p>
						))}
					</div>

					<div className="mb-6 space-y-3 text-sm text-slate-300 sm:text-base">
						{wave.body.map((line) => (
							<p key={line} className="leading-relaxed">
								{line}
							</p>
						))}
					</div>

					<ul className="mb-6 space-y-3 text-sm text-slate-200 sm:text-base">
						{wave.bullets.map((item, bulletIndex) => (
							<li
								key={item}
								className="flex items-start gap-3 transition-colors duration-200 group-hover:text-slate-100">
								<motion.span
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									transition={{
										delay: 0.3 + bulletIndex * 0.05,
										type: "spring",
									}}
									className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"
								/>
								<span className="leading-relaxed">{item}</span>
							</li>
						))}
					</ul>

					{wave.closing.length > 0 && (
						<motion.footer
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.4 }}
							className="mt-auto border-t border-slate-800/50 pt-4">
							<div className="space-y-1 text-sm font-medium text-slate-200 sm:text-base">
								{wave.closing.map((line) => (
									<p key={line}>{line}</p>
								))}
							</div>
						</motion.footer>
					)}
				</motion.article>
			))}
		</div>
	);
};

export default WaveDetailsSection;
