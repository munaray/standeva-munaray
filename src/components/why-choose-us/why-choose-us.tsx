"use client";

import React from "react";
import {
	Clock,
	DollarSign,
	Shield,
	// Zap,
	// HeadphonesIcon,
	TrendingUp,
	Check,
	X,
} from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";

const comparisons = [
	{
		id: "time-to-market",
		icon: Clock,
		title: "Time to Market",
		withStandeva: "Minutes to Hours",
		buildingYourself: "Weeks to Months",
		description:
			"Integrate production-ready APIs instantly instead of spending months on development, testing, and deployment.",
		gradient: "from-blue-500 to-blue-600",
		color: "blue",
	},
	{
		id: "cost",
		icon: DollarSign,
		title: "Cost Efficiency",
		withStandeva: "Pay per Use",
		buildingYourself: "Full Development Team",
		description:
			"Eliminate hiring, infrastructure, and maintenance costs. Pay only for what you use with transparent, scalable pricing.",
		gradient: "from-blue-600 to-blue-700",
		color: "blue",
	},
	{
		id: "reliability",
		icon: Shield,
		title: "Reliability & Support",
		withStandeva: "99.9% Uptime SLA",
		buildingYourself: "Your Responsibility",
		description:
			"Enterprise-grade infrastructure with 24/7 monitoring, dedicated support, and guaranteed uptime. We handle the complexity.",
		gradient: "from-blue-700 to-blue-800",
		color: "blue",
	},
	{
		id: "scalability",
		icon: TrendingUp,
		title: "Instant Scalability",
		withStandeva: "Auto-scales Globally",
		buildingYourself: "Manual Scaling Required",
		description:
			"Handle traffic spikes effortlessly. Our infrastructure scales automatically from 10 to 10 million requests without intervention.",
		gradient: "from-blue-800 to-blue-900",
		color: "blue",
	},
];

const ComparisonCard: React.FC<{
	comparison: (typeof comparisons)[0];
	index: number;
}> = ({ comparison }) => {
	const IconComponent = comparison.icon;

	return (
		<div className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200">
			{/* Icon & Title */}
			<div className="flex items-center gap-4 mb-6">
				<div
					className={`w-14 h-14 rounded-xl bg-linear-to-br ${comparison.gradient} flex items-center justify-center shadow-lg`}>
					<IconComponent className="w-7 h-7 text-white" />
				</div>
				<h3 className="text-2xl font-bold text-slate-900">
					{comparison.title}
				</h3>
			</div>

			{/* Description */}
			<p className="text-slate-600 leading-relaxed mb-6">
				{comparison.description}
			</p>

			{/* Comparison Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{/* With Standeva */}
				<div className="bg-green-50 border border-green-200 rounded-xl p-4">
					<div className="flex items-center gap-2 mb-2">
						<Check className="w-5 h-5 text-green-600" />
						<span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
							With Standeva
						</span>
					</div>
					<p className="text-lg font-bold text-slate-900">
						{comparison.withStandeva}
					</p>
				</div>

				{/* Building Yourself */}
				<div className="bg-red-50 border border-red-200 rounded-xl p-4">
					<div className="flex items-center gap-2 mb-2">
						<X className="w-5 h-5 text-red-600" />
						<span className="text-sm font-semibold text-red-700 uppercase tracking-wide">
							Building Yourself
						</span>
					</div>
					<p className="text-lg font-bold text-slate-900">
						{comparison.buildingYourself}
					</p>
				</div>
			</div>
		</div>
	);
};

const WhyChooseUs: React.FC = () => {
	return (
		<section className="why-choose-us-section py-20 bg-linear-to-br from-white via-slate-50 to-blue-50">
			<div className="container mx-auto px-6">
				{/* Header */}
				<div className="text-center mb-16">
					<p className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-4">
						THE STANDEVA ADVANTAGE
					</p>

					<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
						Why Choose Our APIs?
					</h2>
					<p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
						Building features from scratch is expensive and
						time-consuming. Our APIs give you production-ready
						solutions that integrate in minutes, not months.
					</p>
				</div>

				{/* Comparison Cards Grid */}
				<div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16">
					{comparisons.map((comparison, index) => (
						<ComparisonCard
							key={comparison.id}
							comparison={comparison}
							index={index}
						/>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="text-center">
					<div className="p-6 sm:p-8 bg-linear-to-r from-blue-50 to-blue-100 rounded-2xl max-w-4xl mx-auto border border-blue-200">
						<h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
							Stop building what already exists
						</h3>
						<p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
							Focus on your core product while we handle the
							infrastructure. Get started with our APIs in
							minutes.
						</p>
						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
							<PrimaryButton className="text-sm sm:text-base">
								Browse API Catalog
							</PrimaryButton>
							<SecondaryButton className="text-sm sm:text-base">
								Talk to Engineering
							</SecondaryButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
