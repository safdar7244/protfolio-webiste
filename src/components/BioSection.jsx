import React from "react";
import { motion } from "framer-motion";
import me from "../assets/me.jpg";

const BioSection = () => {
  return (
    <section id="bio" className="bg-white py-24 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:mr-8 mb-8 md:mb-0">
            <div className="rounded-full overflow-hidden h-40 w-40 md:h-64 md:w-64 border-4 border-slate-400">
              <img
                src={me}
                alt="Profile Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <motion.h2
              className="text-black text-6xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Mohamed Safdar
            </motion.h2>
            <motion.p
              className="text-gray-600 text-2xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Software Engineer
            </motion.p>
            <motion.p
              className="text-gray-600 leading-relaxed text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              A grounded and solution oriented software engineer with a passion
              for learning new stuff.
            </motion.p>
            <motion.button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded text-lg m-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a href="public/assets/Files/safdar.pdf" download>
                See Full Resume
              </a>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BioSection;
