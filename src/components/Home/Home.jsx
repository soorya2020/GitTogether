import React, { Suspense, lazy } from "react";
import Footer from "../Footer";

// Lazy load every heavy section
const HeroSection = lazy(() => import("./HeroSection"));
const SectionWhy = lazy(() => import("./SectionWhy"));
const SectionHow = lazy(() => import("./SectionHow"));
// const SectionStack = lazy(() => import("./SectionStack"));
const SectionCta = lazy(() => import("./SectionCta"));
const ShimmerSection = lazy(() => import("./ShimmerUi"));
const HomeHeader = lazy(() => import("./HomeHeader"));


// Reusable DaisyUI Shimmer Skeleton

const Home = () => {
  return (
    <div
      data-theme="bumblebee"
      className="bg-base-100 text-base-content overflow-hidden"
    >

      <Suspense
        fallback={<div className="min-h-screen bg-base-200 animate-pulse" />}
      >
       <HomeHeader/>
      </Suspense>
      
     
      {/* Hero – loads first, no suspense needed (or you can lazy it too) */}
      <Suspense
        fallback={<div className="min-h-screen bg-base-200 animate-pulse" />}
      >
        <HeroSection />
      </Suspense>

      {/* Tech Stack */}
      {/* <Suspense fallback={<ShimmerSection height="h-96" />}>
        <SectionStack />
      </Suspense> */}

      {/* Final CTA */}
      <Suspense fallback={<ShimmerSection height="h-96" />}>
        <SectionCta />
      </Suspense>

      {/* Footer – always small, no need to lazy */}
      <Footer />
    </div>
  );
};

export default Home;
