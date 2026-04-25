/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import Hero from "./components/Hero";
import { Mail, Phone, Instagram, Send, ExternalLink, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { experienceData } from "./data/experience";

const Section = ({ id, title, number, children, className = "" }: { id: string, title: string, number: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`py-32 px-6 min-h-screen flex flex-col justify-center relative overflow-hidden ${className}`}>
    <div className="max-w-6xl mx-auto w-full relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div>
          <span className="font-sans font-black text-sm text-brand-pink uppercase tracking-[1em] mb-6 block drop-shadow-sm">
            SECTION {number}
          </span>
          <h2 className="font-sans font-black text-7xl md:text-9xl leading-[0.8] uppercase tracking-tighter text-brand-grey mb-4">
            {title.split(' ')[0]} <br />
            <span className="serif-italic text-brand-pink-dark">
              {title.split(' ').slice(1).join(' ')}
            </span>
          </h2>
        </div>
        <div className="hidden lg:block">
          <motion.div 
            className="w-32 h-32 rounded-full border-4 border-dashed border-brand-pink/30 flex items-center justify-center p-4 text-brand-pink/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={40} />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "circOut" }}
      >
        {children}
      </motion.div>
    </div>
    
    {/* Background Shapes */}
    <div className="absolute top-1/2 -right-20 w-80 h-80 bg-brand-pink/5 rounded-full blur-[100px]" />
    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-brand-blue/5 rounded-full blur-[100px]" />
  </section>
);

export default function App() {
  return (
    <main className="bg-brand-offwhite selection:bg-brand-pink/30 selection:text-brand-grey overflow-x-hidden">
      <Hero />

      {/* 01. About Me & Professional Path */}
      <Section id="about" title="Обо мне & Путь" number="01." className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Personal Context */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-pink mb-4">Бэкграунд</h3>
              <div className="text-lg md:text-xl text-brand-grey/80 leading-relaxed font-light space-y-6">
                <p>
                  Завершаю магистратуру по медиапроизводству. Создаю проекты на стыке <span className="font-bold text-brand-blue">текста, визуальной эстетики и данных</span>. 
                </p>
                <p>
                  Прошла путь от редактора ленты новостей до креативного стратега. Помогаю брендам находить свой голос и системно укреплять позиции на рынке через имиджевые ивенты и мультимедийный сторителлинг. Использую академическую базу для глубокого анализа инфополя и прикладные <span className="text-brand-pink font-bold">AI-инструменты</span> для создания вирального контента.
                </p>
              </div>
            </div>
            
            {/* Education Block - Visual Secondary */}
            <div className="pt-8 border-t border-gray-100">
               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue mb-6">Образование</h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex gap-4 group">
                     <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center p-1.5 shrink-0 group-hover:scale-110 transition-transform">
                        <img src="https://www.hse.ru/favicon.ico" className="w-full h-full object-contain" alt="HSE" />
                     </div>
                     <div>
                        <p className="font-bold text-brand-grey text-[13px] leading-tight">НИУ ВШЭ • <span className="text-brand-pink">2026</span></p>
                        <p className="text-[10px] text-brand-grey/40 uppercase tracking-widest mt-1">«Медиапроизводство и медиааналитика»</p>
                     </div>
                  </div>
                  <div className="flex gap-4 group">
                     <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center p-1.5 shrink-0 group-hover:scale-110 transition-transform">
                        <img src="https://lengu.ru/favicon.ico" className="w-full h-full object-contain" alt="Uni" />
                     </div>
                     <div>
                        <p className="font-bold text-brand-grey text-[13px] leading-tight">ЛГУ им. Пушкина • <span className="text-brand-pink">2024</span></p>
                        <p className="text-[10px] text-brand-grey/40 uppercase tracking-widest mt-1">Бакалавриат «Журналистика»</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Detailed Skills & Ecosystem */}
            <div className="space-y-10">
               <div className="glass-card p-10 rounded-[3rem] paper-shadow border-none space-y-10">
                  <h3 className="font-sans font-black text-2xl uppercase tracking-tighter flex items-center gap-3">
                    Скиллы & Магия <ArrowRight size={20} className="text-brand-pink" />
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      { label: "Креативный PR & Сторителлинг", val: "98%", color: "bg-brand-pink" },
                      { label: "Работа со СМИ & Тексты", val: "95%", color: "bg-brand-blue" },
                      { label: "SMM & New Media", val: "90%", color: "bg-brand-muted" },
                      { label: "AI tools & Аналитика", val: "85%", color: "bg-brand-pink" },
                      { label: "Event-маркетинг", val: "88%", color: "bg-brand-blue" },
                      { label: "Управление репутацией", val: "82%", color: "bg-brand-muted" }
                    ].map((s) => (
                      <div key={s.label}>
                        <div className="flex justify-between mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-grey/60">
                          <span>{s.label}</span>
                          <span>{s.val}</span>
                        </div>
                        <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: s.val }}
                            transition={{ duration: 1.2, ease: "circOut" }}
                            className={`h-full ${s.color} rounded-full`} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-[10px] font-bold text-brand-grey/40 uppercase tracking-widest leading-loose">
                      * Уровень «Продвинутый» подтвержден 5-летним опытом и академической базой.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-grey/40 mb-6 flex items-center gap-4">
                    Экосистема навыков <div className="h-[1px] flex-1 bg-gray-100" />
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Кризисный PR", "SMM", "Личный бренд", "Event-стратегии",
                      "Написание текстов", "Работа со СМИ", "Журналистика", 
                      "Редакторская деятельность", "Мониторинг СМИ", "Нейронные сети",
                      "Media Relations", "HR-брендинг", "Управление репутацией"
                    ].map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-full border border-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest bg-brand-blue/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Detailed Life Outside Work */}
                <details className="group glass-card !bg-brand-beige/20 p-8 rounded-3xl border-none cursor-pointer overflow-hidden transition-all duration-500 open:pb-10">
                  <summary className="flex items-center justify-between list-none">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-pink text-white flex items-center justify-center group-open:rotate-45 transition-transform shadow-lg shadow-brand-pink/20">
                        <Sparkles size={18} />
                      </div>
                      <span className="font-sans font-black uppercase tracking-tighter text-xl">За пределами офиса</span>
                    </div>
                    <div className="text-brand-pink font-black text-2xl group-open:hidden">+</div>
                    <div className="text-brand-pink font-black text-2xl hidden group-open:block">−</div>
                  </summary>
                  <div className="mt-8 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-brand-grey/70 leading-relaxed font-light">
                      <div className="space-y-4">
                        <ul className="space-y-4">
                          <li><strong className="text-brand-blue uppercase text-[10px] tracking-widest block mb-1">Шитье</strong> Часть моего гардероба — это вещи, отшитые вручную на собственной машинке.</li>
                          <li><strong className="text-brand-blue uppercase text-[10px] tracking-widest block mb-1">Растения</strong> В коллекции уже 15 тропических кашпо.</li>
                          <li><strong className="text-brand-blue uppercase text-[10px] tracking-widest block mb-1">Спорт</strong> 5 лет регулярных силовых тренировок и бассейн.</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <ul className="space-y-4">
                          <li><strong className="text-brand-pink uppercase text-[10px] tracking-widest block mb-1">Чтение</strong> Знаю ~200 стихотворений наизусть.</li>
                          <li><strong className="text-brand-pink uppercase text-[10px] tracking-widest block mb-1">Вязание</strong> От шарфов-капюшонов до винтажных игрушек крючком.</li>
                          <li><strong className="text-brand-pink uppercase text-[10px] tracking-widest block mb-1">Дисциплина</strong> Похудела на 18кг, что подтверждает умение идти к целям.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </details>
            </div>
          </div>

          {/* Right Column: Professional Path */}
          <div className="lg:col-span-6">
            <div className="space-y-12">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-brand-blue/20">
                Карьерный <br /> <span className="text-brand-grey">Трек</span>
              </h3>
              
              <div className="space-y-6">
                {experienceData.map((job) => (
                  <details key={job.id} className="group glass-card !bg-white p-6 rounded-3xl border border-brand-pink/5 cursor-pointer overflow-hidden transition-all duration-300">
                    <summary className="flex items-start justify-between list-none">
                      <div className="flex gap-6 items-start">
                        <div className="font-sans font-black text-2xl text-brand-blue/20 group-hover:text-brand-blue transition-colors shrink-0">
                          {job.id}
                        </div>
                        <div className="space-y-1">
                           <span className="text-[10px] font-black text-brand-pink uppercase tracking-widest leading-none block mb-1">{job.period}</span>
                           <h4 className="text-xl font-black uppercase tracking-tighter text-brand-grey leading-none">{job.company}</h4>
                           <p className="text-[10px] font-bold text-brand-grey/40 uppercase tracking-widest">{job.role}</p>
                        </div>
                      </div>
                      <ChevronDown size={20} className="text-brand-pink group-open:rotate-180 transition-transform shrink-0 mt-1" />
                    </summary>
                    <div className="mt-8 space-y-8 pl-12 border-l-2 border-brand-pink/10">
                      <div className="space-y-4">
                        <h5 className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-pink">Основные задачи</h5>
                        <ul className="space-y-3">
                          {job.tasks.map((task, idx) => (
                            <li key={idx} className="text-xs text-brand-grey/70 leading-relaxed font-light relative pl-4">
                              <span className="absolute left-0 top-1.5 w-1 h-1 bg-brand-pink rounded-full" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {job.results && job.results.length > 0 && (
                        <div className="space-y-6">
                          <h5 className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-blue">Ключевые результаты</h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {job.results.map((res, idx) => (
                              <div key={idx} className="glass-card !bg-brand-offwhite p-4 rounded-2xl border-none">
                                <span className="block text-brand-blue font-black text-xs mb-1 uppercase tracking-tighter">{res.label}</span>
                                <p className="text-[10px] text-brand-grey/60 leading-relaxed font-light italic">{res.text}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {job.tags && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {job.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-brand-blue/5 text-brand-blue text-[8px] font-bold uppercase tracking-widest rounded-full border border-brand-blue/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>

              <div className="p-8 rounded-[2rem] bg-brand-blue/5 border border-brand-blue/10">
                 <p className="text-xs font-bold text-brand-blue uppercase tracking-widest leading-loose mb-2">Общий стаж в медиа: 5+ лет</p>
                 <p className="text-[11px] text-brand-grey/50 leading-relaxed italic">
                   От региональных СМИ до федеральных повесток и частного консалтинга.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </Section>


      {/* 02. Portfolio */}
      <Section id="portfolio" title="Мои Кейсы" number="02." className="bg-brand-pink/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {[
            { title: "Personal Brand Strategy", cat: "Lifestyle", year: "2024", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" },
            { title: "Boutique Event PR", cat: "Fashion", year: "2023", img: "https://images.unsplash.com/photo-1541462608141-ad60397d4bc7?auto=format&fit=crop&q=80&w=1000" },
            { title: "Tech Startup Launch", cat: "Digital", year: "2023", img: "https://images.unsplash.com/photo-1512428559083-a40e2928641a?auto=format&fit=crop&q=80&w=1000" },
            { title: "Crisis Management", cat: "Corporate", year: "2024", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000" }
          ].map((project, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 0.98 }}
              className="group relative aspect-[4/3] rounded-[4rem] overflow-hidden cursor-pointer shadow-3xl"
            >
              <img 
                src={project.img} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-grey/90 via-brand-grey/20 to-transparent p-12 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-brand-pink font-black uppercase tracking-[0.5em] text-[10px] mb-4">{project.cat} • {project.year}</span>
                <h3 className="text-white text-5xl font-black uppercase tracking-tighter leading-none mb-8">{project.title}</h3>
                <div className="flex gap-4">
                   <button className="px-8 py-3 bg-white text-brand-grey rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-pink transition-colors">
                     VIEW CASE
                   </button>
                   <button className="w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center text-white hover:border-white transition-colors">
                      <ExternalLink size={18} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32 flex flex-col items-center">
           <div className="p-16 glass-card rounded-[5rem] text-center max-w-4xl relative overflow-hidden paper-shadow border-none bg-brand-pink/10">
              <div className="absolute top-0 right-0 p-12 opacity-20 text-brand-pink-dark">
                 <Sparkles size={160} />
              </div>
              <h4 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.8]">
                ХОТИТЕ <br />
                <span className="serif-italic text-brand-pink-dark underline decoration-brand-blue decoration-8 underline-offset-10">БОЛЬШЕ КЕЙСОВ?</span>
              </h4>
              <p className="text-brand-grey text-xl mb-12 font-light max-w-xl mx-auto italic">
                Есть проекты, о которых нельзя кричать. Политический PR, личные бренды ТОП-лиц. Оставьте запрос — и мы обсудим детали.
              </p>
              <button className="bubbly-button bg-brand-grey text-white hover:bg-brand-pink hover:text-white px-16 py-6 text-lg">
                ЗАПРОСИТЬ ДОСТУП <Send size={24} />
              </button>
           </div>
        </div>
      </Section>

      {/* 03. Contacts */}
      <Section id="contact" title="Контакты" number="03." className="bg-brand-grey text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="flex flex-col justify-center gap-12">
            <h3 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-4 leading-none text-brand-pink">
              HI!<br />
              <span className="text-white serif-italic">Daria</span>
            </h3>
            <div className="space-y-6">
               {[
                 { label: "EMAIL", val: "ds_mamaeva@mail.ru", icon: Mail, color: "text-brand-pink" },
                 { label: "TELEGRAM", val: "@d_s_m", icon: Send, color: "text-brand-blue" },
                 { label: "TELEPHONE", val: "8 911 244 10 34", icon: Phone, color: "text-brand-pink-dark" }
               ].map(link => (
                 <motion.a 
                  key={link.label}
                  href="#"
                  whileHover={{ x: 20 }}
                  className="flex items-center gap-8 group"
                 >
                   <div className={`w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center ${link.color} group-hover:scale-110 transition-transform`}>
                     <link.icon size={28} />
                   </div>
                   <div>
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 block opacity-40">{link.label}</span>
                     <span className="text-2xl md:text-4xl font-light hover:text-brand-pink transition-colors font-display break-all">
                       {link.val}
                     </span>
                   </div>
                 </motion.a>
               ))}
            </div>
          </div>
          <div className="glass-card !bg-white/95 p-12 lg:p-20 rounded-[5rem] text-brand-grey paper-shadow border-none">
            <h4 className="text-4xl font-black uppercase tracking-tighter mb-12 flex items-center gap-6">
              LET'S TALK <div className="h-1 flex-1 bg-brand-pink/20 rounded-full" />
            </h4>
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.5em] ml-4 opacity-30">WHO ARE YOU?</label>
                <input type="text" placeholder="ИМЯ / КОМПАНИЯ" className="w-full bg-brand-offwhite rounded-3xl p-6 outline-none focus:ring-4 focus:ring-brand-pink/20 transition-all font-black uppercase tracking-tighter text-xl placeholder:opacity-10 border-none" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.5em] ml-4 opacity-30">WHAT WE DOING?</label>
                <textarea rows={3} placeholder="ВАШ ЗАПРОС..." className="w-full bg-brand-offwhite rounded-3xl p-6 outline-none focus:ring-4 focus:ring-brand-pink/20 transition-all font-black uppercase tracking-tighter text-xl placeholder:opacity-10 border-none resize-none"></textarea>
              </div>
              <button disabled className="bubbly-button w-full bg-brand-pink text-brand-grey hover:bg-brand-pink-dark hover:text-white py-8 text-xl shadow-2xl shadow-brand-pink/40 mt-8">
                ОБСУДИТЬ ПРОЕКТ <ArrowRight size={24} />
              </button>
            </form>
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

