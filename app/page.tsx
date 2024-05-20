import AboutGrid from "@/components/about/AboutGrid";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import IndustryServices from "@/components/home/IndustryServices";
import Navbar from "@/components/home/Navbar";
import ForBrokers from "@/components/home/for-brokers";
import OurServices from "@/components/home/our-services";
import WhyUs from "@/components/why-us/WhyUs";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Our services */}
      <OurServices />
      {/* Industry services */}
      <IndustryServices />
      {/* For Brokers */}
      <ForBrokers />
      {/* last one */}
      <AboutGrid />
      {/* WHy Us */}
      <WhyUs />
      {/* Footer */}
      <Footer />
    </>
  );
}
