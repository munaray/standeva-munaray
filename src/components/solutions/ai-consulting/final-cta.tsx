"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Briefcase, Sparkles } from "lucide-react";

const FinalCTA: React.FC = () => {
	return (
		<section
			id="consulting-cta"
			className="py-24 bg-black text-white relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAzMCAwIEwgMCA2MCAwIDYwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
			
			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent" />

			<div className="container mx-auto px-6 relative z-10">
				<motion.div
					className="text-center max-w-5xl mx-auto"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					
					{/* Tag */}
					<div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
						<Sparkles size={16} className="text-blue-400 mr-2" />
						<span className="text-sm text-blue-400 font-medium uppercase tracking-wider">
							Ready to Transform
						</span>
					</div>

					{/* Main Title */}
					<h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
						Let&apos;s Build Your
						<span className="block bg-linear-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
							AI-Powered Future
						</span>
					</h2>

					{/* Subtitle */}
					<p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-16 max-w-4xl mx-auto">
						Reach out to our AI consultants to learn how we can help your business leverage artificial intelligence for sustainable growth and competitive advantage.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
						<motion.button
							className="group px-8 py-4 bg-linear-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center justify-center gap-3"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							<MessageCircle size={20} />
							Contact Our AI Experts
							<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
						</motion.button>
						
						<motion.button
							className="group px-8 py-4 border-2 border-slate-600 text-white font-semibold rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all inline-flex items-center justify-center gap-3"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							<Briefcase size={20} />
							View Case Studies
							<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
						</motion.button>
					</div>

					{/* Contact Info */}
					<motion.div
						className="flex flex-col md:flex-row gap-8 justify-center items-center text-slate-400"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
							<span className="text-sm">Available for consultations</span>
						</div>
						<div className="hidden md:block w-px h-4 bg-slate-600" />
						<div className="text-sm">
							Typical response time: <span className="text-blue-400 font-medium">24 hours</span>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default FinalCTA;
