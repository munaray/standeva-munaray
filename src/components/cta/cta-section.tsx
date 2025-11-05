'use client'

import React from 'react'
import { ArrowRight, Zap, Wrench, Shield } from "lucide-react";
import { TertiaryButton } from "@/components/ui/buttons";

const CTASection: React.FC = () => {
	return (
		<section className="cta-section py-16 sm:py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
			<div className="container mx-auto px-4 sm:px-6">
				{/* Main Content */}
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent leading-tight">
						Ready to Ship Faster?
					</h2>
					<p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
						Choose your path: Integrate ready-made APIs in minutes
						or let us build a custom solution for you.
					</p>
				</div>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
					<TertiaryButton className="group w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-500 flex items-center justify-center gap-2 sm:gap-3 min-w-0 sm:min-w-64 text-sm sm:text-base touch-manipulation">
						<Zap size={18} className="sm:w-5 sm:h-5" />
						<span>Browse Ready APIs</span>
						<ArrowRight
							size={14}
							className="group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4"
						/>
					</TertiaryButton>

					<TertiaryButton className="group w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 flex items-center justify-center gap-2 sm:gap-3 min-w-0 sm:min-w-64 text-sm sm:text-base touch-manipulation">
						<Wrench size={18} className="sm:w-5 sm:h-5" />
						<span>Request Custom Solution</span>
						<ArrowRight
							size={14}
							className="group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4"
						/>
					</TertiaryButton>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
					<div className="text-center p-4 sm:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-700">
						<div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
							<Zap
								size={20}
								className="text-white sm:w-7 sm:h-7"
							/>
						</div>
						<h3 className="text-lg sm:text-xl font-semibold mb-2">
							Instant Integration
						</h3>
						<p className="text-sm sm:text-base text-slate-400">
							Production-ready APIs that integrate in minutes
						</p>
					</div>

					<div className="text-center p-4 sm:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-700">
						<div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
							<Wrench
								size={20}
								className="text-white sm:w-7 sm:h-7"
							/>
						</div>
						<h3 className="text-lg sm:text-xl font-semibold mb-2">
							Custom Solutions
						</h3>
						<p className="text-sm sm:text-base text-slate-400">
							Tailored APIs built by expert engineers
						</p>
					</div>

					<div className="text-center p-4 sm:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-700">
						<div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
							<Shield
								size={20}
								className="text-white sm:w-7 sm:h-7"
							/>
						</div>
						<h3 className="text-lg sm:text-xl font-semibold mb-2">
							Enterprise Ready
						</h3>
						<p className="text-sm sm:text-base text-slate-400">
							99.9% uptime SLA and dedicated support
						</p>
					</div>
				</div>

				{/* Bottom Contact */}
				<div className="text-center mt-12 sm:mt-16 px-4">
					<p className="text-sm sm:text-base text-slate-300 mb-3 sm:mb-4">
						Have questions? Our team is ready to help you choose the
						right solution.
					</p>
					<TertiaryButton className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base touch-manipulation w-full sm:w-auto">
						Talk to an Engineer
					</TertiaryButton>
				</div>
			</div>
		</section>
	);
};

export default CTASection