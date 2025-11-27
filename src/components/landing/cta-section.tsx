"use client";

import React from "react";
import { TertiaryButton } from "@/components/ui/buttons";

const CTASection: React.FC = () => {
	return (
		<section className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.16),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center md:px-6">
				<p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-400">
					ProcessZero AI
				</p>
				<h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.4rem]">
					Ready to boost your team&apos;s efficiency?
				</h2>
				<p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
					Discover how automation can reduce your manual workload and
					unlock higher‑value work for your team.
				</p>

				<div className="mt-8">
					<TertiaryButton className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400">
						Get a Free AI Audit
					</TertiaryButton>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
