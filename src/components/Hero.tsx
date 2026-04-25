import { motion } from "motion/react";
import { ArrowRight, Sparkles, Star, Circle, Heart } from "lucide-react";

export default function Hero() {
  const navItems = [
    { id: "01", name: "Обо мне & Путь", href: "#about", color: "bg-brand-pink", textColor: "text-brand-grey" },
    { id: "02", name: "Кейсы", href: "#portfolio", color: "bg-brand-blue", textColor: "text-white" },
    { id: "03", name: "Связь", href: "#contact", color: "bg-brand-grey", textColor: "text-white" },
  ];

  return (
    <section className="min-h-screen p-6 md:p-12 flex flex-col items-center justify-center bg-brand-offwhite relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] pink-glow blur-[100px] opacity-40 animate-pulse" />
      <div className="absolute bottom-[0%] right-[-5%] w-[40%] h-[40%] bg-brand-blue/10 rounded-full blur-[100px] opacity-30" />
      
      {/* Decorative Ornaments */}
      <motion.div 
        className="absolute top-20 right-20 text-brand-pink opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={60} />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-10 text-brand-blue opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Star size={40} fill="currentColor" />
      </motion.div>

      <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 z-10">
        
        {/* Profile Visual */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative group floating"
          >
            {/* Multiple frames for "collage" depth */}
            <div className="absolute inset-0 bg-brand-pink/20 translate-x-4 translate-y-4 rounded-[2rem] -rotate-3" />
            <div className="bg-white p-4 shadow-2xl rounded-[2rem] border border-gray-100 relative overflow-hidden group-hover:rotate-0 transition-transform duration-700">
              <div className="aspect-[4/5] bg-gray-50 rounded-[1.5rem] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Daria Mamaeva" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-6 right-6 bg-brand-pink text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white transform rotate-12">
                   <Heart size={24} fill="currentColor" />
                </div>
              </div>
              <div className="mt-6 flex justify-between items-end px-2">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-1">MAMAEVA • 2026</p>
                  <p className="font-serif italic text-brand-grey text-xl leading-none">PR Strategist</p>
                </div>
                <div className="flex gap-1">
                   <div className="w-2 h-2 rounded-full bg-brand-pink" />
                   <div className="w-2 h-2 rounded-full bg-brand-blue" />
                   <div className="w-2 h-2 rounded-full bg-brand-muted" />
                </div>
              </div>
            </div>

            {/* Sticker Labels */}
            <div className="absolute -top-10 -left-10 bg-brand-blue text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-lg -rotate-12 border-2 border-white">
               Verified Persona
            </div>
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-1 w-16 bg-brand-pink rounded-full" />
                <p className="text-sm font-black uppercase tracking-[0.5em] text-brand-grey/60">
                  CREATIVE PR & STRATEGY
                </p>
              </div>

              <h1 className="hero-title">
                <span className="block mb-2">Дарья</span>
                <span className="serif-italic text-brand-pink relative">
                  Мамаева
                  <motion.div 
                    className="absolute -right-12 top-0 text-brand-blue"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Circle size={40} className="opacity-20" strokeWidth={8} />
                  </motion.div>
                </span>
              </h1>
            </div>

            <p className="text-2xl md:text-3xl font-light text-brand-grey leading-tight max-w-2xl font-display">
              Я создаю <span className="text-brand-blue font-black underline decoration-brand-pink decoration-4 underline-offset-8">смыслы</span>, которые заставляют людей <span className="serif-italic">говорить</span> о вашем бренде.
            </p>

            <div className="flex flex-wrap gap-6 pt-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  whileHover={{ y: -8, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${item.color} ${item.textColor} bubbly-button px-10`}
                >
                  <span className="text-xs font-black opacity-40">{item.id}.</span>
                  <span>{item.name}</span>
                  <ArrowRight size={18} />
                </motion.a>
              ))}
            </div>

            <div className="pt-10 flex items-center gap-10 opacity-40">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em]">
                50+ Реализованных проектов в PR & Media
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Ribbon Styled Marquee */}
      <div className="absolute bottom-0 left-0 w-full bg-brand-pink text-white py-4 overflow-hidden border-t-2 border-white/20 whitespace-nowrap hidden md:block">
        <motion.div 
          className="flex gap-20 font-black text-xs uppercase tracking-[1em]"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {Array(10).fill("SYNERGY • CREATIVITY • REPUTATION • GROWTH • VISIBILITY • ").map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
