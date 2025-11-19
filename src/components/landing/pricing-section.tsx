import type { FC } from "react";

const steps = [
	{
		id: 1,
		text: "Start with a free, no-obligation AI audit to identify potential savings.",
	},
	{
		id: 2,
		text: "For a deeper analysis, we offer a paid AI implementation audit. This one-time fee unlocks a detailed roadmap for automation.",
	},
	{
		id: 3,
		text: "The cost of the paid audit is fully credited back from the recurring savings we generate for you, ensuring you see the full value.",
	},
];

const PricingSection: FC = () => {
	return (
		<section
			id="pricing"
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.24),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center md:px-6">
				<div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
					Pricing
				</div>

				<h2 className="mt-6 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.4rem]">
					Simple, Transparent Pricing
				</h2>

				<p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
					We start with a free audit, then offer a deeper paid implementation audit whose cost is fully credited back from the savings we generate for you.
				</p>

				<div className="mt-10 grid w-full gap-6 text-left sm:grid-cols-3">
					{steps.map((step) => (
						<div
							key={step.id}
							className="flex flex-col gap-4 rounded-2xl border border-emerald-400/40 bg-slate-950/70 p-6 shadow-[0_0_0_1px_rgba(16,185,129,0.35)] backdrop-blur">
							<div className="flex items-center gap-3">
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/90 text-xs font-semibold text-slate-950">
									{step.id}
								</div>
								<p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-200">
									Step {step.id}
								</p>
							</div>
							<p className="text-sm leading-relaxed text-slate-200 sm:text-[0.95rem] md:text-base">
								{step.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PricingSection;
