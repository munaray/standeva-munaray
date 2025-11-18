"use client";

import type { FC } from "react";

const steps = [
	{
		id: 1,
		title: "Discovery & AI Audit",
		body: "We capture your pain points, SOPs and costs, then run a remote AI audit to define scope, timeline and a clear ROI case.",
	},
	{
		id: 2,
		title: "Solution Proposal",
		body: "You receive a fixed-scope pilot plan with success metrics, SLAs and pricing—no ambiguity, just a clear path forward.",
	},
	{
		id: 3,
		title: "Pilot Build & Validation",
		body: "In a secure sandbox we build and test the solution against real scenarios. You sign off only when you see it working.",
	},
	{
		id: 4,
		title: "Full Implementation & Training",
		body: "We deploy into your environment, integrate with existing systems and train your team so they feel confident using AI daily.",
	},
	{
		id: 5,
		title: "Post‑Launch Support & Improvement",
		body: "After go‑live we monitor, review and iterate, ensuring agents stay aligned with your processes and keep delivering savings.",
	},
];

const OurProcess: FC = () => {
	return (
		<section className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.32),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.24),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:px-6">
				<div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
					Our Process
				</div>

				<div className="mt-6 space-y-4">
					<h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.4rem]">
						Getting started is easy
					</h2>
					<p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
						From problem to automation and savings in just five practical steps.
					</p>
				</div>

				<div className="mt-12 grid w-full gap-10 text-left sm:grid-cols-2 lg:grid-cols-5">
					{steps.map((step) => (
						<div key={step.id} className="flex flex-col gap-4">
							<div className="flex items-center gap-3">
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/90 text-xs font-semibold text-slate-950">
									{step.id}
								</div>
								<h3 className="text-sm font-semibold leading-snug text-slate-50 sm:text-[0.95rem]">
									{step.title}
								</h3>
							</div>
							<p className="text-xs leading-relaxed text-slate-300 sm:text-[0.8rem] md:text-[0.9rem]">
								{step.body}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurProcess;
