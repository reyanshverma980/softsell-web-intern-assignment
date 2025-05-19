"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "SoftSell exceeded our expectations by quickly turning our unused licenses into extra revenue. Their team was professional and transparent throughout the entire process.",
      author: "Emily Davis",
      role: "Finance Manager",
      company: "BrightWave Solutions",
      avatar: "/avatar-emily.svg?height=40&width=40",
      initials: "ED",
    },
    {
      quote:
        "We were struggling to manage our software assets efficiently. SoftSell simplified the whole process and delivered excellent value, helping us optimize costs.",
      author: "Raj Patel",
      role: "IT Director",
      company: "Innovatech Labs",
      avatar: "/avatar-raj.svg?height=40&width=40",
      initials: "RP",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            What Our <span className="text-primary">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            Don&apos;t just take our word for it. Here&apos;s what businesses
            like yours have to say.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                      />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
