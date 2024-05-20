import Footer from "@/components/home/Footer";
import IndustryServices from "@/components/home/IndustryServices";
import Navbar from "@/components/home/Navbar";
import ForBrokers from "@/components/home/for-brokers";
import OurServices from "@/components/home/our-services";
import Metrics from "@/components/metrics/page";
import PrimeHero from "@/components/prime-hero/PrimeHero";
import React from "react";

const PrimePage = () => {
  return (
    <>
      <Navbar />
      <PrimeHero />
      <IndustryServices />
      <Metrics />
      <ForBrokers />
      <OurServices />
      <Footer />
    </>
  );
};

export default PrimePage;
