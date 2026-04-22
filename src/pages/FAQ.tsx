import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { FadeIn } from "../components/common/Animations";
import { Link } from "react-router-dom";
import { useSite } from "../context/SiteContext";

const AccordionItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 dark:border-neutral-800 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-gray-400 dark:text-neutral-600 group-hover:text-brand-500 transition-colors"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600 dark:text-gray-400 leading-relaxed text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const { config } = useSite();
  const faqs = config.faqs;

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 dark:text-white">Frequently Asked Questions</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Everything you need to know about our coaching methodology and admissions.
          </p>
        </FadeIn>

        <FadeIn className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-neutral-800 shadow-2xl shadow-gray-100/50 dark:shadow-none mb-16">
          <div className="divide-y divide-gray-50 dark:divide-neutral-800">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} {...faq} />
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="up" className="text-center">
           <div className="p-10 rounded-[2.5rem] bg-brand-600 text-white shadow-2xl shadow-brand-500/30">
              <MessageCircle className="w-12 h-12 mx-auto mb-6 opacity-80" />
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="opacity-90 max-w-lg mx-auto mb-8">
                If you couldn't find the answer you were looking for, feel free to reach out to us directly.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand-600 font-bold hover:bg-gray-100 transition-all group">
                 Contact Us Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default FAQ;
