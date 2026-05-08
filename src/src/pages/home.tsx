import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Code2, 
  PenTool, 
  MonitorSmartphone, 
  MessageCircle,
  BookOpen,
  Palette,
  Mail as MailIcon,
  Video,
  MessageSquare,
  Mail, 
  Sparkles,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import profilePhoto from '@assets/9b962bc1-d05b-40ca-89eb-3844332ba9e8_1778167269171.jpg';
import { Button } from '@/components/ui/button';
export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-[100dvh] w-full bg-background overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px]"
          />
          <motion.div 
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-[100px]"
          />
        </div>
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium tracking-wide">Available for new projects</span>
          </motion.div>
          
          <motion.h1 variants={item} className="text-6xl md:text-8xl font-black tracking-tight text-foreground mb-6 leading-[1.1]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Jallil</span>.
          </motion.h1>
          
          <motion.p variants={item} className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mb-10 leading-relaxed">
            Graphic Designer • Executive Assistant • Prompt Engineering
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button 
              size="lg" 
              className="rounded-full px-8 h-14 text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToContact}
              data-testid="btn-hero-hire"
            >
              Hire Me <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 h-14 text-lg bg-card/50 backdrop-blur-sm"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="btn-hero-projects"
            >
              View My Work
            </Button>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </section>
      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-24 px-6 bg-card relative z-10 border-y">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                From the Philippines to the <span className="italic text-primary font-serif">world.</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Reliable Virtual Assistant providing structured administrative and operational support to busy entrepreneurs and teams.
                </p>
                <p>
                  Skilled in administrative coordination, client communication, and daily task management with a strong focus on accuracy, consistency, and timely execution.
                </p>
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-muted border-4 border-background shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={profilePhoto}
                alt="Jallil"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* 3. SKILLS SECTION */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">What I Bring to the Table</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">I'm continuously expanding my toolkit to offer versatile, high-quality digital services.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "AI Automation",
                desc: "Automating workflows and tasks using AI tools like Claude and ChatGPT. From prompt engineering to building smart, time-saving automations.",
                color: "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400"
              },
              {
                icon: <PenTool className="w-8 h-8" />,
                title: "Content Creation & Graphic Design",
                desc: "TikTok ideas, AI videos, engaging captions, and social media content that grabs attention. Also crafting designs for business, food industry, and open to any type of design project.",
                color: "bg-pink-50 text-pink-600 dark:bg-pink-950/50 dark:text-pink-400"
              },
              {
                icon: <MonitorSmartphone className="w-8 h-8" />,
                title: "Executive Assistant",
                desc: "Providing organized administrative support, scheduling, client communication, and research to keep daily operations running smoothly.",
                color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400"
              }
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                data-testid={`card-skill-${i}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${skill.color} transition-transform group-hover:scale-110`}>
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 4. TOOLS SECTION */}
      <section className="py-24 px-6 bg-card border-y">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Tools I Use</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A simple look at the tools that help me create, communicate, and stay organized.</p>
          </div>
          <div className="grid gap-10">
            {[
              {
                title: "Documentation & Design",
                items: [
                  { icon: <BookOpen className="w-4 h-4" />, label: "Documentation" },
                  { icon: <Palette className="w-4 h-4" />, label: "Design" },
                  { icon: <Palette className="w-4 h-4" />, label: "Canva" }
                ]
              },
              {
                title: "Communication",
                items: [
                  { icon: <MailIcon className="w-4 h-4" />, label: "Gmail" },
                  { icon: <Video className="w-4 h-4" />, label: "Zoom" },
                  { icon: <MessageSquare className="w-4 h-4" />, label: "Slack" },
                  { icon: <Video className="w-4 h-4" />, label: "Loom" }
                ]
              },
              {
                title: "Project Management",
                items: [
                  { icon: <BookOpen className="w-4 h-4" />, label: "Notion" },
                  { icon: <BookOpen className="w-4 h-4" />, label: "Docs" },
                  { icon: <BookOpen className="w-4 h-4" />, label: "Google Sheets" }
                ]
              }
            ].map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl border bg-background p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-6 text-center">{group.title}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {group.items.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-card px-5 py-4 font-medium shadow-sm border flex items-center justify-center gap-2"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 5. PROCESS SECTION */}
      <section className="py-24 px-6 bg-primary/5 border-y relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">How We Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A simple, transparent process to get things done effectively.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We chat about your needs, goals, and vision." },
              { step: "02", title: "Planning", desc: "I map out the strategy, timeline, and deliverables." },
              { step: "03", title: "Execution", desc: "I get to work, keeping you updated along the way." },
              { step: "04", title: "Delivery", desc: "We review the final result and make sure you're happy." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-background rounded-2xl p-6 border shadow-sm"
              >
                <div className="text-primary font-black text-4xl mb-4 opacity-50">{item.step}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 6. PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 bg-card border-y">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured Work</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">A glimpse into what I've been building and creating.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-background border shadow-md flex flex-col"
              data-testid="card-project-1"
            >
              <div className="aspect-video relative overflow-hidden bg-muted p-8 flex items-center justify-center">
                <div className="w-full h-full bg-card rounded-xl shadow-lg border p-4 flex flex-col gap-4 transform transition-transform duration-700 group-hover:scale-105">
                  <div className="w-full h-8 bg-muted rounded-md flex items-center px-3 gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary/60"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/60"></div>
                  </div>
                  <div className="flex-1 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center">
                    <Code2 className="w-12 h-12 text-primary/40" />
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Canva</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary-foreground text-xs font-semibold">Basic Design</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Basic Canva Design</h3>
                <p className="text-muted-foreground mb-8 flex-1">
                  Creating simple Canva designs for social media posts, posters, and branded content with clean layouts and eye-catching visuals.
                </p>
                <Button variant="outline" className="w-fit group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group rounded-3xl overflow-hidden bg-background border shadow-md flex flex-col"
              data-testid="card-project-2"
            >
              <div className="aspect-video relative overflow-hidden bg-muted p-8 flex items-center justify-center">
                <div className="w-full h-full bg-card rounded-xl shadow-lg border p-4 grid grid-cols-2 gap-4 transform transition-transform duration-700 group-hover:scale-105">
                  <div className="rounded-lg bg-pink-500/10 flex items-center justify-center"><PenTool className="w-8 h-8 text-pink-500/50" /></div>
                  <div className="rounded-lg bg-purple-500/10 flex items-center justify-center"><MessageSquare className="w-8 h-8 text-purple-500/50" /></div>
                  <div className="col-span-2 rounded-lg bg-blue-500/10 flex items-center justify-center"><Sparkles className="w-8 h-8 text-blue-500/50" /></div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 text-xs font-semibold">CapCut</span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-semibold">Video Editing</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">CapCut Editing Samples</h3>
                <p className="text-muted-foreground mb-8 flex-1">
                  Basic CapCut edits for reels and short-form videos, focused on smooth pacing, text overlays, and attention-grabbing delivery.
                </p>
                <Button variant="outline" className="w-fit group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* 7. CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card p-12 md:p-20 rounded-[3rem] border shadow-2xl"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <MessageSquare className="w-10 h-10 text-primary" />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Available for freelance work, collaborations, and new projects. I'm ready to bring energy and dedication to your next idea.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                <a 
                  href="mailto:jlmutalib.ict@gmail.com" 
                  className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors p-4 rounded-2xl hover:bg-primary/5 w-full sm:w-auto justify-center"
                  data-testid="link-email"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  jlmutalib.ict@gmail.com
                </a>
                
                <a 
                  href="tel:09933031258"
                  className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors p-4 rounded-2xl hover:bg-primary/5 w-full sm:w-auto justify-center"
                  data-testid="link-phone"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.49a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.19 2.2z" />
                    </svg>
                  </div>
                  09933031258
                </a>
                
                <a 
                  href="https://www.facebook.com/share/18frngvjaD/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors p-4 rounded-2xl hover:bg-primary/5 w-full sm:w-auto justify-center"
                  data-testid="link-facebook"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1877F2]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Jallil Galdiano
                </a>
              </div>
              <div className="rounded-3xl border bg-background p-8 text-left shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Message</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Send me a message anytime for inquiries, collaborations, or project details.
                </p>
                <button
                  type="button"
                  className="w-full rounded-2xl bg-card border p-4 text-sm font-medium text-left flex items-center gap-3 hover:bg-primary/5 transition-colors"
                  data-testid="button-message-reveal"
                  onClick={() => {
                    const message = document.getElementById('message-reveal');
                    if (message) {
                      message.classList.remove('hidden');
                    }
                  }}
                >
                  <MessageCircle className="w-4 h-4 text-primary" />
                  Click to show message
                </button>
                <div id="message-reveal" className="hidden rounded-2xl bg-card border p-4 text-sm text-muted-foreground mt-4">
                  Thank you for visiting my portfolio. Please feel free to make a phone call, send a direct email, or contact me via Facebook.
                </div>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-3 rounded-2xl border bg-card px-4 py-3 text-sm font-medium hover:bg-primary/5 transition-colors"
                  data-testid="button-ai-chat"
                  onClick={() => {
                    const message = document.getElementById('ai-chat-message');
                    if (message) {
                      message.classList.remove('hidden');
                    }
                  }}
                >
                  <MessageCircle className="w-4 h-4 text-primary" />
                  Open AI Chat
                </button>
                <div id="ai-chat-message" className="hidden rounded-2xl bg-card border p-4 text-sm text-muted-foreground mt-4">
                  Thank you for visiting my portfolio and reaching out! I'm glad to connect with you. I'll review your inquiry and respond as soon as possible. Feel free to leave complete details about your project or concern.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="py-8 text-center text-muted-foreground border-t bg-card">
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} Jallil. Built with passion and purpose.
        </p>
      </footer>
    </div>
  );
}

src/index.css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
@import "tailwindcss";
@import "tw-animate-css";
@plugin "@tailwindcss/typography";
@custom-variant dark (&:is(.dark *));
@theme inline {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-card-border: hsl(var(--card-border));
  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-popover-border: hsl(var(--popover-border));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-primary-border: var(--primary-border);
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-secondary-border: var(--secondary-border);
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-muted-border: var(--muted-border);
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-accent-border: var(--accent-border);
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-destructive-border: var(--destructive-border);
  --color-chart-1: hsl(var(--chart-1));
  --color-chart-2: hsl(var(--chart-2));
  --color-chart-3: hsl(var(--chart-3));
  --color-chart-4: hsl(var(--chart-4));
  --color-chart-5: hsl(var(--chart-5));
  --color-sidebar: hsl(var(--sidebar));
  --color-sidebar-foreground: hsl(var(--sidebar-foreground));
  --color-sidebar-border: hsl(var(--sidebar-border));
  --color-sidebar-primary: hsl(var(--sidebar-primary));
  --color-sidebar-primary-foreground: hsl(var(--sidebar-primary-foreground));
  --color-sidebar-primary-border: var(--sidebar-primary-border);
  --color-sidebar-accent: hsl(var(--sidebar-accent));
  --color-sidebar-accent-foreground: hsl(var(--sidebar-accent-foreground));
  --color-sidebar-accent-border: var(--sidebar-accent-border);
  --color-sidebar-ring: hsl(var(--sidebar-ring));
  --font-sans: var(--app-font-sans);
  --font-serif: var(--app-font-serif);
  --font-mono: var(--app-font-mono);
  --font-display: var(--app-font-display);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
:root {
  --button-outline: rgba(0,0,0, .10);
  --badge-outline: rgba(0,0,0, .05);
  --opaque-button-border-intensity: -8;
  --elevate-1: rgba(0,0,0, .03);
  --elevate-2: rgba(0,0,0, .08);
  --background: 35 30% 98%;
  --foreground: 20 20% 10%;
  --border: 30 20% 90%;
  --card: 0 0% 100%;
  --card-foreground: 20 20% 10%;
  --card-border: 30 20% 90%;
  --sidebar: 35 30% 98%;
  --sidebar-foreground: 20 20% 10%;
  --sidebar-border: 30 20% 90%;
  --sidebar-primary: 15 90% 60%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 40 90% 55%;
  --sidebar-accent-foreground: 20 20% 10%;
  --sidebar-ring: 15 90% 60%;
  --popover: 0 0% 100%;
  --popover-foreground: 20 20% 10%;
  --popover-border: 30 20% 90%;
  --primary: 15 90% 60%;
  --primary-foreground: 0 0% 100%;
  --secondary: 40 90% 55%;
  --secondary-foreground: 20 20% 10%;
  --muted: 35 20% 94%;
  --muted-foreground: 20 10% 40%;
  --accent: 15 90% 60%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;
  --input: 30 20% 90%;
  --ring: 15 90% 60%;
  --chart-1: 15 90% 60%;
  --chart-2: 40 90% 55%;
  --chart-3: 180 40% 50%;
  --chart-4: 280 60% 60%;
  --chart-5: 340 70% 65%;
  --app-font-sans: 'Plus Jakarta Sans', sans-serif;
  --app-font-display: 'Outfit', sans-serif;
  --app-font-serif: Georgia, serif;
  --app-font-mono: Menlo, monospace;
  --radius: 1rem;
  --shadow-2xs: 0px 2px 0px 0px hsl(20 20% 10% / 0.05);
  --shadow-xs: 0px 2px 0px 0px hsl(20 20% 10% / 0.05);
  --shadow-sm: 0px 2px 0px 0px hsl(20 20% 10% / 0.05), 0px 1px 2px -1px hsl(20 20% 10% / 0.05);
  --shadow: 0px 2px 0px 0px hsl(20 20% 10% / 0.05), 0px 1px 2px -1px hsl(20 20% 10% / 0.05);
  --shadow-md: 0px 4px 6px -1px hsl(20 20% 10% / 0.1), 0px 2px 4px -1px hsl(20 20% 10% / 0.06);
  --shadow-lg: 0px 10px 15px -3px hsl(20 20% 10% / 0.1), 0px 4px 6px -2px hsl(20 20% 10% / 0.05);
  --shadow-xl: 0px 20px 25px -5px hsl(20 20% 10% / 0.1), 0px 10px 10px -5px hsl(20 20% 10% / 0.04);
  --shadow-2xl: 0px 25px 50px -12px hsl(20 20% 10% / 0.25);
  --sidebar-primary-border: hsl(from hsl(var(--sidebar-primary)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);
  --sidebar-accent-border: hsl(from hsl(var(--sidebar-accent)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);
  --primary-border: hsl(from hsl(var(--primary)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);
  --secondary-border: hsl(from hsl(var(--secondary)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);
  --muted-border: hsl(from hsl(var(--muted)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);
  --accent-border: hsl(from hsl(var(--accent)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);
  --destructive-border: hsl(from hsl(var(--destructive)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);
}
.dark {
  --button-outline: rgba(255,255,255, .10);
  --badge-outline: rgba(255,255,255, .05);
  --opaque-button-border-intensity: 9;
  --elevate-1: rgba(255,255,255, .04);
  --elevate-2: rgba(255,255,255, .09);
  --background: 20 20% 8%;
  --foreground: 35 30% 95%;
  --border: 20 20% 15%;
  --card: 20 20% 10%;
  --card-foreground: 35 30% 95%;
  --card-border: 20 20% 15%;
  --sidebar: 20 20% 10%;
  --sidebar-foreground: 35 30% 95%;
  --sidebar-border: 20 20% 15%;
  --sidebar-primary: 15 90% 60%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 40 90% 55%;
  --sidebar-accent-foreground: 20 20% 10%;
  --sidebar-ring: 15 90% 60%;
  --popover: 20 20% 10%;
  --popover-foreground: 35 30% 95%;
  --popover-border: 20 20% 15%;
  --primary: 15 90% 60%;
  --primary-foreground: 0 0% 100%;
  --secondary: 40 90% 55%;
  --secondary-foreground: 20 20% 10%;
  --muted: 20 20% 15%;
  --muted-foreground: 35 20% 70%;
  --accent: 15 90% 60%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;
  --input: 20 20% 20%;
  --ring: 15 90% 60%;
  --chart-1: 15 90% 60%;
  --chart-2: 40 90% 55%;
  --chart-3: 180 40% 50%;
  --chart-4: 280 60% 60%;
  --chart-5: 340 70% 65%;
  --shadow-2xs: 0px 2px 0px 0px hsl(0 0% 0% / 0.5);
  --shadow-xs: 0px 2px 0px 0px hsl(0 0% 0% / 0.5);
  --shadow-sm: 0px 2px 0px 0px hsl(0 0% 0% / 0.5), 0px 1px 2px -1px hsl(0 0% 0% / 0.5);
  --shadow: 0px 2px 0px 0px hsl(0 0% 0% / 0.5), 0px 1px 2px -1px hsl(0 0% 0% / 0.5);
  --shadow-md: 0px 2px 0px 0px hsl(0 0% 0% / 0.5), 0px 2px 4px -1px hsl(0 0% 0% / 0.5);
  --shadow-lg: 0px 2px 0px 0px hsl(0 0% 0% / 0.5), 0px 4px 6px -1px hsl(0 0% 0% / 0.5);
  --shadow-xl: 0px 2px 0px 0px hsl(0 0% 0% / 0.5), 0px 8px 10px -1px hsl(0 0% 0% / 0.5);
  --shadow-2xl: 0px 2px 0px 0px hsl(0 0% 0% / 0.5);
}
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply font-sans antialiased bg-background text-foreground;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
  }
}
@layer utilities {
  input[type="search"]::-webkit-search-cancel-button {
    @apply hidden;
  }
  [contenteditable][data-placeholder]:empty::before {
    content: attr(data-placeholder);
    color: hsl(var(--muted-foreground));
    pointer-events: none;
  }
  .no-default-hover-elevate {}
  .no-default-active-elevate {}
  .toggle-elevate::before,
  .toggle-elevate-2::before {
    content: "";
    pointer-events: none;
    position: absolute;
    inset: 0px;
    border-radius: inherit;
    z-index: -1;
  }
  .toggle-elevate.toggle-elevated::before {
    background-color: var(--elevate-2);
  }
  .border.toggle-elevate::before {
    inset: -1px;
  }
  .hover-elevate:not(.no-default-hover-elevate),
  .active-elevate:not(.no-default-active-elevate),
  .hover-elevate-2:not(.no-default-hover-elevate),
  .active-elevate-2:not(.no-default-active-elevate) {
    position: relative;
    z-index: 0;
  }
  .hover-elevate:not(.no-default-hover-elevate)::after,
  .active-elevate:not(.no-default-active-elevate)::after,
  .hover-elevate-2:not(.no-default-hover-elevate)::after,
  .active-elevate-2:not(.no-default-active-elevate)::after {
    content: "";
    pointer-events: none;
    position: absolute;
    inset: 0px;
    border-radius: inherit;
    z-index: 999;
  }
  .hover-elevate:hover:not(.no-default-hover-elevate)::after,
  .active-elevate:active:not(.no-default-active-elevate)::after {
    background-color: var(--elevate-1);
  }
  .hover-elevate-2:hover:not(.no-default-hover-elevate)::after,
  .active-elevate-2:active:not(.no-default-active-elevate)::after {
    background-color: var(--elevate-2);
  }
  .border.hover-elevate:not(.no-hover-interaction-elevate)::after,
  .border.active-elevate:not(.no-active-interaction-elevate)::after,
  .border.hover-elevate-2:not(.no-hover-interaction-elevate)::after,
  .border.active-elevate-2:not(.no-active-interaction-elevate)::after,
  .border.hover-elevate:not(.no-hover-interaction-elevate)::after {
    inset: -1px;
  }
}

That's everything. Your GitHub folder structure should look like this:

portfolio/
├── src/
│   ├── pages/
│   │   ├── home.tsx
│   │   └── not-found.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── vite.config.ts
├── tsconfig.json
└── package.json
