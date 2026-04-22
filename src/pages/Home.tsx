import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "motion/react";
import React, { useState } from "react";
import { ArrowRight, Phone, Users, Trophy, Monitor, Target, Quote, Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/common/Animations";
import { useSite } from "../context/SiteContext";
import * as LucideIcons from "lucide-react";

const Marquee: React.FC<{ children: React.ReactNode, speed?: string, reverse?: boolean }> = ({ children, speed = "60s", reverse = false }) => {
  return (
    <div className="overflow-hidden flex group relative py-4">
      <div className={`flex shrink-0 gap-6 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`} style={{ animationDuration: speed }}>
        <div className="flex shrink-0 gap-6 px-1">
          {children}
        </div>
        <div className="flex shrink-0 gap-6 px-1" aria-hidden="true">
          {children}
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

const AIBackground: React.FC<{ y?: any }> = ({ y }) => {
  return (
    <motion.div style={{ y }} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 3D Perspective Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]" 
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <motion.div
          animate={{
            rotateX: [15, 20, 15],
            y: [-20, 0, -20]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 border-t border-brand-500/30 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"
          style={{
            transform: 'rotateX(20deg) translateY(-20%) scale(1.5)',
            transformOrigin: 'top center'
          }}
        />
      </div>
      
      {/* Dynamic Glows */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-500/20 rounded-full blur-[140px]"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px]"
      />

      {/* Interactive Particles Layer 1 */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`p1-${i}`}
          initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
          animate={{
            y: ["0%", "-50%", "0%"],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 bg-brand-400 rounded-full blur-[1px]"
        />
      ))}

      {/* Floating Geometric Outlines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`geo-${i}`}
          initial={{ 
            x: Math.random() * 80 + 10 + "%", 
            y: Math.random() * 80 + 10 + "%",
            rotate: 0 
          }}
          animate={{
            y: ["0%", "-30px", "0%"],
            rotate: 360,
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-32 h-32 border border-brand-500/10 rounded-3xl"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '500px'
          }}
        />
      ))}

      {/* Floating Syllabus Keywords - Professionally Balanced Distribution */}
      {[
        { text: "C++", color: "text-blue-500", left: "12%", top: "15%", delay: 0 },
        { text: "HTML", color: "text-orange-500", left: "82%", top: "12%", delay: 1 },
        { text: "8085", color: "text-neutral-500", left: "78%", top: "65%", delay: 2 },
        { text: "Logic Gates", color: "text-emerald-500", left: "15%", top: "75%", delay: 3 },
        { text: "Pointers", color: "text-indigo-500", left: "8%", top: "45%", delay: 4 },
        { text: "Networking", color: "text-brand-500", left: "88%", top: "35%", delay: 5 },
        { text: "OSI Model", color: "text-purple-500", left: "45%", top: "85%", delay: 2.5 },
        { text: "Data Structures", color: "text-rose-500", left: "25%", top: "10%", delay: 1.5 },
        { text: "SQL", color: "text-cyan-500", left: "65%", top: "80%", delay: 4.5 },
        { text: "OOPs", color: "text-amber-500", left: "92%", top: "55%", delay: 3.5 },
        { text: "Binary", color: "text-blue-400", left: "35%", top: "25%", delay: 6 },
        { text: "Microprocessor", color: "text-slate-400", left: "60%", top: "10%", delay: 0.5 },
      ].map((tech, i) => (
        <motion.div
          key={`tech-${i}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.1, 0.35, 0.1],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: tech.delay,
            ease: "easeInOut"
          }}
          className={`absolute pointer-events-none select-none font-mono font-bold text-xs md:text-sm tracking-tighter ${tech.color} z-0`}
          style={{
            left: tech.left,
            top: tech.top,
            textShadow: '0 0 15px currentColor'
          }}
        >
          <span className="opacity-40">&lt;</span>
          {tech.text}
          <span className="opacity-40"> /&gt;</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Home: React.FC = () => {
  const { config } = useSite();
  const { scrollYProgress } = useScroll();
  
  // Create a spring-smoothed version of the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 15,
    restDelta: 0.001
  });
  
  // High-Quality Parallax transforms using the smooth progress
  const heroContentY = useTransform(smoothProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const bgGridY = useTransform(smoothProgress, [0, 0.2], [0, -100]);
  const floatingTagsY = useTransform(smoothProgress, [0, 0.3], [0, -200]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = config.testimonials;

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Helper to get icon component by name
  const getIcon = (name: string) => {
    const Icon = (LucideIcons as any)[name];
    return Icon || LucideIcons.HelpCircle;
  };

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
        <AIBackground y={floatingTagsY} />
        
        <motion.div 
          style={{ y: heroContentY, opacity: heroOpacity }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Admissions Open for {config.admissionYear}
            </div>
          </FadeIn>
          <FadeIn delay={0.1} direction="up" scale={0.95}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-gray-900 dark:text-white">
              Master Coding, Ace Boards & <br className="hidden md:block" />
              <span className="text-gradient glitch" data-text="Secure Your Future">Secure Your Future</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} direction="up" scale={0.95}>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              Join Yavatmal's premier Computer Science coaching. Turn complex logic into top board scores and 
              gain the specialized skills to excel in high-demand engineering careers. 
              <span className="block mt-2 text-brand-600 font-bold dark:text-brand-400">Your journey to 100/100 starts today.</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.3} direction="up" scale={0.95} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-200 active:bg-gray-900 dark:active:bg-gray-300 active:scale-95 transition-all duration-200 glow-primary-hover flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:8381070236"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-neutral-900 text-gray-900 dark:text-white font-medium border border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 active:bg-gray-100 dark:active:bg-neutral-800 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md glow-primary-hover"
            >
              <Phone className="w-4 h-4" /> Call 8381070236
            </a>
          </FadeIn>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-white dark:bg-neutral-900 border-y border-gray-100 dark:border-neutral-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {config.stats.map((stat, i) => {
              const Icon = getIcon(stat.iconName);
              return (
                <StaggerItem key={i} className="text-center group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Success Roadmap - Sales Focused */}
      <section className="py-24 px-6 bg-neutral-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <FadeIn>
              <span className="text-brand-500 font-black tracking-widest text-xs uppercase mb-4 block">The Journey to 100/100</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Your Fast-Track to <br/><span className="text-brand-500">Board Excellence</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                We don't just teach code; we architect your success. Follow our proven roadmap designed for the HSC/CBSE boards.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-1 bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
            
            {[
              { 
                step: "01", 
                title: "Core Foundation", 
                desc: "Master Logic Gates, Binary, and the basics of Microprocessors from scratch.",
                icon: "Monitor",
                color: "bg-blue-500"
              },
              { 
                step: "02", 
                title: "Advanced Coding", 
                desc: "Deep dive into C++, Object-Oriented Programming, and Data Structures.",
                icon: "Code",
                color: "bg-brand-600"
              },
              { 
                step: "03", 
                title: "Board Mastery", 
                desc: "10 years of paper solving, time management, and presentation tips.",
                icon: "Trophy",
                color: "bg-amber-500"
              }
            ].map((item, i) => {
              const Icon = getIcon(item.icon);
              return (
                <FadeIn key={i} delay={i * 0.2} direction="up" className="relative group">
                  <div className="absolute -top-4 -left-4 text-6xl font-black text-white/5 select-none">{item.step}</div>
                  <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-brand-500/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 group">
                    <div className={`w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center mb-8 shadow-lg shadow-current/20 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 font-black" />
                    </div>
                    <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <FadeIn delay={0.6}>
              <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-brand-600 text-white font-black text-xl hover:bg-brand-700 active:scale-95 transition-all shadow-2xl shadow-brand-500/40">
                Book a Free Demo Class <ArrowRight className="w-6 h-6" />
              </Link>
              <p className="mt-6 text-sm text-gray-500 font-bold uppercase tracking-widest animate-pulse">Next Batch Starts Soon – Limited Seats!</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Student Perks Section */}
      <section className="py-24 px-6 bg-white dark:bg-neutral-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <FadeIn className="max-w-2xl">
              <span className="text-brand-600 font-bold uppercase tracking-widest text-xs mb-4 block">Student Privileges</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 dark:text-white">Why Hundreds of Students <br/>Trust Us Every Year</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-2 font-medium">Join the elite circle of top-scoring Computer Science students in Yavatmal.</p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Smart Concept Notes", desc: "Hand-crafted notes that simplify complex board topics like 8085 & C++.", icon: "BookOpen" },
              { title: "Weekly Mock Board Exams", desc: "Real-world exam practice to eliminate fear and build 100% confidence.", icon: "Target" },
              { title: "24/7 Doubt Support", desc: "Reach out to your faculty anytime via our dedicated student support line.", icon: "MessageSquare" },
              { title: "Career Counseling", desc: "Expert guidance on choosing Engineering, BCA, or BCS after 12th.", icon: "Users" },
              { title: "Lab Practical Sessions", desc: "Hands-on coding in our hi-tech lab to master hardware and software.", icon: "Monitor" },
              { title: "Board Solution Sets", desc: "Exclusive access to solved papers from the last 15 years.", icon: "Trophy" }
            ].map((perk, i) => {
              const Icon = getIcon(perk.icon);
              return (
                <FadeIn key={i} delay={i * 0.1} className="group p-8 rounded-[2rem] border border-gray-100 dark:border-neutral-800 hover:border-brand-500/30 hover:bg-brand-50/10 dark:hover:bg-brand-900/5 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-neutral-800 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 dark:text-white">{perk.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{perk.desc}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum Deep Dive */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-neutral-950 transition-colors overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 dark:text-white">What You'll Master</h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium">Comprehensive coverage of the State Board & CBSE syllabi.</p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn direction="left" className="p-10 rounded-[3rem] bg-white dark:bg-neutral-900 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-neutral-800">
               <div className="flex items-center gap-4 mb-8">
                  <div className="px-4 py-1.5 rounded-full bg-brand-600 text-white text-xs font-black uppercase">11th Standard</div>
                  <h3 className="text-2xl font-black dark:text-white">The Foundation</h3>
               </div>
               <ul className="space-y-6">
                  {[
                    { t: "Logic Gates & Number Systems", d: "The mathematical backbone of computers." },
                    { t: "C++ Programming Basics", d: "Variables, Loops, and Conditional logic." },
                    { t: "Networking Fundamentals", d: "How the world stays connected (LAN/WAN/IP)." },
                    { t: "Visual Basic (Intro)", d: "Building your first GUI applications." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                       <div>
                          <h4 className="font-bold dark:text-white text-sm mb-1">{item.t}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{item.d}</p>
                       </div>
                    </li>
                  ))}
               </ul>
            </FadeIn>

            <FadeIn direction="right" className="p-10 rounded-[3rem] bg-white dark:bg-neutral-900 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-neutral-800">
               <div className="flex items-center gap-4 mb-8">
                  <div className="px-4 py-1.5 rounded-full bg-purple-600 text-white text-xs font-black uppercase">12th Standard</div>
                  <h3 className="text-2xl font-black dark:text-white">Board Excellence</h3>
               </div>
               <ul className="space-y-6">
                  {[
                    { t: "Advanced C++ & OOPs", d: "Classes, Objects, Inheritance, and Pointers." },
                    { t: "8085 Microprocessor", d: "Assembly language and hardware architecture." },
                    { t: "HTML & Web Design", d: "Creating modern, responsive user interfaces." },
                    { t: "Operating Systems", d: "Process management, memory, and file systems." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                       <div>
                          <h4 className="font-bold dark:text-white text-sm mb-1">{item.t}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{item.d}</p>
                       </div>
                    </li>
                  ))}
               </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 dark:text-white">The Coaching Standard</h2>
          </FadeIn>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Smart Classrooms", desc: "Digital teaching methods for better visualization.", icon: Monitor },
            { title: "Individual Focus", desc: "Batch sizes limited to ensure attention.", icon: Target },
            { title: "Regular Tests", desc: "Weekly assessments and mock exams.", icon: Trophy },
            { title: "Resource Library", desc: "Hand-picked study materials.", icon: Users }
          ].map((item, i) => (
             <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-3xl bg-gray-50 dark:bg-neutral-800/50 border border-transparent hover:border-brand-500/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6"><item.icon className="w-6 h-6" /></div>
                <h3 className="text-lg font-bold mb-3 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
             </FadeIn>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <FadeIn>
             <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 dark:text-white">Life at our Institute</h2>
             <div className="w-20 h-1.5 bg-brand-600 mx-auto rounded-full mt-6" />
          </FadeIn>
        </div>
        <Marquee speed="40s">
          {[
            { src: "https://raw.githubusercontent.com/codenbuild01-droid/cscoachingclasses/refs/heads/main/IMG20230312180148.jpg.jpeg", alt: "Students" },
            { src: "https://raw.githubusercontent.com/codenbuild01-droid/cscoachingclasses/refs/heads/main/IMG_20221123_195351.jpg.jpeg", alt: "Classroom" },
            { src: "https://raw.githubusercontent.com/codenbuild01-droid/cscoachingclasses/refs/heads/main/WhatsApp%20Image%202026-03-08%20at%202.05.29%20PM%20(1).jpeg", alt: "Discussion" },
            { src: "https://raw.githubusercontent.com/codenbuild01-droid/cscoachingclasses/refs/heads/main/WhatsApp%20Image%202026-03-08%20at%202.05.29%20PM.jpeg", alt: "Coding" },
          ].map((item, i) => (
            <div key={i} className="relative w-[300px] md:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 group shadow-lg">
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" referrerPolicy="no-referrer" />
            </div>
          ))}
        </Marquee>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-24 px-6 relative overflow-hidden bg-white dark:bg-neutral-900/50 transition-colors">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="flex items-center gap-2 mb-6">
                  <img 
                    src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" 
                    alt="Google Logo" 
                    className="w-6 h-6"
                    loading="lazy"
                  />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 ml-2">4.9 / 5.0 Rating</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 dark:text-white leading-[1.1]">
                  What Our Students <br /> are Saying
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
                  Join hundreds of successful students who have mastered Computer Science with our expert-led coaching.
                </p>
              </FadeIn>

              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonials[currentTestimonial].id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="glass-card p-10 md:p-12 rounded-[2.5rem] relative z-10"
                  >
                    <Quote className="w-12 h-12 text-brand-600/10 absolute top-8 left-8" />
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed font-medium italic mb-8">
                      "{testimonials[currentTestimonial].content}"
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-100 dark:border-neutral-800">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold">
                          {testimonials[currentTestimonial].name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold dark:text-white">{testimonials[currentTestimonial].name}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{testimonials[currentTestimonial].role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                  <button onClick={prevTestimonial} className="p-4 rounded-full border border-gray-200 dark:border-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"><ChevronLeft className="w-6 h-6" /></button>
                  <button onClick={nextTestimonial} className="p-4 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg transition-colors cursor-pointer"><ChevronRight className="w-6 h-6" /></button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="p-10 md:p-20 rounded-[3rem] bg-brand-600 text-white text-center relative overflow-hidden shadow-2xl shadow-brand-500/30">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
                Ready to Master <br /> Computer Science?
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto font-medium">
                Don't wait for the last minute. Join Yavatmal's leading coaching classes today and secure your future in technology.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-brand-600 font-black text-lg hover:bg-gray-100 active:scale-95 transition-all shadow-xl"
                >
                  Enroll Now
                </Link>
                <a
                  href="tel:8381070236"
                  className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-brand-700/50 backdrop-blur-sm text-white font-bold text-lg border border-white/20 hover:bg-brand-700 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" /> Call for Details
                </a>
              </div>
              <p className="mt-8 text-sm opacity-70 font-bold tracking-widest uppercase">
                Limited Seats Available for {config.admissionYear}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;
