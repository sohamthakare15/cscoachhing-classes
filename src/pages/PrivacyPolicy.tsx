import React from "react";
import { FadeIn } from "../components/common/Animations";
import { Shield, AlertCircle, FileText, CheckCircle } from "lucide-react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-16">
          <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 dark:text-white">Institute Policies</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Please read our terms and conditions carefully regarding admissions, fees, and conduct.
          </p>
        </FadeIn>

        <div className="space-y-12">
          {/* Fee Policy */}
          <FadeIn delay={0.1} direction="up" className="p-8 md:p-12 rounded-[2.5rem] bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-800/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-400">Refund & Fee Policy</h2>
            </div>
            <div className="space-y-4 text-rose-800/80 dark:text-rose-300/80 leading-relaxed font-medium">
              <p>
                <strong>Strict No-Refund Policy:</strong> Once the admission fee or installmet is paid, it is strictly non-refundable under any circumstances. This includes cases of withdrawal, change of mind, or medical reasons.
              </p>
              <p>
                <strong>Timely Payments:</strong> All monthly or quarterly fees must be paid on or before the 10th of each month. A late fine may be applicable after the due date.
              </p>
              <p>
                <strong>One-Time Admission Fee:</strong> The registration fee paid at the time of admission is valid only for the current academic year.
              </p>
            </div>
          </FadeIn>

          {/* Academic & Conduct Policy */}
          <FadeIn delay={0.2} direction="up" className="p-8 md:p-12 rounded-[2.5rem] bg-gray-50 dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-800">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold dark:text-white">Code of Conduct</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-lg dark:text-brand-400">Attendance</h3>
                <ul className="space-y-3">
                  {[
                    "90% minimum attendance is mandatory.",
                    "Advance notice required for any leaves.",
                    "Missed classes will not be repeated individually.",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg dark:text-brand-400">Classroom Decorum</h3>
                <ul className="space-y-3">
                  {[
                    "Mobile phones strictly prohibited during lectures.",
                    "Proper discipline and respect for faculty.",
                    "Damage to lab property will be charged to the student.",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Privacy Note */}
          <FadeIn delay={0.3} direction="up" className="text-center text-gray-400 dark:text-gray-500 text-sm italic">
            <p className="max-w-xl mx-auto">
              CS Coaching Classes reserves the right to modify these policies at the beginning of any academic session. 
              Data collected during admission is used strictly for academic tracking and will not be shared with third parties.
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
