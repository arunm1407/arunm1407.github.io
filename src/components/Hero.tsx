import { Mail, Github, Linkedin, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-4">Available for Opportunities</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-primary">Arunkumar M</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Senior Android Developer crafting exceptional mobile experiences
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Briefcase className="h-5 w-5" />
                <span>Software Engineer III at PayPal</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Chennai, India</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Kotlin</Badge>
              <Badge variant="secondary">Android</Badge>
              <Badge variant="secondary">MVVM</Badge>
              <Badge variant="secondary">Clean Architecture</Badge>
              <Badge variant="secondary">KMP</Badge>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button variant="default" asChild className="gap-2">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <Link to="/resume">View Resume</Link>
              </Button>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="ghost" size="icon" asChild className="hover:bg-card-hover hover:text-primary transition-colors">
                <a href="mailto:arunji12345.ak@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-card-hover hover:text-primary transition-colors">
                <a href="https://github.com/arunm1407" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-card-hover hover:text-primary transition-colors">
                <a href="https://linkedin.com/in/arunm1407" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-card border-4 border-primary/20 overflow-hidden flex items-center justify-center">
                  <img
                    src="/profile.jpeg"
                    alt="Arunkumar M - Senior Android Developer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="text-8xl hidden">👨‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold shadow-lg">
                4+ YOE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
