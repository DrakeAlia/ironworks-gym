"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Users,
  Award,
  Clock,
  ArrowRight,
  Quote,
  MapPin,
  Phone,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Dumbbell,
      title: "Premium Equipment",
      description: "State-of-the-art strength training equipment for all fitness levels.",
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "World-class trainers dedicated to helping you achieve your goals.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Join thousands of members who have transformed their lives.",
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Train when it works for you: 5 AM–9 PM on weekdays, expanded weekend access.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Powerlifter",
      content: "Iron Works Gym transformed my training. The atmosphere and equipment are unmatched. I've hit PRs I never thought possible.",
    },
    {
      name: "Mike Chen",
      role: "Bodybuilder",
      content: "The trainers here are incredible. Rohit's expertise helped me break through plateaus and achieve my competition goals.",
    },
    {
      name: "Emma Rodriguez",
      role: "Fitness Enthusiast",
      content: "The community at Iron Works is amazing. Everyone is supportive and the industrial aesthetic keeps me motivated.",
    },
  ];

  return (
    <div className="bg-zinc-950">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-500 font-semibold uppercase tracking-[0.3em] mb-4">
              Since 1974
            </p>
            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              Iron Works Gym
            </h1>
            <p className="text-2xl md:text-3xl text-white font-semibold mb-6">
              “The Gym That's Not A Health Club”
            </p>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto">
              Authentic training culture, world-class coaches, and a Bellevue icon since 1974. This is where serious athletes and everyday lifters come to work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-zinc-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500/10 transition-colors text-lg"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Why <span className="text-amber-500">Iron Works</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Everything you need to forge the strongest version of yourself.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-900 border border-amber-500/20 rounded-lg p-6 hover:border-amber-500/40 transition-colors"
                >
                  <div className="bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-amber-500">Members</span> Say
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Real stories from real people who transformed their lives at Iron Works.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-950 border border-amber-500/20 rounded-lg p-6"
              >
                <Quote className="h-8 w-8 text-amber-500 mb-4" />
                <p className="text-zinc-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-amber-500">{testimonial.role}</p>
                </div>
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
              Ready to <span className="text-amber-500">Forge</span> Your Legacy?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Join Iron Works Gym today and start your transformation. No commitment, just results.
            </p>
            <Link
              href="/membership"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-zinc-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-lg"
            >
              View Membership Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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
