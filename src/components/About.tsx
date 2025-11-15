import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold">Background</h2>
        
        <Card className="p-8 border-border bg-card hover:bg-card-hover transition-colors">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm currently a <span className="text-foreground font-semibold">Software Engineer III</span> at{" "}
              <a 
                href="https://www.walmart.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Walmart Global Tech
              </a>, working on cutting-edge Android applications. Previously, I spent several years at{" "}
              <a 
                href="https://www.zoho.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Zoho Corporation
              </a>, where I optimized the CRM Android app with over 10 million downloads.
            </p>

            <p>
              I hold a <span className="text-foreground font-semibold">B.Tech in Electrical and Electronics Engineering</span> from{" "}
              <a 
                href="https://www.smvec.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Sri Manakula Vinayagar Engineering College, Pondicherry
              </a>, with a CGPA of 8.8/10.
            </p>

            <p>
              Fascination towards computer software! I enjoy working with the Android platform. Love for coding and revealing solutions to real-time challenges. Striving to adapt to the latest technologies like Kotlin Multiplatform, Jetpack Compose, and Clean Architecture patterns.
            </p>

            <p>
              <span className="text-foreground font-semibold">When I'm not in front of a computer screen</span>, I'm probably exploring new technologies, contributing to open-source projects, or learning about the latest developments in mobile engineering.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
