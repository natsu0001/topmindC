"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "../components/ui/button"; // <-- import your Button

export default function FreeTrialModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Use your Button component */}
      <Button onClick={() => setIsOpen(true)} className="font-semibold ">
        Start Free Trial
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg max-w-lg w-full p-6 relative"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>

              {/* Header */}
              <h2 className="text-2xl font-bold text-center text-purple-700 mb-2">
                Start Your Free Trial
              </h2>
              <p className="text-sm text-gray-600 text-center mb-4">
                Fill in your details and we’ll get you started right away.
              </p>

              {/* Form */}
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Class (e.g. Grade 4)"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>

                {/* Submit with your green variant button */}
                <Button type="submit"  className="w-full font-semibold">
                  Submit
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
