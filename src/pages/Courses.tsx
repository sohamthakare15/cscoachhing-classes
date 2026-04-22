import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, BookOpen, ExternalLink, Target, X } from "lucide-react";
import { courses } from "../data/courses";
import { FadeIn } from "../components/common/Animations";

const Courses: React.FC = () => {
  const [courseFilter, setCourseFilter] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);

  const filters = ["All", "11th CS", "12th CS", "Programming"];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 dark:text-white">Our Curriculum</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive programs designed specifically for state board excellence and practical programming skills.
          </p>
        </FadeIn>

        {/* Filter Buttons */}
        <FadeIn delay={0.2} className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setCourseFilter(filter)}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                courseFilter === filter
                  ? "bg-brand-600 text-white shadow-xl shadow-brand-500/30 scale-105"
                  : "bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-700 border border-gray-100 dark:border-neutral-700 shadow-sm"
              }`}
            >
              {filter}
            </button>
          ))}
        </FadeIn>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {courses
              .filter(course => courseFilter === "All" || course.title === courseFilter)
              .map((course) => (
                <motion.div
                  key={course.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <div 
                    onClick={() => setSelectedCourse(course)}
                    className="glass-card p-10 rounded-3xl h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/20 group cursor-pointer border border-gray-100 dark:border-neutral-800 flex flex-col"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/50 transition-all duration-300">
                      <course.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{course.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 flex-grow">{course.desc}</p>
                    <div className="flex items-center text-brand-600 dark:text-brand-400 font-bold group-hover:translate-x-2 transition-transform duration-300">
                      Explore Course <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Course Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="p-6 sm:p-8 overflow-y-auto no-scrollbar">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                      <selectedCourse.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold dark:text-white">{selectedCourse.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold">Curriculum Overview</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-gray-500 dark:text-gray-400"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-10">
                  <p className="text-gray-600 dark:text-gray-300 leading-bold text-lg">
                    {selectedCourse.desc}
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-6">
                      <Target className="w-6 h-6 text-brand-500" /> Learning Objectives
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {selectedCourse.objectives.map((obj, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-neutral-800/50 border border-gray-100/50 dark:border-neutral-700/50">
                          <div className="w-2 h-2 rounded-full bg-brand-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                          <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-6">
                      <BookOpen className="w-6 h-6 text-brand-500" /> Syllabus Breakdown
                    </h4>
                    <div className="space-y-3">
                      {selectedCourse.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-4 py-3 border-b border-gray-50 dark:border-neutral-800 last:border-0 group">
                          <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 text-xs font-black group-hover:scale-110 transition-transform">
                            {idx + 1}
                          </div>
                          <span className="text-gray-700 dark:text-gray-200 font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedCourse.syllabusLink && (
                    <div className="pt-4">
                      <a 
                        href={selectedCourse.syllabusLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 hover:bg-brand-100 dark:hover:bg-brand-900/40 transition-all font-bold"
                      >
                        Official Maharashtra Board Syllabus <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  )}

                  <div className="pt-6 border-t border-gray-100 dark:border-neutral-800">
                    <button
                      onClick={() => {
                        setSelectedCourse(null);
                        // Redirect to contact
                        window.location.href = "/contact";
                      }}
                      className="w-full py-5 rounded-2xl bg-brand-600 text-white font-bold text-lg hover:bg-brand-700 active:scale-[0.98] transition-all shadow-xl shadow-brand-500/20"
                    >
                      Inquire for Admissions
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Courses;
