"use client";

import React from "react";
import Image from "next/image";

type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
	showWordmark?: boolean;
	size?: LogoSize;
	className?: string;
	wordmarkClassName?: string;
	priority?: boolean;
}

const iconSizes: Record<LogoSize, string> = {
	sm: "h-2 w-2",
	md: "h-9 w-9",
	lg: "h-10 w-10",
};

const wordmarkSizes: Record<LogoSize, string> = {
	sm: "text-sm",
	md: "text-lg",
	lg: "text-xl",
};

const Logo: React.FC<LogoProps> = ({
	showWordmark = true,
	size = "sm",
	className = "",
	wordmarkClassName = "",
	priority = false,
}) => {
	return (
		<div className={`flex items-center gap-2 ${className}`}>
			<Image
				src="/brand-assets/svg/pz-icon.svg"
				alt="Process Zero logo"
				width={512}
				height={512}
				priority={priority}
				className={iconSizes[size]}
			/>
			{showWordmark && (
				<span
					className={`${wordmarkSizes[size]} font-bold leading-none text-lg text-white ${wordmarkClassName}`}>
					Process Zero
				</span>
			)}
		</div>
	);
};

export default Logo;
