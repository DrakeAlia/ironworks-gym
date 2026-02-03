"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { X, CheckCircle2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import CtaSection from "@/components/CtaSection";

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
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (imageSrc: string) => {
    setLoadingImages((prev) => ({ ...prev, [imageSrc]: false }));
  };

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
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-zinc-950" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-yellow-500 font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 text-sm">
              Since 1974
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 px-2 sm:px-4 leading-tight">
              About <span className="text-yellow-500">Us</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
              Iron Works Gym is the Eastside&apos;s original hardcore training
              ground&mdash;rooted in community, forged in grit, and focused on real
              results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Row */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(image)}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-yellow-500/20 cursor-pointer transition-all duration-300"
              >
                {loadingImages[image.src] !== false && (
                  <Skeleton className="absolute inset-0" />
                )}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-300 hover:brightness-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw"
                  onLoad={() => handleImageLoad(image.src)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent
          className="max-w-7xl w-full p-0 bg-zinc-950/95 border-yellow-500/20"
          showCloseButton={false}
        >
          <DialogClose className="absolute top-4 right-4 z-50 p-2 rounded-full bg-zinc-900/80 text-zinc-400 hover:text-yellow-500 hover:bg-zinc-900 transition-colors">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {selectedImage && (
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* About Content Sections */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/40">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          {/* About Ironworks Gym */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              About <span className="text-yellow-500">Ironworks Gym</span>
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              For over 50 years, Ironworks Gym has been supporting the Bellevue community to achieve their fitness goals. Ironworks has always been about helping people feel stronger, healthier, and more confident in their bodies, no matter where they&apos;re starting from.
            </p>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              From one generation to the next, Ironworks has remained a consistent space for real training and real connection. Our longevity comes from people&mdash;the members, coaches, and relationships that have made this gym a trusted place for decades.
            </p>
          </motion.div>

          {/* Supporting Real Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Supporting <span className="text-yellow-500">Real Goals</span>
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Everyone who walks through our doors has a different goal. Some want to get stronger. Some want to move better, feel healthier, or rebuild consistency. Others simply want a place that helps them take care of themselves.
            </p>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Ironworks is designed to support you through every stage of your fitness journey. Whether you&apos;re brand new to training, returning after time away, or continuing a long-term practice, you&apos;ll find a welcoming environment where effort is respected and growth is encouraged.
            </p>
          </motion.div>

          {/* More Than Workouts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              More Than <span className="text-yellow-500">Workouts</span>
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Ironworks is more than a place to exercise. It&apos;s a space where people build self-trust, resilience, and confidence through movement.
            </p>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Progress here isn&apos;t just measured in numbers, but in how you feel&mdash;stronger, more capable, and more connected to yourself.
            </p>
          </motion.div>

          {/* Who We're For */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight px-2">
                Who <span className="text-yellow-500">We&apos;re For</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base md:text-lg px-2">
                Ironworks is for:
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group flex items-start gap-3 sm:gap-4 bg-zinc-900/50 border border-yellow-500/20 rounded-xl p-5 sm:p-6 hover:border-yellow-500/40 hover:bg-zinc-900/70 transition-all duration-300 min-h-[60px]"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 transition-transform group-hover:scale-110 duration-300" />
                </div>
                <p className="text-zinc-200 text-sm sm:text-base md:text-lg leading-relaxed">
                  People who want sustainable and long-term results
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group flex items-start gap-3 sm:gap-4 bg-zinc-900/50 border border-yellow-500/20 rounded-xl p-5 sm:p-6 hover:border-yellow-500/40 hover:bg-zinc-900/70 transition-all duration-300 min-h-[60px]"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 transition-transform group-hover:scale-110 duration-300" />
                </div>
                <p className="text-zinc-200 text-sm sm:text-base md:text-lg leading-relaxed">
                  Those tired of crowded commercial gyms with no soul
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group flex items-start gap-3 sm:gap-4 bg-zinc-900/50 border border-yellow-500/20 rounded-xl p-5 sm:p-6 hover:border-yellow-500/40 hover:bg-zinc-900/70 transition-all duration-300 min-h-[60px]"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 transition-transform group-hover:scale-110 duration-300" />
                </div>
                <p className="text-zinc-200 text-sm sm:text-base md:text-lg leading-relaxed">
                  Anyone ready to commit to their health and strength
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group flex items-start gap-3 sm:gap-4 bg-zinc-900/50 border border-yellow-500/20 rounded-xl p-5 sm:p-6 hover:border-yellow-500/40 hover:bg-zinc-900/70 transition-all duration-300 min-h-[60px]"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 transition-transform group-hover:scale-110 duration-300" />
                </div>
                <p className="text-zinc-200 text-sm sm:text-base md:text-lg leading-relaxed">
                  Beginners, experienced lifters, and everyone in between
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="group flex items-start gap-3 sm:gap-4 bg-zinc-900/50 border border-yellow-500/20 rounded-xl p-5 sm:p-6 hover:border-yellow-500/40 hover:bg-zinc-900/70 transition-all duration-300 min-h-[60px]"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 transition-transform group-hover:scale-110 duration-300" />
                </div>
                <p className="text-zinc-200 text-sm sm:text-base md:text-lg leading-relaxed">
                  Those who want to feel part of a community that rises together
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Our Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Our <span className="text-yellow-500">Commitment</span>
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Our commitment is to continue offering what Ironworks has always stood for: a gym where fitness feels approachable, progress is sustainable, and people are supported for the long run. Ironworks Gym has been helping people on their fitness journeys for over 50 years&mdash;and we&apos;d love to support you on yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
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
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-yellow-500/20 bg-zinc-900">
                    {loadingImages[image.src] !== false && (
                      <Skeleton className="absolute inset-0" />
                    )}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority={index === 0}
                      onLoad={() => handleImageLoad(image.src)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="!left-2 sm:!left-4 bg-zinc-950/80 text-white hover:text-yellow-400 border-yellow-500/30 hover:border-yellow-500/60 z-10 transition-all duration-300 h-12 w-12 sm:h-14 sm:w-14" />
            <CarouselNext className="!right-2 sm:!right-4 bg-zinc-950/80 text-white hover:text-yellow-400 border-yellow-500/30 hover:border-yellow-500/60 z-10 transition-all duration-300 h-12 w-12 sm:h-14 sm:w-14" />
          </Carousel>
          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={`Go to slide ${index + 1}`}
              >
                <span
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-yellow-500 w-6"
                      : "bg-zinc-600 hover:bg-zinc-500"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
