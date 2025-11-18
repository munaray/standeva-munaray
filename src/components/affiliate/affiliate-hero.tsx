import type { FC } from "react";
import Image from "next/image";

const AffiliateHero: FC = () => {
	return (
		<section
			id="affiliate-overview"
			className="relative overflow-hidden bg-black py-24 text-slate-50 sm:py-28 md:py-32">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.24),transparent_60%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.22),transparent_55%)] opacity-80 mix-blend-screen" />
			</div>

			<div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pb-24 pt-28 text-center md:px-6 md:pb-28 md:pt-32">
				<div className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-3 text-xs font-medium uppercase tracking-[0.26em] text-slate-300">
					Partner programme
				</div>

				<div className="mt-6 space-y-4">
					<h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
						Bring AI Automation to Your Clients
						<span className="block text-emerald-400">
							and Unlock New, Recurring Revenue
						</span>
					</h1>
					<p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
						Refer clients, we handle the automation. You keep the
						relationship and earn a share of every project we
						deliver.
					</p>
				</div>

				<div className="mt-7 flex flex-col items-center gap-3  justify-center">
					<button className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400">
						Become a Partner
					</button>
					<p className="max-w-md mt-4 text-xs text-slate-400 sm:text-[0.8rem]">
						Ideal for consultancies, recruiters and agencies working
						with Finance, HR and operations teams.
					</p>
				</div>

				<div className="mt-20 w-full">
					<div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] border border-emerald-500/40 bg-slate-950 shadow-[0_0_60px_rgba(16,185,129,0.5)]">
						<Image
							src="/affiliate.jpg"
							alt="Partners collaborating around AI automation"
							width={800}
							height={500}
							className="h-auto w-full object-cover"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AffiliateHero;
