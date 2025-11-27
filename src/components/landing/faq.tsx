"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TertiaryButton } from "@/components/ui/buttons";

const faqData = [
	{
		id: 1,
		question: "What makes the ProcessZero approach different?",
		answer: "Our approach prioritises your security and ownership. Your data stays within your network and is never exposed to public AI models. We build open, transparent solutions with no hidden fees so you fully own and control your AI agents—unlike providers that run on rented, third‑party platforms.",
	},
	{
		id: 2,
		question: "How does your pricing model work?",
		answer: (
			<>
				Our pricing model is designed to be simple and transparent. It
				works in three steps:
				<br />
				<br />
				Start with a free AI audit: We begin with a complimentary,
				no-obligation AI audit to identify potential savings for your
				business.
				<br />
				<br />
				Unlock a detailed roadmap: For a more in-depth analysis, we
				offer a paid AI implementation audit for a one-time fee. This
				provides you with a comprehensive plan for automation.
				<br />
				<br />
				Get the fee credited back: The cost of the paid audit is fully
				credited back to you from the recurring savings we generate. Our
				performance-based fee is equal to 33% of the first year&apos;s
				validated savings, ensuring that the initial investment pays for
				itself through the value we deliver.
			</>
		),
	},
	{
		id: 3,
		question: "What is the process for getting started?",
		answer: (
			<>
				Phase 1: Get Started with Our Free Audit
				<br />
				<br />
				Remote AI Audit: We begin with a remote discovery process.
				You&apos;ll receive an onboarding pack to share your Standard
				Operating Procedures (SOPs) and performance data. From this, we
				create a high-level process map and a report detailing potential
				savings.
				<br />
				<br />
				Technical Deep Dive: We then schedule a technical session to
				walk through your SOPs together, understand your key pain
				points, and refine what you want to automate.
				<br />
				<br />
				ROI Report & Proposal: You receive a tailored audit report
				showing the specific automations we recommend and your projected
				recurrent savings. This comes with a clear, performance-based
				proposal.
				<br />
				<br />
				Phase 2: The Complete Implementation Roadmap
				<br />
				<br />
				In-Person Workshops: If you decide to move forward, we begin
				with detailed, in-person workshops with your users and
				stakeholders to map out the complete solution design.
				<br />
				<br />
				Remote Sandbox Simulation: We build a remote sandbox version of
				the proposed system. Using your provided license keys and test
				data, we simulate how the AI will operate to create an initial
				working model for review.
				<br />
				<br />
				Internal Pilot & Validation: Once you approve the simulation, we
				build a second pilot version inside your own network. This
				allows your team to conduct more detailed testing in a secure,
				familiar environment.
				<br />
				<br />
				Full Implementation & Launch: After successful testing and
				sign-off, we build and deploy the full, live solution within
				your network.
				<br />
				<br />
				Final Sign-Off: After the system has been running successfully
				for 30 days, we hold a final wrap-up call to ensure your
				complete satisfaction before final invoicing.
			</>
		),
	},
	{
		id: 4,
		question: "What kind of tasks can you automate?",
		answer: "We specialise in automating Finance, HR and sales plus workflows: invoice processing, approvals, reconciliations, exception handling, journal entries, onboarding tasks, and product or order operations. If it’s repetitive, rules‑based and high volume, it’s a strong candidate for automation.",
	},
	{
		id: 5,
		question: "Do I need a technical team to manage the AI agents?",
		answer: "No. We design and run the agents with you, including monitoring, updates and health checks. Your existing teams stay in control of decisions and workflows, while we handle the technical complexity behind the scenes.",
	},
];

const FAQ: React.FC = () => {
	const [openItems, setOpenItems] = useState<number[]>([faqData[0]?.id]);

	const toggleItem = (id: number) => {
		setOpenItems((prev) =>
			prev.includes(id)
				? prev.filter((item) => item !== id)
				: [...prev, id]
		);
	};

	const renderToggleIcon = (isOpen: boolean) => (
		<div className="relative flex h-5 w-5 items-center justify-center">
			<span className="h-[2px] w-3 rounded-full bg-slate-500" />
			{!isOpen && (
				<span className="absolute h-3 w-[2px] rounded-full bg-slate-500" />
			)}
		</div>
	);

	return (
		<section className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.18),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 md:px-6">
				<div className="mb-12 text-center sm:mb-16">
					<div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
						FAQs
					</div>
					<h2 className="mt-6 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.4rem]">
						All You Need to Know
					</h2>
					<p className="mt-4 text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
						Got questions? We have answers. Find out everything you need to know
						before getting started.
					</p>
				</div>

				<div className="mx-auto max-w-4xl space-y-4">
					{faqData.map((item) => {
						const isOpen = openItems.includes(item.id);
						return (
							<div
								key={item.id}
								className="overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950/80 shadow-[0_18px_60px_rgba(15,23,42,0.8)] transition-colors duration-300 hover:border-sky-500/50">
								<button
									onClick={() => toggleItem(item.id)}
									className="flex w-full items-center justify-between gap-4 px-8 py-6 text-left sm:py-7 md:py-8">
									<h3 className="text-sm font-semibold leading-snug text-slate-50 sm:text-[0.95rem] md:text-lg">
										{item.question}
									</h3>
									<motion.div
										animate={{ rotate: isOpen ? 0 : 0 }}
										transition={{ duration: 0.3 }}>
										{renderToggleIcon(isOpen)}
									</motion.div>
								</button>

								<AnimatePresence>
									{isOpen && (
										<motion.div
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
											<div className="px-8 pb-7">
												<div className="mb-4 h-px w-full bg-slate-800/80" />
												<motion.p
													className="text-sm leading-relaxed text-slate-300 sm:text-[0.95rem]"
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

				<div className="mt-16 text-center">
					<div className="mx-auto max-w-2xl rounded-2xl border border-slate-800 bg-slate-950/80 p-8 backdrop-blur-sm transition hover:border-sky-500/50">
						<h3 className="mb-4 text-2xl font-bold text-slate-50">
							Still have questions?
						</h3>
						<p className="mx-auto mb-6 max-w-2xl text-sm text-slate-300 sm:text-[0.95rem]">
							Can&apos;t find the answer you&apos;re looking for? Our team is
							ready to help you design and launch the right AI automation for
							your organisation.
						</p>
						<TertiaryButton className="rounded-xl bg-sky-500 px-8 py-4 text-base text-slate-950 transition hover:bg-sky-400">
							Contact Support
						</TertiaryButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
