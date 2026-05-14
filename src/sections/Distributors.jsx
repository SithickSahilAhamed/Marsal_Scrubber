import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';

const WHATSAPP_NUMBER = '919445880150';

const perks = [
  'Attractive wholesale margins',
  'Consistent product availability',
  'Marketing support & materials',
  'Dedicated account manager',
  'Flexible order quantities',
  'Pan-India distribution network',
];

export default function Distributors() {
  const [form, setForm] = useState({ name: '', phone: '', business: '', city: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city) return;
    setLoading(true);
    // Build WhatsApp message with form data
    const msg = `Hi MARSAL Team,%0A%0ADistributor Enquiry:%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ABusiness: ${encodeURIComponent(form.business || 'N/A')}%0ACity: ${encodeURIComponent(form.city)}`;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    }, 600);
  };

  return (
    <section id="distributors" className="py-20 md:py-28 bg-gray-50" aria-label="Distributor enquiry">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Become a Partner"
          title="Grow with MARSAL"
          subtitle="Join India's fastest-growing cleaning brand. Unlock profitable margins and tap into the booming household products market."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — Benefits */}
          <AnimatedSection direction="left">
            <div className="bg-gradient-to-br from-[#1D4ED8] to-[#1e3a8a] rounded-3xl p-8 lg:p-10 text-white h-full">
              <h3 className="text-2xl font-black mb-2">Distributor & Dealer Benefits</h3>
              <p className="text-white/70 text-sm mb-8 leading-relaxed">
                Partner with a brand that invests in your success. MARSAL offers everything you need to build a profitable distribution business.
              </p>

              <ul className="space-y-4 mb-10">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#F4D000] rounded-full flex items-center justify-center">
                      <FiCheck size={13} className="text-gray-900" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-white/90">{perk}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/10 pt-8">
                <p className="text-white/60 text-xs mb-3 uppercase tracking-widest font-semibold">Quick Contact</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MARSAL%2C%20I%20want%20to%20become%20a%20distributor.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-bold hover:bg-green-500 transition-colors w-full justify-center group"
                >
                  <FaWhatsapp size={22} />
                  Chat Directly on WhatsApp
                  <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Enquiry form */}
          <AnimatedSection direction="right">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100">
              <h3 className="text-xl font-black text-gray-900 mb-1">Send an Enquiry</h3>
              <p className="text-gray-500 text-sm mb-6">Fill in your details and our team will reach out within 24 hours.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheck size={30} className="text-green-600" strokeWidth={2.5} />
                  </div>
                  <h4 className="font-black text-gray-900 text-lg mb-2">Enquiry Sent!</h4>
                  <p className="text-gray-500 text-sm">
                    We've opened WhatsApp with your details. Our team will connect with you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', business: '', city: '' }); }}
                    className="mt-6 text-[#1D4ED8] text-sm font-semibold underline underline-offset-2"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {[
                    { name: 'name', label: 'Full Name *', placeholder: 'Your name', type: 'text' },
                    { name: 'phone', label: 'Phone Number *', placeholder: '+91 98765 43210', type: 'tel' },
                    { name: 'business', label: 'Business Name', placeholder: 'Your shop / company name', type: 'text' },
                    { name: 'city', label: 'City *', placeholder: 'Your city', type: 'text' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.label.includes('*')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-colors"
                      />
                    </div>
                  ))}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#1D4ED8] text-white py-4 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors disabled:opacity-60 mt-2 shadow-md hover:shadow-blue-200"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <FaWhatsapp size={18} />
                        Submit via WhatsApp
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-2">
                    Your enquiry will be sent securely via WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
