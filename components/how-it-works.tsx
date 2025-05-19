"use client";

import { motion } from "motion/react";
import { Upload, DollarSign, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload License",
      description:
        "Securely upload your software license details through our encrypted portal.",
      icon: Upload,
      color: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Get Valuation",
      description:
        "Our AI-powered system analyzes the market to determine the best possible price.",
      icon: DollarSign,
      color: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-600 dark:text-green-400",
    },
    {
      title: "Get Paid",
      description:
        "Accept the offer and receive payment within 48 hours via your preferred method.",
      icon: CheckCircle,
      color: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-600 dark:text-purple-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="how-it-works" className="section-padding bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            How It <span className="text-primary">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            Our streamlined process makes selling software licenses quick and
            hassle-free.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm border"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full ${step.color} mb-4`}
              >
                <step.icon className={`w-8 h-8 ${step.textColor}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 w-8 h-8">
                  <svg
                    className="w-full h-full text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
