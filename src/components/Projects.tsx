import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, ShoppingCart, ScanText } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Notes App",
      description: "Built an Android app with Clean Architecture, MVVM, LiveData, and Coroutines, featuring priority-based notes, search functionality, attachments, and voice-to-text capabilities.",
      technologies: ["Kotlin", "MVVM", "Clean Architecture", "Coroutines", "LiveData"],
      icon: Code2
    },
    {
      title: "Online Shopping Application",
      description: "Developed a CLI shopping app in Java using SOLID principles and Clean Architecture, emphasizing scalability and loose coupling for maintainable enterprise-level code.",
      technologies: ["Java", "SOLID Principles", "Clean Architecture", "CLI"],
      icon: ShoppingCart
    },
    {
      title: "Easy Copy",
      description: "Created an Android app with Finite State Machine (FSM) and Jetpack Compose, integrating Google ML Kit for OCR-based text extraction from images with seamless UX.",
      technologies: ["Kotlin", "Jetpack Compose", "FSM", "ML Kit", "OCR"],
      icon: ScanText
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
        
        <div className="grid gap-6 md:grid-cols-1">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <Card key={idx} className="p-8 border-border bg-card hover:bg-card-hover transition-all hover:border-primary/50 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIdx) => (
                        <Badge 
                          key={techIdx}
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
