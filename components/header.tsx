"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="#hero" className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold text-primary">
              Soft<span className="text-foreground">Sell</span>
            </span>
          </motion.div>
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-6">
          <nav className="flex items-center space-x-6">
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#why-choose-us"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Why Choose Us
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <ModeToggle />
          <Link href="#contact">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <ModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background border-b"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#why-choose-us"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Link href="#contact">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
