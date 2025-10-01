import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-glow)" }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg">Hello, I'm</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Sai Aditya Gontu
            </h1>
          </div>
          
          <div className="space-y-4">
            <div className="inline-block">
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xl md:text-2xl font-medium">
                Software Developer
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building scalable web applications and enterprise systems with 3+ years of expertise
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full"
              onClick={() => scrollToSection("experience")}
            >
              View Work
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <a
              href="mailto:Sai.aditya.gontu@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-aditya-gontu-83082b216/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full animate-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
