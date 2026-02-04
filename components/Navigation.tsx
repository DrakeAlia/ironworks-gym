"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Clock, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export default function Navigation() {
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
              <span>Mon-Fri: 5AM-9PM &middot; Sat: 7AM-6PM &middot; Sun: 10AM-4PM</span>
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
            <a
              href="https://guru.gyminsight.com/join/sxmkOyeKqKn9xy8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-yellow-500 text-zinc-950 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 min-h-[44px] flex items-center"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-3 text-zinc-300 hover:text-yellow-500 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-950 border-l border-yellow-500/20 p-6">
              <VisuallyHidden.Root>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>Main navigation links and contact information</SheetDescription>
              </VisuallyHidden.Root>
              <div className="space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-lg font-medium transition-colors min-h-[44px] flex items-center ${
                          isActive
                            ? "text-yellow-500 bg-yellow-500/10"
                            : "text-zinc-300 hover:text-yellow-400 hover:bg-zinc-900"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                })}
                <SheetClose asChild>
                  <a
                    href="https://guru.gyminsight.com/join/sxmkOyeKqKn9xy8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 bg-yellow-500 text-zinc-950 font-semibold rounded-lg text-center hover:bg-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 min-h-[44px] flex items-center justify-center"
                  >
                    Join Now
                  </a>
                </SheetClose>

                {/* Mobile Contact Info */}
                <div className="pt-4 mt-2 border-t border-yellow-500/20 space-y-2">
                  <SheetClose asChild>
                    <a
                      href="tel:+14258836006"
                      className="flex items-center gap-3 px-4 py-2 text-zinc-400 text-sm hover:text-yellow-400 transition-colors"
                    >
                      <Phone className="h-4 w-4 text-yellow-500" />
                      <span>(425) 883-6006</span>
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=12708+Northup+Way+Bellevue+WA+98005"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2 text-zinc-400 text-sm hover:text-yellow-400 transition-colors"
                    >
                      <MapPin className="h-4 w-4 text-yellow-500" />
                      <span>12708 Northup Way, Bellevue</span>
                    </a>
                  </SheetClose>
                  <div className="flex items-center gap-3 px-4 py-2 text-zinc-400 text-sm">
                    <Clock className="h-4 w-4 text-yellow-500" />
                    <span>Mon-Fri: 5AM-9PM &middot; Sat: 7AM-6PM &middot; Sun: 10AM-4PM</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

