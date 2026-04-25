/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import Hero from "./components/Hero";
import { Mail, Phone, Instagram, Send, ExternalLink, ArrowRight, Sparkles } from "lucide-react";

const Section = ({ id, title, number, children, className = "" }: { id: string, title: string, number: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`py-32 px-6 min-h-screen flex flex-col justify-center relative overflow-hidden ${className}`}>
    <div className="max-w-5xl mx-auto w-full relative z-10">
      <div className="flex flex-col mb-20">
        <span className="font-sans font-black text-xs md:text-sm text-brand-pink uppercase tracking-[0.5em] mb-4 flex items-center gap-4">
          <div className="h-[2px] w-8 bg-brand-pink" /> {number}
        </span>
        <h2 className="font-sans font-black text-6xl md:text-8xl leading-none uppercase tracking-tighter text-brand-grey">
          {title}
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  </section>
);

export default function App() {
  return (
    <main className="bg-brand-offwhite selection:bg-brand-pink/30 selection:text-brand-grey overflow-x-hidden">
      <Hero />

      {/* 01. About Me */}
      <Section id="about" title="Обо мне" number="01." className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-xl text-brand-grey/80 leading-relaxed font-light">
            <p>
              Я — PR-менеджер, который верит, что за каждой историей успеха стоит <span className="font-bold text-brand-blue">четко выверенная стратегия</span> и толика безумия.
            </p>
            <p>
              Мой подход — это симбиоз <span className="text-brand-pink italic">системности</span> и <span className="text-brand-pink italic">творчества</span>. Шут помогает видеть возможности, а Творец — делать детали совершенными.
            </p>
            <div className="pt-8 flex flex-wrap gap-4">
              {["Кризисный PR", "SMM", "Личный бренд", "Event-стратегии"].map(tag => (
                <span key={tag} className="px-6 py-2 rounded-full border-2 border-brand-blue/20 text-brand-blue text-sm font-bold uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="glass-card p-12 rounded-[3rem] paper-shadow border-none relative z-10">
               <h3 className="font-sans font-black text-2xl mb-8 uppercase tracking-tighter">Скиллы & Магия:</h3>
               <div className="space-y-6">
                 {[
                   { label: "Креатив", val: "95%", color: "bg-brand-pink" },
                   { label: "Стратегия", val: "90%", color: "bg-brand-blue" },
                   { label: "Связи", val: "85%", color: "bg-brand-muted" }
                 ].map((s) => (
                   <div key={s.label}>
                     <div className="flex justify-between mb-2 text-xs font-black uppercase tracking-widest">
                       <span>{s.label}</span>
                       <span>{s.val}</span>
                     </div>
                     <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: s.val }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full ${s.color} rounded-full`} 
                       />
                     </div>
                   </div>
                 ))}
               </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-pink/20 rounded-full blur-2xl" />
          </div>
        </div>
      </Section>

      {/* 02. Education */}
      <Section id="education" title="Магия знаний" number="02." className="bg-brand-muted/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              year: "'18 - '22",
              degree: "Связи с общественностью",
              institution: "Государственный Университет",
              desc: "Влияние нейромаркетинга на PR. Окончила с отличием.",
              accent: "bg-brand-blue"
            },
            {
              year: "'23",
              degree: "Content Strategy",
              institution: "British Design School",
              desc: "Спецкурс по виральному контенту и управлению репутацией.",
              accent: "bg-brand-pink"
            }
          ].map((item, i) => (
            <div key={i} className="glass-card p-10 rounded-[2.5rem] hover:translate-y-[-10px] transition-transform duration-500">
              <div className={`w-14 h-14 ${item.accent} text-white flex items-center justify-center rounded-2xl font-black text-xs mb-8 shadow-lg`}>
                {item.year}
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{item.degree}</h3>
              <p className="text-brand-grey/50 font-bold text-sm mb-6 uppercase tracking-widest">{item.institution}</p>
              <p className="text-brand-grey/80 font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 03. Contacts */}
      <Section id="contact" title="Связь со мной" number="03." className="bg-brand-grey text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
              Давайте <br /> <span className="text-brand-pink italic serif-italic">хайпанем</span> <br /> вместе
            </h3>
            <div className="space-y-4">
               {["dsmamaeva0412@gmail.com", "+7 (999) 000-00-00"].map(link => (
                 <motion.a 
                  key={link}
                  href="#"
                  className="block text-xl md:text-3xl font-light hover:text-brand-pink transition-colors underline decoration-brand-pink/50 underline-offset-8"
                 >
                   {link}
                 </motion.a>
               ))}
            </div>
          </div>
          <div className="glass-card !bg-white p-12 rounded-[3.5rem] text-brand-grey">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest mb-2 block opacity-50">Ваше имя</label>
                <input type="text" className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-100 focus:border-brand-pink outline-none transition-colors" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest mb-2 block opacity-50">Ваш запрос</label>
                <textarea rows={3} className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-100 focus:border-brand-pink outline-none transition-colors resize-none"></textarea>
              </div>
              <button disabled className="bubbly-button w-full bg-brand-grey text-white hover:bg-brand-pink disabled:opacity-50">
                ОБСУДИТЬ ПРОЕКТ
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* 04. Experience */}
      <Section id="experience" title="Опыт работы" number="04." className="bg-white">
        <div className="space-y-12">
          {[
            {
              role: "Senior PR Manager",
              company: "Creative Agency 'Flash'",
              period: "2022 - PRESENT",
              color: "text-brand-blue"
            },
            {
              role: "Junior PR Specialist",
              company: "Global Tech Solutions",
              period: "2020 - 2022",
              color: "text-brand-pink"
            }
          ].map((job, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-8 group">
              <div className="font-sans font-black text-4xl md:text-6xl text-gray-100 group-hover:text-brand-pink/10 transition-colors uppercase tracking-tight">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="flex-1 pb-12 border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2">{job.role}</h3>
                    <p className="text-brand-grey/50 font-bold uppercase tracking-widest text-sm">{job.company}</p>
                  </div>
                  <span className={`text-xs font-black uppercase tracking-[0.3em] ${job.color}`}>{job.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 05. Portfolio */}
      <Section id="portfolio" title="Кейсы" number="05." className="bg-brand-pink/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "Запуск 'Cloud-9'", cat: "Tech PR", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500" },
            { title: "Urban Art Rebrand", cat: "Culture", img: "https://images.unsplash.com/photo-1541462608141-ad60397d4bc7?auto=format&fit=crop&q=80&w=500" },
            { title: "Deli SMM Strategy", cat: "Food", img: "https://images.unsplash.com/photo-1512428559083-a40e2928641a?auto=format&fit=crop&q=80&w=500" },
            { title: "FinTrust Crisis PR", cat: "Finance", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=500" }
          ].map((project, i) => (
            <motion.div 
              key={i} 
              className="group relative aspect-[16/10] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl"
              whileHover={{ scale: 0.98 }}
            >
              <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-grey to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-70">{project.cat}</span>
                <h3 className="text-4xl font-black uppercase tracking-tighter leading-none mb-6">{project.title}</h3>
                <div className="w-16 h-16 rounded-full bg-brand-pink text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                  <ArrowRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 flex flex-col items-center">
          <div className="p-12 glass-card rounded-[3rem] text-center max-w-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles size={48} />
             </div>
             <h4 className="text-3xl font-black uppercase tracking-tighter mb-4">Хотите увидеть больше?</h4>
             <p className="text-brand-grey/60 mb-8 italic font-light">У меня есть закрытые кейсы в сфере персонального брендинга звезд и политического PR. Поделитесь вашим запросом — и я открою доступ к секретным файлам.</p>
             <button className="bubbly-button bg-brand-grey text-white hover:bg-brand-blue">ЗАПРОСИТЬ КЕЙСЫ</button>
          </div>
        </div>
      </Section>

      <footer className="py-20 px-6 bg-white flex flex-col items-center">
        <div className="w-full max-w-5xl h-[1px] bg-gray-100 mb-12" />
        <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl items-center gap-8 text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
           <p>&copy; 2026 DARIA MAMAEVA</p>
           <p>CREATOR • JESTER • STRATEGIST</p>
           <p>SCROLL TOP ↑</p>
        </div>
      </footer>
    </main>
  );
}

