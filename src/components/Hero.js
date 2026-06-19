'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  useEffect(() => {
    // Dynamic bubble generator from onepage.html
    const particleContainer = document.getElementById('particle-container');
    if (!particleContainer) return;

    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.classList.add('oxygen-bubble');
      const size = Math.random() * 60 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.bottom = `-80px`;
      bubble.style.animationDuration = `${Math.random() * 6 + 4}s`;
      bubble.style.animationDelay = `${Math.random() * 2}s`;
      particleContainer.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, 10000);
    };

    const interval = setInterval(createBubble, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-primary via-blue-950 to-teal-900 min-h-screen flex items-center justify-center overflow-hidden pt-24 text-white">

      {/* Dynamic Bubble Particles Container */}
      <div id="particle-container" className="absolute inset-0 z-0 opacity-40 pointer-events-none" />

      {/* Ambient Colors */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Context */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs sm:text-sm font-semibold tracking-wide text-teal-300">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400"></span>
              </span>
              Endüstriyel Hijyen ve Biyogüvenlik Çözümleri
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-none text-white">
              Endüstriyel Hijyen ve<br />
              Oksidasyon Teknolojilerinde<br />
              <span className="text-teal-400">Güvenilir Çözüm Ortağınız</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
              Gıda, içecek, su ve üretim tesisleri için yenilikçi, tescilli ve yüksek standartlı hijyen teknolojileri sunuyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/#sektorler"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-semibold rounded-lg text-primary bg-teal-400 hover:bg-teal-300 shadow-lg hover:shadow-xl transition duration-150 hover-lift"
              >
                Hizmet Verdiğimiz Sektörler
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-white/30 text-base font-semibold rounded-lg text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition duration-150 hover-lift"
              >
                <Zap className="w-5 h-5 text-teal-400 mr-2" />
                Teklif Talebi
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Corporate Industrial Layout */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-teal-500/20 animate-[spin_60s_linear_infinite] pointer-events-none" />
              
              {/* Background Glow */}
              <div className="absolute w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
              
              {/* Overlapping Image Stack */}
              {/* Card 1: Factory Production Line (sector-food.jpg) */}
              <div className="relative w-[280px] sm:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl z-10 transition-transform duration-500 hover:scale-[1.03]">
                <Image
                  src="/assets/sector-food.jpg"
                  alt="Endüstriyel Hijyen ve Üretim Hattı"
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  priority
                  className="object-cover"
                />
                {/* Dark overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] sm:text-xs font-bold text-teal-300 uppercase tracking-widest block mb-0.5">Endüstriyel Hijyen</span>
                  <span className="text-sm sm:text-base font-extrabold text-white leading-tight block">CIP ve Hat Sanitasyonu</span>
                </div>
              </div>

              {/* Card 2: Pure water/laboratory representation (hero-bg.jpg) */}
              <div className="absolute w-[200px] sm:w-[240px] aspect-[4/3] rounded-2xl overflow-hidden border-4 border-teal-500/25 shadow-2xl z-20 -bottom-6 -right-4 sm:-right-8 transition-transform duration-500 hover:scale-[1.05]">
                <Image
                  src="/assets/hero-bg.jpg"
                  alt="Oksidasyon ve Dezenfeksiyon Teknolojisi"
                  fill
                  sizes="(max-width: 768px) 200px, 240px"
                  priority
                  className="object-cover"
                />
                {/* Dark overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[9px] sm:text-[10px] font-bold text-teal-300 uppercase tracking-widest block mb-0.5">Ar-Ge ve Teknoloji</span>
                  <span className="text-xs sm:text-sm font-extrabold text-white leading-tight block">Kalıntısız Oksidasyon</span>
                </div>
              </div>

              {/* Decorative Tech Badges */}
              <div className="absolute -top-4 -left-4 bg-primary/90 backdrop-blur-md border border-teal-500/30 rounded-xl px-3 py-2 z-30 shadow-lg text-center flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-400" />
                <div className="text-left">
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider block font-bold">Güvence</span>
                  <span className="text-xs font-black text-white block">Tescilli Ar-Ge</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
