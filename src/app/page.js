import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectorCard from '@/components/SectorCard';
import DocumentCenter from '@/components/DocumentCenter';
import DilutionCard from '@/components/DilutionCard';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ShieldAlert, CheckCircle, ArrowRight, FlaskConical, Award, Recycle } from 'lucide-react';

export default function Home() {
  const sectors = [
    {
      id: 'gida',
      title: 'Gıda ve Süt Endüstrisi (CIP Çözümleri)',
      target: 'Gıda ve Süt Endüstrisi',
      image: '/assets/sector-food.jpg',
      href: '/urunler#gida',
      points: [
        'CIP Son Dezenfeksiyonu: Boru, tank ve pastörize ünitelerinde sıfır korozyon, sıfır koku/tat geçişi.',
        'Depo Hava Sanitasyonu: Havada asılı küf ve mantar sporlarını ULV soğuk sisleme ile yok etme.',
        'Çiğ Süt Tankerleri: Süt taşlarını ve biyofilm tabakasını temizleme, soğukta üreyen bakterileri giderme.',
        'Mevzuat Uyumu: BRC, IFS ve ISO 22000 standartlarını %100 destekler.'
      ]
    },
    {
      id: 'veteriner',
      title: 'Veteriner Hekimlik ve Yara Bakımı',
      target: 'Veteriner & Hayvancılık',
      image: '/assets/sector-veterinary.jpg',
      href: '/urunler#veteriner',
      points: [
        '%100 Yalama Güvenliği: Yara yerinde reaksiyonunu tamamlayıp suya dönüştüğü için yalama zehirlenme riski sıfır.',
        'Acısız ve Yakmayan Formül: Alkol veya iyot içermez. Açık yaralarda, dikişlerde yanma hissi uyandırmaz.',
        'Klinik İçi Ortam Konforu: İrritatif çamaşır suyu kokuları yerine kökten koku giderimi.',
        'Hassas Ekipman Koruma: Paslanmaz çelik muayene masalarını, kafes hatlarını ve cerrahi aletleri koruma.'
      ]
    },
    {
      id: 'dental',
      title: 'Dental ve Ağız İçi Cerrahi (Diş Hekimliği)',
      target: 'Diş Hekimliği & Klinikler',
      image: '/assets/sector-dental.jpg',
      href: '/urunler#dental',
      points: [
        'Biyofilm Çözümü: Dental ünit içindeki ince su borularında oluşan bakteriyel biyofilm tabakasını parçalar.',
        'İmplant & Cerrahi Sonrası Yara Bakımı: Yuva yıkanmasında ve operasyon dikiş hatlarında güvenli kullanım.',
        'Sıfır Toksisite ve Kötü Tat: Ağızda acı/metalik tat bırakmaz. Yutulsa dahi zehirlenme riski yoktur.'
      ]
    }
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Entrance Hero Banner */}
        <Hero />

        {/* Sectors Overview Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-secondary text-xs font-extrabold uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-150">
                Uygulama Alanları
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-primary mt-4 mb-5 leading-tight">
                Sektörlere Özel Biyogüvenlik Çözümleri
              </h2>
              <p className="text-text-slate text-base sm:text-lg leading-relaxed">
                Pamir Kimya olarak, her sektörün kendine özgü hijyen gereksinimlerini ve yasal mevzuatlarını derinlemesine analiz ediyor, kalıntısız ve yüksek korumalı dezenfeksiyon teknolojileri sunuyoruz.
              </p>
            </div>

            {/* Sector Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sectors.map((sector) => (
                <SectorCard key={sector.id} sector={sector} />
              ))}
            </div>

          </div>
        </section>

        {/* Sinerji Kimyası Section (onepage.html tarzında) */}
        <section id="sinerji" className="py-24 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-secondary text-xs font-extrabold uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-150 inline-block">
                Mükemmel Kimyasal Sinerji
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-primary">
                Doğanın En Temiz Oksitlenme Teknolojisi
              </h2>
              <p className="text-text-slate text-base sm:text-lg">
                Hidrojen Peroksit (H₂O₂) ve Gümüş (Ag⁺) iyonlarının birleşimi, patojenleri fiziksel olarak yok ederken ortama hiçbir kimyasal atık bırakmaz.
              </p>
            </div>

            {/* Science Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: H2O2 Oksidasyon */}
              <div className="bg-bg-light p-8 rounded-2xl border border-slate-200/50 hover:shadow-lg transition duration-350">
                <div className="w-12 h-12 bg-secondary text-white rounded-lg flex items-center justify-center font-extrabold text-lg shadow-md mb-6">
                  O₂
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">Reaksiyon Sonrası Sıfır Kalıntı</h4>
                <p className="text-text-slate text-sm leading-relaxed mb-6">
                  Hidrojen Peroksit, hedef patojenin hücre duvarını parçalarken güçlü bir oksidasyon reaksiyonu başlatır. Bu reaksiyondan geriye sadece saf su (H₂O) ve oksijen (O₂) kalır.
                </p>
                <div className="p-3.5 bg-white rounded-lg text-center font-mono text-xs text-secondary border border-teal-100 font-bold">
                  2 H₂O₂ ➔ 2 H₂O + O₂ (Saf Oksijen)
                </div>
              </div>

              {/* Card 2: Ag Depot Etkisi */}
              <div className="bg-bg-light p-8 rounded-2xl border border-slate-200/50 hover:shadow-lg transition duration-350">
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-extrabold text-lg shadow-md mb-6">
                  Ag
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">Kolloidal Gümüş Depot Etkisi</h4>
                <p className="text-text-slate text-sm leading-relaxed mb-6">
                  Gümüş iyonları formülasyona stabilite sağlar. Oksidasyon bittikten sonra bile yüzeyde mikroskobik koruyucu bariyer oluşturarak patojenlerin o alanda yeniden çoğalmasını gün boyu engeller.
                </p>
                <div className="p-3.5 bg-white rounded-lg text-center font-mono text-xs text-primary border border-blue-100/50 font-bold">
                  Bakteriyostatik Koruma Bariyeri
                </div>
              </div>

              {/* Card 3: Akademik Onay */}
              <div className="bg-bg-light p-8 rounded-2xl border border-slate-200/50 hover:shadow-lg transition duration-350">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-lg flex items-center justify-center font-extrabold text-lg shadow-md mb-6">
                  ✓
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">Yeditepe Üniversitesi Onaylı</h4>
                <p className="text-text-slate text-sm leading-relaxed mb-6">
                  T.C. Yeditepe Üniversitesi Biyosidal Laboratuvarında yapılan testlerle, ürünün dirençli patojenleri ve hastane enfeksiyonu bakterilerini saniyeler içinde %99.999 kırdığı tescillenmiştir.
                </p>
                <div className="p-3.5 bg-white rounded-lg text-center font-mono text-xs text-teal-700 border border-teal-200/50 font-bold">
                  TS EN 14476 Antiviral Standart Tam Uyumu
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dilution Calculator Card Section */}
        <DilutionCard />

        {/* Document Center Section */}
        <DocumentCenter />

        {/* Interactive Call to Action */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-black text-primary mb-6">
              Projeniz veya Tesisiniz İçin İletişime Geçin
            </h2>
            <p className="text-text-slate text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Pamir Kimya Biyogüvenlik Çözümlerini kendi işletmenizde, veteriner kliniğinizde veya dental ünitenizde deneyimlemeniz için iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/iletisim"
                className="w-full sm:w-auto bg-secondary hover:bg-teal-700 text-white font-extrabold px-8 py-4 rounded-lg text-base transition duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-teal-900/10 hover-lift"
              >
                <span>İletişime Geçin</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+905435746458"
                className="w-full sm:w-auto bg-bg-light hover:bg-slate-100 text-primary font-bold px-8 py-4 rounded-lg text-base border border-slate-200 transition duration-300 flex items-center justify-center space-x-2 hover-lift"
              >
                <span>Teknik Destek Hattı</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
