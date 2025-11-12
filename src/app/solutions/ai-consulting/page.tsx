import React from "react";
import SecondaryHeader from "@/components/layout/secondary-header";
import SecondaryFooter from "@/components/layout/secondary-footer";
import ConsultingHero from "@/components/solutions/ai-consulting/consulting-hero";
import ConsultingIntro from "@/components/solutions/ai-consulting/consulting-intro";
import WhatWeOffer from "@/components/solutions/ai-consulting/what-we-offer";
import InternalAISolutions from "@/components/solutions/ai-consulting/internal-ai-solutions";
import WhyStandeva from "@/components/solutions/ai-consulting/why-standeva";
import TechnologyPartners from "@/components/solutions/ai-consulting/technology-partners";
import FAQSection from "@/components/solutions/ai-consulting/faq-section";
import BlogPreview from "@/components/solutions/ai-consulting/blog-preview";
import FinalCTA from "@/components/solutions/ai-consulting/final-cta";

export const metadata = {
	title: "AI Consulting Services - Standeva | Expert AI Strategy & Implementation",
	description:
		"Navigate AI's complexities with Standeva's expert consulting services. We help you identify strategic opportunities, optimize performance, and ensure compliance for seamless AI adoption.",
};

export default function AIConsultingPage() {
	return (
		<main className="min-h-screen bg-black overflow-x-hidden">
			<SecondaryHeader />
			<ConsultingHero />
			<ConsultingIntro />
			<WhatWeOffer />
			<InternalAISolutions />
			<WhyStandeva />
			<TechnologyPartners />
			<FAQSection />
			<BlogPreview />
			<FinalCTA />
			<SecondaryFooter />
		</main>
	);
}
