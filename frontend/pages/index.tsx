import type { NextPage } from "next";
import React from "react";


// components
import Head from "next/head";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import FeaturesSection from "../components/home/FeaturesSection";
import DocsSection from "../components/home/DocsSection";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Guilherme Abel | Home</title>
        <meta title="GuilhermeAbel Home" />
        <meta name="keywords" content="coding, web development, programming, javascript, projects , github, profiles, Home, landing page,guilhermeabel"/>
        <meta name="description" content="guilhermeabel landing page, figure out the intersting things about me , projects, products, documents, tools and languages I use in web developemnt, coding and programming ,guilhermeabel"/>
        <script src="/aos/index.js" defer></script>
      </Head>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DocsSection />
    </React.Fragment>
  );
};
export default Home;
