import type { FC } from "react";

const AffiliatePricing: FC = () => {
	return (
		<section
			id="affiliate-pricing"
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.2),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
				<p className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-200">
					Pricing &amp; revenue
				</p>
				<h2 className="mt-6 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.4rem]">
					A Risk‑Free Model for Your Clients, A Lucrative Opportunity for You
				</h2>

				<div className="mt-12 grid gap-8 text-left md:grid-cols-2">
					<article className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8 shadow-[0_22px_80px_rgba(15,23,42,0.9)]">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
							For your clients: performance‑based pricing
						</p>
						<p className="mt-4 text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
							Clients only pay when measurable savings are delivered. We uncover and validate cost
							reductions, and our fee is triggered only once those savings are proven.
						</p>
						<p className="mt-4 text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
							We charge{" "}
							<span className="font-semibold text-emerald-300">
								33% of the first year&apos;s recurring savings
							</span>{" "}
							in a results‑driven, risk‑free arrangement. If no savings are generated, your client pays
							nothing.
						</p>
					</article>

					<article className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8 shadow-[0_22px_80px_rgba(15,23,42,0.9)]">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
							For you: your new revenue stream
						</p>
						<p className="mt-4 text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
							You earn a{" "}
							<span className="font-semibold text-emerald-300">
								20% recurring commission
							</span>{" "}
							on all revenue we generate from your client introductions. One successful automation can
							create years of recurring commission for your agency.
						</p>
						<p className="mt-4 text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
							A dedicated partner portal lets you see the lifecycle and projected revenue of every client
							you introduce, so you always understand the value of your referrals.
						</p>
					</article>
				</div>

				<div className="mt-10 flex justify-center">
					<button className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400">
						Become a Partner
					</button>
				</div>
			</div>
		</section>
	);
};

export default AffiliatePricing;
