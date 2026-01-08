import React, { useEffect, useState } from "react";
import mtnLogo from "./assets/mtn-logo.svg";

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
  {
    title: "Tahsilat Yap",
    detail: "Cari müşteriden tahsilat kaydı açar.",
    bullets: [
      "Cari seçimi sonrası tutar ve ödeme türü alınır.",
      "Kayıt onaylanınca kasa hareketi otomatik oluşur."
    ]
  },
  {
    title: "Stok Girişi",
    detail: "Depoya yeni malzeme girişini kaydeder.",
    bullets: [
      "Malzeme adı, miktar, birim ve alış fiyatı girilir.",
      "Kaydet ile stok miktarı ve depo toplamı güncellenir."
    ]
  },
  {
    title: "Teklif Hazırla",
    detail: "Yeni satış teklifi oluşturma ekranını açar.",
    bullets: [
      "Cari seçilir, satır satır malzeme eklenir.",
      "Enter tuşu yeni satır açar, PDF çıktısı alınır."
    ]
  },
  {
    title: "Cari Ekle",
    detail: "Müşteri veya tedarikçi kartı oluşturur.",
    bullets: [
      "Ünvan, telefon, vergi no, adres alanları girilir.",
      "Kaydet ile cari kartı listelere eklenir."
    ]
  },
  {
    title: "Kasa Giriş",
    detail: "Kasa hareketlerine gelir kaydı ekler.",
    bullets: [
      "Fiş bilgileri girilir, açıklama eklenir.",
      "İşlem kasa defterinde görünür."
    ]
  }
];

const menuDetails = [
  {
    title: "Gösterge Paneli",
    group: "Muhasebe",
    summary: "Günlük özet, hızlı işlemler ve uyarıların merkezidir.",
    bullets: [
      "Toplam borç/alacak, günlük kasa, kritik uyarılar.",
      "Hızlı butonlar ile tek tık işlem başlatılır."
    ]
  },
  {
    title: "Cari Hesaplar",
    group: "Muhasebe",
    summary: "Müşteri/tedarikçi kartları ve hareket takibi.",
    bullets: [
      "Cari kartlar listesi ve hızlı arama.",
      "Cari ekstre PDF, risk & limit takibi."
    ]
  },
  {
    title: "Kasa",
    group: "Muhasebe",
    summary: "Kasa giriş/çıkış ve günlük kasa defteri.",
    bullets: [
      "Kasa fişleri ve transferleri kaydedilir.",
      "Günlük kasa defteri raporları izlenir."
    ]
  },
  {
    title: "Çek / Senet",
    group: "Muhasebe",
    summary: "Alınan/verilen çek-senet kayıtları.",
    bullets: [
      "Vade takibi ve portföy yönetimi.",
      "Tahsilat/ciro işlemleri."
    ]
  },
  {
    title: "Tahsilat & Ödeme",
    group: "Muhasebe",
    summary: "Tahsilat ve ödeme fişleri ile vade uyarıları.",
    bullets: [
      "Geciken tahsilatlar listesi.",
      "Toplu tahsilat/ödeme ekranı."
    ]
  },
  {
    title: "Muhasebe Fişleri",
    group: "Muhasebe",
    summary: "Açılış, mahsup, masraf ve serbest fişler.",
    bullets: [
      "Fiş türüne göre hesap hareketleri kaydı.",
      "Fişler raporlara otomatik yansır."
    ]
  },
  {
    title: "Raporlar",
    group: "Muhasebe",
    summary: "Muhasebe raporları ve özet analizler.",
    bullets: [
      "Cari borç/alacak, kasa ve banka raporları.",
      "Gelir-gider özetleri ve PDF çıktıları."
    ]
  },
  {
    title: "Tanımlar & Ayarlar",
    group: "Muhasebe",
    summary: "Kullanıcı, para birimi ve firma ayarları.",
    bullets: [
      "Yetki, vergi, masraf türü tanımları.",
      "Firma bilgileri tek merkezde yönetilir."
    ]
  },
  {
    title: "Stok Yönetimi",
    group: "Stok",
    summary: "Stok kartları ve malzeme girişleri.",
    bullets: [
      "Stok kartı oluştur, grup/birim tanımla.",
      "Depo bazlı stok seviyeleri takip edilir."
    ]
  },
  {
    title: "Stok Hareketleri",
    group: "Stok",
    summary: "Stok giriş/çıkış ve depo transferleri.",
    bullets: [
      "Giriş/çıkış fişleri kayıt altına alınır.",
      "Depo transferi ve sayım yönetilir."
    ]
  },
  {
    title: "Satış İşlemleri",
    group: "Stok",
    summary: "Satış teklifi, sipariş ve faturalar.",
    bullets: [
      "Satış irsaliyesi ve fatura kayıtları.",
      "Satış iade süreçleri."
    ]
  },
  {
    title: "Alış İşlemleri",
    group: "Stok",
    summary: "Alış siparişi, irsaliye ve fatura kayıtları.",
    bullets: [
      "Alış işlemleri cari borca yansır.",
      "Alış iade süreçleri."
    ]
  },
  {
    title: "Teklif & Sipariş",
    group: "Stok",
    summary: "Tekliften siparişe dönüşüm akışı.",
    bullets: [
      "Enter ile satır ekleme, hızlı malzeme seçimi.",
      "Onay/red ve sipariş takibi."
    ]
  },
  {
    title: "Depo & Lojistik",
    group: "Stok",
    summary: "Depo lokasyonları ve kritik stok uyarıları.",
    bullets: [
      "Raf/lokasyon yönetimi.",
      "Minimum stok ve kritik uyarılar."
    ]
  },
  {
    title: "Stok Raporları",
    group: "Stok",
    summary: "Stok durum ve maliyet raporları.",
    bullets: [
      "Depo bazlı stok, hızlı/yavaş dönen ürünler.",
      "Maliyet raporu PDF çıktısı."
    ]
  },
  {
    title: "Entegrasyon",
    group: "Stok",
    summary: "Stok ↔ cari ↔ fatura bağlantıları.",
    bullets: [
      "Otomatik kayıt eşleştirme ayarları.",
      "Muhasebe entegrasyon seçenekleri."
    ]
  },
  {
    title: "Genel Ayarlar",
    group: "Stok",
    summary: "Barkod, fiyat listeleri ve KDV oranları.",
    bullets: [
      "Barkod ayarları ve iskonto kuralları.",
      "Fiyat listeleri ve KDV tanımları."
    ]
  }
];

const detailMap = [...quickActions, ...menuDetails].reduce((acc, item) => {
  acc[item.title] = item;
  return acc;
}, {});

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
  const [showSplash, setShowSplash] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [activeItem, setActiveItem] = useState("Gösterge Paneli");
  const [showExitPrompt, setShowExitPrompt] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (!credentials.username || !credentials.password) return;
    const normalizedUser = credentials.username.trim().toLowerCase();
    if (!["mtn", "muhasebe"].includes(normalizedUser)) {
      setLoginError("Kullanıcı adı bulunamadı.");
      return;
    }
    if (credentials.password !== "1453") {
      setLoginError("Şifre hatalı.");
      return;
    }
    setLoginError("");
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsAuthenticating(false);
      setCredentials({ username: "", password: "" });
    }, 3500);
  };

  if (showSplash) {
    return (
      <div className="splash-screen">
        <div className="splash-card">
          <div className="splash-logo">
            <img src={mtnLogo} alt="MTN Enerji Logo" />
          </div>
          <h1>MTN Muhasebe</h1>
          <p>Kurumsal muhasebe ve stok takip sistemi başlatılıyor...</p>
          <div className="splash-loader">
            <span />
            <span />
            <span />
          </div>
          <p className="splash-note">MTN Enerji Mühendislik · Metin Döş</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="login-screen">
        <div className="login-card login-full">
          <aside className="login-users">
            <h3>Kullanıcı Menüsü</h3>
            <button
              type="button"
              className="login-user-card"
              onClick={() =>
                setCredentials((prev) => ({ ...prev, username: "mtn" }))
              }
            >
              <span>MTN</span>
              <small>Şifre: 1453</small>
            </button>
            <button
              type="button"
              className="login-user-card"
              onClick={() =>
                setCredentials((prev) => ({ ...prev, username: "muhasebe" }))
              }
            >
              <span>Muhasebe</span>
              <small>Şifre: 1453</small>
            </button>
          </aside>
          <div className="login-main">
            <div className="login-hero">
              <div className="login-animation">
                <img src={mtnLogo} alt="MTN Enerji Logo" />
                <span className="pulse" />
              </div>
              <div>
                <p className="login-label">Giriş Karşılama</p>
                <h2>MTN Enerji Mühendislik</h2>
                <p className="login-subtitle">
                  Kurumsal muhasebe ve stok takip sistemine güvenli giriş yapın.
                </p>
              </div>
            </div>
            <form className="login-form" onSubmit={handleLoginSubmit}>
              <label>
                Kullanıcı Adı
                <input
                  value={credentials.username}
                  onChange={(event) =>
                    setCredentials((prev) => ({
                      ...prev,
                      username: event.target.value
                    }))
                  }
                  placeholder="mtn veya muhasebe"
                />
              </label>
              <label>
                Şifre
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(event) =>
                    setCredentials((prev) => ({
                      ...prev,
                      password: event.target.value
                    }))
                  }
                  placeholder="1453"
                />
              </label>
              {loginError && <p className="login-error">{loginError}</p>}
              <button type="submit" disabled={isAuthenticating}>
                {isAuthenticating ? "Bağlanıyor..." : "Giriş Yap"}
              </button>
            </form>
            <p className="login-note">
              {isAuthenticating
                ? "Yetkiler kontrol ediliyor, lütfen bekleyin..."
                : "Giriş sonrası 3-4 saniye içinde ana panele yönlendirileceksiniz."}
            </p>
            <p className="login-footer">
              BU PROGRAM MTN ENERJİ MÜHENDİSLİK / METİN DÖŞ TARAFINDAN
              TASARLANIP KODLANMIŞ VE GELİŞTİRİLMİŞTİR. TÜM HAKLARI SAKLIDIR. ®
              www.mtnenerji.com.tr
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <aside className="sidebar sidebar-left">
        <div className="brand">
          <div className="logo">
            <img src={mtnLogo} alt="MTN Enerji Logo" />
          </div>
          <div>
            <h1>MTN Muhasebe</h1>
            <p>Ön Muhasebe & Muhasebe</p>
          </div>
        </div>
        <nav>
          {accountingItems.map((item) => (
            <button
              className={`menu-item ${activeItem === item ? "active" : ""}`}
              key={item}
              type="button"
              onClick={() => setActiveItem(item)}
            >
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
            <p className="ownership">
              Bu program MTN ENERJİ tarafından geliştirilmiştir.
            </p>
          </div>
          <div className="hero-card">
            <div className="hero-logo">
              <img src={mtnLogo} alt="MTN Enerji Logo" />
            </div>
            <h3>Günlük Özet</h3>
            <ul>
              <li>Toplam Borç: 0 ₺</li>
              <li>Toplam Alacak: 0 ₺</li>
              <li>Günlük Kasa: 0 ₺</li>
            </ul>
            <button
              className="exit-button"
              type="button"
              onClick={() => setShowExitPrompt(true)}
            >
              Güvenli Çıkış
            </button>
          </div>
        </header>
        {showExitPrompt && (
          <section className="exit-prompt">
            <div>
              <h3>Çıkış Öncesi Yedekleme Hatırlatması</h3>
              <p>
                Çıkış yapmadan önce son işlemlerinizin otomatik yedeği alınır. Şimdi
                yedek alıp güvenli çıkış yapabilirsiniz.
              </p>
            </div>
            <div className="exit-actions">
              <button type="button">Şimdi Yedekle</button>
              <button type="button" onClick={() => setShowExitPrompt(false)}>
                Daha Sonra
              </button>
            </div>
          </section>
        )}

        <section className="quick-actions">
          <div className="section-header">
            <h3>Hızlı İşlemler</h3>
            <span>Favori butonlar</span>
          </div>
          <div className="actions-grid">
            {quickActions.map((action) => (
              <button
                className={`action-card ${activeItem === action.title ? "active" : ""}`}
                key={action.title}
                type="button"
                onClick={() => setActiveItem(action.title)}
              >
                <span>{action.title}</span>
                <small>{action.detail}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="panel-card">
          <div className="panel-header">
            <h3>Çalışma Prensipleri ve Görev Tanımı</h3>
            <span>Seçili işlem ne karşılıyor?</span>
          </div>
          <div className="panel-placeholder detail-layout">
            <div className="detail-columns">
              <div className="detail-column">
                <h4>Muhasebe Menüsü</h4>
                <div className="detail-list">
                  {menuDetails
                    .filter((item) => item.group === "Muhasebe")
                    .map((item) => (
                      <button
                        key={item.title}
                        type="button"
                        className={`detail-item ${activeItem === item.title ? "active" : ""}`}
                        onClick={() => setActiveItem(item.title)}
                      >
                        <strong>{item.title}</strong>
                        <span>{item.summary}</span>
                      </button>
                    ))}
                </div>
              </div>
              <div className="detail-column">
                <h4>Stok Menüsü</h4>
                <div className="detail-list">
                  {menuDetails
                    .filter((item) => item.group === "Stok")
                    .map((item) => (
                      <button
                        key={item.title}
                        type="button"
                        className={`detail-item ${activeItem === item.title ? "active" : ""}`}
                        onClick={() => setActiveItem(item.title)}
                      >
                        <strong>{item.title}</strong>
                        <span>{item.summary}</span>
                      </button>
                    ))}
                </div>
              </div>
            </div>
            <div className="detail-card">
              <h4>Seçili İşlem: {activeItem}</h4>
              <p>{detailMap[activeItem]?.detail || detailMap[activeItem]?.summary}</p>
              <ul className="task-list">
                {(detailMap[activeItem]?.bullets || []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="detail-note">
                Not: İşlemleri hızlandırmak için Enter tuşu seçili alanda yeni satır açar.
              </p>
            </div>
          </div>
        </section>

        <section className="panel-card">
          <div className="panel-header">
            <h3>Gösterge Paneli</h3>
            <span>MTN Enerji kontrol merkezi</span>
          </div>
          <div className="panel-placeholder">
            <p>Bu panel alanı, aktif modül akışları için hazır.</p>
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
            <button
              className={`menu-item ${activeItem === item ? "active" : ""}`}
              key={item}
              type="button"
              onClick={() => setActiveItem(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>
    </div>
  );
}
