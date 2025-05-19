import ContactForm from "@/components/contact-form";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </>
  );
}
