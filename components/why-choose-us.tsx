"use client";

import { motion } from "motion/react";
import { Shield, Clock, DollarSign, Award } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Secure Transactions",
      description:
        "Bank-level encryption and secure payment processing for every transaction.",
      icon: Shield,
    },
    {
      title: "Fast Turnaround",
      description:
        "Get valuations within hours and payment within 48 hours of acceptance.",
      icon: Clock,
    },
    {
      title: "Best Market Rates",
      description:
        "Our extensive network ensures you get the highest possible value for your licenses.",
      icon: DollarSign,
    },
    {
      title: "Compliance Guaranteed",
      description:
        "All transactions follow software licensing regulations and transfer policies.",
      icon: Award,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="why-choose-us" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Why Choose <span className="text-primary">SoftSell</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            We&apos;ve helped thousands of businesses recover value from their
            unused software licenses.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col p-6 rounded-lg bg-muted/50 border hover:shadow-md transition-shadow"
            >
              <div className="p-2 w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 flex items-center justify-center">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
