"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Link from "next/link";

const methodologyBullets = [
	"Align happens in a free 60-minute discovery call",
	"Clarify defines what should be automated and why",
	"Transform only happens once value and impact are clear",
	"We don't jump straight to implementation.",
];

const MethodologySection: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<section
			ref={ref}
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			{/* Background gradients */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.08),transparent_50%)] opacity-70" />
			</div>

			<div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1.5 text-xs font-medium tracking-[0.22em] text-sky-200">
					our methodology
				</motion.div>

				{/* Title */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 text-balance text-2xl font-semibold sm:text-3xl md:text-4xl">
					how we move through <span className="text-sky-400">the waves</span>
				</motion.h2>

				{/* Body text */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mt-4 text-sm text-slate-300 sm:text-base">
					We follow a clear, disciplined approach:
				</motion.p>

				{/* Emphasized line */}
				<motion.p
					initial={{ opacity: 0, scale: 0.95 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mt-6 text-lg font-semibold text-sky-400 sm:text-xl">
					Align → Clarify → Transform
				</motion.p>

				{/* Bullets */}
				<motion.ul
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-8 grid grid-cols-1 gap-3 text-left text-sm text-slate-200 sm:grid-cols-2 sm:text-base">
					{methodologyBullets.map((item, index) => (
						<motion.li
							key={item}
							initial={{ opacity: 0, x: -20 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							transition={{
								duration: 0.5,
								delay: 0.5 + index * 0.1,
							}}
							className="flex gap-2">
							<span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
							<span>{item}</span>
						</motion.li>
					))}
				</motion.ul>

				{/* Inline CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.9 }}
					className="mt-10 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-sky-400/20 bg-slate-950/50 px-6 py-4 text-sm text-slate-200 backdrop-blur-sm sm:text-base">
					<span>
						Every engagement starts with a free discovery call
					</span>
					<Link
						href="/intro-call"
						className="inline-flex items-center gap-1 font-semibold text-sky-400 transition-colors hover:text-sky-300">
						<span>→</span>
						<span>Book the free 60-minute discovery call</span>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default MethodologySection;
