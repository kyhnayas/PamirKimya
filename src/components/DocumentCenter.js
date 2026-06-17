import { Shield, BookOpen } from 'lucide-react';

export default function DocumentCenter() {
  const documents = [
    {
      title: 'Yeditepe Üniversitesi Raporu',
      description: 'Gıda sanayisi ve klinik ortamlarındaki en zorlu patojenleri %99,999 saniyeler içinde kırdığını kanıtlayan resmi rapor.',
      type: 'Analiz Raporu',
      badge: 'Akademik Onay',
    },
    {
      title: 'Sağlık Bakanlığı Ruhsatı',
      description: 'T.C. Sağlık Bakanlığı onaylı resmi Biyosidal Ürün Ruhsatnamesi. İl/İlçe tarım müdürlükleri denetimlerine tam uyum sağlar.',
      type: 'Ruhsat Belgesi',
      badge: 'Resmi Mevzuat',
    },
    {
      title: 'Güvenlik Bilgi Formu (MSDS)',
      description: 'Gıda tesisleri ve büyük hastanelerin İş Sağlığı ve Güvenliği (İSG) departmanlarının aradığı, Türkçe / İngilizce standart MSDS formu.',
      type: 'Güvenlik Formu',
      badge: 'İSG Standardı',
    },
    {
      title: 'TS EN 14476 Antiviral Rapor',
      description: 'Ürünün en dirençli zarflı ve zarfsız virüslere (Hepatit, HIV, Coronavirüsler vb.) karşı antiviral başarısını kanıtlayan test sertifikası.',
      type: 'Antiviral Test',
      badge: 'Antiviral',
    },
  ];

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
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition group flex flex-col justify-between"
            >
              <div>
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
                <p className="text-text-slate text-xs leading-relaxed">
                  {doc.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Note */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
          * Akademik raporların basılı tam nüshaları ve analiz sertifikaları (COA) kurumsal alıcılar için talep üzerine gönderilmektedir.
        </div>

      </div>
    </section>
  );
}

