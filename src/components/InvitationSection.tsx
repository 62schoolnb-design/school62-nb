import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export default function InvitationSection() {
  return (
    <section id="invitation-section" className="relative w-full bg-[#FAF6F0] text-slate-800 py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute -bottom-10 -right-20 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-md mx-auto relative z-10 text-center" style={{ perspective: 1000 }}>
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 text-amber-900 text-xs tracking-widest uppercase mb-4 font-mono font-bold bg-white/90 px-4 py-1 rounded-full border border-amber-300 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Урилга</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        </motion.div>

        {/* 3D Glassmorphism Frame for the Invitation */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-amber-300 shadow-[0_20px_50px_rgba(180,120,60,0.16)] text-center"
        >
          {/* Inner Golden border embellishment */}
          <div className="absolute inset-3 border border-amber-300/50 rounded-2xl pointer-events-none" />

          {/* Top traditional flourish */}
          <div className="text-amber-500 text-xl mb-3 select-none font-serif">
            ✦ ✦ ✦
          </div>

          <h2 className="font-serif-title text-2xl sm:text-3xl text-slate-900 font-extrabold tracking-wide mb-6">
            УРИЛГА
          </h2>

          {/* Formal Invitation Text */}
          <p className="font-serif text-base sm:text-lg text-slate-800 leading-relaxed font-normal mb-8 px-2 sm:px-4">
            Эрхэм хүндэт таныг Нийслэлийн ерөнхий боловсролын 62 дугаар сургуулийн түүхт 50 жилийн ойн баярын хүндэтгэлийн цэнгүүнд хүрэлцэн ирэхийг урьж байна.
          </p>

          <div className="w-16 h-0.5 bg-amber-400 mx-auto mb-8 rounded-full" />

          {/* Event Details Cards */}
          <div className="space-y-4 text-left">
            {/* Date & Time */}
            <div className="p-4 rounded-2xl bg-[#FFFBF5] border border-amber-200/90 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                <Calendar className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 font-mono">
                  Хэзээ
                </p>
                <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                  2026 оны 10 дугаар сарын 07-ны Лхагва гарагт, 17:00 цаг
                </p>
              </div>
            </div>

            {/* Venue & Program start */}
            <div className="p-4 rounded-2xl bg-[#FFFBF5] border border-amber-200/90 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 font-mono">
                  Хаана & Угталт
                </p>
                <p className="text-sm sm:text-base font-semibold text-slate-900 mt-0.5 leading-snug">
                  ХУД, 15-р хороо The Corporate and Convention center 2 давхарт А танхимд угталтын үйл ажиллагаа эхлэнэ
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Calligraphy Symbol */}
          <div className="text-amber-500 text-xl mt-7 select-none font-serif">
            ✦ ✦ ✦
          </div>

          <p className="mt-3 text-xs tracking-widest text-amber-800 uppercase font-mono font-semibold">
            Тавтай морилно уу
          </p>
        </motion.div>
      </div>
    </section>
  );
}
