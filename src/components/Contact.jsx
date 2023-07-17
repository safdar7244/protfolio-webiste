import { motion } from "framer-motion";
import { useReducer, useState } from "react";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";
const ContactSection = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const submissionReducer = (state, action) => {
    const updatedErrors = { ...errors, [action.field]: null };
    if (action.type === "USER_INPUT") {
      const updatedSubmission = { ...state, [action.field]: action.value };
      setErrors(updatedErrors);
      return updatedSubmission;
    }

    if (action.type == "BLUR") {
      if (action.field === "name" && !state.name.trim()) {
        updatedErrors.name = "Name is required";
      }
      if (action.field === "email" && !/^\S+@\S+\.\S+$/.test(state.email)) {
        updatedErrors.email = "Invalid email address";
      }
      if (action.field === "message" && !state.message.trim()) {
        updatedErrors.message = "Message is required";
      }

      setErrors(updatedErrors);
      return state;
    }
  };

  const [submission, dispatchSubmission] = useReducer(submissionReducer, {
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    dispatchSubmission({
      type: "USER_INPUT",
      field: event.target.id,
      value: event.target.value,
    });
  };

  const validateSubmission = () => {
    if (!submission.name.trim()) {
      setErrors({ ...errors, name: "Name is required" });
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(submission.email)) {
      setErrors({ ...errors, email: "Invalid email address" });
      return false;
    }
    if (!submission.message.trim()) {
      setErrors({ ...errors, message: "Message is required" });
      return false;
    }
    return true;
  };

  const resetForm = () => {
    dispatchSubmission({ type: "USER_INPUT", field: "name", value: "" });
    dispatchSubmission({ type: "USER_INPUT", field: "email", value: "" });
    dispatchSubmission({ type: "USER_INPUT", field: "message", value: "" });
    setErrors({});
  };

  const postToDb = async () => {
    try {
      setIsLoading(true);
      const docRef = await addDoc(collection(db, "submissions"), submission);
      console.log("Document written with ID: ", docRef.id);
      resetForm();
      setIsLoading(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      resetForm();
      setIsLoading(false);
      setErrors({ ...errors, server: e });
    }
  };

  const handleSubmit = async () => {
    if (validateSubmission()) {
      postToDb();
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-24">
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center ${
          isLoading ? "visible" : "hidden"
        }`}
      >
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      </div>
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
              onChange={handleChange}
              value={submission.name}
              onBlur={() => dispatchSubmission({ type: "BLUR", field: "name" })}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
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
              onChange={handleChange}
              value={submission.email}
              onBlur={() =>
                dispatchSubmission({ type: "BLUR", field: "email" })
              }
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
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
              onChange={handleChange}
              value={submission.message}
              onBlur={() =>
                dispatchSubmission({ type: "BLUR", field: "message" })
              }
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <motion.button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded text-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.418 0 8-3.582 8-8h-4a4.002 4.002 0 01-3.874-3.874L12 4V0H8v4a8 8 0 004 7.291z"
                ></path>
              </svg>
            ) : (
              "Submit"
            )}
          </motion.button>

          {errors.server && <p className="text-red-500">{errors.server}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
