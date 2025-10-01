import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building, Users, Award } from "lucide-react";
import logo from "@/assets/logo.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
      ></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Company Logo */}
          <div className="mb-8 animate-fade-up">
            <img
              src={logo}
              alt="Optimistic Innovators Logo"
              className="mx-auto h-32 w-auto object-contain filter drop-shadow-glow"
            />
          </div>

          <Badge
            variant="secondary"
            className="mb-6 bg-primary/20 text-primary border-primary/30"
          >
            🏗️ Building Excellence Since Years
          </Badge>

          <h1 className="display-xl text-white mb-6 animate-fade-up">
            Building Dreams into
            <span className="block bg-gradient-to-r from-yellow-600 to-white bg-clip-text text-transparent">
              Architectural Reality
            </span>
          </h1>

          <p className="body-lg text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up">
            From residential homes to commercial complexes and industrial
            projects, Optimistic Innovators delivers innovative construction
            solutions with unmatched quality and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up">
            {/* CTA to Projects Section */}
            <a href="#projects">
              <Button
                size="lg"
                variant="hero"
                className="transition-transform transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,223,128,0.4)] focus:outline-none drop-shadow-xl shadow-lg"
              >
                View Our Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>

            {/* CTA to Contact Section */}
            <a href="#contact">
              <Button
                size="lg"
                variant="hero"
                className="transition-transform transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,223,128,0.4)] focus:outline-none drop-shadow-xl shadow-lg"
              >
                Contact Er. Arman Chalana
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16 animate-fade-up">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="heading-lg text-primary mb-2">200+</h3>
              <p className="text-primary/80">Handovers</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="heading-lg text-primary mb-2">175+</h3>
              <p className="text-primary/80">Happy Clients</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="heading-lg text-primary mb-2">12+</h3>
              <p className="text-primary/80">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
