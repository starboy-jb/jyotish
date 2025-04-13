
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

const skillsCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C/C++", level: 95 },
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "Django", level: 90 },
      { name: "HTML/CSS", level: 90 },
      { name: "React", level: 75 },
      { name: "Angular", level: 95 },
    ]
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", level: 85 },
      { name: "Dart", level: 80 },
    ]
  },
  {
    title: "Others",
    skills: [
      { name: "Data Structures", level: 95 },
      { name: "Algorithms", level: 95 },
      { name: "SQL", level: 85 },
      { name: "Linux", level: 75 },
    ]
  }
];

export default function Skills() {
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 200) {
          setShowProgress(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12 mt-10">
          {skillsCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-highlight-light">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={showProgress ? skill.level : 0} 
                      className="h-2 bg-muted transition-all duration-1000" 
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
