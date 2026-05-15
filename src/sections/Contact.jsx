import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';

const WHATSAPP_NUMBER = '918870410181';

const contactInfo = [
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 88704 10181',
    href: 'tel:+918870410181',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'info@marsal.in',
    href: 'mailto:info@marsal.in',
    color: 'bg-yellow-50 text-yellow-700',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+91 88704 10181',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'India (Pan-India Distribution)',
    href: null,
    color: 'bg-red-50 text-red-600',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setLoading(true);
    const msg = `Hi MARSAL Team,%0A%0ANew Enquiry:%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AMessage: ${encodeURIComponent(form.message || 'General enquiry')}`;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white" aria-label="Contact MARSAL">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get in Touch"
          title="We'd Love to Hear from You"
          subtitle="Whether you're a customer, retailer, or distributor — our team is ready to help."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Contact info */}
          <AnimatedSection direction="left">
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200 group">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                      <p className="text-gray-900 font-semibold text-sm mt-0.5">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="block"
                  >
                    {inner}
                  </motion.a>
                ) : (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    {inner}
                  </motion.div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MARSAL%2C%20I%20have%20a%20query.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-bold hover:bg-green-600 transition-colors shadow-lg hover:shadow-green-200 text-sm"
            >
              <FaWhatsapp size={22} />
              Start WhatsApp Chat Now
            </a>
          </AnimatedSection>

          {/* Right — Enquiry form */}
          <AnimatedSection direction="right">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="font-black text-gray-900 text-lg mb-1">Quick Enquiry</h3>
              <p className="text-gray-500 text-sm mb-6">We'll respond within 24 hours on any working day.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheck size={30} className="text-green-600" strokeWidth={2.5} />
                  </div>
                  <h4 className="font-black text-gray-900 text-lg mb-2">Message Sent!</h4>
                  <p className="text-gray-500 text-sm">WhatsApp opened with your message. We'll be in touch soon.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', message: '' }); }}
                    className="mt-6 text-[#1D4ED8] text-sm font-semibold underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us what you need..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#1D4ED8] text-white py-4 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors disabled:opacity-60 shadow-md"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <FiSend size={16} />
                        Send Enquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
