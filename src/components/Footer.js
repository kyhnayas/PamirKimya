import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Award, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300 font-sans pt-16 pb-8 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo-dark-bg.svg"
                alt="Pamir Kimya Logo"
                width={220}
                height={50}
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-300">
              Endüstriyel CIP temizliği, veteriner biyogüvenliği ve dental cerrahi yara bakımı dezenfeksiyonunda çevreye ve sağlığa zararsız hidrojen peroksit ve kolloidal gümüş sinerjisi.
            </p>
            <div className="flex items-center space-x-2 bg-blue-950 p-3.5 rounded-lg border border-blue-900">
              <Award className="text-secondary w-5 h-5 flex-shrink-0" />
              <span className="text-xs font-semibold text-slate-200">
                Yeditepe Üniversitesi Onaylı %99,999 Kırım
              </span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-white text-base font-bold tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">
              HIZLI GEÇİŞ
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Ana Sayfa', href: '/' },
                { name: 'Hakkımızda', href: '/hakkimizda' },
                { name: 'Sektörler & Ürünler', href: '/urunler' },
                { name: 'İletişim ve Destek', href: '/iletisim' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-secondary opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sektörel Çözümler */}
          <div>
            <h4 className="text-white text-base font-bold tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">
              SEKTÖREL ÇÖZÜMLER
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Gıda ve Süt Endüstrisi (CIP)', href: '/urunler#gida' },
                { name: 'Veteriner Hekimlik & Yara Bakımı', href: '/urunler#veteriner' },
                { name: 'Diş Hekimliği (Dental Ünitler)', href: '/urunler#dental' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-secondary opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white text-base font-bold tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">
              TEKNİK DESTEK & İLETİŞİM
            </h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Yavuz Selim Ekşi</p>
                  <p className="text-xs text-slate-400">Yönetici & Türkiye Tek Distribütörü</p>
                  <a href="tel:+905435746458" className="hover:text-white transition-colors font-bold block mt-1">
                    +90 (543) 574 64 58
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                <a href="mailto:destek@pamirkimya.com" className="hover:text-white transition-colors block break-all font-semibold">
                  destek@pamirkimya.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Çalışma Saatleri</p>
                  <p className="text-xs">Pazartesi - Cumartesi: 09:00 - 19:00</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-blue-900/60 text-center md:flex md:justify-between md:items-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Pamir Kimya. Tüm Hakları Saklıdır.</p>
          <p className="mt-2 md:mt-0">
            Türkiye Tek Yetkili Dağıtıcısı: <span className="text-white font-semibold">Yavuz Selim Ekşi</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
