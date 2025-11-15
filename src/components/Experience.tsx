import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "PayPal",
      companyUrl: "https://www.paypal.com/",
      position: "Senior Software Engineer – Android Developer",
      period: "Present",
      location: "Bangalore",
      description: [
        "Building innovative payment solutions and features for PayPal's Android application",
        "Working with cutting-edge Android technologies to deliver seamless user experiences",
        "Collaborating with cross-functional teams to drive technical excellence"
      ]
    },
    {
      company: "Walmart Global Tech",
      companyUrl: "https://tech.walmart.com/",
      position: "Software Engineer III – Android Developer",
      period: "Jan 2025 – Recent",
      location: "Bangalore",
      description: [
        "Migration of legacy code from MVP to MVVM with Clean Architecture",
        "Designed the base layer using Coroutines",
        "Replaced RxJava with Kotlin Coroutines for improved performance"
      ]
    },
    {
      company: "Zoho Corporation",
      companyUrl: "https://www.zoho.com/",
      position: "Member Technical Staff, Android Developer",
      period: "May 2022 – Jan 2025",
      location: "Chennai",
      description: [
        "Optimized CRM Android app (10M+ downloads) startup performance by 25% via cold start optimization",
        "Migrated Initial Download Flow to Kotlin, reducing app start time by 60%",
        "Transitioned Canvas business logic to Kotlin Multiplatform (KMP) for cross-platform compatibility",
        "Developed Zoho CRM's Kiosk Studio, a no-code tool for Android users to create forms dynamically",
        "Built a unified UI generator using KMP, ensuring compatibility across Android and iOS platforms"
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="p-8 border-border bg-card hover:bg-card-hover transition-all hover:border-primary/50 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <a 
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl font-bold text-primary hover:underline inline-block"
                    >
                      {exp.company}
                    </a>
                    <p className="text-muted-foreground mt-1">{exp.period}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.description.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
