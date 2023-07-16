import { motion } from "framer-motion";
const ExperienceCard = ({
  company,
  title,
  dateRange,
  responsibilities,
  companyLogo,
}) => {
  console.log(companyLogo);
  return (
    <motion.div
      className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center mb-6">
        <img
          src={companyLogo}
          alt="Company Logo"
          className="w-12 h-12 rounded-full object-cover"
        />
        <h3 className="text-black text-3xl font-semibold ml-4">{company}</h3>
      </div>
      {/* <h3 className="text-black text-3xl font-semibold mb-4">{company}</h3> */}
      <p className="text-gray-600 text-lg mb-2">{title}</p>
      <p className="text-gray-600 text-lg">{dateRange}</p>
      <ul className="list-disc ml-8 mt-4 text-gray-600">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
