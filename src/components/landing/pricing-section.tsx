import type { FC } from "react";

const PricingSection: FC = () => {
	return (
		<section
			id="pricing"
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.24),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center md:px-6">
				<div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
					Pricing
				</div>

				<h2 className="mt-6 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.4rem]">
					Your AI Partner Built on Proven Results
				</h2>

				<div className="mt-6 space-y-4 text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
					<p>
						Our model is completely performance‑based. You only pay when
						measurable, recurring savings are achieved and independently
						validated.
					</p>
					<p>
						We charge a one‑time fee of{" "}
						<span className="font-semibold text-emerald-300">
							33% of the first year&apos;s verified savings
						</span>
						— a results‑driven, risk‑free arrangement. If no savings are
						generated, you pay nothing.
					</p>
					<p>
						For organisations that want ongoing optimisation, an optional
						continuous improvement plan is available—but never required.
					</p>
				</div>
			</div>
		</section>
	);
};

export default PricingSection;

