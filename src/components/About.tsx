import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full space-y-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 border-border bg-card hover:bg-card-hover transition-all hover:shadow-lg">
            <Briefcase className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Experience</h3>
            <p className="text-muted-foreground leading-relaxed">
              3+ years of professional experience building scalable Android applications at PayPal, Walmart, and Zoho.
            </p>
          </Card>

          <Card className="p-6 border-border bg-card hover:bg-card-hover transition-all hover:shadow-lg">
            <GraduationCap className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Education</h3>
            <p className="text-muted-foreground leading-relaxed">
              B.Tech in Electrical and Electronics Engineering from SMVEC, Pondicherry (CGPA: 8.8/10).
            </p>
          </Card>

          <Card className="p-6 border-border bg-card hover:bg-card-hover transition-all hover:shadow-lg">
            <Heart className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Passion</h3>
            <p className="text-muted-foreground leading-relaxed">
              Love for clean code, Android development, and staying updated with latest mobile technologies.
            </p>
          </Card>
        </div>

        <Card className="p-8 border-border bg-card">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm currently a <span className="text-foreground font-semibold">Senior Software Engineer</span> at{" "}
              <a
                href="https://www.paypal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                PayPal
              </a>, where I build world-class payment solutions for Android. My journey includes impactful roles at{" "}
              <a
                href="https://www.walmart.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Walmart Global Tech
              </a>{" "}and{" "}
              <a
                href="https://www.zoho.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Zoho Corporation
              </a>, where I optimized the CRM Android app with over 10 million downloads.
            </p>

            <p>
              I specialize in modern Android development with expertise in <span className="text-foreground font-semibold">Kotlin, MVVM architecture, Clean Architecture principles, Jetpack Compose, and Kotlin Multiplatform</span>. I'm passionate about writing maintainable code and creating exceptional user experiences.
            </p>

            <p>
              <span className="text-foreground font-semibold">Beyond coding</span>, I'm constantly exploring new technologies, contributing to open-source projects, and staying at the forefront of mobile engineering innovations.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
