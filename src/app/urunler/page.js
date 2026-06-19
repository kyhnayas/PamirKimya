import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Activity, FileCheck, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Endüstriyel Sektörler ve Çözümler | Pamir Kimya',
  description: 'Tavuk ve et entegre, su dolum, içecek, süt ve gıda üretim tesislerine özel Silveroxy-A dezenfeksiyon ve hijyen çözümleri.',
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
              Sektörel Çözümlerimiz
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-black">
              Endüstriyel Hijyen ve Biyogüvenlik Çözümlerimiz
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light leading-relaxed mt-4">
              Üretim tesislerinizde klor kalıntısı veya korozyon riski taşımadan, Yeditepe Üniversitesi onaylı %99,999 dezenfeksiyon sağlayan Silveroxy-A teknolojisinin sektörel uygulama alanları.
            </p>
          </div>
        </section>

        {/* 1. Tavuk ve Et Entegre Tesisleri */}
        <section id="tavuk-et" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

              <div className="lg:col-span-5 relative h-[380px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-150">
                <Image
                  src="/assets/sector-poultry-meat.png"
                  alt="Tavuk ve et entegre tesisi biyogüvenlik ve dezenfeksiyon sistemleri"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
                  <Activity className="w-3.5 h-3.5 mr-1 text-secondary" />
                  Kırmızı ve Beyaz Et Entegre Tesisleri
                </div>
                <h2 className="text-3xl font-display font-black text-primary leading-tight">
                  Tavuk ve Et Entegre Tesislerinde Patojen Kontrolü
                </h2>
                <p className="text-text-slate leading-relaxed">
                  Kırmızı ve beyaz et üretiminde en kritik aşama, kesim sonrası karkasların soğutulması, nakliyesi ve Listeria monocytogenes, Salmonella, Campylobacter gibi patojenlerin engellenmesidir. Silveroxy-A, kalıntısız ve güvenli formülüyle tesislerinizde üst düzey sanitasyon sağlar.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Karkas ve Kesim Hattı Dezenfeksiyonu</p>
                      <p className="text-sm text-text-slate">Soğutma suyu dezenfeksiyonunda ve kesim bıçakları, konveyör bantlar gibi doğrudan temas yüzeylerinde bakteri kırımını saniyeler içinde sağlar.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Soğuk Depo Hava Sanitasyonu</p>
                      <p className="text-sm text-text-slate">Et saklama ve olgunlaşma depolarındaki hava nemlendirme sistemlerine entegre edilerek, havada uçuşan küf ve bakterileri ULV sisleme ile sıfırlar.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Sıfır Tat ve Koku Bulaşması</p>
                      <p className="text-sm text-text-slate">Formülasyonumuz klor veya ağır asit kalıntısı bırakmaz; bu sayede et ürünlerinde renk değişimi, tat bozulması veya yabancı koku oluşumu riski kesinlikle sıfırdır.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center bg-primary hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg text-sm transition shadow hover-lift"
                  >
                    <span>Bilgi ve Teklif İsteyin</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Su Dolum Tesisleri */}
        <section id="su-dolum" className="py-24 bg-bg-light border-b border-slate-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

              <div className="lg:col-span-7 space-y-6 lg:order-1 order-2">
                <div className="inline-flex items-center space-x-2 bg-teal-50 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase border border-teal-150">
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  Ambalajlı Su Sektörü
                </div>
                <h2 className="text-3xl font-display font-black text-primary leading-tight">
                  Su Dolum ve Şişeleme Hatlarında Biyofilm Çözümü
                </h2>
                <p className="text-text-slate leading-relaxed">
                  Su dolum tesislerinde en yaygın problem, dolum boru hatlarında, nozüllerde ve depolama tanklarının iç çeperlerinde bakteri kolonilerinin oluşturduğu kaygan biyofilm tabakasıdır. Bu tabaka standart klor ile temizlenemez. Silveroxy-A, güçlü oksidasyon gücüyle bu dirençli biyofilleri tamamen çözer.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Dolum Nozülleri & Şişe İç Yıkama</p>
                      <p className="text-sm text-text-slate">Pet şişe, cam şişe ve damacanaların iç durulama sularında kalıntısız dezenfeksiyon sağlayarak suların raf ömrünü güvence altına alır.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Klorsuz, Güvenli ve Kokusuz Hijyen</p>
                      <p className="text-sm text-text-slate">Dolum sonrası klor kokusu veya tat sapması riski yaratmaz. Reaksiyonu tamamladıktan sonra sadece su ve oksiyene dönüşür.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Pseudomonas aeruginosa Eliminasyonu</p>
                      <p className="text-sm text-text-slate">Dolum sularında en çok denetlenen ve risk oluşturan Pseudomonas suşları üzerinde %99,999 kesin kırım gücü sunar.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center bg-secondary hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg text-sm transition shadow hover-lift"
                  >
                    <span>Bilgi ve Teklif İsteyin</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-[380px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-150 lg:order-2 order-1">
                <Image
                  src="/assets/sector-water-bottling.png"
                  alt="Su dolum tesisi şişeleme hattı dezenfeksiyonu ve nozül biyofilm arındırma"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* 3. İçecek Üretim Tesisleri */}
        <section id="icecek-uretim" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

              <div className="lg:col-span-5 relative h-[380px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-150">
                <Image
                  src="/assets/sector-beverage-production.png"
                  alt="İçecek üretim tesisi CIP son dezenfeksiyonu ve maya küf kontrolü"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
                  <Activity className="w-3.5 h-3.5 mr-1 text-secondary" />
                  Meyve Suyu, Gazlı İçecek ve Fermantasyon Sanayisi
                </div>
                <h2 className="text-3xl font-display font-black text-primary leading-tight">
                  İçecek Üretim Hatlarında Hızlı CIP Dezenfeksiyonu
                </h2>
                <p className="text-text-slate leading-relaxed">
                  Meyve suları, asitli içecekler ve malt sanayisinde, tankların ve kapalı devre boru hatlarının (Clean-In-Place / CIP) temizliği en yüksek önceliğe sahiptir. Mayalar, asit üreten bakteriler ve küfler ürün kalitesini doğrudan etkiler. Silveroxy-A, içecek CIP sistemleri için durulama gerektirmeyen, hızlı bir oksidasyon ve dezenfeksiyon çevrimi sağlar.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Plakalı Isı Eşanjörleri ve Hat Sanitasyonu</p>
                      <p className="text-sm text-text-slate">Eşanjör contalarına, plastik hortumlara veya paslanmaz çelik borulara zarar vermez, korozyon riski oluşturmadan dezenfeksiyonu tamamlar.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Maya ve Spor Kontrolü</p>
                      <p className="text-sm text-text-slate">Dolum öncesi borularda birikebilecek dirençli maya sporlarını ve bakterileri hızlı bir oksidasyon reaksiyonuyla saniyeler içinde parçalar.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Düşük Su ve Enerji Tüketimi</p>
                      <p className="text-sm text-text-slate">Durulama gerektirmeyen çevre dostu yapısı sayesinde su sarfiyatını ve CIP süresini en aza indirerek işletme maliyetlerinizi düşürür.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center bg-primary hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg text-sm transition shadow hover-lift"
                  >
                    <span>Bilgi ve Teklif İsteyin</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Süt ve Süt Ürünleri */}
        <section id="sut-urunleri" className="py-24 bg-bg-light border-b border-slate-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

              <div className="lg:col-span-7 space-y-6 lg:order-1 order-2">
                <div className="inline-flex items-center space-x-2 bg-teal-50 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase border border-teal-150">
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  Süt Toplama ve Proses Hatları
                </div>
                <h2 className="text-3xl font-display font-black text-primary leading-tight">
                  Süt Tesislerinde Süt Taşı ve Biyofilm Çözümü
                </h2>
                <p className="text-text-slate leading-relaxed">
                  Süt fabrikalarında kalsiyum birikintileri (süt taşları) bakterilerin tutunması için zemin oluşturur. Silveroxy-A, çiğ süt tankları, nakliye araçları, maya odaları ve pastörize ünitelerinde kalıntısız ve korozyonsuz mükemmel dezenfeksiyon sunar.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Süt Tankeri & Boru Hatları Hijyeni</p>
                      <p className="text-sm text-text-slate">Psikrofilik (soğukta üreyen) bakterileri hızla yok eder. Süte koku veya tat bulaşma riski kesinlikle sıfırdır.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Olgunlaşma Odalarında Nemlendirme & Sisleme</p>
                      <p className="text-sm text-text-slate">Özellikle peynir olgunlaşma odalarındaki havada asılı küf ve mantar sporlarını yok etmek amacıyla soğuk sisleme (ULV) sistemlerinde güvenle kullanılır.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">BRC, IFS ve ISO 22000 Uyumu</p>
                      <p className="text-sm text-text-slate">Gıda güvenliği standartlarının getirdiği ağır kimyasal kısıtlamalarını aşmanızı sağlayarak denetimlerde kolaylık sağlar.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center bg-secondary hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg text-sm transition shadow hover-lift"
                  >
                    <span>Bilgi ve Teklif İsteyin</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-[380px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-150 lg:order-2 order-1">
                <Image
                  src="/assets/sector-dairy-production.png"
                  alt="Süt ve süt ürünleri tesisi paslanmaz çelik CIP tankları dezenfeksiyonu"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* 5. Gıda Üretim Tesisleri */}
        <section id="gida-uretim" className="py-24 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

              <div className="lg:col-span-5 relative h-[380px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-150">
                <Image
                  src="/assets/sector-general-food.png"
                  alt="Gıda üretim tesisi konveyör bant sanitasyonu ve biyogüvenlik dezenfeksiyonu"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
                  <Activity className="w-3.5 h-3.5 mr-1 text-secondary" />
                  Unlu Mamuller, Konserve ve Hazır Yemek Sanayisi
                </div>
                <h2 className="text-3xl font-display font-black text-primary leading-tight">
                  Gıda Proses Yüzeyleri ve Konveyör Bant Sanitasyonu
                </h2>
                <p className="text-text-slate leading-relaxed">
                  Hazır yemek, sos ve unlu mamul tesislerinde konveyör bantlar, karıştırıcı kazanlar, paketleme üniteleri ve kesici bıçaklar en yoğun kontaminasyon noktalarıdır. Silveroxy-A, bu gıda temas yüzeylerinin hızlı ve durulama gerektirmeden dezenfekte edilmesini sağlayarak duraklama sürelerinizi en aza indirir.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Gıda Temas Yüzeylerinde Doğrudan Uygulama</p>
                      <p className="text-sm text-text-slate">Sağlık Bakanlığı biyosidal ruhsatı kapsamında gıda temas yüzeylerinde güvenli kullanımı tescil edilmiştir.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Yüksek Organik Yük Altında Bile Yüksek Etkinlik</p>
                      <p className="text-sm text-text-slate">Yeditepe Üniversitesi akreditasyon testleri, gıda bulaşmalarının olduğu zorlu kirli koşullarda dahi %99,999 kırım gücünü kanıtlamıştır.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-primary">Ekolojik Fark</p>
                      <p className="text-sm text-text-slate">Uygulandığı alanda klorlu bileşikler gibi kanserojen trihalometan (THM) veya toksik atıklar oluşturmaz. Çevre dostudur.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center bg-primary hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg text-sm transition shadow hover-lift"
                  >
                    <span>Bilgi ve Teklif İsteyin</span>
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
