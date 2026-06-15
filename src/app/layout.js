import './globals.css';

export const metadata = {
  metadataBase: new URL('https://pamirkimya.com'),
  title: 'Pamir Kimya | Endüstriyel CIP, Veteriner ve Dental Biyogüvenlik Çözümleri',
  description: 'Hidrojen Peroksit ve Kolloidal Gümüş (H₂O₂ + Ag) gücüyle kalıntısız ve korozyonsuz sterilizasyon. Gıda sanayisi, veteriner klinikleri ve dental ünitler için Yeditepe Üniversitesi onaylı %99,999 kırım.',
  keywords: [
    'pamir kimya',
    'hidrojen peroksit kolloidal gümüş',
    'veteriner dezenfektan',
    'cip temizliği',
    'dental ünit biyofilm temizliği',
    'implant yara bakımı dezenfektan',
    'yalama güvenliği dezenfektan',
    'akgıda dezenfektan',
    'biyosidal ruhsatlı dezenfektan'
  ],
  openGraph: {
    title: 'Pamir Kimya | Endüstriyel CIP, Veteriner ve Dental Biyogüvenlik Çözümleri',
    description: 'Hidrojen Peroksit ve Kolloidal Gümüş (H₂O₂ + Ag) gücüyle kalıntısız ve korozyonsuz sterilizasyon.',
    url: 'https://pamirkimya.com',
    siteName: 'Pamir Kimya',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pamir Kimya Biyogüvenlik',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Pamir Kimya Biyogüvenlik ve Teknoloji Çözümleri",
  "alternateName": "Pamir Kimya",
  "description": "Süt endüstrisi, veteriner hekimlik ve dental klinikler için yeni nesil Hidrojen Peroksit ve Kolloidal Gümüş dezenfeksiyon teknolojileri.",
  "url": "https://pamirkimya.com",
  "logo": "https://pamirkimya.com/assets/logo-light-bg.svg",
  "telephone": "+90-543-574-64-58",
  "email": "destek@pamirkimya.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "TR"
  },
  "founder": {
    "@type": "Person",
    "name": "Yavuz Selim Ekşi",
    "jobTitle": "Yönetici & Türkiye Tek Yetkili Distribütörü"
  },
  "areaServed": "Turkey",
  "knowsAbout": [
    "Clean-in-Place (CIP) Hijyeni",
    "Veteriner Biyogüvenlik ve Yara Bakımı",
    "Dental Biyofilm Kontrolü ve Dental Cerrahi Yara Bakımı"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="h-full antialiased">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-light text-text-slate">
        {children}
      </body>
    </html>
  );
}
