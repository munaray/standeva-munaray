"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Star, Zap, Users } from "lucide-react";

const PricingSection: React.FC = () => {
	const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

	const plans = [
		{
			name: "Light",
			description: "For individuals who want to automate tasks, save hours, and get hands-on with Standeva's AI Computer-Use Agent.",
			price: billingCycle === "monthly" ? 19 : 190,
			originalPrice: billingCycle === "monthly" ? null : 228,
			features: [
				"~ 4 Hours of usage",
				"Persistent desktop with saved files, apps, and logins",
				"Latest AI Model access",
				"Chat History & Management",
			],
			badge: null,
			popular: false,
		},
		{
			name: "Heavy",
			description: "For power users and teams who need advanced automation, delegation, and priority performance.",
			price: billingCycle === "monthly" ? 199 : 1990,
			originalPrice: billingCycle === "monthly" ? null : 2388,
			features: [
				"~ 40 Hours of usage",
				"Priority support",
				"Feature requests",
				"Everything in Light",
			],
			badge: "Most popular",
			popular: true,
		},
		{
			name: "Max",
			description: "For enterprise users who want to replace hiring full-time employees and 10x their organization's productivity",
			price: billingCycle === "monthly" ? 499 : 4990,
			originalPrice: billingCycle === "monthly" ? null : 5988,
			features: [
				"~ 100 Hours of usage",
				"Custom integrations requests",
				"Enterprise support & SLA",
				"Specialized model training",
			],
			badge: null,
			popular: false,
		},
	];

	const bonuses = [
		{
			icon: Star,
			title: "Price guarantee for a year",
			description: "Lock in your rate forever",
		},
		{
			icon: Zap,
			title: "Monthly feature updates",
			description: "Always getting better",
		},
		{
			icon: Users,
			title: "Bulk discounts for businesses",
			description: "Save more with team plans",
		},
	];

	return (
		<section id="pricing" className="px-6 py-24">
			<div className="mx-auto max-w-6xl">
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}>
					<h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
						Choose the Plan that suits your Workload
					</h2>
					<p className="mx-auto mt-6 text-xl text-slate-300">
						Start with Standeva.ai today
					</p>
				</motion.div>

				{/* Billing Toggle */}
				<motion.div
					className="mt-12 flex justify-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}>
					<div className="inline-flex items-center rounded-xl border border-white/10 bg-slate-900/50 p-1 backdrop-blur-sm">
						<button
							onClick={() => setBillingCycle("monthly")}
							className={`rounded-lg px-6 py-2 text-sm font-medium transition ${
								billingCycle === "monthly"
									? "bg-blue-500 text-white"
									: "text-slate-400 hover:text-white"
							}`}>
							Monthly
						</button>
						<button
							onClick={() => setBillingCycle("yearly")}
							className={`relative rounded-lg px-6 py-2 text-sm font-medium transition ${
								billingCycle === "yearly"
									? "bg-blue-500 text-white"
									: "text-slate-400 hover:text-white"
							}`}>
							Yearly
							<span className="absolute -top-2 -right-2 rounded-full bg-green-500 px-2 py-0.5 text-xs font-bold text-white">
								Save 17%
							</span>
						</button>
					</div>
				</motion.div>

				{/* Pricing Cards */}
				<div className="mt-12 grid gap-8 lg:grid-cols-3">
					{plans.map((plan, index) => (
						<motion.div
							key={plan.name}
							className={`relative rounded-3xl border p-8 backdrop-blur-sm transition-all hover:scale-105 ${
								plan.popular
									? "border-blue-500 bg-gradient-to-br from-blue-500/10 to-purple-600/10"
									: "border-white/10 bg-slate-900/50"
							}`}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}>
							{plan.badge && (
								<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white">
									{plan.badge}
								</div>
							)}

							<div className="text-center">
								<h3 className="text-2xl font-bold text-white">{plan.name}</h3>
								<p className="mt-4 text-sm text-slate-300">{plan.description}</p>
							</div>

							<div className="mt-8 text-center">
								<div className="flex items-baseline justify-center gap-2">
									<span className="text-4xl font-bold text-white">${plan.price}</span>
									<span className="text-slate-400">
										/{billingCycle === "monthly" ? "Month" : "Year"}
									</span>
								</div>
								{plan.originalPrice && (
									<p className="mt-2 text-sm text-slate-400 line-through">
										${plan.originalPrice}/year
									</p>
								)}
							</div>

							<div className="mt-8 space-y-4">
								{plan.features.map((feature, featureIndex) => (
									<div key={featureIndex} className="flex items-start gap-3">
										<CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
										<span className="text-sm text-slate-200">{feature}</span>
									</div>
								))}
							</div>

							<motion.button
								className={`mt-8 w-full rounded-xl px-6 py-3 font-semibold transition ${
									plan.popular
										? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30"
										: "border border-blue-500/40 text-slate-100 hover:border-blue-500 hover:bg-blue-500/10"
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								Start Now for ${plan.price}/{billingCycle === "monthly" ? "Month" : "Year"}
							</motion.button>
						</motion.div>
					))}
				</div>

				{/* Bonuses Section */}
				<motion.div
					className="mt-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.6 }}>
					<div className="text-center">
						<h3 className="text-2xl font-bold text-white">
							Sign up now and Get the limited offer and more
						</h3>
					</div>

					<div className="mt-12 grid gap-6 md:grid-cols-3">
						{bonuses.map((bonus, index) => {
							const IconComponent = bonus.icon;
							return (
								<motion.div
									key={index}
									className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm"
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
									whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.3)" }}>
									<div className="flex items-center gap-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
											<IconComponent className="h-6 w-6 text-blue-400" />
										</div>
										<div>
											<h4 className="text-lg font-semibold text-white">
												{bonus.title}
											</h4>
											<p className="mt-1 text-sm text-slate-300">
												{bonus.description}
											</p>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</motion.div>

				{/* CTA */}
				<motion.div
					className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-slate-900/50 p-8 text-center backdrop-blur-sm"
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 1 }}>
					<h3 className="text-2xl font-bold text-white">
						Limited offer Ongoing!
					</h3>
					<p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
						2k+ professionals are already ahead of you
					</p>
					<motion.button
						className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						Sign Up now
						<ArrowRight className="h-5 w-5" />
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default PricingSection;
