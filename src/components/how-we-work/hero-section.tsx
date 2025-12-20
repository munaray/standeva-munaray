import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionShell from "./section-shell";

const heroLines = [
	"AI creates value when it is introduced in the right order, not all at once, not driven by tools, not rushed At Process Zero, we apply AI progressively starting with efficiency, then unlocking growth, and only then creating new opportunities",
];

const HeroSection: FC = () => {
	return (
		<SectionShell
			className="pt-24 pb-24 sm:pt-28 sm:pb-28"
			innerClassName="mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:px-6">
			<div className="space-y-4">
				<h1 className="text-balance text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl md:text-5xl">
					how we <span className="text-sky-400">work</span>
				</h1>
				<p className="mx-auto max-w-4xl text-balance text-sm text-slate-300 sm:text-base md:text-lg">
					{heroLines.map((line) => (
						<span key={line} className="block">
							{line}
						</span>
					))}
				</p>
			</div>

			<div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
				<Link
					href="/intro-call"
					className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/40 transition-colors duration-300 ease-out hover:from-slate-800 hover:to-slate-800">
					free 60 min discovery call
				</Link>
			</div>

			<div className="mt-10 w-full">
				<div className="relative mx-auto w-full overflow-hidden rounded-[2.5rem] border border-sky-500/40 bg-slate-950 shadow-[0_0_60px_rgba(59,130,246,0.35)]">
					<Image
						src="/how-we-work-hero.jpg"
						alt="Team collaboration in a modern office"
						width={1360}
						height={900}
						className="h-auto w-full object-cover"
						priority
					/>
				</div>
			</div>
		</SectionShell>
	);
};

export default HeroSection;
