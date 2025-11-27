"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  ArrowRight,
  Clock,
  Users,
  Dumbbell,
  Award,
  MapPin,
  Phone,
} from "lucide-react";

export default function Membership() {
  const premiumPlan = {
    title: "Premium Plan",
    price: "$56.99*",
    subtitle: "Monthly Memberships / Monthly Dues",
    bullets: [
      "No initiation fees with a 5-month agreement",
      "*Special at point of sale. Family member add-on price.",
      "Plus Washington State sales tax @ 10.2%",
    ],
  };

  const termMemberships = [
    { label: "1 Day", price: "$20.00" },
    { label: "1 Month", price: "$95.00" },
    { label: "3 Months", price: "$229.00" },
    { label: "1 Year", price: "$489.00*" },
  ];

  const termNotes = [
    "*Annual renewal rate after one year $439.00",
    "Plus Washington State sales tax @ 10.2%",
  ];

  const corporatePlan = {
    description: "Corporate Memberships (6+ people)",
    price: "$39.99* per member",
    bullets: [
      "Applied to companies with six or more people",
      "*Plus Washington State sales tax @ 10.2%",
    ],
  };

  const policies = [
    {
      title: "Membership Pause Policy",
      content: [
        "AFT (month-to-month) memberships can be paused for a maximum of two months and only once per membership.",
        "1-year term memberships can be paused for at least two months.",
        "No pauses can be issued for 1- or 3-month term memberships.*",
      ],
    },
    {
      title: "Cancellation Policy",
      content: [
        "AFT memberships: cancellation is accepted only if you either come in person and sign off on your membership card, or send a signed and dated handwritten letter stating your cancellation.",
        "No cash refunds. Please retain confirmation of your cancellation request.",
      ],
    },
  ];

  const galleryImages = [
    {
      src: "/images/dumbbells.jpg",
      alt: "Heavy dumbbells lined up on a rack",
      label: "Iron Rows",
    },
    {
      src: "/images/kettlebells.jpg",
      alt: "Kettlebells in an industrial training bay",
      label: "Kettlebell Yard",
    },
    {
      src: "/images/trx-training.jpg",
      alt: "Member training with TRX bands",
      label: "Suspension Zone",
    },
    {
      src: "/images/gym-interior.jpg",
      alt: "Panoramic view of Iron Works Gym interior",
      label: "The Forge Floor",
    },
  ];

  return (
    <div className="bg-zinc-950">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/treadmills.jpg"
            alt="Iron Works Gym treadmills"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-zinc-950/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 via-transparent to-zinc-950" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-500 font-semibold uppercase tracking-[0.3em] mb-4">
              Since 1974
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Membership <span className="text-amber-500">Plans</span>
            </h1>
            <p className="text-2xl text-white font-semibold mb-4">
              “The Gym That's Not A Health Club”
            </p>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Choose the plan that fits your goals and train at Bellevue's original hardcore gym.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Inside the <span className="text-amber-500">Forge</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Tour the spaces that make Iron Works Gym a Bellevue staple—from dumbbell rows to the suspension zone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-amber-500/20 bg-zinc-900">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 45vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-semibold text-amber-400 tracking-wide uppercase">
                      {image.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-900 border border-amber-500/30 rounded-2xl p-8 shadow-xl shadow-amber-500/10"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-amber-400 mb-3">
                {premiumPlan.subtitle}
              </p>
              <h3 className="text-3xl font-bold text-white mb-2">{premiumPlan.title}</h3>
              <p className="text-5xl font-extrabold text-amber-400 mb-6">{premiumPlan.price}</p>
              <p className="text-zinc-400 text-sm mb-6">
                Monthly dues per member. Family add-on specials available at point of sale.
              </p>
              <ul className="space-y-4">
                {premiumPlan.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Term Memberships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-zinc-900 border border-amber-500/20 rounded-2xl p-8"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-amber-400 mb-3">
                Term Memberships / Gym
              </p>
              <h3 className="text-3xl font-bold text-white mb-6">Short & Long Terms</h3>
              <ul className="divide-y divide-amber-500/10">
                {termMemberships.map((term) => (
                  <li key={term.label} className="flex items-center justify-between py-3">
                    <span className="text-zinc-300">{term.label}</span>
                    <span className="text-lg font-semibold text-white">{term.price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-2 text-sm text-amber-400">
                {termNotes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
            </motion.div>

            {/* Corporate Memberships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900 border border-amber-500/20 rounded-2xl p-8"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-amber-400 mb-3">
                Corporate Memberships
              </p>
              <h3 className="text-3xl font-bold text-white mb-2">Team Training</h3>
              <p className="text-zinc-400 text-sm mb-4">{corporatePlan.description}</p>
              <p className="text-4xl font-bold text-amber-400 mb-6">{corporatePlan.price}</p>
              <ul className="space-y-4">
                {corporatePlan.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What's <span className="text-amber-500">Included</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 border border-amber-500/20 rounded-lg p-6 text-center">
              <Dumbbell className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Equipment</h3>
              <p className="text-zinc-400 text-sm">
                Access to our full range of strength training equipment
              </p>
            </div>
            <div className="bg-zinc-950 border border-amber-500/20 rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Community</h3>
              <p className="text-zinc-400 text-sm">
                Train alongside dedicated athletes and fitness enthusiasts
              </p>
            </div>
            <div className="bg-zinc-950 border border-amber-500/20 rounded-lg p-6 text-center">
              <Award className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-zinc-400 text-sm">
                Join thousands who have achieved their fitness goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Membership <span className="text-amber-500">Policies</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Important information about your membership and gym policies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 border border-amber-500/20 rounded-lg p-6"
              >
                <h3 className="text-2xl font-semibold mb-4 text-amber-500">{policy.title}</h3>
                <ul className="space-y-3">
                  {policy.content.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Clock className="h-5 w-5 text-amber-500/50 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-2 border-amber-500 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to <span className="text-amber-500">Start</span>?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Visit 12708 Northup Way for a free tour or call us to lock in your spot. No pressure, just real training info.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-zinc-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-lg"
            >
              Schedule a Tour
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <p className="text-zinc-400 text-sm mt-6">
              Prefer to talk? Call (425) 883-6006 · Mon–Fri 5 AM–9 PM · Sat 7 AM–6 PM · Sun 10 AM–4 PM
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/60">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-zinc-950 border border-amber-500/20 rounded-xl p-6">
              <MapPin className="h-8 w-8 text-amber-500 mb-4" />
              <h3 className="text-amber-500 font-semibold mb-2">Visit Us</h3>
              <p className="text-zinc-300">
                12708 Northup Way
                <br />
                Bellevue, WA 98005
              </p>
            </div>
            <div className="bg-zinc-950 border border-amber-500/20 rounded-xl p-6">
              <Phone className="h-8 w-8 text-amber-500 mb-4" />
              <h3 className="text-amber-500 font-semibold mb-2">Call Us</h3>
              <p className="text-zinc-300 text-lg font-semibold">
                (425) 883-6006
              </p>
            </div>
            <div className="bg-zinc-950 border border-amber-500/20 rounded-xl p-6">
              <Clock className="h-8 w-8 text-amber-500 mb-4" />
              <h3 className="text-amber-500 font-semibold mb-2">Hours</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Mon–Fri: 5 AM – 9 PM
                <br />
                Sat: 7 AM – 6 PM
                <br />
                Sun: 10 AM – 4 PM
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

