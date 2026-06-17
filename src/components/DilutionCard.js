'use client';

import { useState } from 'react';

export default function DilutionCard() {
  const [volume, setVolume] = useState(1);

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0a3832] to-[#0c4b42] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-teal-950/40 border border-teal-700/30 px-4 py-1.5 rounded-full">
                <span className="text-[11px] sm:text-xs font-bold text-teal-200 tracking-wider flex items-center gap-1.5 uppercase">
                  <span>💡</span> Akıllı Ekonomi ve Lojistik Avantajı
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-black text-white leading-tight">
                Konsantre Güç, Seyreltilmiş Maliyet!
              </h2>

              <p className="text-teal-100/70 text-sm sm:text-base leading-relaxed max-w-xl">
                Suyu taşımayın, sadece sinerjiyi satın alın! Pamir Kimya ultra konsantre yapısıyla nakliye, depolama ve kullanım maliyetlerinizi minimuma indirir. 
                <span className="text-white font-semibold"> Sadece %1 oranında ham mamul kullanılır, geri kalan %99 tamamen su ile seyreltilir.</span>
              </p>

              {/* Bullet Features with Emojis */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-3 text-[#52d6c5] font-semibold">
                  <span className="text-lg">💧</span>
                  <span className="text-sm sm:text-base">%99 Saf Su Tasarrufu</span>
                </div>

                <div className="flex items-center space-x-3 text-[#52d6c5] font-semibold">
                  <span className="text-lg">📦</span>
                  <span className="text-sm sm:text-base">100 Kat Az Depolama Alanı</span>
                </div>

                <div className="flex items-center space-x-3 text-[#52d6c5] font-semibold">
                  <span className="text-lg">🚚</span>
                  <span className="text-sm sm:text-base">Sıfır Gereksiz Nakliye Yükü</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Calculator Column */}
            <div className="lg:col-span-5">
              <div className="bg-[#0e4840]/60 border border-teal-700/20 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                <div className="text-center space-y-1 mb-6">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-teal-250 block">
                    SEYRELTME SİMÜLATÖRÜ
                  </span>
                  <span className="text-2xl sm:text-3xl font-display font-black text-emerald-400 block">
                    1&apos;e {volume * 100} Güç
                  </span>
                </div>

                <div className="space-y-5">
                  {/* Raw Product Volume Row */}
                  <div>
                    <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-teal-100/90 mb-2">
                      <span>Ham Mamul Hacmi (Pamir):</span>
                      <span className="font-bold text-white bg-[#135d54] px-3 py-1 rounded-lg border border-teal-600/30 min-w-[80px] text-center">
                        {volume} Litre
                      </span>
                    </div>

                    {/* Custom range slider */}
                    <div className="relative pt-1">
                      <input 
                        type="range" 
                        min="1" 
                        max="20" 
                        value={volume}
                        onChange={(e) => setVolume(Number(e.target.value))}
                        className="w-full h-2 bg-[#092a26] rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none"
                      />
                      <div className="flex justify-between text-[9px] text-teal-300/40 mt-1 font-mono">
                        <span>1L</span>
                        <span>5L</span>
                        <span>10L</span>
                        <span>15L</span>
                        <span>20L</span>
                      </div>
                    </div>
                  </div>

                  {/* Water Volume Row */}
                  <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-teal-100/90">
                    <span>Eklenecek Su Hacmi (%99):</span>
                    <span className="font-bold text-white bg-[#135d54] px-3 py-1 rounded-lg border border-teal-600/30 min-w-[80px] text-center">
                      {volume * 99} Litre
                    </span>
                  </div>

                  {/* Highlight Box for Total Active Solution */}
                  <div className="bg-[#0b3c35]/80 border border-teal-600/30 py-3.5 px-4 rounded-xl text-center shadow-inner flex items-center justify-center space-x-2">
                    <span className="text-xs sm:text-sm font-semibold text-teal-300">
                      Toplam Aktif Solüsyon:
                    </span>
                    <span className="text-base sm:text-lg font-black text-white font-display">
                      {volume * 100} Litre
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styled slider track for all browsers */}
      <style jsx>{`
        input[type='range']::-webkit-slider-runnable-track {
          background: #092a26;
          border-radius: 9999px;
          height: 8px;
        }
        input[type='range']::-webkit-slider-thumb {
          background: #34d399;
          border: 2px solid #ffffff;
          border-radius: 9999px;
          width: 18px;
          height: 18px;
          margin-top: -5px;
          -webkit-appearance: none;
          box-shadow: 0 0 10px rgba(52, 211, 153, 0.4);
        }
        input[type='range']::-moz-range-track {
          background: #092a26;
          border-radius: 9999px;
          height: 8px;
        }
        input[type='range']::-moz-range-thumb {
          background: #34d399;
          border: 2px solid #ffffff;
          border-radius: 9999px;
          width: 18px;
          height: 18px;
          box-shadow: 0 0 10px rgba(52, 211, 153, 0.4);
        }
      `}</style>
    </section>
  );
}
