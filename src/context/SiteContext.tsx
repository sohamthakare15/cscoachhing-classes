import React, { createContext, useContext, useState, useEffect } from 'react';
import * as LucideIcons from "lucide-react";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: string;
  iconName: 'Users' | 'Trophy' | 'Target' | 'Star' | 'Monitor';
}

export interface SiteConfig {
  admissionYear: string;
  notice: {
    enabled: boolean;
    text: string;
    link?: string;
  };
  stats: Stat[];
  testimonials: Testimonial[];
  faculty: {
    experience: string;
    qualifications: string;
  };
  faqs: { id: string; question: string; answer: string }[];
}

interface SiteContextType {
  config: SiteConfig;
  updateConfig: (newConfig: SiteConfig) => void;
  enquiries: any[];
  addEnquiry: (enquiry: any) => void;
}

const defaultConfig: SiteConfig = {
  admissionYear: "2026-27",
  notice: {
    enabled: true,
    text: "🎉 Limited seats remaining for the 2026-27 batch! Enroll now.",
    link: "/contact"
  },
  stats: [
    { label: "Students Mentored", value: "500+", iconName: 'Users' },
    { label: "Success Rate", value: "98%", iconName: 'Trophy' },
    { label: "Experience", value: "5+ Yrs", iconName: 'Target' },
    { label: "Board Results", value: "95% Avg", iconName: 'Star' }
  ],
  testimonials: [
    {
      id: "1",
      name: "Aryan Deshmukh",
      role: "Student, HSC 2024",
      content: "The conceptual clarity I got at CS Coaching Classes was amazing. Ms. Aarti focuses on logic rather than just memorizing code. I scored 194/200 in CS!",
      rating: 5
    },
    {
      id: "2",
      name: "Sakshi Patil",
      role: "Student, HSC 2023",
      content: "I was afraid of programming, but now I'm building my own mini-projects. The practical sessions are the best part of this institute.",
      rating: 5
    },
    {
       id: "3",
       name: "Snehal Rathod",
       role: "Student, HSC 2024",
       content: "The best place to learn Computer Science in Yavatmal. The notes are very precisely written and the mock tests prepared me for the actual board exam.",
       rating: 5
    }
  ],
  faculty: {
    experience: "5+ Years of Teaching Experience",
    qualifications: "MSc in Computer Science"
  },
  faqs: [
    {
      id: "1",
      question: "Which standards do you provide coaching for?",
      answer: "We primarily specialize in 11th and 12th standard State Board and CBSE Computer Science syllabus. We also offer foundational programming courses."
    },
    {
      id: "2",
      question: "What programming languages are taught?",
      answer: "As per the HSC board syllabus, we focus deeply on C++. We also provide training in HTML5, Web Technologies, and foundational concepts that apply to Java and Python."
    },
    {
      id: "3",
      question: "Do you provide practical lab sessions?",
      answer: "Yes! We believe computer science is practical. We have a dedicated lab where students get hands-on experience for every concept taught in theory."
    },
    {
      id: "4",
      question: "What is the typical batch size?",
      answer: "We maintain small batch sizes (limited students per batch) to ensure that Ms. Aarti Jaiswal can provide personalized attention to every student's learning progress."
    },
    {
      id: "5",
      question: "How do you prepare students for board exams?",
      answer: "We conduct weekly tests, provide board-specific simplified notes, solve previous years' question papers, and conduct multiple mock practical exams."
    }
  ]
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    const saved = localStorage.getItem('siteConfig');
    return saved ? JSON.parse(saved) : defaultConfig;
  });

  const [enquiries, setEnquiries] = useState<any[]>(() => {
    const saved = localStorage.getItem('siteEnquiries');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('siteConfig', JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    localStorage.setItem('siteEnquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  const updateConfig = (newConfig: SiteConfig) => setConfig(newConfig);
  
  const addEnquiry = (enquiry: any) => {
    setEnquiries(prev => [
      { ...enquiry, id: Date.now(), timestamp: new Date().toISOString() },
      ...prev
    ].slice(0, 50));
  };

  return (
    <SiteContext.Provider value={{ config, updateConfig, enquiries, addEnquiry }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) throw new Error('useSite must be used within a SiteProvider');
  return context;
};

export const getColorForIcon = (name: string) => {
  switch(name) {
    case 'Users': return 'text-brand-600 bg-brand-50';
    case 'Trophy': return 'text-amber-600 bg-amber-50';
    case 'Target': return 'text-emerald-600 bg-emerald-50';
    case 'Star': return 'text-indigo-600 bg-indigo-50';
    case 'Monitor': return 'text-cyan-600 bg-cyan-50';
    default: return 'text-brand-600 bg-brand-50';
  }
};
