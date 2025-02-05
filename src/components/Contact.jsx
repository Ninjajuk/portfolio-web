

import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Icons for the header and cards

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="p-8 bg-gray-50"
    >
          <div className="container mx-auto">
              {/* Centered Header with Icon */}
              <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center mb-12"
              >
                  <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
                      <FaEnvelope className="text-purple-800" /> Get in Touch</h2>
                  <p className="text-gray-600 mt-2">Feel free to reach out to me for any inquiries or collaborations. </p>
              </motion.div>
              <div className="flex flex-col md:flex-row gap-8">
                  {/* Cards on the right */}
                  <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="w-full md:w-1/2 space-y-6"
                  >
                      {/* Call Us Card */}
                      <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg text-white cursor-pointer"
                          onClick={() => window.location.href = "tel:+917542067763"}
                      >
                          <div className="flex items-center gap-4">
                              <FaPhone className="text-3xl" />
                              <div>
                                  <h3 className="text-xl font-semibold">Call Us</h3>
                                  <p className="text-gray-200">+917542067763</p>
                              </div>
                          </div>
                      </motion.div>

                      {/* WhatsApp Card */}
                      <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg text-white cursor-pointer"
                          onClick={() => window.open("https://wa.me/+917542067763", "_blank")}
                      >
                          <div className="flex items-center gap-4">
                              <FaWhatsapp className="text-3xl" />
                              <div>
                                  <h3 className="text-xl font-semibold">WhatsApp</h3>
                                  <p className="text-gray-200">Chat with us on WhatsApp</p>
                              </div>
                          </div>
                      </motion.div>

                      {/* Email Us Card */}
                      <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-lg text-white cursor-pointer"
                          onClick={() => window.location.href = "mailto:biosamsuddin@gmail.com"}
                      >
                          <div className="flex items-center gap-4">
                              <FaEnvelope className="text-3xl" />
                              <div>
                                  <h3 className="text-xl font-semibold">Email Us</h3>
                                  <p className="text-gray-200">biosamsuddin@gmail.com</p>
                              </div>
                          </div>
                      </motion.div>
                  </motion.div>
                  {/* Form and Cards Container */}
                  {/* Form on the left */}
                  <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg"
                  >
                      <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                      <form className="space-y-4">
                          <input
                              type="text"
                              placeholder="Your Name"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <input
                              type="email"
                              placeholder="Your Email"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <textarea
                              placeholder="Your Message"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              rows="5"
                          ></textarea>
                          <button
                              type="submit"
                              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
                          >
                              Send Message
                          </button>
                      </form>
                  </motion.div>
              </div>
          </div>
    </motion.section>
  );
};

export default Contact;