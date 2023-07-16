import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const projects = [
    {
      name: "Project A",
      description: "Description of Project A",
      technologies: ["Technology 1", "Technology 2"],
      screenshot: "project-screenshot-a.png",
      sourceCodeLink: "project-source-code-link-a",
      demoLink: "project-demo-link-a",
    },
    {
      name: "Project B",
      description: "Description of Project B",
      technologies: [
        "Technology 1",
        "Technology 2",
        "Technology 2",
        "Technology 2",
        "Technology 2",
        "Technology 2",
        "Technology 2",
        "Technology 2",
        "Technology 2",
        "Technology 2",
        "Technology 2",
        "Technology 2",
        "Technology 2",
        "Technology 2",
      ],
      screenshot:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F08%2F17%2FM8DBATM_WB002.jpg",
      sourceCodeLink: "project-source-code-link-b",
      demoLink: "project-demo-link-b",
    },
    {
      name: "Project B",
      description: "Description of Project B",
      technologies: ["Technology 1", "Technology 2"],
      screenshot:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F08%2F17%2FM8DBATM_WB002.jpg",
      sourceCodeLink: "project-source-code-link-b",
      demoLink: "project-demo-link-b",
    },

    // Add more projects as needed
  ];

  return (
    <section id="projects" className="bg-gray-200 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-black text-4xl font-semibold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
