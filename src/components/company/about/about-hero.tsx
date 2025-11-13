"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutHero: React.FC = () => {
	return (
		<section
			id="overview"
			className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
			<div className="container mx-auto px-6 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}>
						<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
							Transform Your Operations with{" "}
							<span className="bg-linear-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
								Tailored AI Solutions
							</span>
						</h1>
						<p className="text-xl text-slate-300 mb-8 leading-relaxed">
							Whether you need strategic AI consulting to
							revolutionise your business processes or a powerful
							autonomous agent to automate e-commerce sourcing, we
							provide enterprise-ready solutions built for impact.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<button className="px-8 py-3 bg-linear-to-r from-[#2563EB] to-[#7C3AED] text-white font-medium rounded-lg hover:opacity-90 transition">
								AI Consultancy
							</button>
							<button className="px-8 py-3 border border-blue-500/50 text-white font-medium rounded-lg hover:bg-blue-500/10 transition">
								E-commerce Sourcing
							</button>
						</div>
					</motion.div>

					<motion.div
						className="relative overflow-hidden"
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<div className="relative aspect-square rounded-2xl overflow-hidden border border-blue-500/20">
							<Image
								src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop"
								alt="Abstract AI neural network visualization"
								fill
								className="object-cover"
								priority
							/>
							<div className="absolute inset-0 bg-linear-to-tr from-blue-900/40 to-purple-900/40" />
						</div>
						<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-linear-to-r from-[#2563EB] to-[#7C3AED] rounded-2xl blur-3xl opacity-50" />
						<div className="absolute -top-6 -right-6 w-32 h-32 bg-linear-to-r from-[#7C3AED] to-[#2563EB] rounded-2xl blur-3xl opacity-50" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutHero;