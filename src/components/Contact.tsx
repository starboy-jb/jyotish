
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // This is a mock submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="bg-navy-dark">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-muted-foreground mb-8">
              Feel free to reach out to me for any questions, project inquiries,
              or if you just want to connect. I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <Mail className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a 
                    href="mailto:jyotishbhaskar63@gmail.com" 
                    className="text-muted-foreground hover:text-highlight transition-colors"
                  >
                    jyotishbhaskar63@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">Bangalore, Karnataka, India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <Phone className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a 
                    href="tel:+919170737391" 
                    className="text-muted-foreground hover:text-highlight transition-colors"
                  >
                    +91 91707 37391
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input 
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-muted border-muted"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-muted border-muted"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-muted border-muted min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="w-full gap-2" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
