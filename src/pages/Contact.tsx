import React, { useState } from "react";
import { Phone, MapPin, ExternalLink, Send, MessageCircle, Clock } from "lucide-react";
import { FadeIn } from "../components/common/Animations";
import { useSite } from "../context/SiteContext";

const Contact: React.FC = () => {
  const { addEnquiry } = useSite();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    standard: "11th Standard"
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, phoneNumber, standard } = formData;
    const errors: Record<string, string> = {};
    if (!firstName.trim()) errors.firstName = "First name is required";
    if (!lastName.trim()) errors.lastName = "Last name is required";
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\+?[0-9]{10,15}$/.test(phoneNumber.replace(/[\s-]/g, ''))) {
      errors.phoneNumber = "Enter a valid phone number";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Log enquiry to admin dashboard
    addEnquiry(formData);

    const message = `Hello, I would like to inquire about admission.%0A%0AName: ${firstName} ${lastName}%0ANumber: ${phoneNumber}%0AStandard: ${standard}`;
    window.open(`https://wa.me/918381070236?text=${message}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 dark:text-white">Get in Touch</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Have questions about our courses or the admission process? We're here to help you every step of the way.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <FadeIn direction="left" className="glass-card p-10 rounded-[2.5rem] border border-gray-100 dark:border-neutral-800">
               <h3 className="text-2xl font-bold mb-8 dark:text-white">Contact Information</h3>
               <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                     <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Call Us</p>
                        <p className="text-xl font-bold dark:text-white">+91 8381070236</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                     <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <MessageCircle className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">WhatsApp</p>
                        <p className="text-xl font-bold dark:text-white">+91 8381070236</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                     <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Visit Us</p>
                        <p className="text-lg font-bold dark:text-white leading-tight">Near Gajanan Maharaj Temple, <br /> Yavatmal, MH 445001</p>
                     </div>
                  </div>
               </div>

               <div className="mt-12 pt-12 border-t border-gray-100 dark:border-neutral-800">
                  <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                     <Clock className="w-5 h-5 text-brand-500" />
                     <div className="text-sm">
                        <p className="font-bold">Mon - Sat: 3:00 PM - 8:00 PM</p>
                        <p>Sunday: Closed</p>
                     </div>
                  </div>
               </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
               <a 
                 href="https://maps.app.goo.gl/d3pWFu5ELAv9AZ4A9" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block glass-card p-6 rounded-[2.5rem] border border-gray-100 dark:border-neutral-800 hover:shadow-xl transition-all group"
               >
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-2xl flex items-center justify-center">
                           <MapPin className="w-6 h-6" />
                        </div>
                        <span className="font-bold dark:text-white">View on Google Maps</span>
                     </div>
                     <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-brand-500 transition-colors" />
                  </div>
               </a>
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
             <FadeIn direction="right" className="glass-card p-10 md:p-16 rounded-[2.5rem] border border-gray-100 dark:border-neutral-800 shadow-2xl shadow-brand-500/5">
                <h3 className="text-3xl font-black tracking-tight mb-8 dark:text-white">Send an Admission Inquiry</h3>
                <form onSubmit={handleInquirySubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold tracking-wide text-gray-700 dark:text-gray-300 ml-1">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className={`w-full px-6 py-4 rounded-2xl border ${formErrors.firstName ? 'border-red-500' : 'border-gray-100 dark:border-neutral-800'} bg-gray-50 dark:bg-neutral-800 focus:ring-2 focus:ring-brand-500/20 outline-none dark:text-white transition-all`}
                      />
                      {formErrors.firstName && <p className="text-xs text-red-500 ml-1 mt-1 font-bold">{formErrors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold tracking-wide text-gray-700 dark:text-gray-300 ml-1">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className={`w-full px-6 py-4 rounded-2xl border ${formErrors.lastName ? 'border-red-500' : 'border-gray-100 dark:border-neutral-800'} bg-gray-50 dark:bg-neutral-800 focus:ring-2 focus:ring-brand-500/20 outline-none dark:text-white transition-all`}
                      />
                      {formErrors.lastName && <p className="text-xs text-red-500 ml-1 mt-1 font-bold">{formErrors.lastName}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold tracking-wide text-gray-700 dark:text-gray-300 ml-1">Phone Number (WhatsApp Preferred)</label>
                    <input 
                      type="tel" 
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+91 12345 67890"
                      className={`w-full px-6 py-4 rounded-2xl border ${formErrors.phoneNumber ? 'border-red-500' : 'border-gray-100 dark:border-neutral-800'} bg-gray-50 dark:bg-neutral-800 focus:ring-2 focus:ring-brand-500/20 outline-none dark:text-white transition-all`}
                    />
                    {formErrors.phoneNumber && <p className="text-xs text-red-500 ml-1 mt-1 font-bold">{formErrors.phoneNumber}</p>}
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-bold tracking-wide text-gray-700 dark:text-gray-300 ml-1">Standard / Course</label>
                    <select 
                      name="standard"
                      value={formData.standard}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800 focus:ring-2 focus:ring-brand-500/20 outline-none dark:text-white transition-all appearance-none cursor-pointer"
                    >
                      <option value="11th Standard">11th Standard CS</option>
                      <option value="12th Standard">12th Standard CS</option>
                      <option value="Programming Only">Programming Course (C++, Java, Python)</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 rounded-2xl bg-brand-600 text-white font-black text-lg hover:bg-brand-700 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-2xl shadow-brand-500/20 mt-8"
                  >
                    Send to WhatsApp <Send className="w-5 h-5" />
                  </button>
                  <p className="text-center text-xs text-gray-500 font-medium">We usually respond within 2-4 business hours.</p>
                </form>
             </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
