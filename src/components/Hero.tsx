
import { ArrowDownCircle, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function Hero() {
  const names = ['Jyotish Bhaskar', 'Starboy_JB'];
  const [displayName, setDisplayName] = useState('');
  const fullName = 'Jyotish Bhaskar';
  const [index, setIndex] = useState(0);
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentName = names[currentNameIndex];
    if (!isDeleting && index < currentName.length) {
      const timeout = setTimeout(() => {
        setDisplayName(prev => prev + currentName[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index > 0) {
      const timeout = setTimeout(() => {
        setDisplayName(prev => prev.slice(0, -1));
        setIndex(index - 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && index === currentName.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      return () => clearTimeout(timeout);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
      setCurrentNameIndex((currentNameIndex + 1) % names.length); // Switch to the next name
    }
  }, [index, isDeleting, currentNameIndex]);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-highlight/10 rounded-full blur-3xl"></div>
      
      <div className="section-container flex flex-col items-center text-center z-10">
        <div className="space-y-3 animate-slide-up">
          <h2 className="text-highlight text-lg md:text-xl font-medium">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span>{displayName}</span>
            <span className="animate-[pulse_0.8s_ease-in-out_infinite]">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            👨‍💻 Software Engineer at @Google || 🏆 Competitive Programmer || 🤝 Mentor
          </p>
        </div>

        <div className="mt-8 flex gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a href="https://github.com/starboy-jb" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a href="https://linkedin.com/in/jyotish-bhaskar-8b82a5169/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
          <a href="mailto:jyotishbhaskar63@gmail.com">
            <Button variant="outline" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </a>
        </div>
        
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDownCircle className="h-6 w-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
