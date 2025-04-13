
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Software Engineer II",
    company: "Google",
    period: "June 2022 – Present",
    location: "Bangalore, India",
    description: [
      "Worked for two teams within Google Ads.",
      "Currently, I am working on the Ads Billing team, where I have already contributed to both mobile and web platforms.",
      "Involved in multiple mobile and web projects, responsible for end-to-end UI and server components implementation.",
      "Previously worked on the Ads Billing Monetizer team project named Crush, a data pipeline that processed billions of rows of data."
    ],
    skills: ["Java", "Full Stack", "Data", "Angular-Dart", "Flutter", "Flume", "SQL", "HTML", "CSS", "Team Work"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
  },
  {
    title: "Software Engineer",
    company: "HackerEarth",
    period: "Sep 2020 – June 2022",
    location: "Bangalore, India",
    description: [
      "Developed end-to-end multiple features for the Sprint 1.0 product. With the help of this product, anyone can conduct a virtual hackathon.",
      "Scaled and stabilized the multiple components of the product.",
      "Our team won two internal hackathons."
    ],
    skills: ["Python", "Django", "Full Stack", "GIT", "HTML", "CSS", "AWS", "SQS", "JavaScript", "Linux", "Team work"],
    logo: "https://media.licdn.com/dms/image/C4D0BAQGmsF0umuNgPw/company-logo_200_200/0/1656674998720/hackerearth_logo?e=2147483647&v=beta&t=YvA5SLyoXQc7HQYp_SPVrC5YQzviVkONy_-FFpDnTdA"
  },
  {
    title: "Problem Setter Intern",
    company: "HackerEarth",
    period: "Jan 2020 – Sep 2020",
    location: "Bangalore, India",
    description: [
      "I was here responsible for creating and testing programming questions based on Data Structure, Algorithms, and Math.",
      "Conducted successful hiring challenges for Google, Facebook, Nokia, PayPal etc."
    ],
    skills: ["Data Structure", "Algorithm", "C/C++", "Core Java", "Python", "Problem Solving", "Team work"],
    logo: "https://media.licdn.com/dms/image/C4D0BAQGmsF0umuNgPw/company-logo_200_200/0/1656674998720/hackerearth_logo?e=2147483647&v=beta&t=YvA5SLyoXQc7HQYp_SPVrC5YQzviVkONy_-FFpDnTdA"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-navy-dark">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="mt-12 relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-highlight via-highlight/50 to-transparent"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 relative animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-6 w-6">
                  <div className="h-full w-full rounded-full bg-navy-dark border-2 border-highlight"></div>
                </div>
                
                {/* Date for desktop */}
                <div className="hidden md:flex md:w-1/2 justify-center pb-8">
                  <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} w-full px-4`}>
                    <div className="bg-navy-light px-4 py-1 rounded-full text-sm text-muted-foreground">
                      {exp.period}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:w-1/2 glass-card p-6 border-l-2 border-highlight">
                  {/* Mobile view timeline */}
                  <div className="md:hidden flex items-center gap-2 mb-4">
                    <div className="h-5 w-5 rounded-full bg-highlight"></div>
                    <div className="text-sm text-muted-foreground">{exp.period}</div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-white p-1 flex items-center justify-center">
                      <img src={exp.logo} alt={`${exp.company} logo`} className="h-10 w-10 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <div className="text-lg font-medium">{exp.company}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground">{exp.location}</div>
                  </div>
                  
                  <ul className="list-disc ml-5 space-y-2 text-muted-foreground mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm leading-relaxed">{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-highlight/10 text-highlight-light px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
