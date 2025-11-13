"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BlogBackButton: React.FC = () => {
	const router = useRouter();

	return (
		<button
			type="button"
			onClick={() => router.back()}
			className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-blue-500 hover:text-blue-300">
			<ArrowLeft size={16} />
			Back
		</button>
	);
};

export default BlogBackButton;

