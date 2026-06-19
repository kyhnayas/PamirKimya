import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Hakkımızda | Pamir Kimya Biyogüvenlik Çözümleri',
  description: 'Pamir Kimya, alkol ve klor içermeyen hidrojen peroksit ve kolloidal gümüş tabanlı çevre dostu biyogüvenlik teknolojilerinin Türkiye distribütörüdür.',
};

export default function About() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 pt-24 bg-bg-light">
        
        {/* Banner Section */}
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-multiply"
            style={{ backgroundImage: `url('/assets/hero-bg.jpg')` }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-black mb-4">
              Kurumsal & Hakkımızda
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Endüstriyel tesisler için kimyasal yük ve toksisite bırakmadan üstün hijyen sağlayan ekolojik teknolojilerin çözüm ortağıyız.
            </p>
          </div>
        </section>

        {/* Corporate Profile Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left text description */}
              <div className="space-y-6">
                <span className="text-secondary text-xs font-extrabold uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">
                  Pamir Kimya Farkı
                </span>
                <h2 className="text-3xl font-display font-black text-primary leading-tight">
                  Endüstriyel Hijyen ve Dezenfeksiyon Teknolojileri
                </h2>
                <p className="text-text-slate leading-relaxed">
                  Pamir Kimya Biyogüvenlik ve Teknoloji Çözümleri, gıda, içecek, su dolum ve entegre üretim tesisleri için yenilikçi oksidasyon ve hijyen teknolojileri sunan vizyoner bir kuruluştur.
                </p>
                <p className="text-text-slate leading-relaxed">
                  Geleneksel klor, alkol ve aldehit gibi çevreye ve makinelere zarar veren dezenfektanlar yerine; reaksiyon sonrası tamamen doğal bileşenler olan <strong>su (H₂O) ve oksijene (O₂)</strong> ayrışan tescilli Hidrojen Peroksit ve Kolloidal Gümüş formülasyonlarını sanayide yaygınlaştırmayı hedefliyoruz.
                </p>
                <p className="text-text-slate leading-relaxed">
                  Türkiye genelindeki güçlü dağıtım haklarımız ve yöneticimiz <strong>Yavuz Selim Ekşi</strong> önderliğindeki uzman ekiplerimizle, kaliteden ödün vermeden en hassas endüstriyel biyogüvenlik problemlerine dahi kalıcı ve güvenli çözümler üretiyoruz.
                </p>
              </div>

              {/* Right graphical highlights */}
              <div className="bg-bg-light border border-slate-200/60 rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-bold text-primary flex items-center">
                  <ShieldCheck className="text-secondary w-6 h-6 mr-2 stroke-[2.5]" />
                  Güvencelerimiz ve Onaylarımız
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Yeditepe Üniversitesi Biyosidal Onaylı</p>
                      <p className="text-sm text-text-slate">Et ve tavuk kesim hatları, çiğ süt tankerleri ve su dolum tesislerinde mikroorganizmalara karşı %99,999 etki tescillenmiştir.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">T.C. Sağlık Bakanlığı Biyosidal Ruhsatlı</p>
                      <p className="text-sm text-text-slate">Gıda denetimleri, BRC, IFS ve ISO 22000 gıda güvenliği yönetim standartlarına tam uyum.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Kalıntısız ve Durulamasız Ekoloji</p>
                      <p className="text-sm text-text-slate">CIP hatlarında ve gıda temas yüzeylerinde sıfır kimyasal kalıntı bırakarak durulama gereksinimini ortadan kaldırır.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-bg-light border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Mission Card */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100/80 shadow-sm flex flex-col items-center text-center">
                <div className="bg-teal-50 text-secondary p-4 rounded-full mb-6">
                  <Target className="w-10 h-10 stroke-[2]" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">Misyonumuz</h3>
                <p className="text-text-slate leading-relaxed text-sm">
                  Dezenfeksiyon ihtiyacı olan tüm endüstriyel gıda, içecek, et/tavuk ve su dolum tesislerini modern, güvenli, ekolojik ve kalıntısız dezenfeksiyon teknolojileriyle tanıştırmak. Canlı sağlığını ve endüstriyel makine/ekipman ömrünü tehdit eden geleneksel kimyasal dezenfektanların kullanımını azaltarak sürdürülebilir bir sanayi geleceği inşa etmek.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100/80 shadow-sm flex flex-col items-center text-center">
                <div className="bg-teal-50 text-secondary p-4 rounded-full mb-6">
                  <Eye className="w-10 h-10 stroke-[2]" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">Vizyonumuz</h3>
                <p className="text-text-slate leading-relaxed text-sm">
                  Biyogüvenlik ve endüstriyel dezenfeksiyon denince Türkiye genelinde akla gelen ilk, en güvenilir ve en teknolojik çözüm ortağı olmak. Hidrojen peroksit ve kolloidal gümüş tabanlı kalıntısız koruma standartlarını endüstriyel kılavuzlara ve yasal mevzuatlara öncü standart olarak kazandırmak.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Kurumsal Değerler */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-display font-black text-primary mb-12">
              Temel Kurumsal Değerlerimiz
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Çevreye Saygı', text: 'Tüm formüllerimiz doğada %100 çözünür ve zehirli yan ürün bırakmaz.' },
                { title: 'Bilimsel Doğruluk', text: 'Etkinliğimizi üniversite ve bağımsız laboratuvar analizleriyle kanıtlarız.' },
                { title: 'Dağıtımda Güven', text: 'Yavuz Selim Ekşi güvencesiyle en hızlı ve doğrudan temin garantisi sunarız.' },
                { title: 'Müşteri Odaklılık', text: 'Tesislerinize özel dozajlama sistemleri kurar ve saha eğitimleri sağlarız.' }
              ].map((val, idx) => (
                <div key={idx} className="bg-bg-light border border-slate-200/40 p-6 rounded-xl hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold text-primary mb-2.5">{val.title}</h4>
                  <p className="text-sm text-text-slate leading-relaxed">{val.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
