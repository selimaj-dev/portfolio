"use client";

import { Check, ArrowRight, Zap, Crown, Rocket } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import {
  staggerContainer,
  fadeInUp,
  cardReveal,
  slowFloat,
} from "@/lib/animations";

const plans = [
  {
    name: "Starter",
    description: "Small, clearly defined tasks and improvements",
    price: "$500",
    period: "project",
    icon: Zap,
    features: [
      "Single feature or small tool",
      "Bug fixes or minor enhancements",
      "Basic frontend or backend work",
      "Limited scope (no architecture changes)",
      "1 revision round",
      "Async communication",
      "Source code included",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "Product features, MVPs, and system components",
    price: "$2,000+",
    period: "project",
    icon: Crown,
    features: [
      "Multi-feature application or system module",
      "Backend services or APIs (Rust, Node, etc.)",
      "CLI or TUI applications",
      "Frontend integration where needed",
      "Architecture and technical decisions",
      "2–3 revision rounds",
      "Documentation for delivered components",
      "Performance and reliability considerations",
    ],
    cta: "Start Project",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Long-term systems work and technical ownership",
    price: "Custom",
    period: "quote",
    icon: Rocket,
    features: [
      "Large or distributed system design",
      "Cross-team or multi-stakeholder coordination",
      "Ongoing development and refactoring",
      "System audits and performance reviews",
      "Internal tooling and automation",
      "Priority access and scheduling",
      "Extended documentation and knowledge transfer",
      "Training, onboarding, and long-term support",
    ],
    cta: "Contact Me",
    popular: false,
  },
];

const services = [
  {
    title: "Web Development",
    description:
      "Modern, performant web applications built with React, TypeScript, and cutting-edge technologies.",
  },
  {
    title: "Systems Programming",
    description:
      "Low-level development in Rust and Go for performance-critical applications.",
  },
  {
    title: "TUI/CLI Tools",
    description:
      "Beautiful terminal user interfaces and command-line tools with my own TUI framework that developers love.",
  },
  {
    title: "API Development",
    description: "Robust, scalable backend systems and API architectures.",
  },
  {
    title: "DevOps & Deployment",
    description:
      "Docker, CI/CD pipelines, and self-hosted deployment solutions with my own infrastructure.",
  },
  {
    title: "Consulting",
    description:
      "Technical guidance and architecture planning for your projects.",
  },
];

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <motion.section
        className="pt-24 pb-16 bg-background relative overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          variants={slowFloat}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Fair Pricing for{" "}
              <span className="text-gradient-gold">Premium Quality</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose a plan that fits your needs.
            </p>

            <p className="mt-3 text-sm text-muted-foreground/80">
              Payments are accepted in crypto.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Cards */}
      <motion.section
        className="py-16 bg-card/50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:px-32 lg:px-0 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={cardReveal}
                className={`relative glass-card rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  plan.popular
                    ? "ring-2 ring-accent lg:scale-110"
                    : "hover:ring-1 hover:ring-accent/30"
                } ${hoveredPlan === plan.name ? "glow-gold" : ""}`}
                onMouseEnter={() => setHoveredPlan(plan.name)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      plan.popular ? "bg-accent" : "bg-secondary"
                    }`}
                  >
                    <plan.icon
                      className={`w-5 h-5 ${
                        plan.popular
                          ? "text-accent-foreground"
                          : "text-foreground"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {plan.name}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period !== "quote" && (
                    <span className="text-muted-foreground">
                      /{plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="mailto:selimaj.dev@proton.me"
                  initial="initial"
                  whileHover="hover"
                  className={`group mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all ${
                    plan.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.cta}

                  <motion.span
                    variants={{
                      initial: { x: 0 },
                      hover: {
                        x: 6,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        },
                      },
                    }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        className="py-24 bg-background"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} className="max-w-2xl mb-16">
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What I Offer
            </h2>
            <p className="text-muted-foreground">
              From concept to deployment, I provide end-to-end development
              services tailored to your needs.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="glass-card rounded-2xl p-6 hover-lift group"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        className="py-24 bg-card/50 relative overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl"
          variants={slowFloat}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Have a Custom Project in Mind?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Let's discuss your requirements and create a tailored solution
              that exceeds expectations.
            </p>
            <motion.a
              href="mailto:selimaj.dev@proton.me"
              whileHover={{ y: -4, scale: 1.03 }}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-medium hover:bg-accent/90 transition-all glow-gold"
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
