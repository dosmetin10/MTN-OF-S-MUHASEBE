import React from "react";

const accountingItems = [
  "Gösterge Paneli",
  "Cari Hesaplar",
  "Kasa",
  "Çek / Senet",
  "Tahsilat & Ödeme",
  "Muhasebe Fişleri",
  "Raporlar",
  "Tanımlar & Ayarlar"
];

const stockItems = [
  "Stok Yönetimi",
  "Stok Hareketleri",
  "Satış İşlemleri",
  "Alış İşlemleri",
  "Teklif & Sipariş",
  "Depo & Lojistik",
  "Stok Raporları",
  "Entegrasyon",
  "Genel Ayarlar"
];

const quickActions = [
  "Tahsilat Yap",
  "Stok Girişi",
  "Teklif Hazırla",
  "Cari Ekle",
  "Kasa Giriş"
];

const reminders = [
  {
    title: "Erdal Yapı",
    detail: "3.500 ₺ Tahsilat",
    date: "06.01.2026",
    status: "Yaklaşan"
  },
  {
    title: "Elektrik Faturası",
    detail: "850 ₺ Ödeme",
    date: "07.01.2026",
    status: "Kritik"
  },
  {
    title: "PEX 20mm Boru",
    detail: "Kritik stok: 5 adet",
    date: "Bugün",
    status: "Stok"
  }
];

export default function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar sidebar-left">
        <div className="brand">
          <div className="logo">MTN</div>
          <div>
            <h1>MTN Muhasebe</h1>
            <p>Ön Muhasebe & Muhasebe</p>
          </div>
        </div>
        <nav>
          {accountingItems.map((item) => (
            <button className="menu-item" key={item} type="button">
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-panel">
        <header className="hero">
          <div>
            <p className="status">Offline çalışır · SQLite</p>
            <h2>MTN Enerji Mühendislik için özel masaüstü çözüm</h2>
            <p className="subtitle">
              Tüm modüller aktif: cari, stok, kasa, teklif, raporlama ve yedekleme.
            </p>
          </div>
          <div className="hero-card">
            <h3>Günlük Özet</h3>
            <ul>
              <li>Toplam Borç: 0 ₺</li>
              <li>Toplam Alacak: 0 ₺</li>
              <li>Günlük Kasa: 0 ₺</li>
            </ul>
          </div>
        </header>

        <section className="quick-actions">
          <h3>Hızlı İşlemler</h3>
          <div className="actions-grid">
            {quickActions.map((action) => (
              <button className="action-card" key={action} type="button">
                {action}
              </button>
            ))}
          </div>
        </section>

        <section className="company-card">
          <h3>Firma Bilgileri</h3>
          <p>MTN ENERJİ MÜHENDİSLİK (METİN DÖŞ)</p>
          <p>Ertuğrulgazi Mah. Suyolu Cad. No:77 Şahinbey / GAZİANTEP</p>
          <p>0535 641 90 61 · Finansbank</p>
          <p>Vergi Dairesi: ŞAHİNBEY · Vergi No: 14168163156</p>
        </section>

        <section className="assistant-card">
          <div className="assistant-header">
            <div>
              <p className="assistant-label">🔔 Akıllı Hatırlatıcı</p>
              <h3>Bugün seni bekleyenler</h3>
            </div>
            <button className="assistant-action" type="button">
              Yeni Hatırlatıcı
            </button>
          </div>
          <div className="assistant-list">
            {reminders.map((reminder) => (
              <div className="assistant-item" key={`${reminder.title}-${reminder.date}`}>
                <div>
                  <p className="assistant-title">{reminder.title}</p>
                  <p className="assistant-detail">{reminder.detail}</p>
                </div>
                <div className="assistant-meta">
                  <span className={`assistant-tag ${reminder.status.toLowerCase()}`}>
                    {reminder.status}
                  </span>
                  <span>{reminder.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <aside className="sidebar sidebar-right">
        <h2>Stok & Ticari</h2>
        <nav>
          {stockItems.map((item) => (
            <button className="menu-item" key={item} type="button">
              {item}
            </button>
          ))}
        </nav>
      </aside>
    </div>
  );
}
