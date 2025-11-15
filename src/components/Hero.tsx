import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Hello! <span className="inline-block animate-wave">👋</span>
          </h1>
          
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
              I'm <span className="text-foreground font-semibold">Arunkumar M</span>, a passionate
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
              Senior Software Engineer at <span className="text-primary font-semibold">PayPal</span>
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
              building innovative Android solutions. <span className="inline-block">👨‍💻</span>
            </p>
          </div>

          <div className="flex items-center gap-4 pt-8">
            <span className="text-muted-foreground">Get in touch</span>
            <span className="inline-block">👉</span>
            <div className="flex gap-3">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
