/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
	BookOpen,
	Code,
	Rocket,
	MessageSquare,
	Wrench,
	Zap,
} from "lucide-react";

type Track = "ready-apis" | "custom-dev";

const integrationTracks = {
	"ready-apis": {
		id: "ready-apis",
		title: "Ready-Made APIs",
		subtitle: "Get started in minutes",
		badge: "Quick Start",
		color: "from-blue-500 to-blue-600",
		steps: [
			{
				id: 1,
				title: "Browse & Select",
				description:
					"Explore our API catalog and choose the solution that fits your needs.",
				icon: BookOpen,
				features: [
					"Browse comprehensive API documentation",
					"Try interactive API playground",
					"Review pricing and rate limits",
					"Check integration examples",
				],
			},
			{
				id: 2,
				title: "Integrate",
				description:
					"Add our SDK to your project and start making API calls in minutes.",
				icon: Code,
				features: [
					"Install SDK via npm/pip/composer",
					"Copy your API key from dashboard",
					"Follow step-by-step guides",
					"Use code snippets for your stack",
				],
			},
			{
				id: 3,
				title: "Deploy & Scale",
				description:
					"Ship to production with confidence. We handle scaling automatically.",
				icon: Rocket,
				features: [
					"Production-ready from day one",
					"Auto-scaling infrastructure",
					"Real-time monitoring dashboard",
					"24/7 support and SLA guarantees",
				],
			},
		],
	},
	"custom-dev": {
		id: "custom-dev",
		title: "Custom Development",
		subtitle: "Tailored solutions for unique needs",
		badge: "Custom Build",
		color: "from-blue-600 to-blue-700",
		steps: [
			{
				id: 1,
				title: "Discovery Call",
				description:
					"We discuss your requirements and architect the perfect solution.",
				icon: MessageSquare,
				features: [
					"Free 30-minute consultation",
					"Technical requirements gathering",
					"Architecture recommendations",
					"Timeline and cost estimation",
				],
			},
			{
				id: 2,
				title: "Build & Iterate",
				description:
					"Our engineering team builds your custom API with regular check-ins.",
				icon: Wrench,
				features: [
					"Dedicated engineering team",
					"Bi-weekly progress reviews",
					"Agile development approach",
					"Continuous feedback integration",
				],
			},
			{
				id: 3,
				title: "Launch & Support",
				description:
					"We deploy, monitor, and maintain your custom solution.",
				icon: Rocket,
				features: [
					"Production deployment & migration",
					"Complete documentation",
					"Team training sessions",
					"Ongoing maintenance & updates",
				],
			},
		],
	},
};

const OurProcess: React.FC = () => {
	const [activeTrack, setActiveTrack] = useState<Track>("ready-apis");

	const { ref: headerRef, isInView: headerInView } = useScrollAnimation({
		threshold: 0.3,
		triggerOnce: false,
	});
	const { ref: stepsRef, isInView: stepsInView } = useScrollAnimation({
		threshold: 0.2,
		triggerOnce: false,
	});

	const headerVariants: Variants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const cardVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 60,
			scale: 0.9,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.7,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const currentTrack = integrationTracks[activeTrack];

	return (
		<section className="process-section py-20 bg-linear-to-br from-white via-slate-50 to-blue-50">
			<div className="container mx-auto px-6">
				{/* Header */}
				<div ref={headerRef} className="text-center mb-16">
					<p className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-4">
						HOW IT WORKS
					</p>

					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
						Two Ways to Integrate
					</h2>
					<p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
						Choose the path that fits your needs: instant API
						integration or custom-built solutions
					</p>
				</div>

				{/* Track Selector Tabs */}
				<div className="flex justify-center mb-12">
					<div className="inline-flex bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
						{Object.values(integrationTracks).map((track) => (
							<button
								key={track.id}
								onClick={() =>
									setActiveTrack(track.id as Track)
								}
								className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
									activeTrack === track.id
										? "bg-linear-to-r " +
										  track.color +
										  " text-white shadow-lg"
										: "text-slate-600 hover:text-slate-900"
								}`}>
								<div className="flex items-center gap-2">
									<span>{track.title}</span>
									<span className="text-xs px-2 py-1 rounded-full bg-white/20">
										{track.badge}
									</span>
								</div>
							</button>
						))}
					</div>
				</div>

				{/* Process Steps */}
				<div
					ref={stepsRef}
					className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12">
					{currentTrack.steps.map((step, index) => {
						const IconComponent = step.icon;
						return (
							<div
								key={step.id}
								className="relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 group">
								{/* Step Number */}
								<div
									className={`absolute -top-4 -left-4 w-10 h-10 bg-linear-to-r ${currentTrack.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
									{step.id}
								</div>

								{/* Icon */}
								<div
									className={`w-16 h-16 rounded-xl bg-linear-to-r ${currentTrack.color} flex items-center justify-center mb-6`}>
									<IconComponent className="w-8 h-8 text-white" />
								</div>

								{/* Content */}
								<h3 className="text-xl font-bold text-slate-900 mb-4">
									{step.title}
								</h3>
								<p className="text-base text-slate-600 leading-relaxed mb-6">
									{step.description}
								</p>

								{/* Features List */}
								<ul className="space-y-2">
									{step.features.map(
										(feature, featureIndex) => (
											<li
												key={featureIndex}
												className="flex items-start text-sm text-slate-600">
												<span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></span>
												{feature}
											</li>
										)
									)}
								</ul>

								{/* Connection Arrow for larger screens */}
								{index < currentTrack.steps.length - 1 && (
									<div className="hidden md:block absolute top-1/2 -right-4 text-slate-300 transform -translate-y-1/2">
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none">
											<path
												d="M8 16H24M24 16L18 10M24 16L18 22"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
								)}
							</div>
						);
					})}
				</div>

				{/* Bottom Info */}
				<div className="text-center max-w-2xl mx-auto">
					<p className="text-slate-500 text-sm">
						{activeTrack === "ready-apis"
							? "Most developers are integrated and making production calls within 30 minutes"
							: "Custom projects typically launch in 4-8 weeks depending on complexity"}
					</p>
				</div>
			</div>
		</section>
	);
};

export default OurProcess;
