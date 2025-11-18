import type { FC } from "react";

const cards = [
	{
		id: 1,
		title: "AI‑Powered Finance Receptionist",
		body: "An AI agent that reads, sorts and processes incoming finance mail so your clients' teams can focus on higher‑value work.",
	},
	{
		id: 2,
		title: "Custom Task Automation",
		body: "If a routine task repeats a few times a week, we can automate it with a 24/7 agent that saves time and money.",
	},
	{
		id: 3,
		title: "AI‑Driven Invoice Processing",
		body: "End‑to‑end invoice processing with intelligent agents that handle data entry, validation and approvals.",
	},
	{
		id: 4,
		title: "ERP Ledger Processing",
		body: "Dedicated ERP agents that post journals and reconciliations directly inside your clients' finance systems.",
	},
];

const AffiliateSolutions: FC = () => {
	return (
		<section
			id="affiliate-solutions"
			className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.18),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
				<p className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-200">
					Solutions offered to your clients
				</p>
				<h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.4rem]">
					Offer AI Agents That Do the Repetitive Work Your Clients Hate
				</h2>
				<p className="mt-4 mx-auto max-w-2xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
					Provide controllable AI agents that run inside your clients&apos; networks. By mimicking human
					processing, they can drive down costs by more than 90%.
				</p>

				<div className="mt-12 grid gap-8 text-left sm:grid-cols-2">
					{cards.map((card) => (
						<article
							key={card.id}
							className="flex h-full flex-col justify-between rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8 shadow-[0_22px_80px_rgba(15,23,42,0.9)]"
						>
							<h3 className="text-sm font-semibold text-slate-50 sm:text-[0.95rem]">
								{card.title}
							</h3>
							<p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-[0.8rem] md:text-[0.9rem]">
								{card.body}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default AffiliateSolutions;
