"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent dark:from-primary/5" />

      <div className="container relative grid items-center gap-6 pt-16 pb-8 md:grid-cols-2 md:gap-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start space-y-4"
        >
          <div className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Software License Marketplace
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Turn Unused Software <span className="text-primary">Into Cash</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl max-w-md">
            SoftSell helps businesses recover value from unused software
            licenses with our fast, secure marketplace.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="#contact">
              <Button size="lg" className="px-8">
                Get a Quote
              </Button>
            </Link>

            <Link href="#how-it-works">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>

          <div className="mt-6 flex items-center">
            <div className="p-2 rounded-full bg-primary/10 mr-3">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">
              Have questions? Try our new{" "}
              <span className="font-medium text-primary">AI Assistant</span> in
              the bottom right corner!
            </p>
          </div>

          <div className="flex items-center pt-4 space-x-4 text-sm">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Trusted by 500+ companies</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Secure transactions</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

            <div className="relative">
              <Image
                src="/hero.png"
                width={500}
                height={500}
                alt="hero illustraction"
                className="relative rounded-lg shadow-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {["Adobe", "Microsoft", "Oracle", "Salesforce", "Autodesk"].map(
            (brand) => (
              <div
                key={brand}
                className="text-lg font-semibold text-muted-foreground"
              >
                {brand}
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
