import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 bg-card/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to build something{" "}
            <span className="text-gradient-gold">extraordinary</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Whether you need a complex system, a modern web application, or specialized tooling, 
            I'm here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="group flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-medium hover:bg-accent/90 transition-all hover:gap-3 glow-gold"
            >
              View Pricing Plans
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 text-foreground hover:text-accent font-medium transition-colors"
            >
              Learn more about me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}