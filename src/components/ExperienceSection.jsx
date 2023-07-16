import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Company A",
      title: "Job Title A",
      dateRange: "January 2020 - Present",
      responsibilities: [
        "Responsibility 1",
        "Responsibility 2",
        "Responsibility 3",
      ],
    },
    {
      company: "Company B",
      title: "Job Title B",
      dateRange: "February 2018 - December 2019",
      responsibilities: [
        "Responsibility 1",
        "Responsibility 2",
        "Responsibility 3",
      ],
    },
    // Add more experiences as needed
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
