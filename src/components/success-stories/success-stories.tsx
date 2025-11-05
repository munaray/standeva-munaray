'use client'

import React from "react";
import { Star, Quote, ArrowRight } from 'lucide-react'
import { TertiaryButton } from "@/components/ui/buttons";

const caseStudies = [
	{
		id: 1,
		name: "James Wilson",
		role: "Engineering Lead",
		company: "ShopFlow Commerce",
		avatar: "👨‍💻",
		rating: 5,
		testimonial:
			"Integrating Sourceora API transformed our product sourcing workflow. What used to take our team days now happens in real-time. We integrated in under an hour and scaled to 10,000+ products without any infrastructure headaches.",
		apiUsed: "Sourceora API",
		results: [
			"Integrated in 45 minutes",
			"10K+ products synced",
			"85% time savings",
		],
		industry: "E-commerce",
	},
	{
		id: 2,
		name: "Priya Sharma",
		role: "CTO",
		company: "InsightAI Platform",
		avatar: "👩‍💼",
		rating: 5,
		testimonial:
			"We needed sentiment analysis for customer feedback but building an ML pipeline would have taken months. Standeva's AI/ML APIs got us production-ready features in days. The documentation and support made integration seamless.",
		apiUsed: "AI/ML APIs",
		results: [
			"Live in 3 days",
			"1M+ API calls/month",
			"40% cost vs building",
		],
		industry: "SaaS",
	},
	{
		id: 3,
		name: "Alex Martinez",
		role: "Founder & CEO",
		company: "FitTrack Mobile",
		avatar: "👨‍🚀",
		rating: 5,
		testimonial:
			"Our app needed custom backend APIs with real-time sync. Standeva built exactly what we needed in 6 weeks. The APIs are fast, reliable, and the custom solution fits our unique requirements perfectly.",
		apiUsed: "Custom Solution",
		results: ["Launched in 6 weeks", "99.9% uptime", "50K+ active users"],
		industry: "Mobile App",
	},
];

const stats = [
	{ label: "Active Integrations", value: "2,500+" },
	{ label: "API Calls per Month", value: "50M+" },
	{ label: "Average Uptime", value: "99.9%" },
	{ label: "Countries Served", value: "40+" },
];

const SuccessStories: React.FC = () => {
	return (
		<section className="success-stories-section py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900">
			<div className="container mx-auto px-6">
				{/* Header */}
				<div className="text-center mb-16">
					<p className="text-sm uppercase tracking-wide text-blue-400 font-semibold mb-4">
						SUCCESS STORIES
					</p>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
						Real Results from Real Integrations
					</h2>
					<p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
						See how companies are shipping faster and scaling
						effortlessly with Standeva&apos;s APIs
					</p>
				</div>

				{/* Case Studies Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
					{caseStudies.map((caseStudy) => (
						<div
							key={caseStudy.id}
							className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700 hover:border-blue-500 hover:shadow-xl transition-all duration-200">
							{/* Industry Badge */}
							<div className="flex items-center justify-between mb-4 sm:mb-6">
								<span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-400/30">
									{caseStudy.industry}
								</span>
								<Quote
									size={24}
									className="text-blue-400 sm:w-8 sm:h-8"
								/>
							</div>

							{/* Rating */}
							<div className="flex gap-1 mb-3 sm:mb-4">
								{[...Array(caseStudy.rating)].map((_, i) => (
									<Star
										key={i}
										size={14}
										className="text-yellow-400 fill-current sm:w-4 sm:h-4"
									/>
								))}
							</div>

							{/* Testimonial Text */}
							<p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4 sm:mb-6">
								&ldquo;{caseStudy.testimonial}&rdquo;
							</p>

							{/* API Used & Results */}
							<div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
								<h4 className="text-sm sm:text-base font-semibold text-blue-300 mb-2">
									{caseStudy.apiUsed}
								</h4>
								<div className="space-y-1">
									{caseStudy.results.map((result, index) => (
										<div
											key={index}
											className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
											<div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
											{result}
										</div>
									))}
								</div>
							</div>

							{/* Author */}
							<div className="flex items-center gap-2 sm:gap-3">
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-lg sm:text-2xl">
									{caseStudy.avatar}
								</div>
								<div>
									<h4 className="text-sm sm:text-base font-semibold text-white">
										{caseStudy.name}
									</h4>
									<p className="text-slate-400 text-xs sm:text-sm">
										{caseStudy.role}, {caseStudy.company}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Stats Section */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
							<div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">
								{stat.value}
							</div>
							<p className="text-xs sm:text-sm md:text-base text-slate-400 font-medium">
								{stat.label}
							</p>
						</div>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="text-center px-4">
					<div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
						<TertiaryButton className="px-6 py-3 sm:px-8 sm:py-4 flex items-center justify-center gap-2 text-sm sm:text-base bg-blue-600 hover:bg-blue-500">
							Browse APIs
							<ArrowRight size={16} />
						</TertiaryButton>
						<TertiaryButton className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base">
							Read More Case Studies
						</TertiaryButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SuccessStories