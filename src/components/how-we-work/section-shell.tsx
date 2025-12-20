"use client";

import type { FC, ReactNode } from "react";

type SectionShellProps = {
	children: ReactNode;
	className?: string;
	innerClassName?: string;
};

const SectionShell: FC<SectionShellProps> = ({
	children,
	className = "",
	innerClassName = "",
}) => {
	return (
		<section
			className={`relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24 md:py-28 ${className}`.trim()}>
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.24),transparent_55%)] opacity-70 mix-blend-screen" />
			</div>
			<div className={`relative ${innerClassName}`.trim()}>{children}</div>
		</section>
	);
};

export default SectionShell;
