import { motion } from "framer-motion";

const ProjectCard = ({
  name,
  description,
  technologies,
  screenshot,
  sourceCodeLink,
  demoLink,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={screenshot}
        alt="Project Screenshot"
        className="w-full h-auto"
      />
      <div className="p-6">
        <h3 className="text-black text-3xl font-semibold mb-4">{name}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((technology, index) => (
            <motion.button
              key={index}
              className="text-white bg-blue-500 hover:bg-blue-400 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {technology}
            </motion.button>
          ))}
        </div>
        <div className="flex space-x-4 mt-auto">
          <motion.a
            href={sourceCodeLink}
            className="text-white bg-gray-600 hover:bg-gray-500 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Source Code
          </motion.a>
          <motion.a
            href={demoLink}
            className="text-white bg-gray-600 hover:bg-gray-500 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
