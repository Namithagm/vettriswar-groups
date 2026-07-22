import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Industries from "@/components/sections/industries";
import Statistics from "@/components/sections/statistics";
import Portfolio from "@/components/sections/portfolio";
import ClientLogos from "@/components/sections/client-logos";
import FounderSection from "@/components/sections/founder";
import Testimonials from "@/components/sections/testimonials";
import Careers from "@/components/sections/careers";
import Blog from "@/components/sections/blog";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Statistics />
      <Portfolio />
      <ClientLogos />
      <FounderSection />
      <Testimonials />
      <Careers />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}
