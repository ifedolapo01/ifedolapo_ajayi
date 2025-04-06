import Hero from "@/components/Hero";
import ExperienceAwards from "@/components/ExperienceAwards";
import Services from "@/components/Services";
import SelectedWorks from "@/components/SelectedWorks";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main>
      {/* Sections with IDs for smooth scrolling */}
      <section id="hero">
        <Hero />
      </section>

      <section id="experience-awards">
        <ExperienceAwards />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="selected-works">
        <SelectedWorks />
      </section>

      <section id="contact">
        <Contact />
      </section>
      
        <Footer />
    </main>
  );
}
