import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" aria-label="Iron Works Gym home">
              <Image
                src="/images/ironworksLogo.png"
                alt="Iron Works Gym logo"
                width={180}
                height={60}
                className="w-auto h-12 object-contain drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)]"
              />
            </Link>
            <p className="text-zinc-400 text-sm">
              The Gym That's Not A Health Club.<br />
              Serving Bellevue since 1974.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-zinc-400 hover:text-yellow-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-yellow-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-yellow-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-yellow-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-yellow-500 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="text-zinc-400 hover:text-yellow-500 transition-colors text-sm">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-zinc-400 hover:text-yellow-500 transition-colors text-sm">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=12708+Northup+Way+Bellevue+WA+98005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-yellow-500 transition-colors text-sm"
                >
                  12708 Northup Way<br />
                  Bellevue, WA 98005
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <a href="tel:+14258836006" className="text-zinc-400 hover:text-yellow-500 transition-colors text-sm">
                  (425) 883-6006
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <a href="mailto:info@ironworksgym.com" className="text-zinc-400 hover:text-yellow-500 transition-colors text-sm">
                  info@ironworksgym.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li>Mon - Fri: 5:00 AM - 9:00 PM</li>
              <li>Sat: 7:00 AM - 6:00 PM</li>
              <li>Sun: 10:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-yellow-500/20">
          <p className="text-center text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Iron Works Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

