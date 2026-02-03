"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Quote, Instagram } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import CtaSection from "@/components/CtaSection";

type Trainer = {
  name: string;
  role: string;
  image: string;
  phone?: string;
  email?: string;
  bio?: string;
  specialty?: string;
  instagram?: string;
};

const rohit: Trainer = {
  name: "Rohit Nadkarni",
  role: "Gym Owner & Trainer",
  image: "/images/trainers/Iron Works-rohit.jpg",
  email: "ironworksgymbellevuemgr@gmail.com",
  bio: "Health and fitness is my greatest passion in life. Nothing is more rewarding to me than empowering individuals to find their inner strength and achieve their goals. Prior to becoming the owner of Iron Works, I gained tremendous experience managing gyms and training clients within the fitness industry. I look forward and am honored to carry on the legacy Iron Works has set forth for the past 50+ years.",
};

const timEnnis: Trainer = {
  name: "Tim Ennis",
  role: "Manager & Trainer",
  image: "/images/trainers/Iron Works-tim.jpg",
  phone: "425-883-6006",
  specialty: "Owning Selected Physique",
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
    instagram: "https://www.instagram.com/djdorazio?igsh=d2FiYTdhY211MzBl",
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
    instagram: "https://www.instagram.com/k.o._results?igsh=MWgwenNoYTk4a3BqcQ%3D%3D",
  },
  {
    name: "Coach Mihai",
    role: "Trainer",
    image: "/images/trainers/Iron Works-mihai.jpg",
    phone: "425-444-2729",
    email: "coachmihai@imfinallyfit.com",
  },
  {
    name: "Ariana Wang",
    role: "Trainer",
    image: "/images/trainers/Iron Works-ariana.jpg",
    instagram: "https://www.instagram.com/ariana_on_fire?igsh=MWlzaHN4NDRlN2w1Zw%3D%3D",
  },
  {
    name: "Neil Austin",
    role: "Trainer",
    image: "/images/trainers/Iron Works-neil.jpg",
    instagram: "https://www.instagram.com/bigfreakinneil?igsh=OHhtbzgxczJ4NmJu",
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
  {
    name: "Gabe",
    role: "Trainer",
    image: "/images/trainers/Iron Works-gabe.jpg",
    bio: "Gabe is a versatile trainer with a background in snowboard instruction, physical therapy, and personal training. As a personal trainer for the past 4 years, Gabe has excelled in designing workout programs and providing nutrition and lifestyle coaching to a wide range of clients. His unique blend of skills and experience, along with his strong communication and interpersonal abilities, make him an invaluable asset to any person looking to obtain their training goals.",
    specialty: "Nutrition & Lifestyle Coaching",
  },
  {
    name: "Nicholas Shelton",
    role: "Trainer",
    image: "/images/trainers/Iron Works-nicholas.jpg",
    phone: "512-529-7234",
    bio: "I specialize in body composition, strength, and long-term health for adults with demanding schedules. My work centers on efficient training, sustainable nutrition, and clear accountability&mdash;delivering measurable results without burnout. I focus on simple, repeatable systems that help clients build muscle, lose fat, and maintain progress over time.",
    specialty: "Body Composition & Strength",
  },
];

export default function Trainers() {
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({});
  const [expandedBios, setExpandedBios] = useState<Record<string, boolean>>({});

  const handleImageLoad = (trainerName: string) => {
    setLoadingImages((prev) => ({ ...prev, [trainerName]: false }));
  };

  const toggleBio = (trainerName: string) => {
    setExpandedBios((prev) => ({ ...prev, [trainerName]: !prev[trainerName] }));
  };

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white px-4 leading-tight">
              Our <span className="text-yellow-500">Trainers</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed px-4">
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
            <div className="max-w-3xl mx-auto">
              <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center text-center">
                <Quote className="h-8 w-8 text-yellow-500 mb-4 mx-auto" />
                <blockquote className="text-lg sm:text-xl md:text-2xl text-zinc-200 leading-relaxed mb-6">
                  &quot;The staff and trainers are genuinely professional, incredibly friendly, and highly knowledgeable. They create an environment that is welcoming and motivating, not intimidating.&quot;
                </blockquote>
                <p className="text-yellow-400 font-semibold">- Gowri</p>
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
                {loadingImages['rohit'] !== false && (
                  <Skeleton className="absolute inset-0" />
                )}
                <Image
                  src={rohit.image}
                  alt={rohit.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                  onLoad={() => handleImageLoad('rohit')}
                />
              </div>
              <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                  {rohit.name}
                </h2>
                <p className="text-yellow-500 font-semibold text-base sm:text-lg mb-6">
                  {rohit.role}
                </p>
                {rohit.bio && (
                  <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6">
                    {rohit.bio}
                  </p>
                )}
                {rohit.email && (
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Mail className="h-5 w-5 text-yellow-500" />
                    <a
                      href={`mailto:${rohit.email}`}
                      className="hover:text-yellow-400 transition-colors text-lg break-all"
                    >
                      {rohit.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tim Ennis Hero Card */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/40">
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
                {loadingImages['timEnnis'] !== false && (
                  <Skeleton className="absolute inset-0" />
                )}
                <Image
                  src={timEnnis.image}
                  alt={timEnnis.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  onLoad={() => handleImageLoad('timEnnis')}
                />
              </div>
              <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                  {timEnnis.name}
                </h2>
                <p className="text-yellow-500 font-semibold text-base sm:text-lg mb-6">
                  {timEnnis.role}
                </p>
                {timEnnis.specialty && (
                  <div className="mb-6">
                    <Badge
                      variant="outline"
                      className="bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                    >
                      {timEnnis.specialty}
                    </Badge>
                  </div>
                )}
                {timEnnis.phone && (
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Phone className="h-5 w-5 text-yellow-500" />
                    <a
                      href={`tel:${timEnnis.phone.replace(/-/g, "")}`}
                      className="hover:text-yellow-400 transition-colors text-lg"
                    >
                      {timEnnis.phone}
                    </a>
                  </div>
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
                className="group bg-zinc-900 border border-yellow-500/20 rounded-2xl overflow-hidden hover:border-yellow-500/60 transition-all hover:shadow-lg hover:shadow-yellow-500/10 flex flex-col md:min-h-[600px]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  {loadingImages[trainer.name] !== false && (
                    <Skeleton className="absolute inset-0" />
                  )}
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    onLoad={() => handleImageLoad(trainer.name)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
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
                    <div className="mb-4">
                      <p className={`text-zinc-300 leading-relaxed text-sm ${expandedBios[trainer.name] ? '' : 'line-clamp-3'}`}>
                        {trainer.bio}
                      </p>
                      {trainer.bio.length > 150 && (
                        <button
                          onClick={() => toggleBio(trainer.name)}
                          className="text-yellow-500 hover:text-yellow-400 text-sm font-semibold mt-2 transition-colors"
                        >
                          {expandedBios[trainer.name] ? 'Show less' : 'Read more'}
                        </button>
                      )}
                    </div>
                  )}
                  <div className="flex flex-col gap-2 mt-auto">
                    {trainer.phone && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={`tel:${trainer.phone.replace(/-/g, "")}`}
                            className="flex items-center gap-2 text-zinc-400 hover:text-yellow-400 transition-colors text-sm min-h-[44px] px-2 -mx-2 rounded"
                          >
                            <Phone className="h-4 w-4 flex-shrink-0" />
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
                            className="flex items-center gap-2 text-zinc-400 hover:text-yellow-400 transition-colors text-sm min-h-[44px] px-2 -mx-2 rounded"
                          >
                            <Mail className="h-4 w-4 flex-shrink-0" />
                            <span className="break-all">{trainer.email}</span>
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Click to email</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                    {trainer.instagram && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={trainer.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-zinc-400 hover:text-yellow-400 transition-colors text-sm min-h-[44px] px-2 -mx-2 rounded"
                          >
                            <Instagram className="h-4 w-4 flex-shrink-0" />
                            <span>Instagram</span>
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Visit Instagram</p>
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
      <CtaSection />
    </div>
  );
}
