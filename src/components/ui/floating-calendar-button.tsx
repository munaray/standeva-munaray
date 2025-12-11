"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface FloatingCalendarButtonProps {
	onClick: () => void;
}

export default function FloatingCalendarButton({
	onClick,
}: FloatingCalendarButtonProps) {
	return (
		<motion.button
			onClick={onClick}
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.3 }}
			className="fixed bottom-8 right-8 z-40 hidden items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-500/40 transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl hover:shadow-blue-500/50 md:flex"
			aria-label="Book a call"
		>
			<Calendar size={20} />
			<span className="text-sm">Book a Call</span>
		</motion.button>
	);
}
