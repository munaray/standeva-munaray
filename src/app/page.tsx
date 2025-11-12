import Header from "@/components/landing/header/header";
import Hero from "@/components/landing/hero/hero";
import TransitionOverlay from "@/components/transition/transition-overlay";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Header />
			<main>
				<Hero />
				<TransitionOverlay />
			</main>
		</div>
	);
}
