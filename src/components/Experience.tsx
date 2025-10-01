import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Software Developer - HR Tech",
      company: "Next PLC",
      location: "Leicester, UK",
      period: "Oct 2024 – Present",
      achievements: [
        "Designed and developed enhanced job details page for Next Careers site, transforming text-heavy interface into dynamic, image-rich user experience, improving user engagement by 50%",
        "Integrated AI Chatbot solution into NEP (Oracle Fusion HCM Application for NEXT), serving 30,000+ employees",
        "Research and evaluate latest Oracle advancements including AI Agents and Gen AI Prompts, identifying use cases and presenting stakeholders with innovative solutions",
      ],
    },
    {
      title: "Trainee Ambassador",
      company: "Next PLC",
      location: "Leicester, UK",
      period: "Jan 2025 – Present",
      achievements: [
        "Host and organize collaborative events for trainee cohorts, building a trainee community",
        "Create and produce video content for social media platforms, enhancing employer branding and recruitment outreach to developer and Early Career communities",
        "Mentor and support placement students through structured onboarding processes and regular check-in sessions, improving retention rates",
      ],
    },
    {
      title: "Placement Developer - HR Tech",
      company: "Next PLC",
      location: "Leicester, UK",
      period: "Jul 2023 – Jun 2024",
      achievements: [
        "Developed responsive web applications using 3-tier architecture for 1st line Support Team",
        "Collaborated with DevOps team to resolve build and release pipeline issues, ensuring smooth deployment processes and documenting solutions",
        "Optimized SSIS packages and implemented stored procedures, reducing system failure rates by 15% through performance improvements",
        "Led Agile ceremonies including sprint reviews and demo sessions, enhancing team knowledge transfer and cross-functional collaboration",
      ],
    },
    {
      title: "Software Engineer - Full Stack Developer",
      company: "Infosys Ltd",
      location: "Hyderabad, India",
      period: "Nov 2020 – Apr 2022",
      achievements: [
        "Developed a modern, responsive landing page to display interactive data visualizations for 10,000+ Verizon employees to visualize data and statistics with intuitive design",
        "Utilized Redux for efficient state management and integrated Google Maps APIs for address geocoding functionality",
        "Created comprehensive technical documentation and conducted code reviews, establishing development standards across teams",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 md:py-32 bg-gradient-to-b from-secondary/20 to-background"
    >
      <div className="container mx-auto px-6">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Experience
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`backdrop-blur-xl bg-card/50 border border-border rounded-3xl p-8 md:p-10 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  </div>
                  <p className="text-xl text-muted-foreground">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-foreground/80 leading-relaxed"
                  >
                    <span className="text-primary mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
