"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	ChevronRight,
	HelpCircle,
	MessageSquare,
	Clock,
	Shield,
	Zap,
	Users,
} from "lucide-react";

const faqs = [
	{
		question:
			"What industries do you serve with your AI consulting services?",
		answer: "We serve a wide range of industries including manufacturing, healthcare, insurance, construction, real estate, retail, fintech, travel, and SaaS. Our AI solutions are tailored to meet the specific operational challenges of each sector.",
		icon: Users,
	},
	{
		question: "How long does an AI consulting project typically take?",
		answer: "Project timelines vary based on scope and complexity. A typical pilot programme takes 8-12 weeks, while full-scale implementations can range from 3-6 months. We prioritize rapid deployment to demonstrate value quickly.",
		icon: Clock,
	},
	{
		question: "What does your AI consulting process involve?",
		answer: "Our process includes four key phases: Conceptualisation (understanding your objectives), AI Agent Integration (deploying tailored solutions), Pilot Programme & Scaling (validating and expanding), and Ongoing Enhancement (continuous optimization).",
		icon: HelpCircle,
	},
	{
		question: "Can you integrate AI solutions with our existing systems?",
		answer: "Yes, absolutely. Our deep expertise in ERP and business systems ensures seamless integration with your existing financial and HR platforms, enhancing rather than replacing your current technology investments.",
		icon: MessageSquare,
	},
	{
		question: "What makes your AI consulting services stand out?",
		answer: "We combine 25+ years of business transformation experience with cutting-edge Agentic AI expertise. Our unique 'Invest to Gain' model aligns our success with your ROI, creating a truly symbiotic partnership.",
		icon: Zap,
	},
	{
		question:
			"Are your AI solutions compliant with data privacy regulations?",
		answer: "Yes, our solutions comply with all major data privacy regulations, including GDPR and industry-specific requirements. We prioritize data security and regulatory compliance in every implementation.",
		icon: Shield,
	},
];

const FAQSection: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section
			id="consulting-faq"
			className="py-20 bg-linear-to-br from-slate-900 via-purple-900/10 to-slate-900 text-white relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0">
				<div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
			</div>

			<div className="container mx-auto px-6 relative z-10">
				{/* Header */}
				<motion.div
					className="max-w-4xl mx-auto text-center mb-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					{/* Tag */}
					<div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
						<span className="text-sm text-blue-400 font-medium uppercase tracking-wider">
							Frequently Asked Questions
						</span>
					</div>

					{/* Main Title */}
					<h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
						Everything You Need to
						<span className="block bg-linear-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
							Know About AI Consulting
						</span>
					</h2>
				</motion.div>

				{/* FAQ Items */}
				<div className="max-w-4xl mx-auto space-y-6">
					{faqs.map((faq, index) => {
						const Icon = faq.icon;
						return (
							<motion.div
								key={index}
								className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 overflow-hidden"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}>
								{/* Question Button */}
								<button
									onClick={() =>
										setOpenIndex(
											openIndex === index ? null : index
										)
									}
									className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-700/30 transition-all duration-300 relative">
									{/* Icon */}
									<motion.div
										className="w-12 h-12 bg-linear-to-r from-[#2563EB] to-[#7C3AED] rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
										whileHover={{
											rotate: 360,
											scale: 1.1,
											transition: { duration: 0.6 },
										}}>
										<Icon
											size={20}
											className="text-white"
										/>
									</motion.div>

									{/* Question Text */}
									<div className="flex-1 pr-8">
										<h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
											{faq.question}
										</h3>
									</div>

									{/* Chevron */}
									<motion.div
										animate={{
											rotate:
												openIndex === index ? 90 : 0,
										}}
										transition={{ duration: 0.3 }}
										className="flex-shrink-0">
										<ChevronRight
											size={24}
											className="text-blue-400"
										/>
									</motion.div>
								</button>

								{/* Answer */}
								<AnimatePresence>
									{openIndex === index && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{
												height: "auto",
												opacity: 1,
											}}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3 }}
											className="overflow-hidden border-t border-slate-700">
											<div className="p-6 pt-4">
												<p className="text-slate-300 leading-relaxed">
													{faq.answer}
												</p>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						);
					})}
				</div>

				{/* Bottom CTA */}
				<motion.div
					className="text-center mt-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.8 }}>
					<motion.button
						className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						Still Have Questions?
						<ChevronRight
							size={20}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default FAQSection;
