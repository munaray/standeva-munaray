import type { FC } from "react";
import SectionShell from "./section-shell";

const ownershipBullets = [
	"AI runs within your environment",
	"Models and automation logic are owned by you",
	"No customer, financial or operational data is sent to third-party AI platforms",
	"No dependency on third-party automation vendors",
];

const OwnershipSection: FC = () => {
	return (
		<SectionShell innerClassName="mx-auto max-w-5xl px-4 text-center md:px-6">
			<div className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-xs font-medium tracking-[0.22em] text-sky-400">
				ownership
			</div>
			<h2 className="mt-6 text-balance text-2xl font-semibold sm:text-3xl md:text-4xl">
				ownership and data integrity
			</h2>
			<p className="mt-4 text-sm text-slate-300 sm:text-base">
				Your data stays inside your business
			</p>
			<ul className="mt-6 grid gap-3 text-left text-sm text-slate-200 sm:grid-cols-2 sm:text-base">
				{ownershipBullets.map((item) => (
					<li key={item} className="flex gap-2">
						<span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
						<span>{item}</span>
					</li>
				))}
			</ul>
			<p className="mt-6 text-sm text-slate-200 sm:text-base">
				You retain 100% ownership of the AI and the processes it supports
			</p>
		</SectionShell>
	);
};

export default OwnershipSection;
