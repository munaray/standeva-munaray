import SecondaryHeader from "@/components/layout/secondary-header";
import SecondaryFooter from "@/components/layout/secondary-footer";
import HeroSection from "@/components/how-we-work/hero-section";
import WavesHeaderSection from "@/components/how-we-work/waves-header-section";
import MethodologySection from "@/components/how-we-work/methodology-section";
import DiscoveryCallSection from "@/components/how-we-work/discovery-call-section";
import CommercialRealitySection from "@/components/how-we-work/commercial-reality-section";
import OwnershipSection from "@/components/how-we-work/ownership-section";
import FinalCtaSection from "@/components/how-we-work/final-cta-section";
import PageCloseSection from "@/components/how-we-work/page-close-section";

export const metadata = {
	title: "How We Work | Process Zero",
	description:
		"How Process Zero guides AI adoption through efficiency, growth, and expansion",
};

export default function HowWeWorkPage() {
	const cta = {
		label: "free 60 min discovery call",
		href: "/intro-call",
	};

	return (
		<main className="min-h-screen w-full overflow-x-hidden bg-black">
			<SecondaryHeader cta={cta} />
			<div className="w-full pt-16 sm:pt-20">
				<HeroSection />
				<WavesHeaderSection />
				<MethodologySection />
				<DiscoveryCallSection />
				<CommercialRealitySection />
				<OwnershipSection />
				<FinalCtaSection />
				<PageCloseSection />
			</div>
			<SecondaryFooter />
		</main>
	);
}
