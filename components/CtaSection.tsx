"use client";

import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-2 border-yellow-500 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Ready to <span className="text-yellow-500">Start</span>?
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 mb-6 max-w-2xl mx-auto px-4">
            Stop by Iron Works Gym for a tour or give us a call. No pressure, just real training info.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+14258836006"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-zinc-950 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 text-base sm:text-lg min-h-[44px]"
            >
              Call (425) 883-6006
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=12708+Northup+Way+Bellevue+WA+98005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500/10 transition-all duration-300 text-base sm:text-lg min-h-[44px]"
            >
              Get Directions
            </a>
          </div>
          <p className="text-zinc-500 text-sm mt-6">
            Mon-Fri: 5 AM - 9 PM &middot; Sat: 7 AM - 6 PM &middot; Sun: 10 AM - 4 PM
          </p>
        </motion.div>
      </div>
    </section>
  );
}
