'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, FileText } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const showGlass = scrolled || !isHome;

  const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Sektörler & Ürünler', href: '/urunler' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showGlass
          ? 'glass-panel shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Area */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src={showGlass ? "/assets/logo-light-bg.svg" : "/assets/logo-dark-bg.svg"}
              alt="Pamir Kimya Logo"
              width={190}
              height={44}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-secondary font-bold'
                      : showGlass
                      ? 'text-primary hover:text-secondary'
                      : 'text-primary hover:text-secondary md:text-white md:hover:text-accent'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA / Phone Info */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+905435746458"
              className={`flex items-center space-x-1.5 text-sm font-bold transition-colors ${
                showGlass
                  ? 'text-primary hover:text-secondary'
                  : 'text-primary hover:text-secondary md:text-white md:hover:text-accent'
              }`}
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>0543 574 64 58</span>
            </a>
            <Link
              href="/iletisim#form-section"
              className="bg-secondary hover:bg-teal-700 text-white font-bold py-2.5 px-4 rounded-md transition duration-300 text-sm flex items-center space-x-2 hover-lift"
            >
              <FileText className="w-4 h-4" />
              <span>Numune Talep Et</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                showGlass 
                  ? 'text-primary hover:text-secondary' 
                  : 'text-white hover:text-teal-300'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Menüyü aç</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 max-h-screen py-4 block' : 'opacity-0 max-h-0 hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-teal-50 text-secondary'
                    : 'text-primary hover:bg-gray-50 hover:text-secondary'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-gray-100 mt-2 space-y-3 px-3">
            <a
              href="tel:+905435746458"
              className="flex items-center space-x-2 text-primary hover:text-secondary font-bold text-base"
            >
              <Phone className="w-5 h-5 stroke-[2.5]" />
              <span>0543 574 64 58</span>
            </a>
            <Link
              href="/iletisim#form-section"
              onClick={() => setIsOpen(false)}
              className="w-full bg-secondary hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 text-center block"
            >
              Numune & Teknik Bilgi Talep
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
