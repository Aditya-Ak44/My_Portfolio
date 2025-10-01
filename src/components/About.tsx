import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            About Me
          </h2>
          
          <div className="backdrop-blur-xl bg-card/50 border border-border rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
              Software Developer with 3+ years of experience building scalable web applications 
              and enterprise systems. Proven expertise in Oracle Fusion Applications, cloud technologies, 
              and modern engineering practices. Strong background in API integrations, CI/CD pipelines, 
              and collaborative Agile methodologies.
            </p>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-lg text-muted-foreground">
                Currently seeking to leverage enterprise application expertise and technical skills 
                in challenging engineering roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
