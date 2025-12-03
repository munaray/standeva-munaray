"use client";

import type { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
	Search,
	Lightbulb,
	Rocket,
	RefreshCw,
	PhoneCall,
	CheckCircle2,
	ArrowRight,
} from "lucide-react";

const services = [
	{
		id: "intro-call",
		number: "01",
		icon: PhoneCall,
		title: "15-Minute Introductory Call",
		subtitle:
			"A short, focused call to understand your goals and whether AI automation is the right fit.",
		description: "We cover:",
		features: [
			"Your current pain points",
			"How our automation process works",
			"Pricing, ROI and commercial clarity",
			"Why ProcessZero's secure, in-network AI agents are different",
		],
		color: "from-sky-500 to-blue-600",
		borderColor: "border-sky-500/40",
		bgColor: "bg-sky-500/10",
		image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
		cta: "Book Intro Call",
	},
	{
		id: "process-audit",
		number: "02",
		icon: Search,
		title: "Discovery Day & AI Audit (£100)",
		subtitle: "A collaborative deep-dive into your automation opportunities.",
		description: "Includes:",
		features: [
			"Understanding your goals",
			"AI-first strategy session",
			"Process mapping with stakeholders (SOPs, frequency, cycle time, labour cost)",
			"Compliance & security overview",
			"End-of-day review of priorities",
			"AI Audit Report with recommendations",
			"Timelines and implementation costs",
			"ROI and savings estimates",
			"1-hour Teams/in-person presentation",
		],
		color: "from-indigo-500 to-violet-600",
		borderColor: "border-indigo-500/40",
		bgColor: "bg-indigo-500/10",
		image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80",
		cta: "Book Your Discovery Day",
	},
	{
		id: "implementation",
		number: "03",
		icon: Rocket,
		title: "AI Implementation Partner",
		subtitle:
			"We design, build and deploy your automations inside your network using secure open-source AI agents.",
		description: "Includes:",
		features: [
			"Workflow engineering",
			"AI agent development",
			"Integration and orchestration",
			"Testing & validation",
			"Documentation of all processes",
			"Staff onboarding and change support",
		],
		color: "from-emerald-500 to-teal-600",
		borderColor: "border-emerald-500/40",
		bgColor: "bg-emerald-500/10",
		image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&q=80",
		cta: "Discuss implementation",
	},
	{
		id: "maintenance",
		number: "04",
		icon: RefreshCw,
		title: "Ongoing AI Support & Maintenance",
		subtitle:
			"Optional support to optimise, extend and maintain your automations.",
		description: "Including:",
		features: [
			"Monitoring performance",
			"Enhancements and feature improvements",
			"Adding new workflows",
			"Technical support as needed",
		],
		color: "from-amber-500 to-orange-600",
		borderColor: "border-amber-500/40",
		bgColor: "bg-amber-500/10",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
		cta: "Keep my automations optimised",
	},
	{
		id: "transformation",
		number: "05",
		icon: Lightbulb,
		title: "AI Transformation Partner",
		subtitle:
			"Strategic long-term guidance for organisations adopting AI at scale.",
		description: "We support you with:",
		features: [
			"AI strategy & governance",
			"Roadmap development",
			"Workforce transformation",
			"Organisational AI readiness",
			"Change management",
		],
		color: "from-purple-500 to-indigo-600",
		borderColor: "border-purple-500/40",
		bgColor: "bg-purple-500/10",
		image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
		cta: "Shape your AI strategy",
	},
];

const ServiceFrameworkSection: FC = () => {
	const { ref, isInView } = useScrollAnimation({
		threshold: 0.05,
		triggerOnce: true,
	});

	return (
		<section
			ref={ref}
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			{/* Background gradients */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.12),transparent_50%)] opacity-70" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 md:px-6">
				{/* Section header */}
				<div className="text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-sky-200">
						Five-Part Framework
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
						Comprehensive Service Framework
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
						From initial discovery to ongoing optimization, our
						integrated approach ensures successful AI automation at
						every stage.
					</motion.p>
				</div>

				{/* Services */}
				<div className="mt-20 space-y-20">
					{services.map((service, index) => {
						const Icon = service.icon;
						const isEven = index % 2 === 0;

						return (
							<motion.div
								key={service.id}
								id={service.id}
								initial={{ opacity: 0, y: 40 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{
									duration: 0.6,
									delay: 0.3 + index * 0.2,
								}}
								className="relative">
								<div
									className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${
										isEven ? "" : "lg:grid-flow-dense"
									}`}>
									{/* Content */}
									<div
										className={`flex flex-col justify-center ${
											isEven ? "" : "lg:col-start-2"
										}`}>
										{/* Number and icon */}
										<div className="flex items-center gap-4">
											<div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950/80 text-xl font-bold text-slate-600">
												{service.number}
											</div>
											<div
												className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}>
												<Icon className="h-6 w-6 text-white" />
											</div>
										</div>

										{/* Title */}
										<h3 className="mt-6 text-2xl font-semibold text-slate-100 sm:text-3xl">
											{service.title}
										</h3>

										{/* Subtitle */}
										<p className="mt-3 text-base font-medium text-slate-200 sm:text-lg">
											{service.subtitle}
										</p>

										{/* Description */}
										<p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
											{service.description}
										</p>

										{/* Features */}
										<div className="mt-6 space-y-3">
											{service.features.map(
												(feature, idx) => (
													<div
														key={idx}
														className="flex items-start gap-3">
														<CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-400 mt-0.5" />
														<span className="text-sm text-slate-300">
															{feature}
														</span>
													</div>
												)
											)}
										</div>

										{/* CTA */}
										<div className="mt-8">
											<a
												href="#"
												className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition hover:text-sky-300 group">
												{service.cta ??
													"Learn more about this service"}
												<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
											</a>
										</div>
									</div>

									{/* Image */}
									<div
										className={`relative ${
											isEven ? "" : "lg:col-start-1 lg:row-start-1"
										}`}>
										<div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 shadow-[0_0_40px_rgba(56,189,248,0.1)]">
											<Image
												src={service.image}
												alt={service.title}
												fill
												className="object-cover"
												sizes="(max-width: 1024px) 100vw, 50vw"
											/>
											<div
												className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`}
											/>
										</div>
									</div>
								</div>

								{/* Separator */}
								{index < services.length - 1 && (
									<div className="mx-auto mt-20 h-px w-32 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
								)}
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ServiceFrameworkSection;
