import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Kotlin", "Java", "SQLite", "Python", "C++"]
    },
    {
      title: "Android Development",
      skills: ["Android SDK", "Jetpack", "MVVM", "MVI", "FSM", "Clean Architecture", "Jetpack Compose"]
    },
    {
      title: "Libraries & Frameworks",
      skills: ["Coroutines", "Retrofit", "Dagger2", "Glide", "LiveData", "Compose", "KMP", "RxJava"]
    },
    {
      title: "Tools",
      skills: ["Git", "Gradle", "Firebase", "Android Studio", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
        
        <div className="space-y-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <Badge 
                    key={skillIdx} 
                    variant="secondary"
                    className="px-4 py-2 text-base bg-card hover:bg-card-hover transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
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
