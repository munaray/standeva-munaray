import React from "react";
import SecondaryHeader from "@/components/layout/secondary-header";
import SecondaryFooter from "@/components/layout/secondary-footer";
import AboutHero from "@/components/company/about/about-hero";
import CoreSolutions from "@/components/company/about/core-solutions";
import FullStackSection from "@/components/company/about/full-stack-section";
import ApproachSection from "@/components/company/about/approach-section";
import CTASection from "@/components/company/about/cta-section";
import PerspectiveSection from "@/components/company/about/perspective-section";

export const metadata = {
	title: "About Us - Standeva | AI Solutions for Enterprise",
	description: "Learn about Standeva, a generative AI company driving innovation and efficiency through scalable AI solutions for enterprises.",
};

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-black">
			<SecondaryHeader />
			<AboutHero />
			<CoreSolutions />
			<FullStackSection />
			<ApproachSection />
			<CTASection />
			<PerspectiveSection />
			<SecondaryFooter />
		</main>
	);
}
