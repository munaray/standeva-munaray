import type { FC } from "react";
import SectionShell from "./section-shell";
import WaveDiagram from "./wave-diagram";
import WaveDetailsSection from "./wave-details-section";

const wavesIntroLines = [
	"AI value compounds over time but only when the foundations are right",
];

const WavesHeaderSection: FC = () => {
	return (
		<SectionShell>
			<div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center md:px-6">
				<div className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1.5 text-xs font-medium tracking-[0.22em] text-sky-200">
					the waves
				</div>
				<h2 className="mt-6 text-balance text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
					ai adoption happens <span className="text-sky-400">in waves</span>
				</h2>
				<p className="mt-4 text-sm text-slate-300 sm:text-base">
					{wavesIntroLines.map((line) => (
						<span key={line} className="block">
							{line}
						</span>
					))}
				</p>
			</div>
			<div className="mt-10 sm:mt-12">
				<div className="hidden lg:block">
					<WaveDiagram />
				</div>
				<div className="lg:hidden">
					<WaveDetailsSection />
				</div>
			</div>
		</SectionShell>
	);
};

export default WavesHeaderSection;
