import React from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/common/Animations";
import { Target, Users, Monitor, Trophy, Rocket, BookOpen } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 dark:text-white">Our Mission & Vision</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Pioneering computer science excellence in Yavatmal through conceptual learning and hands-on technical training.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <FadeIn direction="left">
             <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://raw.githubusercontent.com/codenbuild01-droid/cscoachingclasses/refs/heads/main/WhatsApp%20Image%202026-03-08%20at%202.05.29%20PM.jpeg" 
                  alt="Students Coding" 
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-600/10 mix-blend-overlay" />
             </div>
          </FadeIn>
          
          <FadeIn direction="right" className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white">Empowering the <span className="text-brand-600">Next Generation</span> of Developers</h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                At CS Coaching Classes Yavatmal, we believe that computer science is more than just coding—it's about problem-solving, logical thinking, and creating the future. 
              </p>
              <p>
                Founded on the principles of clarity and excellence, we have become the leading destination for 11th and 12th standard students seeking to master their CS board exams while building real-world programming skills.
              </p>
              <p>
                Our curriculum is meticulously designed to align with board requirements while introducing students to modern paradigms like Object-Oriented Programming and efficient algorithm design.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
               <div className="p-6 rounded-3xl bg-gray-50 dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-700">
                  <Rocket className="w-8 h-8 text-brand-600 mb-4" />
                  <h4 className="font-bold dark:text-white mb-2">Modern Tech</h4>
                  <p className="text-sm">Updated labs and tools for practical learning.</p>
               </div>
               <div className="p-6 rounded-3xl bg-gray-50 dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-700">
                  <BookOpen className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="font-bold dark:text-white mb-2">Board Ready</h4>
                  <p className="text-sm">Comprehensive notes and board paper focus.</p>
               </div>
            </div>
          </FadeIn>
        </div>

        <div className="mb-32">
           <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold dark:text-white">The Core Pillars</h2>
              <p className="text-gray-500 dark:text-gray-400">The values that drive our institute forward.</p>
           </FadeIn>
           
           <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: Target, title: "Precision", desc: "Targeted teaching for board examination excellence." },
               { icon: Users, title: "Community", desc: "A supportive environment where students learn together." },
               { icon: Monitor, title: "Innovation", desc: "Always updating our teaching methods with digital tools." },
               { icon: Trophy, title: "Results", desc: "A consistent track record of high-scoring achievers." }
             ].map((pillar, i) => (
                <StaggerItem key={i} className="p-8 rounded-[2rem] bg-white dark:bg-neutral-900 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-neutral-800 text-center hover:-translate-y-2 transition-transform">
                   <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto mb-6">
                      <pillar.icon className="w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-bold mb-4 dark:text-white">{pillar.title}</h3>
                   <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{pillar.desc}</p>
                </StaggerItem>
             ))}
           </StaggerContainer>
        </div>
      </div>
    </div>
  );
};

export default About;
