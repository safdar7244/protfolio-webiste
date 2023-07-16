import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-100 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-black text-4xl font-semibold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Contact
        </motion.h2>
        <form className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2 text-lg"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-100 text-gray-800 px-4 py-3 rounded w-full text-lg"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2 text-lg"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-100 text-gray-800 px-4 py-3 rounded w-full text-lg"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2 text-lg"
            >
              Message
            </label>
            <textarea
              id="message"
              className="bg-gray-100 text-gray-800 px-4 py-3 rounded w-full h-32 text-lg"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded text-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
