import { motion, AnimatePresence } from "motion/react";
import { Settings, X, Save, Bell, BarChart3, MessageSquare, Briefcase, Plus, Trash2, ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Lenis from '@studio-freight/lenis';
import { useSite, SiteConfig } from "./context/SiteContext";

// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const NoticePopup = () => {
  const { config } = useSite();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (config.notice.enabled) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [config.notice.enabled]);

  if (!config.notice.enabled) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-white dark:bg-neutral-900 rounded-[2.5rem] shadow-2xl overflow-hidden p-8 md:p-10 text-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-400 dark:text-gray-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-20 h-20 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Bell className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black tracking-tight mb-4 dark:text-white">Important Notice</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              {config.notice.text}
            </p>

            <div className="space-y-3">
              {config.notice.link && (
                <Link
                  to={config.notice.link}
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-4 rounded-2xl bg-brand-600 text-white font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20"
                >
                  Learn More
                </Link>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-4 rounded-2xl bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white font-bold hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const { config, updateConfig, enquiries } = useSite();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  
  // Local form states for admin
  const [tempConfig, setTempConfig] = useState<SiteConfig>(config);

  useEffect(() => {
    setTempConfig(config);
  }, [config, isAdminOpen]);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === "admin123") {
      setIsAuthorized(true);
      setAdminPassword("");
    } else {
      alert("Incorrect password!");
    }
  };

  const handleSave = () => {
    updateConfig(tempConfig);
    setIsAdminOpen(false);
    setIsAuthorized(false);
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-neutral-950 transition-colors duration-300">
      <ScrollToTop />
      <NoticePopup />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      <Footer onAdminClick={() => setIsAdminOpen(true)} />

      {/* Admin Dashboard Modal */}
      <AnimatePresence>
        {isAdminOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsAdminOpen(false);
                setIsAuthorized(false);
              }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row h-[80vh]"
            >
              {!isAuthorized ? (
                <div className="w-full flex items-center justify-center p-8">
                  <div className="w-full max-w-sm">
                    <div className="flex flex-col items-center mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                        <Settings className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold dark:text-white">Admin Portal</h3>
                    </div>
                    <form onSubmit={handleAdminLogin} className="space-y-4">
                      <input 
                        type="password" 
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        placeholder="Admin Password"
                        className="w-full px-6 py-4 rounded-2xl border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800 dark:text-white focus:ring-2 focus:ring-brand-500/20 focus:outline-none transition-all"
                        autoFocus
                      />
                      <button 
                        type="submit"
                        className="w-full py-4 rounded-2xl bg-brand-600 text-white font-bold hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20"
                      >
                        Unlock Dashboard
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <>
                  {/* Admin Sidebar */}
                  <div className="w-full md:w-64 bg-gray-50 dark:bg-neutral-800/50 border-r border-gray-100 dark:border-neutral-800 p-6 flex flex-col">
                    <h3 className="text-brand-600 font-black tracking-widest text-xs uppercase mb-8">Management</h3>
                    <nav className="flex flex-col gap-2">
                       {[
                         { id: 'general', icon: Settings, label: 'General' },
                         { id: 'notice', icon: Bell, label: 'Notice Popup' },
                         { id: 'stats', icon: BarChart3, label: 'Success Stats' },
                         { id: 'testimonials', icon: MessageSquare, label: 'Reviews' },
                         { id: 'faqs', icon: MessageSquare, label: 'FAQs' },
                         { id: 'enquiries', icon: Briefcase, label: 'Enquiry Log' }
                       ].map(tab => (
                         <button
                           key={tab.id}
                           onClick={() => setActiveTab(tab.id)}
                           className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                             activeTab === tab.id 
                               ? "bg-white dark:bg-neutral-800 text-brand-600 shadow-sm" 
                               : "text-gray-500 hover:text-brand-500"
                           }`}
                         >
                           <tab.icon className="w-4 h-4" /> {tab.label}
                         </button>
                       ))}
                    </nav>
                    <div className="mt-auto pt-6">
                       <button 
                         onClick={handleSave}
                         className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-600 text-white font-bold shadow-lg shadow-brand-500/20"
                       >
                         <Save className="w-4 h-4" /> Save All
                       </button>
                    </div>
                  </div>

                  {/* Admin Content Area */}
                  <div className="flex-grow p-8 overflow-y-auto no-scrollbar bg-white dark:bg-neutral-900">
                    <div className="flex justify-between items-center mb-8">
                       <h2 className="text-2xl font-black tracking-tight dark:text-white capitalize">{activeTab} Management</h2>
                       <button onClick={() => setIsAdminOpen(false)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"><X /></button>
                    </div>

                    {activeTab === 'general' && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Admission Year</label>
                          <input 
                            type="text" 
                            value={tempConfig.admissionYear}
                            onChange={(e) => setTempConfig({...tempConfig, admissionYear: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-2">
                              <label className="text-sm font-bold">Faculty Quals</label>
                              <input 
                                type="text"
                                value={tempConfig.faculty.qualifications}
                                onChange={(e) => setTempConfig({...tempConfig, faculty: {...tempConfig.faculty, qualifications: e.target.value}})}
                                className="w-full px-4 py-3 rounded-xl border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800"
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-bold">Faculty Exp</label>
                              <input 
                                type="text"
                                value={tempConfig.faculty.experience}
                                onChange={(e) => setTempConfig({...tempConfig, faculty: {...tempConfig.faculty, experience: e.target.value}})}
                                className="w-full px-4 py-3 rounded-xl border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800"
                              />
                           </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'notice' && (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-neutral-800 rounded-2xl">
                           <span className="font-bold">Enable Notice Banner</span>
                           <button 
                             onClick={() => setTempConfig({...tempConfig, notice: {...tempConfig.notice, enabled: !tempConfig.notice.enabled}})}
                             className={`w-12 h-6 rounded-full transition-all flex items-center px-1 ${tempConfig.notice.enabled ? 'bg-brand-600' : 'bg-gray-300'}`}
                           >
                             <div className={`w-4 h-4 rounded-full bg-white transition-all ${tempConfig.notice.enabled ? 'translate-x-6' : 'translate-x-0'}`} />
                           </button>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold">Banner Text</label>
                          <textarea 
                            value={tempConfig.notice.text}
                            onChange={(e) => setTempConfig({...tempConfig, notice: {...tempConfig.notice, text: e.target.value}})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800 min-h-[100px]"
                          />
                        </div>
                      </div>
                    )}

                    {activeTab === 'stats' && (
                      <div className="space-y-6">
                        {tempConfig.stats.map((stat, i) => (
                          <div key={i} className="flex items-center gap-4 p-4 border border-gray-100 dark:border-neutral-800 rounded-2xl">
                             <div className="flex-grow space-y-4">
                                <input 
                                  value={stat.label}
                                  onChange={(e) => {
                                    const newStats = [...tempConfig.stats];
                                    newStats[i].label = e.target.value;
                                    setTempConfig({...tempConfig, stats: newStats});
                                  }}
                                  className="w-full bg-transparent font-bold"
                                  placeholder="Stat Label"
                                />
                                <input 
                                  value={stat.value}
                                  onChange={(e) => {
                                    const newStats = [...tempConfig.stats];
                                    newStats[i].value = e.target.value;
                                    setTempConfig({...tempConfig, stats: newStats});
                                  }}
                                  className="w-full bg-transparent text-sm"
                                  placeholder="Stat Value"
                                />
                             </div>
                             <div className="p-3 rounded-xl bg-gray-50 dark:bg-neutral-800">
                                <stat.iconName className="w-5 h-5 text-brand-600" />
                             </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'testimonials' && (
                      <div className="space-y-6">
                        <button 
                          onClick={() => setTempConfig({
                            ...tempConfig, 
                            testimonials: [{ id: Date.now().toString(), name: "New Student", role: "HSC 2024", content: "Great experience...", rating: 5 }, ...tempConfig.testimonials]
                          })}
                          className="w-full py-3 rounded-xl border-2 border-dashed border-gray-200 dark:border-neutral-800 text-gray-500 flex items-center justify-center gap-2 hover:border-brand-500 hover:text-brand-500 transition-all font-bold"
                        >
                          <Plus className="w-4 h-4" /> Add New Review
                        </button>
                        {tempConfig.testimonials.map((t, i) => (
                          <div key={t.id} className="p-6 border border-gray-100 dark:border-neutral-800 rounded-3xl space-y-4 relative group">
                             <button 
                               onClick={() => setTempConfig({...tempConfig, testimonials: tempConfig.testimonials.filter(item => item.id !== t.id)})}
                               className="absolute top-4 right-4 p-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                             >
                                <Trash2 className="w-4 h-4" />
                             </button>
                             <input 
                               value={t.name}
                               onChange={(e) => {
                                 const newTest = [...tempConfig.testimonials];
                                 newTest[i].name = e.target.value;
                                 setTempConfig({...tempConfig, testimonials: newTest});
                               }}
                               className="font-bold bg-transparent w-full"
                             />
                             <textarea 
                               value={t.content}
                               onChange={(e) => {
                                 const newTest = [...tempConfig.testimonials];
                                 newTest[i].content = e.target.value;
                                 setTempConfig({...tempConfig, testimonials: newTest});
                               }}
                               className="text-sm text-gray-500 bg-transparent w-full min-h-[80px]"
                             />
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'faqs' && (
                      <div className="space-y-6">
                        <button 
                          onClick={() => setTempConfig({
                            ...tempConfig, 
                            faqs: [{ id: Date.now().toString(), question: "New Question", answer: "Our answer is..." }, ...tempConfig.faqs]
                          })}
                          className="w-full py-3 rounded-xl border-2 border-dashed border-gray-200 dark:border-neutral-800 text-gray-500 flex items-center justify-center gap-2 hover:border-brand-500 hover:text-brand-500 transition-all font-bold"
                        >
                          <Plus className="w-4 h-4" /> Add New FAQ
                        </button>
                        {tempConfig.faqs.map((f, i) => (
                          <div key={f.id} className="p-6 border border-gray-100 dark:border-neutral-800 rounded-3xl space-y-4 relative group">
                             <button 
                               onClick={() => setTempConfig({...tempConfig, faqs: tempConfig.faqs.filter(item => item.id !== f.id)})}
                               className="absolute top-4 right-4 p-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                             >
                                <Trash2 className="w-4 h-4" />
                             </button>
                             <input 
                               value={f.question}
                               onChange={(e) => {
                                 const newFaqs = [...tempConfig.faqs];
                                 newFaqs[i].question = e.target.value;
                                 setTempConfig({...tempConfig, faqs: newFaqs});
                               }}
                               className="font-bold bg-transparent w-full"
                               placeholder="Enter question"
                             />
                             <textarea 
                               value={f.answer}
                               onChange={(e) => {
                                 const newFaqs = [...tempConfig.faqs];
                                 newFaqs[i].answer = e.target.value;
                                 setTempConfig({...tempConfig, faqs: newFaqs});
                               }}
                               className="text-sm text-gray-500 bg-transparent w-full min-h-[80px]"
                               placeholder="Enter answer"
                             />
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'enquiries' && (
                      <div className="space-y-4">
                        {enquiries.length === 0 ? (
                          <div className="text-center py-12 text-gray-400">No enquiries logged yet.</div>
                        ) : (
                          enquiries.map(e => (
                            <div key={e.id} className="p-4 border border-gray-100 dark:border-neutral-800 rounded-2xl bg-gray-50/50 dark:bg-neutral-800/30">
                               <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-bold dark:text-white">{e.firstName} {e.lastName}</h4>
                                  <span className="text-[10px] uppercase font-bold text-gray-400">{new Date(e.timestamp).toLocaleDateString()}</span>
                               </div>
                               <p className="text-sm font-medium text-brand-600 mb-1">{e.standard}</p>
                               <p className="text-xs text-gray-500">{e.phoneNumber}</p>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
