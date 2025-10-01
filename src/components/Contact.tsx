import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Sai.aditya.gontu@gmail.com",
      href: "mailto:Sai.aditya.gontu@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/sai-aditya-gontu-83082b216/",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "07767962179",
      href: "tel:07767962179",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Leicester, UK",
      href: null,
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-6">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl text-muted-foreground mb-16">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <div
                key={item.label}
                className={`backdrop-blur-xl bg-card/50 border border-border rounded-3xl p-8 transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} inline-block mb-4`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="text-lg px-12 py-6 rounded-full"
            asChild
          >
            <a href="mailto:Sai.aditya.gontu@gmail.com">
              Send a Message
              <Mail className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
