import React from "react";
import { ArrowRight, User, GraduationCap, Quote } from "lucide-react";
import { FadeIn } from "../components/common/Animations";

import { useSite } from "../context/SiteContext";

const Faculty: React.FC = () => {
  const { config } = useSite();
  const facultyList = [
    {
      name: "Ms. Aarti Jaiswal",
      role: "Lead Instructor",
      experience: config.faculty.experience,
      qualifications: config.faculty.qualifications,
      philosophy: "I believe in breaking down complex programming concepts into simple, relatable examples, ensuring students truly understand the logic.",
      achievements: [
        "Mentored 500+ students to score 95%+ in Board Exams",
        "Specializes in interactive and practical-based learning",
        "Developed the institute's modern coding curriculum"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 dark:text-white">Our Faculty</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Learn from dedicated educators who bring passion and expertise to every classroom session.
          </p>
        </FadeIn>
        
        <div className="space-y-16">
          {facultyList.map((faculty, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.2}>
              <div className="glass-card rounded-[3rem] p-8 md:p-16 flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:shadow-brand-500/10">
                <div className="w-full">
                  <div className="flex flex-wrap items-center gap-3 mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-bold uppercase tracking-wider">
                      <User className="w-4 h-4" /> {faculty.role}
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-bold border border-emerald-100/50 dark:border-emerald-800/50">
                      <GraduationCap className="w-4 h-4" /> {faculty.qualifications}
                    </div>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 dark:text-white">{faculty.name}</h2>
                  <p className="text-brand-600 dark:text-brand-400 font-bold text-xl mb-10">{faculty.experience}</p>
                  
                  <div className="grid md:grid-cols-2 gap-12 text-gray-500 dark:text-gray-300 leading-relaxed">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 underline decoration-brand-500/30 underline-offset-8">Educational Philosophy</h3>
                        <div className="relative p-8 rounded-3xl bg-gray-50 dark:bg-neutral-800/30 border border-gray-100 dark:border-neutral-800 italic text-lg">
                          <Quote className="w-10 h-10 text-brand-600/10 absolute -top-2 -left-2" />
                          "{faculty.philosophy}"
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 underline decoration-brand-500/30 underline-offset-8">Key Accomplishments</h3>
                      <ul className="space-y-6">
                        {faculty.achievements.map((achieve, i) => (
                          <li key={i} className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                              <ArrowRight className="w-5 h-5" />
                            </div>
                            <span className="font-medium pt-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{achieve}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-12 mt-12 border-t border-gray-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-6">
                    <a
                      href={`https://wa.me/918381070236?text=${encodeURIComponent("Hello Ms. Aarti Jaiswal, I would like to inquire about your Computer Science courses.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-600 text-white font-bold hover:bg-brand-700 active:scale-95 transition-all glow-primary-hover shadow-xl shadow-brand-500/20"
                    >
                      Connect with Faculty <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
