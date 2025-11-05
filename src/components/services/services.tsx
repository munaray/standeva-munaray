"use client";

import React from "react";
import {
	ArrowRight,
	Code,
	Zap,
	Wrench,
	Brain,
	Package,
	Shield,
	Clock,
} from "lucide-react";
import { PrimaryButton } from "@/components/ui/buttons";

const solutionsData = [
	{
		id: "ready-apis",
		badge: "Quick Integration",
		title: "Ready-Made APIs",
		description:
			"Pre-built, documented, and ready to integrate. Get up and running in minutes:",
		features: [
			{
				icon: Zap,
				text: "Integrate in minutes with comprehensive documentation",
			},
			{
				icon: Package,
				text: "Pre-built solutions like Sourceora API for product sourcing",
			},
			{
				icon: Brain,
				text: "AI/ML endpoints for intelligent automation",
			},
			{
				icon: Shield,
				text: "Battle-tested, secure, and production-ready APIs",
			},
		],
		buttonText: "Browse APIs",
		buttonColor: "#3b82f6",
	},
	{
		id: "custom-solutions",
		badge: "Tailored for You",
		title: "Custom Development",
		description:
			"Need something specific? Our engineering team builds tailored API solutions:",
		features: [
			{
				icon: Wrench,
				text: "Custom API endpoints designed for your use case",
			},
			{
				icon: Code,
				text: "Dedicated engineering team for your project",
			},
			{
				icon: Clock,
				text: "Ongoing maintenance and support included",
			},
			{
				icon: Shield,
				text: "Scalable infrastructure that grows with you",
			},
		],
		buttonText: "Request Custom Solution",
		buttonColor: "#10b981",
	},
];

const Services: React.FC = () => {
	return (
		<section className="services-section py-20 bg-linear-to-br from-white via-slate-50 to-blue-50">
			<div className="container mx-auto px-6">
				{/* Header */}
				<div className="text-center mb-16">
					<p className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-4">
						YOUR PATH TO SUCCESS
					</p>
					<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
						Choose Your Integration Path
					</h2>
					<p className="text-xl text-slate-600 max-w-3xl mx-auto">
						Use our ready-made APIs for instant integration, or let
						us build custom solutions tailored to your needs
					</p>
				</div>

				{/* Solutions Grid */}
				<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{solutionsData.map((service) => (
						<div
							key={service.id}
							className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl hover:border-blue-400 transition-all duration-200">
							{/* Card Header */}
							<div className="mb-8">
								<div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full mb-4">
									{service.badge}
								</div>
								<h3 className="text-2xl font-bold text-slate-900 mb-4">
									{service.title}
								</h3>
								<p className="text-slate-600 leading-relaxed">
									{service.description}
								</p>
							</div>

							{/* Features List */}
							<div className="space-y-4 mb-8">
								{service.features.map(
									(feature, featureIndex) => {
										const IconComponent = feature.icon;
										return (
											<div
												key={featureIndex}
												className="flex items-start gap-3">
												<div className="shrink-0 w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
													<IconComponent
														size={16}
														className="text-slate-600"
													/>
												</div>
												<p className="text-slate-700 leading-relaxed">
													{feature.text}
												</p>
											</div>
										);
									}
								)}
							</div>

							{/* Button */}
							<PrimaryButton className="w-full flex items-center justify-center gap-2">
								{service.buttonText}
								<ArrowRight size={16} />
							</PrimaryButton>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
