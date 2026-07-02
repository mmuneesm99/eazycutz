import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ResearchJourney from "@/components/ResearchJourney";
import Problems from "@/components/Problems";
import ProductShowcase from "@/components/ProductShowcase";
import MembershipBuilder from "@/components/MembershipBuilder";
import ResearchEvidence from "@/components/ResearchEvidence";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col w-full max-w-[100vw] overflow-x-hidden bg-[#fbfbfd]">
      <Navbar />
      <main className="flex-1 w-full [&>section+section]:mt-0">
        <Hero />
        <StatsBar />
        <ResearchJourney />
        <Problems />
        <ProductShowcase />
        <MembershipBuilder />
        <ResearchEvidence />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
