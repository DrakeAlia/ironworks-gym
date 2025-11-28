"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "/images/about-gym-floor.jpg",
    alt: "Gym floor at Iron Works Gym",
  },
  {
    src: "/images/about-pullups.jpg",
    alt: "Member performing pull-ups",
  },
  {
    src: "/images/about-machines.jpg",
    alt: "Training machines at Iron Works Gym",
  },
];

const carouselImages = [
  {
    src: "/images/carousel-squat.jpg",
    alt: "Member performing squats",
  },
  {
    src: "/images/carousel-shoulder-press.jpg",
    alt: "Member performing shoulder press",
  },
  {
    src: "/images/carousel-pullups.jpg",
    alt: "Member performing pull-ups",
  },
  {
    src: "/images/carousel-kettlebell-rows.jpg",
    alt: "Member performing kettlebell rows",
  },
  {
    src: "/images/about-dumbbell-curl.jpg",
    alt: "Member performing dumbbell curls",
  },
];

export default function About() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    // Set initial state
    updateCurrent();

    // Listen for slide changes
    api.on("select", updateCurrent);

    // Auto-play
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      api.off("select", updateCurrent);
    };
  }, [api]);

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
            <p className="text-yellow-500 font-semibold uppercase tracking-[0.3em] mb-4">
              Since 1974
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              About <span className="text-yellow-500">Us</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Iron Works Gym is the Eastside&apos;s original hardcore training
              ground—rooted in community, forged in grit, and focused on real
              results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Row */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-yellow-500/20 cursor-pointer transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-300 hover:brightness-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">
              Built for Every Athlete
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              IRONWORKS Gym is an established institution among the
              Eastside&apos;s gyms and fitness centers. Many gyms have come and
              gone, but IronWorks is here to stay, remaining an integral part of
              the fitness community.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed">
              We believe our gym is unique because it caters to a diverse group
              of individuals with varying fitness goals. Whether you need to
              tone up, slim down, or prepare for the next big race or show,
              IronWorks has both the equipment, environment and trainers you
              need to get the job done.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">
              Spaces That Elevate Training
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Our spacious facility incorporates separate rooms for cardio
              training, circuit training, stretching, and free weights.
              We&apos;re confident you&apos;ll always find the right equipment
              for your workout.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed">
              IRONWORKS provides our members with resources to achieve their
              personal health goals, which include strengthening the foundation
              of mind, body, and spirit. We provide a learning environment,
              setting standards of excellence in our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full relative">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-0">
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="pl-0 basis-full">
                  <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-yellow-500/20 bg-zinc-900">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="!left-4 bg-zinc-950/70 text-white hover:text-yellow-400 border-yellow-500/20 hover:border-yellow-500/60 z-10 transition-all duration-300" />
            <CarouselNext className="!right-4 bg-zinc-950/70 text-white hover:text-yellow-400 border-yellow-500/20 hover:border-yellow-500/60 z-10 transition-all duration-300" />
          </Carousel>
          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-yellow-500 w-8"
                    : "bg-zinc-600 hover:bg-zinc-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tim Ennis Legacy Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/60">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tim Ennis Legacy
            </h2>
            <p className="text-zinc-400 max-w-3xl mx-auto">
              Honoring the former owner who shaped generations of athletes and
              set the tone for Iron Works Gym&apos;s future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-3xl p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Photo Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center bg-yellow-500/20 rounded-2xl border border-yellow-500/30 p-12"
              >
                <User className="h-24 w-24 text-yellow-500/60" />
              </motion.div>
              {/* Text Content */}
              <div className="flex-1 space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                  Former Gym Owner
                </p>
                <h3 className="text-3xl font-bold text-white">Tim Ennis</h3>
                <p className="text-zinc-200 leading-relaxed">
                  Tim&apos;s journey in the fitness industry began in 1984, and
                  in 1994, he became the Owner &amp; President of Iron Works
                  Gym. A Bellevue native and Sammamish High School alum, Tim was
                  a varsity gymnast who transitioned into competitive
                  bodybuilding after high school, ultimately becoming a national
                  bodybuilding judge.
                </p>
                <p className="text-zinc-200 leading-relaxed">
                  For over three decades, he developed and shared his personal
                  training and nutrition systems, fostering a supportive and
                  results-driven community at Iron Works Gym. In 2024, after 30
                  years of dedication, Tim entrusted the legacy of Iron Works
                  Gym to its new owner, Rohit, who is committed to building on
                  the strong foundation Tim created.
                </p>
              </div>
            </div>
          </motion.div>
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
                className="bg-yellow-500 text-zinc-950 hover:bg-yellow-400 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
              >
                <Link href="/membership">View Membership</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 hover:border-yellow-500 font-semibold px-8 py-6 text-lg"
              >
                <Link href="/trainers">Meet Our Trainers</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
