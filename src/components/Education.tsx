import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
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

  const education = [
    {
      degree: "MSc Advanced Computer Science",
      institution: "University of Leicester, UK",
      achievement: "First Class with Distinction",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      degree: "Bachelor of Technology Information Technology",
      institution: "India",
      achievement: "First Class with Distinction",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section ref={sectionRef} id="education" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Education
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`backdrop-blur-xl bg-card/50 border border-border rounded-3xl p-8 transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${edu.gradient} inline-block mb-6`}>
                <GraduationCap className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-semibold mb-3">{edu.degree}</h3>
              <p className="text-muted-foreground mb-4 text-lg">{edu.institution}</p>

              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full inline-flex">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{edu.achievement}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
