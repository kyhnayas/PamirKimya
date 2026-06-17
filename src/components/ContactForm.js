'use client';

import React, { useState } from 'react';
import { MailCheck, AlertCircle, Send } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);

    // Vercel Environment Variable'dan anahtarı çeker  
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
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
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-100/80 hover:shadow-2xl transition-shadow duration-300"
    >
      <h3 className="text-2xl font-display font-black text-primary mb-2">
        Teknik Bilgi Talep Formu
      </h3>
      <p className="text-text-slate text-sm mb-6 leading-relaxed">
        Sektörünüze özel dozajlama kılavuzu taleplerinizi iletebilirsiniz. En geç 24 saat içinde dönüş sağlanacaktır.
      </p>

      <div className="mb-4">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
          Adınız Soyadınız / Kurum Adı
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="Örn: Yavuz Selim / Pamir Gıda"
          className="w-full p-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-secondary transition-colors text-primary bg-bg-light"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            Telefon Numaranız
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="0543 574 64 58"
            className="w-full p-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-secondary transition-colors text-primary bg-bg-light"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            E-Posta Adresiniz
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="isim@kurum.com"
            className="w-full p-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-secondary transition-colors text-primary bg-bg-light"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
          İlgi Alanınız / Sektörünüz
        </label>
        <select
          name="sector"
          className="w-full p-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-secondary transition-colors text-primary bg-bg-light"
        >
          <option value="gida">Süt ve Gıda Endüstrisi (CIP)</option>
          <option value="veteriner">Veteriner Klinik ve Hayvancılık</option>
          <option value="dental">Diş Hekimliği ve Ağız-Diş Sağlığı</option>
          <option value="diger">Diğer</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
          Mesajınız
        </label>
        <textarea
          name="message"
          rows="4"
          required
          placeholder="İhtiyacınızı ve tesis/klinik detaylarınızı buraya yazabilirsiniz..."
          className="w-full p-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-secondary transition-colors text-primary bg-bg-light"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-secondary hover:bg-teal-700 text-white font-extrabold py-3.5 px-4 rounded-lg transition duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:bg-teal-300 hover-lift shadow-md shadow-teal-700/10"
      >
        <Send className="w-4 h-4" />
        <span>{status === "sending" ? "Gönderiliyor..." : "Talebi İlet"}</span>
      </button>

      {status === "success" && (
        <div className="mt-4 p-4 bg-emerald-50 border border-emerald-100 rounded-lg flex items-start space-x-3">
          <MailCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <p className="text-emerald-700 text-sm font-semibold">
            Talebiniz başarıyla iletildi. En kısa sürede dönüş sağlanacaktır.
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="mt-4 p-4 bg-rose-50 border border-rose-100 rounded-lg flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <p className="text-rose-700 text-sm font-semibold">
            Gönderim sırasında hata oluştu. Lütfen doğrudan telefon hattından veya WhatsApp üzerinden iletişime geçin.
          </p>
        </div>
      )}
    </form>
  );
}
