
import { Github, ExternalLink, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Codechef-Announcer",
    description: "A Python script that notifies users about Codechef's announcements during contests as alert messages. For example, if there's an issue with test cases, users are immediately notified.",
    technologies: ["Python", "Web scraping", "Beautiful Soup"],
    github: "https://github.com/starboy-jb/Codechef-Announcer",
    demo: null,
  },
  {
    title: "Codechef-Standing-Tracker",
    description: "A Python tool that notifies users about their friends' activities in ongoing contests. It alerts users when their friends take the lead or make significant standing changes.",
    technologies: ["Python", "Codechef API"],
    github: "https://github.com/starboy-jb/Codechef-Standing-Tracker",
    demo: null,
  },
  {
    title: "BShoppy",
    description: "An e-commerce web application built with Django where users can purchase items, add products to cart, place orders, and track the real-time status of their products.",
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/starboy-jb/BShoppy",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-navy-dark">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card flex flex-col h-full animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <Code className="h-5 w-5 text-highlight" />
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                {project.description}
              </p>
              
              <div className="space-y-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Github size={16} />
                        <span>GitHub</span>
                      </Button>
                    </a>
                  )}
                  
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button variant="default" size="sm" className="gap-2">
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
