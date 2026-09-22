import Hero from "@/components/Hero";
import ExperienceAwards from "@/components/ExperienceAwards";
import Services from "@/components/Services";
import SelectedWorks from "@/components/SelectedWorks";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExperienceAwards />
      <Services />
      <SelectedWorks />
      <Contact />
      <Footer />
    </main>
  );
}
