# **🌐 Pamir Kimya Web Sitesi & Marka Kurumsalı Üretim Yönergesi (AI Agent Blueprint)**

Bu döküman, **Pamir Kimya Biyogüvenlik ve Teknoloji Çözümleri** şirketinin resmi web sitesini (pamirkimya.com) tasarlamak, geliştirmek, arama motorlarına (SEO) %100 uyumlu hale getirmek ve GitHub üzerinden Vercel platformunda canlıya almak amacıyla bir yapay zeka yazılım ajanını (AI Developer Agent) yönlendirmek için hazırlanmış **tam kapsamlı bir mimari kılavuzdur.**

## **🎨 1\. BRANDING BOOK & GÖRSEL DİL (DESIGN SYSTEM)**

AI Geliştirici, arayüzü kodlarken aşağıdaki kurumsal kimlik standartlarına, renk kodlarına ve görsel boyutlarına **milimi milimine bağlı kalmalıdır.**

### **1.1 Renk Paleti (CSS / Tailwind Değişkenleri)**

* **Primary (Kurumsal Güven & Bilim):** \#1A365D (Deep Navy / Koyu Lacivert)  
* **Secondary (Sterilizasyon & Medikal Hijyen):** \#319795 (Teal / Klinik Turkuazı)  
* **Accent (Koruyucu Bariyer & Güç):** \#8FA0B5 (Silver Grey / Gümüş Grisi)  
* **Background (Arka Plan):** \#FAFBFD (Işık Grisi / Ferah ve temiz his)  
* **Text (Yazı Rengi):** \#2C3E50 (Slate / Okunabilirliği yüksek koyu gri)

### **1.2 Tipografi (Yazı Karakterleri)**

* **Ana ve Alt Başlıklar (H1, H2, H3):** Google Fonts üzerinden Montserrat veya Inter (Font Weight: 600, 700\)  
* **Gövde Metinleri:** Inter veya System-UI (Clean, göz yormayan, okuma derinliği yüksek)

### **1.3 Logo, Görsel Dosya Yapısı & Boyutları (Asset Directory)**

Tüm kurumsal resim ve logolar projenin /public/assets/ klasöründe yer alacaktır. Tasarımda kullanılacak resimlerin yerleşeceği dosya yolları ve tam çözünürlükleri aşağıdadır:

| Asset Adı | Dosya Yolu | Önerilen Çözünürlük | Açıklama |
| :---- | :---- | :---- | :---- |
| **Ana Logo (Açık Zemin)** | /public/assets/logo-light-bg.svg | 350x80 px | Navbar ve beyaz alanlar için şeffaf logotype. |
| **Ana Logo (Koyu Zemin)** | /public/assets/logo-dark-bg.svg | 350x80 px | Footer ve lacivert alanlar için beyaz vektörel logo. |
| **Favicon** | /public/favicon.ico | 32x32 px | Tarayıcı sekme ikonu. |
| **Hero Arka Planı** | /public/assets/hero-bg.jpg | 1920x1080 px | Oksijen kabarcıklı berrak su veya laboratuvar temalı görsel. |
| **Gıda/CIP Sektör Görseli** | /public/assets/sector-food.jpg | 800x600 px | Süt fabrikası, CIP paslanmaz çelik boru/tank görseli. |
| **Veteriner Sektör Görseli** | /public/assets/sector-veterinary.jpg | 800x600 px | Muayene masasında sakin duran kedi/köpek ve stetoskop görseli. |
| **Diş Hekimliği Sektör Görseli** | /public/assets/sector-dental.jpg | 800x600 px | Modern dental ünit ve implant/cerrahi alan görseli. |
| **Sosyal Medya Paylaşım** | /public/assets/og-image.jpg | 1200x630 px | Link paylaşıldığında görünecek marka kartı (Open Graph). |

## **🛠️ 2\. TEKNOLOJİ YIĞINI (TECH STACK) & KLASÖR YAPISI**

* **Framework:** Next.js (App Router tercih sebebi, yoksa React \+ Vite tek sayfa)  
* **Styling:** Tailwind CSS (Responsive, Mobile-First mimari)  
* **Icons:** lucide-react veya inline özelleştirilmiş SVG kütüphaneleri  
* **Form Entegrasyonu:** Web3Forms veya Formspree (Yapay zeka ajanı, backend yazmadan Vercel env değişkeniyle formu çalıştıracaktır)

### **Proje Klasör Mimarisi (Next.js App Router):**

pamir-kimya-web/  
├── public/  
│   ├── assets/               \# Yukarıdaki görsel tablosundaki tüm resimler  
│   ├── documents/            \# Akademik PDF'ler (Yeditepe Raporu, Ruhsat vb.)  
│   ├── robots.txt            \# SEO Robots.txt  
│   └── sitemap.xml           \# Arama motorları haritası  
├── src/  
│   ├── app/  
│   │   ├── layout.js         \# Ana HTML yapısı, Google Analytics ve Meta Etiketleri  
│   │   ├── page.js           \# Ana Sayfa (Tüm sektör geçişleri burada)  
│   │   ├── error.js          \# Özel hata sayfası  
│   │   └── api/  
│   │       └── contact/route.js \# (İsteğe bağlı) Resend API mail servisi  
│   ├── components/  
│   │   ├── Navbar.js         \# Dinamik Responsive Menü  
│   │   ├── Hero.js           \# Oksijenizasyon etkili giriş alanı  
│   │   ├── SectorCard.js     \# Gıda, Veteriner, Dental geçiş kartları  
│   │   ├── DocumentCenter.js \# Akademik PDF indirme alanı  
│   │   ├── ContactForm.js    \# Çalışan İletişim Formu (Web3Forms/Formspree)  
│   │   └── Footer.js         \# Kurumsal alt bilgi ve iletişim hatları

## **📈 3\. %100 SEO & MEVZUAT UYUMLULUĞU (SEO SUITE)**

Ajan, web sitesini derlerken arama motorlarında (Google) ilk sayfaya yerleşmek için şu SEO araçlarını entegre etmelidir:

### **3.1 Metadata Yapılandırması (SEO Tags)**

layout.js veya HTML \<head\> içerisine gömülecek tescilli SEO başlıkları:

* **Title:** Pamir Kimya | Endüstriyel CIP, Veteriner ve Dental Biyogüvenlik Çözümleri  
* **Description:** Hidrojen Peroksit ve Kolloidal Gümüş (![][image1] \+ Ag) gücüyle kalıntısız ve korozyonsuz sterilizasyon. Gıda sanayisi, veteriner klinikleri ve dental ünitler için Yeditepe Üniversitesi onaylı %99,999 kırım.  
* **Keywords:** pamir kimya, hidrojen peroksit kolloidal gümüş, veteriner dezenfektan, cip temizliği, dental ünit biyofilm temizliği, implant yara bakımı dezenfektan, yalama güvenliği dezenfektan, akgıda dezenfektan, biyosidal ruhsatlı dezenfektan.

### **3.2 robots.txt İçeriği**

Sitenin kök dizinine (/public/robots.txt) yerleştirilecek dosya içeriği:

User-agent: \*  
Allow: /

Sitemap: \[https://pamirkimya.com/sitemap.xml\](https://pamirkimya.com/sitemap.xml)

### **3.3 sitemap.xml İçeriği**

Sitenin kök dizinine (/public/sitemap.xml) yerleştirilecek dosya içeriği:

\<?xml version="1.0" encoding="UTF-8"?\>  
\<urlset xmlns="\[http://www.sitemaps.org/schemas/sitemap/0.9\](http://www.sitemaps.org/schemas/sitemap/0.9)"\>  
  \<url\>  
    \<loc\>\[https://pamirkimya.com/\](https://pamirkimya.com/)\</loc\>  
    \<lastmod\>2026-06-15\</lastmod\>  
    \<changefreq\>monthly\</changefreq\>  
    \<priority\>1.0\</priority\>  
  \</url\>  
\</urlset\>

### **3.4 Google JSON-LD Yapılandırılmış Veri Şeması (Schema Markup)**

Yapay zeka ajanı, web sitesinin HTML yapısına aşağıdaki application/ld+json şemasını gömmelidir. Bu, Google'ın Pamir Kimya'yı doğrudan tescilli bir "Biyoteknoloji ve Medikal Kimya Kuruluşu" olarak tanımasını sağlar:

{  
  "@context": "\[https://schema.org\](https://schema.org)",  
  "@type": "MedicalBusiness",  
  "name": "Pamir Kimya Biyogüvenlik ve Teknoloji Çözümleri",  
  "alternateName": "Pamir Kimya",  
  "description": "Süt endüstrisi, veteriner hekimlik ve dental klinikler için yeni nesil Hidrojen Peroksit ve Kolloidal Gümüş dezenfeksiyon teknolojileri.",  
  "url": "\[https://pamirkimya.com\](https://pamirkimya.com)",  
  "logo": "\[https://pamirkimya.com/assets/logo-light-bg.svg\](https://pamirkimya.com/assets/logo-light-bg.svg)",  
  "telephone": "+90-543-574-64-58",  
  "email": "selimeksioglu@outlook.com",  
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
  "knowsAbout": \[  
    "Clean-in-Place (CIP) Hijyeni",  
    "Veteriner Biyogüvenlik ve Yara Bakımı",  
    "Dental Biyofilm Kontrolü ve Dental Cerrahi Yara Bakımı"  
  \]  
}

## **🗂️ 4\. SEKTÖREL SAYFA VE BÖLÜM METİNLERİ (SAYFA İÇERİKLERİ)**

Yapay zeka ajanı, sitedeki metinleri kısaltmamalı veya yapay zeka jenerik kelimeleriyle değiştirmemelidir. Aşağıdaki sektörel metin blokları sitede tam olarak yer almalıdır.

### **4.1 Ana Sayfa Hero Bölümü**

* **Ana Manşet:** Kimyasal Yük Değil, Oksijen Konforu: Yeni Nesil Biyogüvenlik Teknolojisi  
* **Alt Başlık:** Alkol, klor ve aldehit içermeyen tescilli Hidrojen Peroksit & Kolloidal Gümüş (![][image1] \+ Ag) sinerjisi. Saniyeler içinde %99,999 mikrobiyolojik kırım sağlar, reaksiyon sonrası sadece su ve oksiyene dönüşür.

### **4.2 Sektör 1: Gıda ve Süt Endüstrisi (CIP Çözümleri)**

* **Hedef Kitle:** Süt fabrikaları (Akgıda vb. ölçekteki devler), Kalite ve Satın Alma Müdürleri.  
* **Anahtar Çözüm Maddeleri:**  
  * **CIP Son Dezenfeksiyonu:** Boru, tank ve pastörize ünitelerinde sıfır korozyon. Durulama suyu ve zamandan maksimum tasarruf. Süte koku/tat geçiş riski sıfırdır.  
  * **Depo Hava Sanitasyonu:** Peynir olgunlaşma odalarındaki havada asılı duran küf ve mantar sporlarını ULV soğuk sisleme ile saniyeler içinde yok ederek raf ömrünü uzatır.  
  * **Çiğ Süt Tankerleri:** Süt taşlarını ve biyofilm tabakasını temizler, soğukta üreyen bakterileri yok eder.  
  * **Mevzuat Uyumu:** BRC, IFS ve ISO 22000 standartlarını %100 destekler.

### **4.3 Sektör 2: Veteriner Hekimlik ve Yara Bakımı**

* **Hedef Kitle:** Veteriner Hekimler, Hayvan Hastaneleri ve Klinik İşletmecileri.  
* **Anahtar Çözüm Maddeleri:**  
  * **%100 Yalama Güvenliği:** Ürün yara yerinde reaksiyonunu tamamlayıp suya dönüştüğü için hayvan yarayı yalasa bile sistemik toksisite riski sıfırdır.  
  * **Acısız ve Yakmayan Formül:** Alkol veya iyot içermez. Açık yaralarda, dikiş hatlarında veya pati apselerinde yanma hissi uyandırmaz. Stressiz pansuman sağlar.  
  * **Klinik İçi Ortam Konforu:** Çamaşır suyu gazı gibi kedi ve köpeklerin solunumunu irite etmez. Ağır idrar kokularını parfümlerle maskelemez, kökten yok eder.  
  * **Hassas Ekipman Koruma:** Paslanmaz çelik muayene masalarını, kafes hatlarını ve cerrahi aletleri paslandırmaz, köreltirmez.

### **4.4 Sektör 3: Dental ve Ağız İçi Cerrahi (Diş Hekimliği)**

* **Hedef Kitle:** Diş Hekimleri, Ağız ve Diş Sağlığı Poliklinikleri.  
* **Anahtar Çözüm Maddeleri:**  
  * **Biyofilm Çözümü:** Dental ünit içindeki ince su borularında oluşan bakteriyel biyofilm tabakasını parçalar, ağız yıkama suyunu steril tutar.  
  * **İmplant ve Cerrahi Sonrası Yara Bakımı:** İmplant yuvasının yıkanmasında ve operasyon sonrası dikiş hatlarında güvenle kullanılır. Açığa çıkan serbest oksijen (![][image2]) peri-implantitis riskini engeller, kemik entegrasyonunu hızlandırır.  
  * **Sıfır Toksisite ve Kötü Tat:** Hasta ağız içindeki solüsyonu yutsa dahi zehirlenme riski yoktur. Klorheksidin gibi ağızda acı/metalik bir tat bırakmaz.

## **📧 5\. ÇALIŞAN İLETİŞİM FORMU ENTEGRASYONU (FORM ENGINE)**

Sitedeki iletişim formunun backend (arka plan sunucu kodu) yazmadan, doğrudan Vercel üzerinde çalışması için **Web3Forms** veya **Formspree** kullanılacaktır.

### **AI Agent İçin React / HTML Form Entegrasyon Kodu:**

Geliştirici ajan, form bileşenini (ContactForm.js) aşağıdaki şablona göre oluşturmalı ve Vercel ortam değişkeni olan NEXT\_PUBLIC\_WEB3FORMS\_ACCESS\_KEY değerini bağlamalıdır:

import React, { useState } from 'react';

export default function ContactForm() {  
  const \[status, setStatus\] \= useState("");

  const handleSubmit \= async (e) \=\> {  
    e.preventDefault();  
    setStatus("sending");  
    const formData \= new FormData(e.target);

    // Vercel Environment Variable'dan anahtarı çeker  
    const accessKey \= process.env.NEXT\_PUBLIC\_WEB3FORMS\_ACCESS\_KEY || "YOUR\_ACCESS\_KEY\_HERE";  
    formData.append("access\_key", accessKey);

    try {  
      const response \= await fetch("\[https://api.web3forms.com/submit\](https://api.web3forms.com/submit)", {  
        method: "POST",  
        body: formData  
      });

      const data \= await response.json();  
      if (data.success) {  
        setStatus("success");  
        e.target.reset();  
      } else {  
        setStatus("error");  
      }  
    } catch (error) {  
      setStatus("error");  
    }  
  };

  return (  
    \<form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-100"\>  
      \<h3 className="text-xl font-bold text-navy mb-4"\>Numune ve Teknik Bilgi Talep Formu\</h3\>  
        
      \<div className="mb-4"\>  
        \<label className="block text-sm font-semibold text-gray-700 mb-1"\>Adınız Soyadınız / Kurum Adı\</label\>  
        \<input type="text" name="name" required className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-teal" /\>  
      \</div\>

      \<div className="mb-4"\>  
        \<label className="block text-sm font-semibold text-gray-700 mb-1"\>Telefon Numaranız\</label\>  
        \<input type="tel" name="phone" required className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-teal" /\>  
      \</div\>

      \<div className="mb-4"\>  
        \<label className="block text-sm font-semibold text-gray-700 mb-1"\>E-Posta Adresiniz\</label\>  
        \<input type="email" name="email" required className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-teal" /\>  
      \</div\>

      \<div className="mb-4"\>  
        \<label className="block text-sm font-semibold text-gray-700 mb-1"\>İlgi Alanınız / Sektörünüz\</label\>  
        \<select name="sector" className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-teal bg-white"\>  
          \<option value="gida"\>Süt ve Gıda Endüstrisi (CIP)\</option\>  
          \<option value="veteriner"\>Veteriner Klinik ve Hayvancılık\</option\>  
          \<option value="dental"\>Diş Hekimliği ve Ağız-Diş Sağlığı\</option\>  
          \<option value="diger"\>Diğer\</option\>  
        \</select\>  
      \</div\>

      \<div className="mb-4"\>  
        \<label className="block text-sm font-semibold text-gray-700 mb-1"\>Mesajınız / Numune Talebiniz\</label\>  
        \<textarea name="message" rows="4" required className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-teal"\>\</textarea\>  
      \</div\>

      \<button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"\>  
        {status \=== "sending" ? "Gönderiliyor..." : "Talebi İlet"}  
      \</button\>

      {status \=== "success" && (  
        \<p className="mt-3 text-green-600 text-sm font-semibold"\>Talebiniz başarıyla iletildi. En kısa sürede dönüş sağlanacaktır.\</p\>  
      )}  
      {status \=== "error" && (  
        \<p className="mt-3 text-red-600 text-sm font-semibold"\>Gönderim sırasında hata oluştu. Lütfen doğrudan telefon hattından iletişime geçin.\</p\>  
      )}  
    \</form\>  
  );  
}

## **🚀 6\. DEPLOYMENT (GITHUB \-\> VERCEL KURULUM ADIMLARI)**

Ajan, projeyi canlıya alırken aşağıdaki adımları sırasıyla takip etmelidir:

1. **Yerel Kurulum:** Proje Next.js şablonuyla yerel ortamda (npm run dev) test edilir.  
2. **GitHub Entegrasyonu:** Proje dosyaları yeni açılan bir GitHub reposuna (github.com/pamirkimya/web) git push edilir.  
3. **Vercel Bağlantısı:**  
   * Vercel paneline girilir ve **"Import Project"** seçeneğiyle ilgili GitHub reposu seçilir.  
   * **Environment Variables (Ortam Değişkenleri)** sekmesine gelinir.  
   * NEXT\_PUBLIC\_WEB3FORMS\_ACCESS\_KEY değişken adı yazılır ve Web3Forms'tan alınan anahtar değer olarak eklenir.  
4. **Canlıya Alma:** **"Deploy"** butonuna basılarak site 10 saniye içinde Vercel sunucularında sıfır hata ile yayına alınır.

# ***Bu yönerge Pamir Kimya kurumsal başarısı için tasarlanmıştır. AI Agent, bu kurallara sadık kalarak projeyi üretmekle yükümlüdür.***

eof  


[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAaCAYAAAAe97TpAAADEklEQVR4Xu1WO2hUQRR9iyv4AUUUl+zv7k8kKmhYPwRFVMROETGFipWIhRZiIwYhhaQSJGxhIAQCgmJha6WNddqAoASXIAqKBkQFf9FzdmbWyd3dl92XRuEdOLyZe+6787nzC4IYMf5/VKvVlfl8fjt4OpfLHSuVSuu1TySIyGHwPfjb40c0dD6dTm/C9xnqvzztM2wPU6nUWh2rEyqVyjr8dxucBW9yEPyCH2jPZrOr9T+RgGCT4AIaOKo12qw2hWpC62EoFAq78O9L8I7ubLFY3Av7POKOo5r0tZ6BIBsQbBqso6FMG/26mCyc01oYsGR2i8nyBJeS1gloNQ4Evju01hMQpF9Mah8FrTOSpN3q/UrriHK5vBn+MyTLWnfgxHCCkLFLWusJLhBnXGvMDLQ6OM2Mab0DEvC/xZjgFS36CGu7J4hJ6U/Mxkl8+3wi+BC+C/TR/3UCfIvga/At/i9p3Qd8Rpc9CG8/fAHvgROKr9iI9LAfsL5P2H8eY2JWad2BGn2s7ymtdw2JuB8w+G1iMlhjWWnuIAjNntc2s1akLZPJZMVk5y5Or4NBN6eh2DUJXtNap/2A+gBm8SqKK2DfD86BB5zuBrHUEvH8xlBNcAAoj/AoBreg/AL6Wf1fC8TcDz/8TjjQRk3UjNrGZzFTqeBvtiadzpNmqUHAp8AY4HN2njb4H0f9E+LuZF1MRp6GXqycXYlwP/Am50WFYsJb182BojwIfpP2S7Tx/BCz3+ZtnAbYWWbW3SmMydhh+4qdrIrZ0C2NeZ1rzkw72Bic0QHPnIR9nLERZ59ndx2dglbHAbDH13xgonLwmeEhobUG8uYZ8UbMLDu+Q4NnkNqNKD8Bv3say/cReI0fhw842B+Ag76d4LoW8176Co7m7XsJ3zl8a3xP6X8c7ENxDBwKutnYUWEHwE7y1EpyI2ofgn58sXIQXDqhSyNoLrVh8AjrNm7Lklw27EyNMANgHzuH+kXtFwG86S/bDc64WzHoG7Rrx2UDDVyQxUuRjH5ZWaDDh2Txs58c1n4xYsSI8e/iDxmqBEQSz07vAAAAAElFTkSuQmCC>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAYAAACtv5zzAAAB8ElEQVR4Xu2Uu0tbYRjGT1ChRSu0moZcT24QRIRKsJM4iAgOTnYrndu9Q6k4dCnSDh2kUBDBTUdHoVOhnewmBIcIIkgKivoHCNrfk3MCX98mMcY1Dzyc833Pe/1untfDfZBMJkfS6fR8JpN54fv+GFN91qYbRHK53Ew2m90j6C58KTL+zrdKwinr0DHK5fIAgT4R6MgGksb8OryEk67WERSApfiG8wUdPLe6oGWC5/Arw4jV24LK3+B4ra/VGqCAx9j8hpVEIjFq9ZZIpVJFnGrwgOpjVm/ASXAM41ZvCar+gMMN/Gg1FyTIY/PnTgmi0egQxj+0PASYs7oL6bKDP0ul0iOrN4UqCSvS5umstwT6mjpVx+FUH+MlPzhdy8Vicdi1r8NJ0LZtNjWNXoVndDKuORK95n/aCxKtwF+6nNZxFKFyS4IIwd6revhWE87Sbmgc7o8OysI/nqCfyW14FVbzH3Qv/OCCreu+NOY5fRNovv794I7Umu4jwqQCIG66AUJtFp7CLwR86Gou8H2n50SdWa0OPQ0EOQzfoPr7A3cZ7yuJ1+bmhh1uUcATq1los8b0esJFkia8NoEFCniG7WosFhtUgkKh8NTadA2tP/icz+czfOMkemUfya5B5Q8IuuMHJ6vBE45pytr20MP98BcnZHvGEJJhPQAAAABJRU5ErkJggg==>