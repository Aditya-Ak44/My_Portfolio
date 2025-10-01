import { useEffect, useRef, useState } from "react";
import { Code2, Database, Cloud, GitBranch } from "lucide-react";

const Skills = () => {
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

  const skillCategories = [
    {
      icon: Code2,
      title: "Programming & Frameworks",
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Redux", "Chart.js", "Node.js"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cloud,
      title: "Enterprise Systems",
      skills: ["Oracle HCM", "Oracle Fusion", "RESTful APIs", "Oracle Ecosystem"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Database & Integration",
      skills: ["SQL", "SSIS packages", "Stored Procedures", "REST APIs"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: GitBranch,
      title: "Development Tools",
      skills: ["Git", "ServiceNow", "Google Maps APIs", "3-tier Architecture", "Responsive Design"],
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`backdrop-blur-xl bg-card/50 border border-border rounded-3xl p-8 transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${category.color}`}
                >
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
