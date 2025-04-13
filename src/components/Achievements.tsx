import { Award, Star, Code } from 'lucide-react';
import { 
  Github, 
  Linkedin, 
  MessageSquareCode, 
  FileCode2, 
  SquareCode, 
  Lightbulb, 
  Code2 
} from 'lucide-react';

const achievements = [
  {
    title: "Competitive Programming",
    items: [
      "Candidate Master coder on Codeforces (Max Rating - 1969). Under top 1% Indian users.",
      "6★ coder on Codechef (Max Rating - 2203). Under top 0.2% Indian users.",
      "AIR 6th out of 55,654 student in TCS Codevita 2019 (Round 1).",
      "88th rank out of 13K+ participants in the Codeforces Round 664.",
    ],
    icon: Star
  },
  {
    title: "Competitions",
    items: [
      "Quarter-Finalist of Google Code Jam 2021 and finished in top 5 percentile over 37000 participants.",
      "Quarter-Finalist of Facebook Hacker Cup 2019,2023 organized by Facebook.",
      "900+ reputation on StackOverflow.",
    ],
    icon: Award
  }
];

// Platform icons and logo mapping
const platformLogos = {
  "Codeforces": "https://assets.codeforces.com/users/avatars/default_avatar.png",
  "Codechef": "https://static.cdneg.be/assets/community/uploads/0102/2022/020222/codechef.png",
  "Stackoverflow": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/1200px-Stack_Overflow_icon.svg.png",
  "Hackerrank": "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
  "Hackerearth": "https://upload.wikimedia.org/wikipedia/commons/e/e8/HackerEarth_logo.png",
  "Stopstalk": "https://stopstalk.com/static/images/stopstalk-square.png",
  "Github": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  "Linkedin": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
};

const codingProfiles = [
  { platform: "Codeforces", username: "starboy_jb", url: "https://codeforces.com/profile/starboy_jb" },
  { platform: "Codechef", username: "starboy_jb", url: "https://www.codechef.com/users/starboy_jb" },
  { platform: "Stackoverflow", username: "starboy_jb", url: "https://stackoverflow.com/users/10128754/starboy-jb" },
  { platform: "Hackerrank", username: "starboy_jb", url: "https://www.hackerrank.com/starboy_jb" },
  { platform: "Hackerearth", username: "starboy_jb", url: "https://www.hackerearth.com/@starboy_jb" },
  { platform: "Stopstalk", username: "starboy_jb", url: "https://www.stopstalk.com/user/profile/starboy_jb" },
];

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="section-container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="mt-10 space-y-12">
          {/* Achievements */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((category, index) => (
              <div 
                key={index} 
                className="glass-card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-highlight" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-highlight">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Coding Profiles */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Code className="h-5 w-5 text-highlight" />
              <span>Coding Profiles</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {codingProfiles.map((profile, index) => {
                const PlatformIcon = platformLogos[profile.platform] || Code;
                return (
                  <a 
                    key={index} 
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 glass-card p-4 transition-all duration-200 hover:border-highlight group"
                  >
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                      <img 
                        src={platformLogos[profile.platform]} 
                        alt={`${profile.platform} logo`} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium group-hover:text-highlight transition-colors">
                        {profile.platform}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {profile.username}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
