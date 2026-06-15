import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, Award, Shield } from 'lucide-react';

export const metadata = {
  title: 'İletişim ve Teknik Destek | Pamir Kimya Biyogüvenlik',
  description: 'Türkiye tek distribütörü Yavuz Selim Ekşi ile numune talebi, toptan alım veya teknik bilgi için hemen iletişime geçin.',
};

export default function Contact() {
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
              Bizimle İletişime Geçin
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Ürünlerimiz, ruhsatlandırma detaylarımız veya numune talepleriniz için doğrudan teknik ekibimizle iletişime geçebilirsiniz.
            </p>
          </div>
        </section>

        {/* Contact Layout */}
        <section id="form-section" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* Left Column: Details */}
              <div className="lg:col-span-5 space-y-8">

                <div>
                  <span className="text-secondary text-xs font-extrabold uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-150">
                    İletişim Bilgileri
                  </span>
                  <h2 className="text-3xl font-display font-black text-primary mt-4 mb-3 leading-tight">
                    Türkiye Genel Distribütörlüğü
                  </h2>
                  <p className="text-text-slate text-sm leading-relaxed">
                    Pamir Kimya biyogüvenlik ve endüstriyel hijyen ürünleri Türkiye distribütörü Yavuz Selim Ekşi kanalıyla doğrudan faturalandırılır ve sevk edilir.
                  </p>
                </div>

                {/* Contact Channels Card */}
                <div className="bg-bg-light border border-slate-200/50 rounded-2xl p-6 space-y-6">

                  {/* Phone Item */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-white text-secondary p-3 rounded-xl border border-slate-100 shadow-sm flex-shrink-0">
                      <Phone className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Telefon / Teknik Destek</p>
                      <p className="font-bold text-primary text-base mt-0.5">Yavuz Selim Ekşi</p>
                      <a href="tel:+905435746458" className="text-secondary hover:text-teal-800 transition-colors font-extrabold text-lg block">
                        +90 (543) 574 64 58
                      </a>
                    </div>
                  </div>

                  {/* Mail Item */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-white text-secondary p-3 rounded-xl border border-slate-100 shadow-sm flex-shrink-0">
                      <Mail className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">E-Posta Adresi</p>
                      <a href="mailto:destek@pamirkimya.com" className="text-primary hover:text-secondary transition-colors font-extrabold text-base block mt-1 break-all">
                        destek@pamirkimya.com
                      </a>
                    </div>
                  </div>

                  {/* Address Item */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-white text-secondary p-3 rounded-xl border border-slate-100 shadow-sm flex-shrink-0">
                      <MapPin className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Merkez / Bölge</p>
                      <p className="text-primary font-bold text-base mt-1">Türkiye Geneli Hizmet & Dağıtım</p>
                      <p className="text-xs text-text-slate mt-0.5">Numune gönderimleri tüm şehirlere anlaşmalı kargo ile yapılmaktadır.</p>
                    </div>
                  </div>

                  {/* Hours Item */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-white text-secondary p-3 rounded-xl border border-slate-100 shadow-sm flex-shrink-0">
                      <Clock className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Çalışma Saatleri</p>
                      <p className="text-primary font-bold text-sm mt-1">Pazartesi - Cumartesi</p>
                      <p className="text-xs text-text-slate mt-0.5">Saat: 09:00 - 19:00 (Destek hatları aktiftir)</p>
                    </div>
                  </div>

                </div>

                {/* Additional Info / Security Badge */}
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5 flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-secondary flex-shrink-0 stroke-[2]" />
                  <p className="text-xs text-text-slate leading-relaxed">
                    İlettiğiniz tüm veriler Web3Forms güvenlik standartlarıyla korunur ve sadece teknik ekibimizle irtibata geçebilmeniz için kullanılır. Üçüncü şahıslarla paylaşılmaz.
                  </p>
                </div>

              </div>

              {/* Right Column: Contact Form */}
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
