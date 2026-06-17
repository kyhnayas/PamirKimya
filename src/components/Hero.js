'use client';

import { useEffect } from 'react';
import Link from 'next/link';
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
              Yeditepe Üniversitesi Onaylı %99.999 Kırım Sinerjisi
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-none text-white">
              Kimyasal Yük Değil,<br />
              <span className="text-teal-400">Oksijen Konforu!</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
              Alkol, klor ve aldehit içermeyen tescilli Hidrojen Peroksit & Kolloidal Gümüş (H₂O₂ + Ag) sinerjisi. Saniyeler içinde %99,999 mikrobiyolojik kırım sağlar, reaksiyon sonrası sadece su ve oksiyene dönüşür.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/urunler"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-semibold rounded-lg text-primary bg-teal-400 hover:bg-teal-300 shadow-lg hover:shadow-xl transition duration-150 hover-lift"
              >
                Sektörel Çözümleri Keşfet
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-white/30 text-base font-semibold rounded-lg text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition duration-150 hover-lift"
              >
                <Zap className="w-5 h-5 text-teal-400 mr-2" />
                Teknik Bilgi
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Interactive Molecular Layout */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] bg-white/5 rounded-full p-8 border border-white/10 shadow-2xl backdrop-blur-sm flex items-center justify-center">

              {/* Orbits animations */}
              <div className="absolute inset-4 rounded-full border border-teal-500/20 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-slate-300/10 animate-[spin_25s_linear_infinite_reverse]" />

              {/* Core Active Molecules Layout Card */}
              <div className="relative flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-blue-950 to-primary border border-white/10 rounded-3xl shadow-inner w-56 h-56 sm:w-64 sm:h-64">
                <span className="text-slate-200 text-6xl sm:text-7xl font-extrabold tracking-wider font-display">Ag<sup className="text-teal-400 text-3xl font-medium">+</sup></span>
                <span className="text-teal-400 text-lg sm:text-xl font-bold mt-2">Kolloidal Gümüş</span>
                <div className="h-px w-2/3 bg-white/10 my-2" />
                <span className="text-white text-3xl font-extrabold">H₂O₂</span>
                <span className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mt-1">Hidrojen Peroksit</span>
              </div>

              {/* Orbiting Active Oxygen */}
              <div className="absolute top-8 right-8 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-white font-extrabold border-2 border-white shadow-lg animate-bounce">
                O₂
              </div>

              {/* Secondary Silver Node */}
              <div className="absolute bottom-12 left-6 bg-blue-950 border-2 border-slate-300 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-slate-300 font-bold text-xs shadow-md">
                Ag
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
