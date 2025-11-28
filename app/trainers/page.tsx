"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

type Trainer = {
  name: string;
  role: string;
  image: string;
  phone?: string;
  email?: string;
  bio?: string;
  specialty?: string;
};

const rohit: Trainer = {
  name: "Rohit Nadkarni",
  role: "Gym Owner & Trainer",
  image: "/images/trainers/Iron Works-rohit.jpg",
  bio: "Health and fitness is my greatest passion in life. Nothing is more rewarding to me than empowering individuals to find their inner strength and achieve their goals. Prior to becoming the owner of Iron Works, I gained tremendous experience managing gyms and training clients within the fitness industry. I look forward and am honored to carry on the legacy Iron Works has set forth for the past 50+ years.",
};

const trainers: Trainer[] = [
  {
    name: "Danny Dorazio",
    role: "Trainer",
    image: "/images/trainers/Iron Works-danny.jpg",
    phone: "206-227-3269",
    email: "dorazio.dan@gmail.com",
    bio: "Danny has put his lifetime's passion and energy into fitness as a certified professional trainer by NASM, ISSA, Tom Platz and David Barton. His professional career spans over 15 years. He started lifting weights as a teen and competed as a junior bodybuilder and still competes today.",
    specialty: "NASM, ISSA Certified",
  },
  {
    name: "Ryan Torno",
    role: "Trainer",
    image: "/images/trainers/Iron Works-ryan.jpg",
    phone: "206-240-6556",
    email: "limtless.torno@gmail.com",
    bio: "I love the game of basketball and have been a member of the Iron Works family for 10 years. My focus as a trainer is strength and conditioning/functional movement. I love to see people improve and grow and am always pushing to get the best out of each individual.",
    specialty: "Strength & Conditioning",
  },
  {
    name: "Mike Mitchell",
    role: "Trainer",
    image: "/images/trainers/Iron Works-mike.jpg",
    phone: "206-375-8284",
    email: "coachmike@knockoutresults.net",
  },
  {
    name: "Coach Mihai",
    role: "Trainer",
    image: "/images/trainers/Iron Works-mihai.jpg",
    phone: "425-444-2729",
    email: "coachmihai@imfinallyfit.com",
  },
  {
    name: "Tim Ennis",
    role: "Trainer",
    image: "/images/trainers/Iron Works-tim.jpg",
    phone: "425-883-6006",
  },
  {
    name: "Ariana Wang",
    role: "Trainer",
    image: "/images/trainers/Iron Works-ariana.jpg",
  },
  {
    name: "Neil Austin",
    role: "Trainer",
    image: "/images/trainers/Iron Works-neil.jpg",
  },
  {
    name: "Nick Yet",
    role: "Trainer",
    image: "/images/trainers/Iron Works-nick.jpg",
  },
  {
    name: "Caleb Beck",
    role: "Trainer",
    image: "/images/trainers/Iron Works-caleb.jpg",
  },
];

export default function Trainers() {
  return (
    <div className="bg-zinc-950">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-zinc-950" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our <span className="text-yellow-500">Trainers</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              Our trainers will help you build a safe and efficient workout plan
              to suit your fitness goals. All of our Personal Trainers meet
              nationally recognized certification standards for fitness. Give us
              a call today and let Ironworks help you find the best trainer to
              meet your fitness goals!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-3xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="group relative aspect-[3/4] lg:aspect-auto lg:min-h-[400px] overflow-hidden">
                <Image
                  src="/images/trainers-hero.jpg"
                  alt="Iron Works Gym trainers"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              {/* Quote */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Quote className="h-8 w-8 text-yellow-500 mb-4" />
                <blockquote className="text-xl md:text-2xl text-zinc-200 leading-relaxed mb-6">
                  &quot;I am very impressed with the staff. The attention is
                  given to keeping the gym clean and everyone safe is
                  exceptional&quot;
                </blockquote>
                <p className="text-yellow-400 font-semibold">- Pete D.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rohit Hero Card */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 border border-yellow-500/30 rounded-3xl overflow-hidden hover:border-yellow-500/50 transition-all hover:shadow-xl hover:shadow-yellow-500/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="group relative aspect-[3/4] lg:aspect-auto lg:min-h-[650px] overflow-hidden">
                <Image
                  src={rohit.image}
                  alt={rohit.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {rohit.name}
                </h2>
                <p className="text-yellow-500 font-semibold text-lg mb-6">
                  {rohit.role}
                </p>
                {rohit.bio && (
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    {rohit.bio}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group bg-zinc-900 border border-yellow-500/20 rounded-2xl overflow-hidden hover:border-yellow-500/60 transition-all hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-yellow-500 font-semibold mb-2">
                    {trainer.role}
                  </p>
                  {trainer.specialty && (
                    <div className="mb-4">
                      <Badge
                        variant="outline"
                        className="bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                      >
                        {trainer.specialty}
                      </Badge>
                    </div>
                  )}
                  {trainer.bio && (
                    <p className="text-zinc-300 mb-4 leading-relaxed text-sm">
                      {trainer.bio}
                    </p>
                  )}
                  <div className="flex flex-col gap-2 mt-4">
                    {trainer.phone && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={`tel:${trainer.phone.replace(/-/g, "")}`}
                            className="flex items-center gap-2 text-zinc-400 hover:text-yellow-400 transition-colors text-sm"
                          >
                            <Phone className="h-4 w-4" />
                            <span>{trainer.phone}</span>
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Click to call</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                    {trainer.email && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={`mailto:${trainer.email}`}
                            className="flex items-center gap-2 text-zinc-400 hover:text-yellow-400 transition-colors text-sm"
                          >
                            <Mail className="h-4 w-4" />
                            <span className="break-all">{trainer.email}</span>
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Click to email</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-yellow-500/20" />

      {/* Gym Gallery Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: "/images/gym-equipment-1.jpg",
                alt: "Gym equipment at Iron Works",
              },
              {
                src: "/images/gym-equipment-2.jpg",
                alt: "Training equipment at Iron Works",
              },
              {
                src: "/images/gym-equipment-3.jpg",
                alt: "Fitness equipment at Iron Works",
              },
            ].map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-yellow-500/20 cursor-pointer transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/60">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Visit us at 12708 Northup Way, Bellevue or call (425) 883-6006
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                className="bg-yellow-500 text-zinc-950 hover:bg-yellow-400 font-semibold px-10 py-7 text-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
              >
                <Link href="/membership">View Membership</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 hover:border-yellow-500 font-semibold px-10 py-7 text-lg hover:shadow-lg transition-all"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
