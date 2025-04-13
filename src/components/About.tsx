
import { Code, GraduationCap, MapPin, Trophy } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-6 animate-slide-up">
            <p className="text-muted-foreground leading-relaxed">
              I'm a Software Engineer with experience at Google and HackerEarth, 
              passionate about building scalable applications and solving complex
              algorithmic problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span style={{ color: 'violet' }}>Candidate Master</span> on Codeforces and <span style={{ color: 'rgb(255, 127, 0)' }}>6★</span> on Codechef, 
              I enjoy competitive programming and have participated in prestigious 
              competitions like Google Code Jam and Facebook Hacker Cup.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans full-stack development, data engineering, and mobile 
              development with frameworks like Django, Angular, and Flutter.
            </p>
          </div>
          
          <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-5">
              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <MapPin size={20} className="text-highlight" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">Bangalore, Karnataka, India</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <GraduationCap size={20} className="text-highlight" />
                </div>
                <div>
                  <h3 className="font-medium">Education</h3>
                  <p className="text-muted-foreground">B.Tech. in CSE (8.42 CGPA)</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <Code size={20} className="text-highlight" />
                </div>
                <div>
                  <h3 className="font-medium">Experience</h3>
                  <p className="text-muted-foreground">4.6+ Years in Software Engineering</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <Trophy size={20} className="text-highlight" />
                </div>
                <div>
                  <h3 className="font-medium">Competitive Coding</h3>
                  <p className="text-muted-foreground">Candidate Master (CF), 6★ (Codechef)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
