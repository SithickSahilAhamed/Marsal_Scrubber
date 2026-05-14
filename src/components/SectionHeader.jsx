import AnimatedSection from './AnimatedSection';

export default function SectionHeader({ badge, title, subtitle, center = true, light = false }) {
  return (
    <AnimatedSection className={`mb-12 ${center ? 'text-center' : ''}`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${
          light
            ? 'bg-white/20 text-white border border-white/30'
            : 'bg-blue-50 text-[#1D4ED8] border border-blue-100'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 ${
        light ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl ${center ? 'mx-auto' : ''} leading-relaxed ${
          light ? 'text-white/80' : 'text-gray-500'
        }`}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
