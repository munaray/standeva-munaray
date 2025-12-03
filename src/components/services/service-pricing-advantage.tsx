"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { DollarSign, TrendingUp, Shield, CheckCircle2 } from "lucide-react";

const ServicePricingAdvantage: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<section
			ref={ref}
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			{/* Background gradients */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.2),transparent_60%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 md:px-6">
				<div className="text-center">
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
						<DollarSign className="h-3.5 w-3.5" />
						Pricing Advantage
					</motion.div>

					{/* Title */}
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
						Implementation Pricing Advantage
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mt-4 mx-auto max-w-2xl text-center text-sm text-slate-300 sm:text-base">
						Outcome-focused, transparent pricing built for automation success.
					</motion.p>
				</div>

				<div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.25 }}
						className="lg:col-span-2 overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/15 via-sky-500/10 to-purple-500/10 p-8 shadow-[0_0_60px_rgba(16,185,129,0.2)] backdrop-blur-sm">
						<div className="flex items-center gap-3">
							<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-400/40">
								<TrendingUp className="h-5 w-5" />
							</div>
							<div className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100">
								Outcome-Driven
							</div>
						</div>
						<div className="mt-6 text-4xl font-bold text-slate-50 sm:text-5xl">
							100%+ ROI
						</div>
						<p className="mt-4 text-base leading-relaxed text-slate-100 sm:text-lg">
							Every automation we deliver is designed to provide a minimum
							100% return on investment, with long-term reductions of up to
							90% in repetitive workload costs.
						</p>
						<p className="mt-3 text-sm text-slate-200">
							Built for measurable outcomes, not billable hours.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-[0_15px_60px_rgba(0,0,0,0.35)]">
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-200">
								<DollarSign className="h-5 w-5" />
							</div>
							<h3 className="text-lg font-semibold text-slate-100">
								Pricing
							</h3>
						</div>
						<p className="mt-4 text-sm leading-relaxed text-slate-300">
							We offer competitive, transparent pricing that provides strong
							recurring savings through automation. Every solution is built
							using open-source tooling, eliminating hidden licence fees and
							minimising long-term costs.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.35 }}
						className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 shadow-[0_15px_60px_rgba(16,185,129,0.15)]">
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30">
								<Shield className="h-5 w-5" />
							</div>
							<h3 className="text-lg font-semibold text-slate-100">
								Flexible Payment Options
							</h3>
						</div>
						<ul className="mt-4 space-y-3">
							<li className="flex items-start gap-2 text-sm text-slate-200">
								<CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
								<span>Upfront project pricing</span>
							</li>
							<li className="flex items-start gap-2 text-sm text-slate-200">
								<CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
								<span>Monthly plans</span>
							</li>
							<li className="flex items-start gap-2 text-sm text-slate-200">
								<CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
								<span>Hybrid approaches for phased delivery</span>
							</li>
							<li className="flex items-start gap-2 text-sm text-slate-200">
								<CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
								<span>Optional support subscriptions</span>
							</li>
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="md:col-span-2 lg:col-span-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
						<div className="flex flex-col gap-3 text-left sm:flex-row sm:items-start sm:gap-4">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-sky-200">
								<Shield className="h-5 w-5" />
							</div>
							<div>
								<div className="text-base font-semibold text-slate-100">
									Transparent & Tailored
								</div>
								<p className="mt-2 text-sm leading-relaxed text-slate-300">
									Strategy, support, audits, and advisory are scoped separately.
									Payment structures are tailored to each project while keeping
									costs transparent through our open-source approach.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ServicePricingAdvantage;
