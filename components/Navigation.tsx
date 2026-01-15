"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Clock, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/trainers", label: "Trainers" },
    { href: "/membership", label: "Membership" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-sm border-b border-yellow-500/20">
      {/* Contact Info Bar */}
      <div className="hidden md:block bg-zinc-900 border-b border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-center gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-yellow-500" />
              <span>Mon-Fri: 5AM-9PM · Sat: 7AM-6PM · Sun: 10AM-4PM</span>
            </div>
            <a
              href="tel:+14258836006"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <Phone className="h-4 w-4 text-yellow-500" />
              <span>(425) 883-6006</span>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=12708+Northup+Way+Bellevue+WA+98005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <MapPin className="h-4 w-4 text-yellow-500" />
              <span>12708 Northup Way, Bellevue</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group min-h-[44px] min-w-[44px]"
            aria-label="Iron Works Gym home"
          >
            <Image
              src="/images/ironworksLogo.png"
              alt="Iron Works Gym logo"
              width={170}
              height={48}
              priority
              className="w-auto h-8 sm:h-10 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] group-hover:scale-[1.02] transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-yellow-500"
                      : "text-zinc-300 hover:text-yellow-400"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/membership"
              className="px-6 py-2.5 bg-yellow-500 text-zinc-950 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 min-h-[44px] flex items-center"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-zinc-300 hover:text-yellow-500 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-yellow-500/20 bg-zinc-950"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors min-h-[44px] flex items-center ${
                      isActive
                        ? "text-yellow-500 bg-yellow-500/10"
                        : "text-zinc-300 hover:text-yellow-400 hover:bg-zinc-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/membership"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 bg-yellow-500 text-zinc-950 font-semibold rounded-lg text-center hover:bg-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 min-h-[44px] flex items-center justify-center"
              >
                Join Now
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 mt-2 border-t border-yellow-500/20 space-y-2">
                <a
                  href="tel:+14258836006"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 text-zinc-400 text-sm hover:text-yellow-400 transition-colors"
                >
                  <Phone className="h-4 w-4 text-yellow-500" />
                  <span>(425) 883-6006</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=12708+Northup+Way+Bellevue+WA+98005"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 text-zinc-400 text-sm hover:text-yellow-400 transition-colors"
                >
                  <MapPin className="h-4 w-4 text-yellow-500" />
                  <span>12708 Northup Way, Bellevue</span>
                </a>
                <div className="flex items-center gap-3 px-4 py-2 text-zinc-400 text-sm">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <span>Mon-Fri: 5AM-9PM · Sat: 7AM-6PM · Sun: 10AM-4PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

