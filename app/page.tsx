"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Users,
  Award,
  Clock,
  ArrowRight,
  Quote,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const features = [
    {
      icon: Dumbbell,
      title: "Premium Equipment",
      description:
        "State-of-the-art strength training equipment for all fitness levels.",
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description:
        "World-class trainers dedicated to helping you achieve your goals.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "Join thousands of members who have transformed their lives.",
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description:
        "Train when it works for you: 5 AM - 9 PM on weekdays, expanded weekend access.",
    },
  ];

  const testimonials = [
    {
      name: "Steve S.",
      content: "IRONWORKS gym is the real deal.",
    },
    {
      name: "Mike N.",
      content:
        "The trainers & staff at IRONWORKS are the best - hands down. Look no further.",
    },
    {
      name: "Pete D.",
      content:
        "I am very impressed with the staff. The attention given to keeping the gym clean and everyone safe is exceptional.",
    },
  ];

  return (
    <div className="bg-zinc-950">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dd6njhtia/video/upload/ironworks-video-compressed_tafg0l.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-yellow-500 font-semibold uppercase tracking-[0.3em] mb-4">
              Since 1974
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight">
              Iron Works Gym
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold mb-6 px-2">
              &quot;The Gym That&apos;s Not A Health Club&quot;
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto px-4">
              Authentic training culture, world-class coaches, and a Bellevue
              icon since 1974. This is where serious athletes and everyday
              lifters come to work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-zinc-950 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 text-base sm:text-lg min-h-[44px]"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500/10 transition-all duration-300 text-base sm:text-lg min-h-[44px]"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { number: "50+", label: "Years Strong" },
              { number: "10+", label: "Expert Trainers" },
              { number: "1000+", label: "Members" },
              { number: "5AM-9PM", label: "Open Daily" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                  {stat.number}
                </p>
                <p className="text-zinc-400 text-xs sm:text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-yellow-500/20" />

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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
              Why <span className="text-yellow-500">Iron Works</span>
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto px-4">
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
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group bg-zinc-900 border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-500/60 transition-all hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/10"
                >
                  <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Separator className="bg-yellow-500/20" />

      {/* Functional Fitness Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home-functional-training.jpg"
            alt="Functional training at Iron Works"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-zinc-950/50" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/ironworksLogo.png"
                alt="Iron Works Gym Logo"
                width={300}
                height={300}
                className="object-contain w-full max-w-[250px] sm:max-w-[300px] mx-auto"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-white"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4">
                With everything from the TRX Suspension Training, to
                kettlebells, medicine balls, multi-height steps, to a functional
                ladder training system, Ironworks is your destination for
                functional fitness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="bg-yellow-500/20" />

      {/* Personal Trainers Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/carousel-squat.jpg"
            alt="Personal trainers at Iron Works"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-zinc-950/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 uppercase tracking-wider px-4">
              Personal Trainers
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-200 leading-relaxed max-w-3xl mx-auto px-4">
              Our trainers will help you build a safe and efficient workout plan
              to suit your fitness goals. Our trainers meet nationally
              recognized certification standards for fitness.
            </p>
            <div className="pt-4">
              <Button
                asChild
                className="bg-yellow-500 text-zinc-950 hover:bg-yellow-400 font-semibold px-8 py-6 text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 min-h-[44px]"
              >
                <Link href="/trainers">Meet Our Trainers</Link>
              </Button>
            </div>
          </motion.div>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
              What Our <span className="text-yellow-500">Members</span> Say
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto px-4">
              Real stories from real people who transformed their lives at Iron
              Works.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-zinc-950 border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-500/60 transition-all hover:shadow-yellow-500/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <User className="h-6 w-6 text-yellow-500" />
                  </div>
                  <Quote className="h-8 w-8 text-yellow-500/60 flex-shrink-0" />
                </div>
                <p className="text-zinc-300 mb-6 italic text-lg leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-yellow-500/20" />

      {/* Hero Woman Image Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home-hero-woman.jpg"
            alt="Iron Works Gym member"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-zinc-950/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Transform Your <span className="text-yellow-500">Strength</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-200 leading-relaxed max-w-2xl mx-auto px-4">
              Join a community of dedicated athletes and everyday lifters who
              are committed to achieving their fitness goals.
            </p>
            <div className="pt-4">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-zinc-950 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 text-base sm:text-lg min-h-[44px]"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
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
            className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-2 border-yellow-500 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
              Ready to <span className="text-yellow-500">Forge</span> Your
              Legacy?
            </h2>
            <p className="text-lg sm:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto px-4">
              Join Iron Works Gym today and start your transformation. No
              commitment, just results.
            </p>
            <Link
              href="/membership"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-zinc-950 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 text-base sm:text-lg hover:shadow-lg hover:shadow-yellow-500/25 animate-pulse hover:animate-none min-h-[44px]"
            >
              View Membership Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
