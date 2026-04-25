import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const navItems = [
    { id: "01", name: "Обо мне", href: "#about", color: "bg-brand-blue" },
    { id: "02", name: "Образование", href: "#education", color: "bg-brand-muted" },
    { id: "03", name: "Контакты", href: "#contact", color: "bg-brand-pink" },
    { id: "04", name: "Опыт", href: "#experience", color: "bg-brand-grey" },
    { id: "05", name: "Портфолио", href: "#portfolio", color: "bg-brand-blue" },
  ];

  return (
    <section className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center bg-brand-offwhite relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-pink/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 z-10">
        
        {/* Left Side: Photo Collage Style */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              {/* Main Image Frame (Polaroid/Sticker style) */}
              <div className="bg-white p-3 pb-12 rotate-[-2deg] shadow-xl rounded-sm paper-shadow border border-gray-100 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[3/4] bg-brand-muted overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" 
                    alt="Daria Mamaeva" 
                    className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-brand-pink text-white p-2 rounded-full shadow-lg">
                    <Sparkles size={20} />
                  </div>
                </div>
                <div className="mt-4 font-serif italic text-brand-grey/40 text-center text-sm">PR-MANAGER 2026</div>
              </div>

              {/* Floating Sticker Effect */}
              <motion.div 
                className="absolute -bottom-6 -right-10 bg-brand-pink text-white px-6 py-2 rounded-full font-black shadow-lg text-xl rotate-[15deg] border-2 border-white"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                CREATIVE
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Content and Nav */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-brand-pink"></span>
              <p className="text-xs uppercase tracking-[0.4em] text-brand-grey font-bold opacity-70">
                ПР-МЕНЕДЖЕР & СТРАТЕГ
              </p>
            </div>

            <h1 className="hero-title">
              Дарья<br />
              <span className="serif-italic text-brand-blue">Мамаева</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl font-light text-brand-grey/80 leading-relaxed max-w-xl">
              Специалист по связям с общественностью. Создаю <span className="text-brand-pink font-bold">смыслы</span>, 
              выстраиваю <span className="text-brand-blue font-bold">репутацию</span> и делаю бренды легендарными.
            </p>
          </motion.div>

          {/* Navigation Buttons (Taplink style keyboard-like buttons) */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${item.color} text-white px-8 py-4 rounded-[1.5rem] shadow-lg shadow-black/5 flex items-center justify-between min-w-[180px] group`}
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-black opacity-40 leading-none mb-1 uppercase tracking-tighter">{item.id}.</span>
                  <span className="text-md font-black uppercase tracking-tighter whitespace-nowrap">{item.name}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-blue transition-colors ml-4">
                  <ArrowRight size={14} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer-like status bar */}
      <div className="absolute bottom-8 left-0 w-full px-8 flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[0.4em]">
         <p>STRATEGY • CREATIVE • PR</p>
         <div className="flex items-center gap-4">
           <span>SCROLL TO EXPLORE</span>
           <div className="w-8 h-[1px] bg-brand-grey"></div>
         </div>
      </div>
    </section>
  );
}
