"use client";

import { motion } from "framer-motion";
import { Award, Dumbbell, Target, Users, MapPin, Phone, Clock } from "lucide-react";

export default function Trainers() {
  const trainers = [
    {
      name: "Rohit",
      role: "Owner & Head Coach",
      specialty: "Strength & Conditioning",
      bio: "With over 15 years of experience, Rohit has built Iron Works Gym into a premier strength training facility. His expertise in powerlifting and strength training has helped hundreds of athletes reach their peak performance.",
      achievements: ["IFBB Certified", "15+ Years Experience", "Powerlifting Champion"],
    },
    {
      name: "Marcus Thompson",
      role: "Senior Trainer",
      specialty: "Bodybuilding",
      bio: "Marcus brings a decade of competitive bodybuilding experience to Iron Works. He specializes in hypertrophy training and nutrition coaching.",
      achievements: ["NPC Competitor", "Nutrition Specialist", "10+ Years Experience"],
    },
    {
      name: "Jessica Martinez",
      role: "Strength Coach",
      specialty: "Powerlifting",
      bio: "Jessica is a competitive powerlifter with multiple state records. She excels at teaching proper form and progressive overload principles.",
      achievements: ["State Record Holder", "USAPL Certified", "8+ Years Experience"],
    },
    {
      name: "David Kim",
      role: "Functional Trainer",
      specialty: "Athletic Performance",
      bio: "David works with athletes of all levels, focusing on movement quality and performance enhancement. His background in sports science informs his training approach.",
      achievements: ["CSCS Certified", "Sports Science Degree", "7+ Years Experience"],
    },
    {
      name: "Amanda Foster",
      role: "Personal Trainer",
      specialty: "Transformation Coaching",
      bio: "Amanda specializes in helping clients achieve complete lifestyle transformations. Her holistic approach combines training, nutrition, and mindset coaching.",
      achievements: ["NASM Certified", "Nutrition Coach", "6+ Years Experience"],
    },
    {
      name: "James Wilson",
      role: "Strength Coach",
      specialty: "Strongman Training",
      bio: "James is a competitive strongman athlete who brings unique training methods to Iron Works. He specializes in unconventional strength movements.",
      achievements: ["Strongman Competitor", "USAW Certified", "9+ Years Experience"],
    },
    {
      name: "Sophie Chen",
      role: "Personal Trainer",
      specialty: "Women's Strength",
      bio: "Sophie empowers women through strength training, breaking down barriers and building confidence. She creates supportive training environments.",
      achievements: ["Women's Strength Specialist", "5+ Years Experience", "Wellness Coach"],
    },
    {
      name: "Ryan O'Connor",
      role: "Performance Coach",
      specialty: "Olympic Lifting",
      bio: "Ryan is a former competitive weightlifter with expertise in Olympic lifts. He teaches proper technique and helps athletes master complex movements.",
      achievements: ["USAW Level 2", "Competitive Weightlifter", "8+ Years Experience"],
    },
    {
      name: "Lisa Park",
      role: "Personal Trainer",
      specialty: "Rehabilitation & Mobility",
      bio: "Lisa combines strength training with corrective exercise and mobility work. She helps clients recover from injuries and move better.",
      achievements: ["Corrective Exercise Specialist", "Mobility Expert", "6+ Years Experience"],
    },
    {
      name: "Carlos Rodriguez",
      role: "Strength Coach",
      specialty: "Athletic Development",
      bio: "Carlos works with youth and adult athletes, developing speed, power, and agility. His training programs are designed for peak athletic performance.",
      achievements: ["Youth Athletic Specialist", "Speed & Agility Coach", "7+ Years Experience"],
    },
  ];

  return (
    <div className="bg-zinc-950">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-zinc-950" />
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
              Meet Our <span className="text-amber-500">Trainers</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              “The Gym That's Not A Health Club” is powered by world-class coaches dedicated to helping you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 border border-amber-500/20 rounded-lg p-6 hover:border-amber-500/40 transition-all hover:shadow-lg hover:shadow-amber-500/10"
              >
                <div className="mb-4">
                  <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{trainer.name}</h3>
                  <p className="text-amber-500 font-semibold mb-2">{trainer.role}</p>
                  <p className="text-zinc-400 text-sm mb-4">{trainer.specialty}</p>
                </div>
                <p className="text-zinc-300 mb-4 leading-relaxed">{trainer.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {trainer.achievements.map((achievement, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full border border-amber-500/20"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Train with the <span className="text-amber-500">Best</span>?
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Our trainers are available for one-on-one sessions, small group training, and specialized programs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-950 border border-amber-500/20 rounded-lg p-6">
                <Target className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Personal Training</h3>
                <p className="text-sm text-zinc-400">One-on-one sessions tailored to your goals</p>
              </div>
              <div className="bg-zinc-950 border border-amber-500/20 rounded-lg p-6">
                <Users className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Group Training</h3>
                <p className="text-sm text-zinc-400">Train with friends in small group sessions</p>
              </div>
              <div className="bg-zinc-950 border border-amber-500/20 rounded-lg p-6">
                <Dumbbell className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Specialized Programs</h3>
                <p className="text-sm text-zinc-400">Custom programs for specific goals</p>
              </div>
            </div>
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

