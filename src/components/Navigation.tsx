import { Button } from "@/components/ui/button";
import { FileDown, Home, User, Briefcase, Code, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/resume", label: "Resume", icon: FileDown },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold hover:text-primary transition-colors">
            Arunkumar M
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {location.pathname === '/' && (
              <>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-sm hover:text-primary transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-sm hover:text-primary transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-sm hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </>
            )}
            <Link to="/resume">
              <Button variant="outline" size="sm" className="gap-2">
                <FileDown className="h-4 w-4" />
                Resume
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Link to="/resume">
              <Button variant="outline" size="sm" className="gap-2">
                <FileDown className="h-4 w-4" />
                Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;