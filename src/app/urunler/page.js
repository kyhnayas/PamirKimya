import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Activity } from 'lucide-react';

export const metadata = {
  title: 'Sektörel Çözümler ve Ürünler | Pamir Kimya',
  description: 'Gıda ve süt endüstrisi (CIP), veteriner hekimlik yara bakımı ve dental ünit biyogüvenlik ürünlerinin teknik detayları.',
};

export default function Products() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 pt-24 bg-white">
        
        {/* Banner Section */}
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-multiply"
            style={{ backgroundImage: `url('/assets/hero-bg.jpg')` }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-secondary text-xs font-extrabold uppercase tracking-widest bg-white/10 px-3 py-1.5 rounded-full border border-white/20 mb-4 inline-block">
              Teknoloji Portföyü
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-black">
              Sektörlere Göre Biyogüvenlik Çözümlerimiz
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light leading-relaxed mt-4">
              Hidrojen peroksit ve kolloidal gümüş sinerjisinin farklı sektörlerdeki profesyonel uygulama metotları ve avantajları.
            </p>
          </div>
        </section>

        {/* Dynamic Sector Details - Alternating Layout */}
        
        {/* Sector 1: Food/Milk CIP */}
        <section id="gida" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-5 relative h-[450px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-150">
                <Image
                  src="/assets/sector-food.jpg"
                  alt="Gıda ve Süt Endüstrisi CIP"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
                  <Activity className="w-3.5 h-3.5 mr-1 text-secondary" />
                  Süt ve Gıda Endüstrisi
                </div>
                <h2 className="text-3xl font-display font-black text-primary leading-tight">
                  Clean-in-Place (CIP) Hijyeni ve Hava Sanitasyonu
                </h2>
                <p className="text-slate-500 font-bold text-sm">
                  Hedef Kitle: Süt fabrikaları (Akgıda vb. ölçekteki devler), Kalite ve Satın Alma Müdürleri.
                </p>
                <p className="text-text-slate leading-relaxed">
                  Gıda sanayisinde, özellikle süt işleme tesislerinde en kritik hijyen aşaması boru hatlarının, pastörize ünitelerinin ve depolama tanklarının iç temizliğidir (CIP). Pamir Kimya çözümleri, bu kapalı devre sistemlerin son dezenfeksiyonunda klor içermeyen, kalıntı ve tat bırakmayan üstün bir koruma sunar.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">CIP Son Dezenfeksiyonu</p>
                      <p className="text-sm text-text-slate">Boru, tank ve pastörize ünitelerinde sıfır korozyon. Durulama suyu ve zamandan maksimum tasarruf sağlar. Süte koku veya tat geçiş riski kesinlikle sıfırdır.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Depo Hava Sanitasyonu</p>
                      <p className="text-sm text-text-slate">Peynir olgunlaşma odalarındaki ve paketleme alanlarındaki havada asılı duran küf, maya ve mantar sporlarını ULV soğuk sisleme yöntemiyle saniyeler içinde yok ederek ürün raf ömrünü uzatır.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Çiğ Süt Tankerleri Dezenfeksiyonu</p>
                      <p className="text-sm text-text-slate">Süt taşlarını ve bakterilerin tutunmasını sağlayan biyofilm tabakasını hızla parçalar, soğukta üreyebilen psikrofilik bakterileri tamamen yok eder.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Mevzuat Standartları Uyumu</p>
                      <p className="text-sm text-text-slate">BRC, IFS ve ISO 22000 gıda güvenliği yönetim sistemleri standartlarının gerekliliklerini %100 destekler ve denetimlerden tam not almanızı sağlar.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/iletisim#form-section"
                    className="inline-flex items-center bg-primary hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg text-sm transition shadow hover-lift"
                  >
                    <span>CIP Numunesi Talep Et</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Sector 2: Veterinary Care */}
        <section id="veteriner" className="py-24 bg-bg-light border-b border-slate-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Desktop order change to make it alternate */}
              <div className="lg:col-span-7 space-y-6 lg:order-1 order-2">
                <div className="inline-flex items-center space-x-2 bg-teal-50 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase border border-teal-150">
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  Veteriner Hekimlik & Yara Bakımı
                </div>
                <h2 className="text-3xl font-display font-black text-primary leading-tight">
                  Toksiksiz Yara Bakımı ve Klinik Biyogüvenliği
                </h2>
                <p className="text-slate-500 font-bold text-sm">
                  Hedef Kitle: Veteriner Hekimler, Hayvan Hastaneleri ve Klinik İşletmecileri.
                </p>
                <p className="text-text-slate leading-relaxed">
                  Hayvan sağlığı uygulamalarında kullanılan dezenfektanların güvenli olması şarttır. Pamir Kimya biyogüvenlik solüsyonları, alkolsüz, iyotsuz ve yakmayan yapısıyla veteriner hekimlerin en zorlu klinik işlemlerinde ve pansuman süreçlerinde konforlu bir çalışma alanı yaratır.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">%100 Yalama Güvenliği</p>
                      <p className="text-sm text-text-slate">Ürün yara üzerinde veya pansuman alanında reaksiyonunu tamamlayıp suya dönüştüğü için hayvan yara bölgesini yalasa bile sistemik toksisite veya zehirlenme riski sıfırdır.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Acısız ve Yakmayan Formül</p>
                      <p className="text-sm text-text-slate">Alkol, iyot veya klor gibi yakıcı bileşikler içermez. Açık yaralarda, post-operatif dikiş hatlarında veya pati apselerinde yanma ve acı hissi uyandırmaz. Stressiz pansuman sağlar.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Klinik İçi Ortam Konforu</p>
                      <p className="text-sm text-text-slate">Çamaşır suyu gazı gibi kedi ve köpeklerin hassas solunum yollarını irite etmez. Ağır idrar ve dışkı kokularını parfümlerle maskelemez, kokuya yol açan bakterileri parçalayarak kökten yok eder.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Hassas Cerrahi Ekipman Koruma</p>
                      <p className="text-sm text-text-slate">Özel formülasyonu sayesinde paslanmaz çelik muayene masalarını, kafes hatlarını ve cerrahi aletleri paslandırmaz, köreltmez, matlaştırmaz.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/iletisim#form-section"
                    className="inline-flex items-center bg-secondary hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg text-sm transition shadow hover-lift"
                  >
                    <span>Klinik Numunesi Talep Et</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-[450px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-150 lg:order-2 order-1">
                <Image
                  src="/assets/sector-veterinary.jpg"
                  alt="Veteriner Hekimlik ve Yara Bakımı"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Sector 3: Dental Care */}
        <section id="dental" className="py-24 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-5 relative h-[450px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-150">
                <Image
                  src="/assets/sector-dental.jpg"
                  alt="Dental ve Ağız İçi Cerrahi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
                  <ShieldAlert className="w-3.5 h-3.5 mr-1 text-secondary" />
                  Dental & Ağız Sağlığı
                </div>
                <h2 className="text-3xl font-display font-black text-primary leading-tight">
                  Dental Biyofilm Kontrolü ve Cerrahi Yara Yıkama
                </h2>
                <p className="text-slate-500 font-bold text-sm">
                  Hedef Kitle: Diş Hekimleri, Ağız ve Diş Sağlığı Poliklinikleri.
                </p>
                <p className="text-text-slate leading-relaxed">
                  Diş hekimliği kliniklerinde en yaygın bulaş yollarından biri dental ünit su yollarıdır. Su hatlarındaki dar borular, bakterilerin biyofilm oluşturması için mükemmel zemin hazırlar. Pamir Kimya teknolojisi bu biyofilm tabakalarını parçalayarak hastalarınız için en güvenli suyu temin eder.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Dental Ünit Biyofilm Çözümü</p>
                      <p className="text-sm text-text-slate">Ünitlerin içindeki milimetrik su borularında biriken patojenik bakteriyel biyofilm tabakasını fiziksel olarak parçalar ve çözer. Ağız yıkama suyunun sürekli steril kalmasını sağlar.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">İmplant ve Cerrahi Sonrası Yara Yıkama</p>
                      <p className="text-sm text-text-slate">Diş çekimi, implant yuvasının yıkanması ve oral cerrahi dikiş hatlarında güvenle uygulanır. Açığa çıkan aktif serbest oksijen (O₂), peri-implantitis riskini büyük oranda engeller ve çene kemiği entegrasyonunu (osteointegrasyon) hızlandırır.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Sıfır Toksisite ve Ağızda Kötü Tat Bırakmama</p>
                      <p className="text-sm text-text-slate">Hasta ağız içi solüsyonu yanlışlıkla yutsa dahi zehirlenme riski yoktur. Klorheksidin içeren ağız gargaraları gibi dilde ve ağızda acı, metalik bir tat bırakmaz, lekelenmeye yol açmaz.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/iletisim#form-section"
                    className="inline-flex items-center bg-primary hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg text-sm transition shadow hover-lift"
                  >
                    <span>Dental Numunesi Talep Et</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
