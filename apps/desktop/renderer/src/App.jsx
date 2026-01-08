import React, { useState } from "react";
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

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
          </div>
        </header>

        <section className="quick-actions">
          <div className="section-header">
            <h3>Hızlı İşlemler</h3>
            <span>Favori butonlar</span>
          </div>
          <div className="actions-grid">
            {quickActions.map((action) => (
              <button className="action-card" key={action} type="button">
                <span>{action}</span>
                <small>Hızlı Aç</small>
              </button>
            ))}
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
            <button className="menu-item" key={item} type="button">
              {item}
            </button>
          ))}
        </nav>
      </aside>
    </div>
  );
}
