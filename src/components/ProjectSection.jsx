import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const projects = [
    {
      name: "Kozgo",
      description:
        "Kozgo is a ride sharing app. Build the Web app for Kozgo along with the driver sign up flow.",
      technologies: ["React", "Node", "Express", "MySQL"],
      sourceCodeLink: "https://github.com/safdar7244/Kozgo",
      demoLink: "http://www.kozgo.com/",
      screenshot: "../assets/screenshots/kozgo.png",
      hasDemo: true,
      hasSourceCode: true,
    },
    {
      name: "Open Stope",
      description:
        "A webapp that uses AI to accurately predict the stability if stope surfaces using AI.",
      technologies: [
        "Angular",
        "Node",
        "MySQL",
        "Express",
        "Django",
        "Keras",
        "TypeScript",
      ],
      screenshot: "../assets/screenshots/openstope.png",
      sourceCodeLink: "https://github.com/safdar7244/Open-Stope",
      demoLink: "https://openstope.com/",
      hasDemo: true,
      hasSourceCode: true,
    },
    {
      name: "Raw Admin App",
      description:
        "Raw is an exciting way to showcase creative content through short videos.It is a new video platform for content creators to share short videos. Built an admin app for Raw.",
      technologies: ["React", "Node", "Firebase", "Express"],
      screenshot: "../assets/screenshots/raw.png",
      sourceCodeLink: "https://github.com/safdar7244/raw-app_frontend",
      demoLink: "https://play.google.com/store/apps/details?id=com.tnc.rawapp",
      hasDemo: true,
      hasSourceCode: true,
    },
    {
      name: "Google Chat Bot",
      description:
        "A bot that reads messages from Google Chat and then sends it to Discord.",
      technologies: ["Node", "Puppeteer", "Discord API"],
      screenshot: "../assets/screenshots/google-bot.jpg",
      sourceCodeLink: "https://github.com/safdar7244/google_bot/",
      demoLink: "project-demo-link-b",
      hasDemo: false,
      hasSourceCode: true,
    },
    {
      name: "Home Parking",
      description:
        "A mobile App that lets users rent out their parking spaces to other users and earn money. Basically its the AirBnb for parking lots.",
      technologies: [
        "React Native",
        "Firebase",
        "Node",
        "Google Maps API",
        "Stripe",
      ],
      screenshot: "../assets/screenshots/parking.jpeg",
      sourceCodeLink: "https://github.com/safdar7244/Parking_App",
      demoLink: "project-demo-link-b",
      hasDemo: false,
      hasSourceCode: true,
    },
    {
      name: "Student On The Go",
      description:
        "An internal mobile app made for a Norwegian University, having the feature of group chat for the whole university, study materials and links to different courses.",
      technologies: ["React Native", "Firebase", "Node"],
      screenshot: "../assets/screenshots/university-app.png",
      sourceCodeLink: "https://github.com/safdar7244/School-on-Go",
      demoLink: "project-demo-link-b",
      hasSourceCode: true,
    },
    {
      name: "Spotify Bot",
      description:
        "A bot that creates spotify accounts bypassing bot protection and CAPTCHAS.",
      technologies: ["Node", "Puppeteer"],
      screenshot: "../assets/screenshots/spotify-bot.jpg",
      sourceCodeLink: "https://github.com/safdar7244/Spotify_Bot/tree/main",
      demoLink: "project-demo-link-b",
      hasSourceCode: true,
    },
    {
      name: "Random Chat App",
      description: "A web app that lets two random users chat with each other.",
      technologies: ["Node", "Firebase", "JQuery", "Socket IO"],
      screenshot: "../assets/screenshots/chat-app.png",
      sourceCodeLink: "project-source-code-link-b",
      demoLink: "project-demo-link-b",
      hasSourceCode: false,
    },
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
          Few Recent Projects
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
