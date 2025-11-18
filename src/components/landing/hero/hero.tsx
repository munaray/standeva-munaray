import type { FC } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const trustedLogos = Array.from({ length: 9 }, (_, index) => ({
	id: `trusted-logo-${index + 1}`,
}));

const Hero: FC = () => {
	return (
		<section className="relative overflow-hidden bg-black text-slate-50">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.32),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative z-10 mt-12">
				<div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-24 pt-32 text-center md:px-6 md:pb-28 md:pt-40">
					<div className="flex flex-col items-center gap-2">
						<div className="flex items-center gap-1 text-yellow-400">
							{[0, 1, 2, 3, 4].map((star) => (
								<Star
									key={star}
									className="h-4 w-4 fill-yellow-400"
								/>
							))}
						</div>
						<p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
							Trusted by top-performing teams globally
						</p>
					</div>

					<div className="mt-7 space-y-4">
						<h1 className="text-balance text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl md:text-5xl">
							<span className="block">
								Free Your Team From Repetitive
							</span>
							<span className="block text-sky-400">
								Finance, HR &amp; eCommerce Work.
							</span>
						</h1>
						<p className="mx-auto max-w-2xl text-balance text-sm text-slate-300 sm:text-base md:text-lg">
							ClickBuy automates your finance, HR, and eCommerce
							workflows so teams can focus on high-impact work
							instead of manual tasks.
						</p>
					</div>

					<div className="mt-7">
						<button className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/40 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
							Book a Free AI Audit
						</button>
					</div>

					<div className="mt-10 w-full">
						<div className="relative mx-auto w-full overflow-hidden rounded-[2.5rem] border border-sky-500/40 bg-[#0203a3] shadow-[0_0_60px_rgba(59,130,246,0.45)]">
							<Image
								src="/hero-image.png"
								alt="Automation bot with finance, HR, and eCommerce tasks"
								width={1360}
								height={700}
								className="h-auto w-full object-cover"
								priority
							/>
						</div>
					</div>

					<div className="mt-12 w-full">
						<div className="mx-auto max-w-6xl overflow-hidden rounded-[2.75rem] bg-gradient-to-b from-emerald-50/80 via-white to-white py-6 shadow-[0_20px_70px_rgba(15,23,42,0.35)]">
							<div className="flex w-[200%] animate-[logo-marquee_26s_linear_infinite]">
								<div className="flex w-1/2 items-center justify-evenly gap-6 opacity-80">
									{trustedLogos.map((logo) => (
										<div
											key={logo.id}
											className="flex h-10 w-10 items-center justify-center rounded border border-emerald-100 bg-emerald-50/70">
											<span className="h-4 w-4 rounded bg-slate-300/70" />
										</div>
									))}
								</div>
								<div
									className="flex w-1/2 items-center justify-evenly gap-6 opacity-80"
									aria-hidden="true">
									{trustedLogos.map((logo) => (
										<div
											key={`${logo.id}-duplicate`}
											className="flex h-10 w-10 items-center justify-center rounded border border-emerald-100 bg-emerald-50/70">
											<span className="h-4 w-4 rounded bg-slate-300/70" />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
