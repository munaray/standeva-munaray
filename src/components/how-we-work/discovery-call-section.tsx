import type { FC } from "react";
import SectionShell from "./section-shell";

const discoveryBullets = [
	"Understand your business, services and systems",
	"Identify cost pressures and growth constraints",
	"Surface repetitive and manual work",
	"Pinpoint bottlenecks and hand-off delays",
	"Explain what automation would do and how it would help",
	"Provide an indicative guide to implementation cost",
];

const DiscoveryCallSection: FC = () => {
	return (
		<SectionShell innerClassName="mx-auto max-w-5xl px-4 text-center md:px-6">
			<div className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-medium tracking-[0.22em] text-sky-400">
				discovery call
			</div>
			<h2 className="mt-6 text-balance text-2xl font-semibold sm:text-3xl md:text-4xl">
				where it starts
			</h2>
			<p className="mt-4 text-sm text-slate-300 sm:text-base">
				The free 60-minute discovery call is a practical, non-technical conversation designed to create clarity
			</p>
			<p className="mt-6 text-sm font-semibold text-slate-100 sm:text-base">
				During the session, we
			</p>
			<ul className="mt-4 grid gap-3 text-left text-sm text-slate-200 sm:grid-cols-2 sm:text-base">
				{discoveryBullets.map((item) => (
					<li key={item} className="flex gap-2">
						<span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
						<span>{item}</span>
					</li>
				))}
			</ul>
			<p className="mt-6 text-sm text-slate-200 sm:text-base">
				no obligation no tools sold
			</p>
		</SectionShell>
	);
};

export default DiscoveryCallSection;
