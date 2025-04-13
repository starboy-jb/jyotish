
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-highlight to-highlight-light flex items-center justify-center">
                <span className="text-white font-bold text-sm">JB</span>
              </div>
              <span className="font-bold text-xl">Jyotish Bhaskar</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/starboy-jb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/70 transition-colors"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/jyotish-bhaskar-8b82a5169/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/70 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:jyotishbhaskar63@gmail.com"
              className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/70 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            <span>&copy; {currentYear} Jyotish Bhaskar. All rights reserved.</span>
            <Heart size={14} className="text-highlight" />
          </p>
        </div>
      </div>
    </footer>
  );
}
