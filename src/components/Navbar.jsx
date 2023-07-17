import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white backdrop-filter backdrop-blur-md bg-opacity-70 dark:bg-gray-900 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* <div>
            <span className="text-lg font-bold">Your Logo</span>
          </div> */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <button
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none"
                onClick={() => scrollToSection("bio")}
              >
                Bio
              </button>
              <button
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none"
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </button>
              <button
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </button>
              <button
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        {/* <motion.div
            className="h-1 bg-blue-500 dark:bg-blue-400"
            style={{ opacity }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          /> */}
      </div>
    </nav>
  );
};

export default Navbar;
