import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DocumentCenter from '@/components/DocumentCenter';
import DilutionCard from '@/components/DilutionCard';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  ArrowRight, 
  FlaskConical, 
  Award, 
  Recycle, 
  Sparkles, 
  Target, 
  Eye, 
  Users, 
  CheckCircle2, 
  Truck, 
  Settings, 
  Factory, 
  Droplet, 
  GlassWater, 
  Phone, 
  Mail, 
  MapPin, 
  Briefcase 
} from 'lucide-react';

export default function Home() {
  const sectors = [
    {
      id: 'tavuk-et',
      title: 'Tavuk ve Et Entegre Tesisleri',
      icon: <Briefcase className="w-6 h-6 text-secondary" />,
      points: [
        'Listeria ve Salmonella Kontrolü: Kesim hatları, karkas soğutma suları ve temas yüzeylerinde tam dezenfeksiyon.',
        'Hava ve Ortam Sanitasyonu: Soğuk hava depolarında havada asılı patojenlerin ULV sisleme ile yok edilmesi.',
        'Kalıntısız Güvenlik: Et ürünlerinde kimyasal atık veya koku/tat değişimi riski yaratmaz.'
      ]
    },
    {
      id: 'su-dolum',
      title: 'Su Dolum Tesisleri',
      icon: <Droplet className="w-6 h-6 text-secondary" />,
      points: [
        'Biyofilm Eliminasyonu: Damacana ve pet şişe dolum hatları, nozüller ve borulardaki biyofilmleri parçalar.',
        'Klor Kokusu Olmadan Sanitasyon: Klasik klor yerine su tadını ve kokusunu etkilemeyen organik sanitasyon.',
        'Geri Dönüşümlü Damacanalar: Damacanaların iç yıkama proseslerinde kalıntısız ve güvenli temizlik.'
      ]
    },
    {
      id: 'icecek-uretim',
      title: 'İçecek Üretim Tesisleri',
      icon: <GlassWater className="w-6 h-6 text-secondary" />,
      points: [
        'CIP Son Dezenfeksiyonu: Meyve suyu, gazlı içecek ve bira hatlarındaki kapalı devre CIP ünitelerinde sıfır korozyon.',
        'Maya ve Küf Kontrolü: Tanklar ve borularda kontaminasyona yol açan mayaları saniyeler içinde etkisiz hale getirir.',
        'Zamandan Tasarruf: Durulama suyu gerektirmediği için CIP çevrim sürelerini ve su tüketimini azaltır.'
      ]
    },
    {
      id: 'sut-urunleri',
      title: 'Süt ve Süt Ürünleri',
      icon: <Factory className="w-6 h-6 text-secondary" />,
      points: [
        'Süt Taşı ve Biyofilm Sökümü: Plakalı pastörize üniteleri ve çiğ süt tankerlerinde tam hijyen sağlar.',
        'Peynir Olgunlaşma Odaları: ULV soğuk sisleme ile havadaki küf ve mantar sporlarını yok eder, raf ömrünü uzatır.',
        'Süte Geçiş Riski Sıfır: Formülasyon reaksiyon sonrasında tamamen su ve oksiyene ayrışır.'
      ]
    },
    {
      id: 'gida-uretim',
      title: 'Gıda Üretim Tesisleri',
      icon: <Settings className="w-6 h-6 text-secondary" />,
      points: [
        'Konveyör ve Ekipman Dezenfeksiyonu: Mikserler, dolum üniteleri ve bant yüzeylerinde anında kırım.',
        'Hassas Yüzey Uyumlu: Plastik, teflon ve paslanmaz çelik aksamları çatlatmaz, matlaştırmaz ve köreltmez.',
        'Denetim Standartları: BRC, IFS ve ISO 22000 gıda güvenliği denetimlerinde %100 uyumluluk sağlar.'
      ]
    }
  ];

  const whyChooseUs = [
    {
      title: 'Teknik Destek',
      description: 'Uzman mühendis kadromuzla tesislerinize özel dozajlama planlaması ve 7/24 danışmanlık.',
      icon: <Settings className="w-6 h-6 text-teal-400" />
    },
    {
      title: 'Hızlı Tedarik',
      description: 'Türkiye genelindeki güçlü lojistik ağımız ve Yavuz Selim Ekşi güvencesiyle kesintisiz ürün temini.',
      icon: <Truck className="w-6 h-6 text-teal-400" />
    },
    {
      title: 'Yerinde Uygulama Desteği',
      description: 'Sistem kurulumu, dozaj pompası entegrasyonu ve çalışanlarınıza yönelik pratik saha eğitimleri.',
      icon: <Users className="w-6 h-6 text-teal-400" />
    },
    {
      title: 'Endüstriyel Deneyim',
      description: 'Endüstriyel hijyen sektöründeki derin Ar-Ge birikimi ve yasal regülasyon uzmanlığı.',
      icon: <Award className="w-6 h-6 text-teal-400" />
    },
    {
      title: 'Güvenilir Çözüm Ortaklığı',
      description: 'BRC, IFS ve ISO denetimlerinde tam puan almanızı garanti eden akredite raporlar ve ruhsatlar.',
      icon: <ShieldCheck className="w-6 h-6 text-teal-400" />
    }
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Entrance Hero Banner (Firma ön planda) */}
        <Hero />

        {/* 2. Hakkımızda Bölümü (Kurumsal Kimlik ve Güvenceler) */}
        <section id="hakkimizda" className="py-24 bg-white relative scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Text Profile */}
              <div className="space-y-6">
                <span className="text-secondary text-xs font-extrabold uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-150">
                  Kurumsal Profil
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-black text-primary leading-tight">
                  Endüstriyel Biyogüvenlik ve<br />
                  Kimya Teknolojilerinde Güvenilir İsim
                </h2>
                <p className="text-text-slate leading-relaxed font-light text-base sm:text-lg">
                  Pamir Kimya Biyogüvenlik ve Teknoloji Çözümleri, gıda, içecek, su işletmeleri ve sağlık kuruluşları için ileri düzey oksidasyon ve hijyen standartları geliştiren lider bir kuruluştur.
                </p>
                <p className="text-text-slate leading-relaxed text-sm sm:text-base">
                  Klasik dezenfektanların (klor, alkol, aldehit) aksine; uygulandıktan sonra hiçbir kimyasal kalıntı bırakmadan tamamen doğal bileşenler olan <strong>su (H₂O) ve oksiyene (O₂)</strong> ayrışan çevre dostu biyosidal çözümlerin Türkiye distribütörlüğünü üstleniyoruz.
                </p>
                
                {/* Mission & Vision Mini Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-bold text-primary">
                      <Target className="w-5 h-5 text-secondary" />
                      <span>Misyonumuz</span>
                    </div>
                    <p className="text-xs text-text-slate leading-relaxed">
                      Sektörlerin hijyen ihtiyaçlarını ekolojik, kalıntısız ve sürdürülebilir yeni nesil teknolojilerle karşılayarak insan sağlığını ve çevre ekolojisini korumak.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-bold text-primary">
                      <Eye className="w-5 h-5 text-secondary" />
                      <span>Vizyonumuz</span>
                    </div>
                    <p className="text-xs text-text-slate leading-relaxed">
                      Endüstriyel dezenfeksiyon alanında Türkiye genelinde akla gelen ilk, en güvenilir ve en yüksek bilimsel akreditasyona sahip teknolojik çözüm ortağı olmak.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Accreditations Card */}
              <div className="bg-bg-light border border-slate-200/60 rounded-3xl p-8 space-y-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                  <ShieldCheck className="text-secondary w-6 h-6 stroke-[2.5]" />
                  Kurumsal Akreditasyon ve Onaylar
                </h3>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary text-sm sm:text-base">Yeditepe Üniversitesi Biyosidal Onaylı</p>
                      <p className="text-xs sm:text-sm text-text-slate mt-0.5">Dirençli patojenler, sporlar ve hastane enfeksiyonu bakterileri üzerinde %99,999 mikrobiyal kırım tescili.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary text-sm sm:text-base">T.C. Sağlık Bakanlığı Biyosidal Ruhsatlı</p>
                      <p className="text-xs sm:text-sm text-text-slate mt-0.5">İl ve ilçe tarım müdürlükleri denetim standartlarına tam uyum sağlayan resmi bakanlık onay belgesi.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary text-sm sm:text-base">Kalıntısız ve Korozyonsuz Kimya</p>
                      <p className="text-xs sm:text-sm text-text-slate mt-0.5">CIP hatları, borular ve temas yüzeylerinde korozyon riski taşımayan ve durulama suyu gerektirmeyen formül.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Hizmet Verdiğimiz Sektörler (Endüstriyel Alanlar) */}
        <section id="sektorler" className="py-24 bg-bg-light relative border-y border-slate-150 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-secondary text-xs font-extrabold uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-150">
                Uygulama Alanları
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-primary mt-4 mb-5 leading-tight">
                Hizmet Verdiğimiz Sektörler
              </h2>
              <p className="text-text-slate text-base sm:text-lg leading-relaxed">
                Her sektörün hijyen dinamiklerine ve yasal mevzuatlarına derinlemesine odaklanarak, üretiminize özel dezenfeksiyon protokolleri tasarlıyoruz.
              </p>
            </div>

            {/* Sectors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectors.map((sec, idx) => (
                <div 
                  key={sec.id}
                  className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center border border-teal-100">
                      {sec.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary font-display">{sec.title}</h3>
                    <ul className="space-y-3">
                      {sec.points.map((p, pIdx) => (
                        <li key={pIdx} className="flex items-start text-xs sm:text-sm text-text-slate leading-relaxed">
                          <span className="text-secondary font-bold mr-2 mt-0.5">✓</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link 
                      href="/urunler" 
                      className="text-xs font-extrabold text-secondary hover:text-teal-700 flex items-center gap-1 uppercase tracking-wider"
                    >
                      <span>Sektörel Çözümü İncele</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. Çözümümüz: Silveroxy-A (Amiral Gemisi Ürün Lansmanı) */}
        <section id="silveroxy-a" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden scroll-mt-20">
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Product Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 border border-teal-250 text-secondary text-xs font-extrabold uppercase tracking-widest rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  Öne Çıkan Çözümümüz
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-primary leading-tight">
                  Silveroxy-A<br />
                  <span className="text-secondary font-medium text-2xl sm:text-3xl block mt-2">
                    Ekolojik Oksidasyon ve Dezenfeksiyon Gücü
                  </span>
                </h2>
                
                <p className="text-text-slate text-base sm:text-lg leading-relaxed font-light">
                  <strong>Silveroxy-A</strong>, tescilli Hidrojen Peroksit (H₂O₂) ve Kolloidal Gümüş (Ag⁺) sinerjisiyle üretilmiş ultra konsantre endüstriyel dezenfektandır. Tesislerinizde klor kalıntısı veya korozyon riski taşımadan saniyeler içinde maksimum mikrobiyolojik kırım ve gün boyu süren koruyucu bariyer sağlar.
                </p>

                {/* USP list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  <div>
                    <h4 className="font-bold text-primary text-sm sm:text-base mb-1">Avantajları</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-text-slate">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span>Kalıntısız reaksiyon (H₂O ve O₂&apos;ye dönüşür)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span>Sıfır korozyon riski ile makine ömrünü korur</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span>Stabilize yapı ile uzun depolama ömrü</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span>Alkol, klor ve aldehit içermez</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-primary text-sm sm:text-base mb-1">Teknik Özellikleri</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-text-slate">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>Yeditepe Üniversitesi Onaylı %99,999 Kırım</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>T.C. Sağlık Bakanlığı Biyosidal Ruhsatlı</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>TS EN 14476 Antiviral Standart Uyumu</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>Konsantre yapısı ile %1 seyreltme ekonomisi</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="font-bold text-primary text-sm sm:text-base mb-1">Başlıca Kullanım Alanları</h4>
                  <p className="text-xs sm:text-sm text-text-slate leading-relaxed">
                    Kapalı devre CIP dezenfeksiyonu, su tankları ve hat dezenfeksiyonu, şişe ve ambalaj sanitasyonu, soğuk sisleme (ULV) ortam havası arındırma, alet-ekipman dezenfeksiyon havuzları.
                  </p>
                </div>
              </div>

              {/* Right Column: Premium CSS Bottle Render */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-80 p-8 bg-white border border-slate-200 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 hover-lift overflow-hidden group">
                  <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-xl tracking-widest">
                    %100 Orijinal
                  </div>

                  {/* Bottle Render */}
                  <div className="h-64 flex items-center justify-center relative mb-6">
                    <div className="absolute w-32 h-32 bg-teal-400/20 rounded-full blur-2xl group-hover:scale-125 transition duration-500" />
                    
                    <div className="relative w-28 h-48 bg-gradient-to-b from-slate-100 to-slate-200 rounded-2xl border-2 border-slate-300 shadow-inner flex flex-col justify-between p-3">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-4 bg-teal-600 rounded-t-md border-b-2 border-teal-700" />
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-slate-200 border-x-2 border-slate-300" />
                      
                      <div className="w-full h-full bg-gradient-to-b from-primary via-blue-900 to-primary rounded-lg p-2.5 flex flex-col justify-between items-center text-center shadow-md relative overflow-hidden">
                        <div className="absolute -inset-1 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                        
                        <span className="text-[10px] font-bold text-teal-300 uppercase tracking-widest">PAMİR</span>
                        <div className="my-auto space-y-0.5">
                          <span className="text-white font-extrabold text-lg sm:text-xl block tracking-tight font-display leading-none">Silveroxy</span>
                          <span className="bg-teal-400 text-primary font-black px-1.5 py-0.5 rounded text-[10px] inline-block tracking-wider">A</span>
                        </div>
                        <div className="w-full space-y-1">
                          <div className="h-1 bg-white/20 rounded-full w-full overflow-hidden">
                            <div className="h-full bg-teal-400 w-3/4 animate-pulse" />
                          </div>
                          <span className="text-[7px] text-slate-300 font-semibold uppercase tracking-widest block">Biyosidal Dezenfektan</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-center">
                    <h3 className="text-xl font-bold text-primary font-display">Silveroxy-A</h3>
                    <p className="text-xs text-text-slate">Konsantre Hidrojen Peroksit & Kolloidal Gümüş Formülasyonu</p>
                    <div className="h-px bg-slate-100" />
                    
                    <div className="flex justify-around items-center text-xs font-bold text-primary">
                      <div className="text-center">
                        <span className="text-secondary font-black block text-sm">pH 1.5</span>
                        <span className="text-[9px] text-slate-400 uppercase">Denge</span>
                      </div>
                      <div className="h-6 w-px bg-slate-100" />
                      <div className="text-center">
                        <span className="text-secondary font-black block text-sm">%100</span>
                        <span className="text-[9px] text-slate-400 uppercase">Aktif Sinerji</span>
                      </div>
                      <div className="h-6 w-px bg-slate-100" />
                      <div className="text-center">
                        <span className="text-secondary font-black block text-sm">1:100</span>
                        <span className="text-[9px] text-slate-400 uppercase">Seyreltme</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mükemmel Kimyasal Sinerji Section */}
        <section id="sinerji" className="py-24 bg-white border-y border-slate-150">
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

        {/* Seyreltme Simülatörü */}
        <DilutionCard />

        {/* 5. Neden Bizi Tercih Etmelisiniz? Bölümü */}
        <section id="neden-biz" className="py-24 bg-white relative scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-secondary text-xs font-extrabold uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-150">
                Pamir Kimya Farkı
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-primary mt-4 mb-5 leading-tight">
                Neden Bizi Tercih Etmelisiniz?
              </h2>
              <p className="text-text-slate text-base sm:text-lg font-light leading-relaxed">
                Sadece yüksek standartta ürünler sunmakla kalmıyor; tesislerinizin hijyen sürdürülebilirliğini baştan uca destekliyoruz.
              </p>
            </div>

            {/* Why Choose Us Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {whyChooseUs.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-primary/95 text-white p-6 rounded-2xl border border-white/10 shadow-lg text-center flex flex-col justify-between items-center transition duration-300 hover-lift hover:bg-primary"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold text-teal-400 mb-2 font-display">{item.title}</h4>
                  <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Belge ve Onaylar */}
        <DocumentCenter />

        {/* 6. İletişim ve Teklif Formu Bölümü (En altta) */}
        <section id="iletisim" className="py-24 bg-primary text-white relative scroll-mt-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-teal-400 text-xs font-extrabold uppercase tracking-widest bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                  İletişime Geçin
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-black text-white leading-tight">
                  Tesisiniz İçin Demo ve Teklif Talebi Alın
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  İşletmenizin kapasitesine ve hijyen ihtiyaçlarına özel teklifler ve yerinde saha uygulama demoları için uzman ekibimizle iletişime geçebilirsiniz.
                </p>
                
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs text-slate-400 font-bold uppercase tracking-widest">Türkiye Dağıtım & Destek Hattı</h4>
                      <a href="tel:+905435746458" className="text-white hover:text-teal-300 font-bold text-lg sm:text-xl transition">+90 (543) 574 64 58</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs text-slate-400 font-bold uppercase tracking-widest">E-Posta Adresi</h4>
                      <a href="mailto:selimeksioglu@outlook.com" className="text-white hover:text-teal-300 font-bold text-sm sm:text-base transition">selimeksioglu@outlook.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs text-slate-400 font-bold uppercase tracking-widest">Hizmet Alanı</h4>
                      <p className="text-white font-semibold text-sm">Tüm Türkiye Genel Dağıtım ve Yerinde Saha Desteği</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: ContactForm Component */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
