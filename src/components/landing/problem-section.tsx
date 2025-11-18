import type { FC } from "react";
import { CreditCard, Users, ShoppingBag } from "lucide-react";

const items = [
	{
		id: "finance",
		icon: CreditCard,
		title: "Finance is stuck in inboxes",
		body: "Invoices, approvals and reconciliations move slowly because they rely on email, spreadsheets and manual checks.",
	},
	{
		id: "hr",
		icon: Users,
		title: "HR is buried in admin",
		body: "Onboarding, changes and routine requests consume hours every week that should go into people and culture.",
	},
	{
		id: "ecommerce",
		icon: ShoppingBag,
		title: "eCommerce work never stops",
		body: "Listings, pricing and order updates are handled one-by-one instead of flowing through a reliable automation layer.",
	},
];

const ProblemSection: FC = () => {
	return (
		<section
			id="problems"
			className="relative overflow-hidden bg-black py-16 text-slate-50 sm:py-20 md:py-24">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.32),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.22),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>

			<div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 text-center md:px-6 md:gap-12">
				<div className="space-y-4">
					<p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-300/80">
						The problem
					</p>
					<h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl md:text-[2.1rem]">
						Your teams are buried in repetitive Finance, HR &amp; eCommerce work.
					</h2>
					<p className="mx-auto max-w-3xl text-sm text-slate-300 sm:text-[0.95rem] md:text-base">
						Most of your workflow still runs on copy‑paste, email approvals and
						manual checks. It&apos;s accurate but painfully slow—and your people
						feel it every day.
					</p>
				</div>

				<div className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
					{items.map((item) => {
						const Icon = item.icon;
						return (
							<div
								key={item.id}
								className="flex h-full flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.9)]">
								<div className="flex items-center gap-3">
									<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
										<Icon className="h-5 w-5" />
									</div>
									<h3 className="text-sm font-semibold text-slate-50 sm:text-[0.95rem]">
										{item.title}
									</h3>
								</div>
								<p className="text-xs leading-relaxed text-slate-300 sm:text-[0.8rem] md:text-[0.9rem]">
									{item.body}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ProblemSection;

