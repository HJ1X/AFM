import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { InstitutionalCredibility } from "@/components/sections/InstitutionalCredibility";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Awards } from "@/components/sections/Awards";
import { LeaderBio } from "@/components/sections/LeaderBio";
import { ProgramDetail } from "@/components/sections/ProgramDetail";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { NewsGrid } from "@/components/sections/NewsGrid";
import { Footer } from "@/components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-corporate-blue">
      <Navbar />
      <Hero />
      <TrustBar />
      <InstitutionalCredibility />
      <WhyChoose />
      <Awards />
      <LeaderBio />
      <ProgramDetail />
      <Testimonials />
      <LeadMagnet />
      <NewsGrid />
      <Footer />
    </div>
  );
}

export default App;
