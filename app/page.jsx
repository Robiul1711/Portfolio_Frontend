import Banner from "@/component/home/Banner";
import SkillSection from "@/component/home/SkillSection";
import { HeroParallaxDemo } from "@/component/home/HeroParallaxDemo";
import LightRays from "@/components/LightRays";
import React from "react";
import TimelineSection from "@/component/home/TimelineSection";
import AboutMe from "@/component/home/AboutMe";
import ChatWidget from "@/component/chat/ChatWidget";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Light Rays Background */}
      <div className="absolute top-0 left-0 w-full h-screen -z-10 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <ChatWidget />
      <Banner />
      <AboutMe />
      <SkillSection />
      <div className="">
        <HeroParallaxDemo />
      </div>
      <TimelineSection />
    </div>
  );
};

export default Home;
