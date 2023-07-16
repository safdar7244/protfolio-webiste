import { useState } from "react";
import BioSection from "../components/BioSection";
import Navbar from "../components/Navbar";
import ExperienceSection from "../components/ExperienceSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/Contact";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <BioSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
