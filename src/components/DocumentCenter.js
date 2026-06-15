'use client';

import { useState } from 'react';
import { FileText, Download, Shield, BookOpen, Check } from 'lucide-react';

export default function DocumentCenter() {
  const [downloadingFile, setDownloadingFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const documents = [
    {
      title: 'Yeditepe Üniversitesi Raporu',
      description: 'Gıda sanayisi ve klinik ortamlarındaki en zorlu patojenleri %99,999 saniyeler içinde kırdığını kanıtlayan resmi rapor.',
      filename: 'Yeditepe_Universitesi_Analiz_Raporu.pdf',
      type: 'PDF / Analiz Raporu',
      badge: 'Akademik Onay',
    },
    {
      title: 'Sağlık Bakanlığı Ruhsatı',
      description: 'T.C. Sağlık Bakanlığı onaylı resmi Biyosidal Ürün Ruhsatnamesi. İl/İlçe tarım müdürlükleri denetimlerine tam uyum sağlar.',
      filename: 'Saglik_Bakanligi_Biyosidal_Ruhsat_Belgesi.pdf',
      type: 'PDF / Ruhsat Belgesi',
      badge: 'Resmi Mevzuat',
    },
    {
      title: 'Güvenlik Bilgi Formu (MSDS)',
      description: 'Gıda tesisleri ve büyük hastanelerin İş Sağlığı ve Güvenliği (İSG) departmanlarının aradığı, Türkçe / İngilizce standart MSDS formu.',
      filename: 'Silveroxy_MSDS_TR.pdf',
      type: 'PDF / Güvenlik Formu',
      badge: 'İSG Standardı',
    },
    {
      title: 'TS EN 14476 Antiviral Rapor',
      description: 'Ürünün en dirençli zarflı ve zarfsız virüslere (Hepatit, HIV, Coronavirüsler vb.) karşı antiviral başarısını kanıtlayan test sertifikası.',
      filename: 'EN_14476_Antiviral_Basari_Sertifikasi.pdf',
      type: 'PDF / Antiviral Test',
      badge: 'Antiviral',
    },
  ];

  const handleDownload = (filename) => {
    setDownloadingFile(filename);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2200);
  };

  return (
    <section id="akademik" className="py-24 bg-bg-light scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-150 px-3 py-1.5 rounded-full text-secondary mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="text-xs font-extrabold uppercase tracking-widest">Mevzuat ve Resmi Onaylar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-primary mb-4 leading-tight">
            Kapı Gibi Sağlam Bilimsel ve Yasal Altyapı
          </h2>
          <p className="text-text-slate text-base sm:text-lg leading-relaxed">
            Pamir Kimya&apos;nın etkinliği ve kalitesi uluslararası mikrobiyolojik standartlar ve resmi Türkiye Cumhuriyeti bakanlıkları tarafından tescillenmiştir.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
            >
              <div className="mb-6">
                <div className="text-secondary text-3xl font-extrabold mb-4 font-display">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-block bg-primary/5 text-primary text-[10px] font-bold px-2 py-0.5 rounded">
                    {doc.type}
                  </span>
                  <span className="inline-flex items-center text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    <Shield className="w-3 h-3 mr-1" />
                    {doc.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {doc.title}
                </h3>
                <p className="text-text-slate text-xs leading-relaxed line-clamp-4">
                  {doc.description}
                </p>
              </div>

              {/* Download Action Button */}
              <button
                onClick={() => handleDownload(doc.filename)}
                className="w-full py-2.5 px-4 bg-secondary hover:bg-teal-700 text-white font-semibold text-sm rounded-lg text-center transition flex items-center justify-center space-x-2 cursor-pointer hover-lift"
              >
                <Download className="w-4 h-4" />
                <span>PDF İndir</span>
              </button>
            </div>
          ))}
        </div>

        {/* Quick Note */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
          * Akademik raporların basılı tam nüshaları ve analiz sertifikaları (COA) kurumsal alıcılar için talep üzerine gönderilmektedir.
        </div>

      </div>

      {/* Download Modal Simulation */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/70 backdrop-blur-sm">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-2xl max-w-sm w-full mx-4 text-center space-y-4">
            <div className="w-16 h-16 bg-teal-50 text-secondary rounded-full flex items-center justify-center text-3xl mx-auto animate-pulse">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h4 className="text-lg font-bold text-primary">Akademik Rapor Hazırlanıyor</h4>
            <p className="text-text-slate text-xs sm:text-sm font-mono bg-bg-light p-2.5 rounded-lg break-all">
              {downloadingFile}
            </p>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden relative">
              <div className="h-full bg-secondary rounded-full absolute top-0 left-0 animate-[loadingBar_2s_ease-out_forwards] w-full" />
            </div>
            <p className="text-xs text-slate-400">Güvenli indirme işlemi saniyeler içinde başlayacaktır.</p>
          </div>
        </div>
      )}

      {/* Embedded loader animation style */}
      <style jsx>{`
        @keyframes loadingBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}
