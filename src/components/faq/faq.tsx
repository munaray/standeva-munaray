'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TertiaryButton } from "@/components/ui/buttons";

const faqData = [
	{
		id: 1,
		question: "How quickly can I start using your APIs?",
		answer: "You can start immediately! Ready-made APIs like Sourceora and AI/ML APIs are available right now. Simply sign up for an API key, check our documentation, and make your first call. Most developers integrate successfully within 30-60 minutes. For custom solutions, we can start with a free consultation and typically launch in 4-8 weeks.",
	},
	{
		id: 2,
		question: "What's your pricing model for APIs?",
		answer: "Our ready-made APIs use transparent pay-as-you-go pricing based on usage (API calls, data volume, etc.). We offer different tiers from free developer plans to enterprise packages with volume discounts. Custom API development is quoted based on scope and complexity. All pricing details are available in our documentation, and there are no hidden fees.",
	},
	{
		id: 3,
		question: "How long does API integration typically take?",
		answer: "It depends on complexity. Ready-made APIs typically integrate in under an hour using our SDKs and comprehensive documentation. We provide code snippets for popular languages (JavaScript, Python, PHP, etc.) to get you started quickly. Custom integrations may take longer depending on your specific requirements, but our team provides dedicated support throughout.",
	},
	{
		id: 4,
		question:
			"Do you offer custom API development for unique requirements?",
		answer: "Absolutely! While our ready-made APIs cover common use cases, we specialize in building custom APIs tailored to your specific needs. Our engineering team will work with you to design, develop, and deploy a solution that fits your exact requirements. Custom projects include full documentation, deployment support, and ongoing maintenance.",
	},
	{
		id: 5,
		question: "What kind of support and SLAs do you provide?",
		answer: "All our APIs come with comprehensive documentation, code examples, and community support. Paid plans include priority email support with response times under 24 hours. Enterprise customers get dedicated support channels, custom SLAs (up to 99.9% uptime guarantee), and access to our engineering team. We also provide status pages, monitoring dashboards, and proactive incident notifications.",
	},
	{
		id: 6,
		question: "How secure are your APIs and how is my data protected?",
		answer: "Security is our foundation. All APIs use industry-standard encryption (TLS 1.3+), OAuth 2.0 authentication, and API key management. We conduct regular security audits, penetration testing, and comply with GDPR, SOC 2, and other data protection standards. Your data is never shared with third parties, and we provide detailed security documentation for compliance teams.",
	},
];

const FAQ: React.FC = () => {
	const [openItems, setOpenItems] = useState<number[]>([]);

	const toggleItem = (id: number) => {
		setOpenItems((prev) =>
			prev.includes(id)
				? prev.filter((item) => item !== id)
				: [...prev, id]
		);
	};

	return (
		<section className="faq-section py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900">
			<div className="container mx-auto px-6">
				{/* Header */}
				<div className="text-center mb-16">
					<p className="text-sm uppercase tracking-wide text-blue-400 font-semibold mb-4">
						FAQ
					</p>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
						Frequently Asked Questions
					</h2>
					<p className="text-xl text-slate-300 max-w-3xl mx-auto">
						Everything you need to know about integrating and using
						Standeva&apos;s APIs
					</p>
				</div>

				{/* FAQ Items */}
				<div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 px-4 sm:px-0">
					{faqData.map((item) => {
						const isOpen = openItems.includes(item.id);

						return (
							<div
								key={item.id}
								className="bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-200 touch-manipulation">
								{/* Question */}
								<button
									onClick={() => toggleItem(item.id)}
									className="w-full p-4 sm:p-6 md:p-8 text-left flex items-center justify-between gap-3 sm:gap-4 hover:bg-gray-700/50 active:bg-gray-700/70 transition-colors duration-300 touch-manipulation">
									<h3 className="text-base sm:text-lg md:text-xl font-semibold text-white pr-2 sm:pr-4 leading-tight">
										{item.question}
									</h3>
									<motion.div
										animate={{ rotate: isOpen ? 180 : 0 }}
										transition={{ duration: 0.3 }}>
										<ChevronDown
											size={20}
											className="text-blue-400 shrink-0 sm:w-6 sm:h-6"
										/>
									</motion.div>
								</button>

								{/* Answer */}
								<AnimatePresence>
									{isOpen && (
										<motion.div
											className="overflow-hidden"
											initial={{ height: 0, opacity: 0 }}
											animate={{
												height: "auto",
												opacity: 1,
											}}
											exit={{ height: 0, opacity: 0 }}
											transition={{
												duration: 0.3,
												ease: "easeInOut",
											}}>
											<div className="px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8">
												<div className="w-full h-px bg-gray-700 mb-4 sm:mb-6" />
												<motion.p
													className="text-sm sm:text-base text-slate-300 leading-relaxed"
													initial={{
														y: -10,
														opacity: 0,
													}}
													animate={{
														y: 0,
														opacity: 1,
													}}
													transition={{ delay: 0.1 }}>
													{item.answer}
												</motion.p>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						);
					})}
				</div>

				{/* Bottom CTA */}
				<div className="text-center mt-12 sm:mt-16 px-4">
					<div className="p-6 sm:p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-700 max-w-2xl mx-auto">
						<h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
							Still have questions?
						</h3>
						<p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6">
							Can&apos;t find the answer you&apos;re looking for?
							Our technical team is ready to help with your
							integration.
						</p>
						<TertiaryButton className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base touch-manipulation w-full sm:w-auto bg-blue-600 hover:bg-blue-500">
							Contact Support
						</TertiaryButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ