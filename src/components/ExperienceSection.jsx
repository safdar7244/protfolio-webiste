import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import ssiLogo from "../assets//ssi-logo.jpg";
import tapsnclicksLogo from "../assets//tapsnclicks.png";
import fiverLogo from "../assets//Fiverr-logo.png";
import boost79Logo from "../assets//boost79.jpg";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Strategic Systems International",
      title: "Software Engineer",
      dateRange: "July 2022 - Present",
      responsibilities: [
        "Currently working on Vendor Management System for Cross Country Healthcare, Inc",
        "Responsible for developing new features using Angular and .Net",
        "Responsible for maintaining, enhancing and migrating internal frontend framework built on top of Angular",
        "Migrated the VMS app frontend from Angular version 10 to Angular version 15",
      ],
      companyLogo: ssiLogo,
    },
    {
      company: "Boost79.hu",
      title: "Full Stack Software Engineer",
      dateRange: "October 2020 - July 2022",
      responsibilities: [
        "Worked on multiple full stack projects",
        "Responsible for designing archtitecture for multiple apps",
        "Responsible for optimizing and improving the backend architecture",
      ],
      companyLogo: boost79Logo,
    },
    {
      company: "TapsNClicks",
      title: "Full Stack Software Engineer",
      dateRange: "March 2021 - October 2022",
      responsibilities: [
        "Responsible for developing an Admin app for a video sharing app",
        "Respnsible for continous deployments of the application",
      ],
      companyLogo: tapsnclicksLogo,
    },
    {
      company: "Fiverr",
      title: "Freelance Full Stack Software Engineer",
      dateRange: "March 2019 - Present",
      responsibilities: [
        "Delivered high quality Web, Android, AI and Data Science solutions",
        "50+ Projects completed",
        "40+ Perfect Reviews",
      ],
      companyLogo: fiverLogo,
    },
  ];

  return (
    <section id="experience" className="bg-gray-100 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-black text-4xl font-semibold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <div className="grid gap-12 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;
