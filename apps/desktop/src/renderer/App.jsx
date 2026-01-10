import React, { useMemo, useState } from "react";

const emptyStockForm = {
  name: "",
  unit: "",
  price: "",
  quantity: ""
};

const emptyCariForm = {
  name: "",
  phone: "",
  email: "",
  address: ""
};

const emptyMovementForm = {
  itemId: "",
  type: "in",
  quantity: "",
  note: ""
};

const emptyCashForm = {
  type: "income",
  amount: "",
  note: ""
};

const formatCode = (prefix, index) => {
  return `${prefix}${String(index).padStart(4, "0")}`;
};

export default function App() {
  const [stockForm, setStockForm] = useState(emptyStockForm);
  const [cariForm, setCariForm] = useState(emptyCariForm);
  const [movementForm, setMovementForm] = useState(emptyMovementForm);
  const [cashForm, setCashForm] = useState(emptyCashForm);
  const [stockItems, setStockItems] = useState([]);
  const [cariItems, setCariItems] = useState([]);
  const [movements, setMovements] = useState([]);
  const [cashEntries, setCashEntries] = useState([]);

  const nextStockCode = formatCode("MLZ", stockItems.length + 1);
  const nextCariCode = formatCode("CARI", cariItems.length + 1);

  const totalStockValue = useMemo(() => {
    return stockItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [stockItems]);

  const cashSummary = useMemo(() => {
    return cashEntries.reduce(
      (summary, entry) => {
        if (entry.type === "income") {
          summary.income += entry.amount;
        } else {
          summary.expense += entry.amount;
        }
        return summary;
      },
      { income: 0, expense: 0 }
    );
  }, [cashEntries]);

  const handleStockChange = (event) => {
    const { name, value } = event.target;
    setStockForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCariChange = (event) => {
    const { name, value } = event.target;
    setCariForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleMovementChange = (event) => {
    const { name, value } = event.target;
    setMovementForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCashChange = (event) => {
    const { name, value } = event.target;
    setCashForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleStockSubmit = (event) => {
    event.preventDefault();
    const nextItem = {
      id: crypto.randomUUID(),
      code: nextStockCode,
      name: stockForm.name.trim(),
      unit: stockForm.unit.trim(),
      price: Number(stockForm.price),
      quantity: Number(stockForm.quantity)
    };

    if (!nextItem.name) {
      return;
    }

    setStockItems((prev) => [nextItem, ...prev]);
    setStockForm(emptyStockForm);
  };

  const handleCariSubmit = (event) => {
    event.preventDefault();
    const nextCari = {
      id: crypto.randomUUID(),
      code: nextCariCode,
      name: cariForm.name.trim(),
      phone: cariForm.phone.trim(),
      email: cariForm.email.trim(),
      address: cariForm.address.trim()
    };

    if (!nextCari.name) {
      return;
    }

    setCariItems((prev) => [nextCari, ...prev]);
    setCariForm(emptyCariForm);
  };

  const handleMovementSubmit = (event) => {
    event.preventDefault();
    const selectedItem = stockItems.find(
      (item) => item.id === movementForm.itemId
    );
    const quantity = Number(movementForm.quantity);

    if (!selectedItem || !quantity) {
      return;
    }

    if (movementForm.type === "out" && selectedItem.quantity < quantity) {
      return;
    }

    const movement = {
      id: crypto.randomUUID(),
      itemId: selectedItem.id,
      itemName: selectedItem.name,
      code: selectedItem.code,
      type: movementForm.type,
      quantity,
      note: movementForm.note.trim()
    };

    setMovements((prev) => [movement, ...prev]);
    setStockItems((prev) =>
      prev.map((item) => {
        if (item.id !== selectedItem.id) {
          return item;
        }
        const delta = movementForm.type === "in" ? quantity : -quantity;
        return { ...item, quantity: item.quantity + delta };
      })
    );
    setMovementForm(emptyMovementForm);
  };

  const handleCashSubmit = (event) => {
    event.preventDefault();
    const entry = {
      id: crypto.randomUUID(),
      type: cashForm.type,
      amount: Number(cashForm.amount),
      note: cashForm.note.trim()
    };

    if (!entry.amount) {
      return;
    }

    setCashEntries((prev) => [entry, ...prev]);
    setCashForm(emptyCashForm);
  };

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">OF</div>
          <div>
            <p className="brand-title">MTN OFS</p>
            <p className="brand-subtitle">Muhasebe & Stok</p>
          </div>
        </div>
        <nav className="nav">
          <button type="button" className="nav-item active">
            Genel Bakış
          </button>
          <button type="button" className="nav-item">
            Stok Yönetimi
          </button>
          <button type="button" className="nav-item">
            Cari Kartlar
          </button>
          <button type="button" className="nav-item">
            Stok Hareketleri
          </button>
          <button type="button" className="nav-item">
            Gelir / Gider
          </button>
        </nav>
        <div className="sidebar-card">
          <p className="label">Bugünkü Özet</p>
          <p className="metric">₺{totalStockValue.toLocaleString("tr-TR")}</p>
          <p className="hint">Toplam stok değeri</p>
          <p className="metric small">
            ₺{(cashSummary.income - cashSummary.expense).toLocaleString("tr-TR")}
          </p>
          <p className="hint">Net nakit</p>
        </div>
      </aside>

      <main className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">MTN OFS · Muhasebe & Stok</p>
            <h1>İşletme Yönetim Paneli</h1>
            <p className="subtitle">
              Stok, cari ve finans hareketlerini tek ekrandan yönetin.
            </p>
          </div>
          <div className="status">
            <span className="status-pill">Online</span>
            <span className="status-pill">Son güncelleme: Bugün</span>
          </div>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <p className="label">Stok Kartı</p>
            <p className="metric">{stockItems.length}</p>
            <p className="hint">Aktif ürün sayısı</p>
          </div>
          <div className="stat-card">
            <p className="label">Cari Kart</p>
            <p className="metric">{cariItems.length}</p>
            <p className="hint">Müşteri / Tedarikçi</p>
          </div>
          <div className="stat-card">
            <p className="label">Gelir</p>
            <p className="metric">₺{cashSummary.income.toLocaleString("tr-TR")}</p>
            <p className="hint">Toplam gelir</p>
          </div>
          <div className="stat-card">
            <p className="label">Gider</p>
            <p className="metric">₺{cashSummary.expense.toLocaleString("tr-TR")}</p>
            <p className="hint">Toplam gider</p>
          </div>
        </section>

        <section className="grid">
          <div className="card">
            <h2>Stok Kartı Ekle</h2>
            <p className="helper">
              Kod otomatik oluşur. Ürün adı zorunludur.
            </p>
            <form className="form" onSubmit={handleStockSubmit}>
              <label>
                Otomatik stok kodu
                <input name="code" value={nextStockCode} readOnly />
              </label>
              <label>
                Ürün adı
                <input
                  name="name"
                  value={stockForm.name}
                  onChange={handleStockChange}
                  placeholder="Örn. 3/8 Somun"
                  required
                />
              </label>
              <label>
                Birim
                <input
                  name="unit"
                  value={stockForm.unit}
                  onChange={handleStockChange}
                  placeholder="Adet / Kg"
                />
              </label>
              <label>
                Birim fiyat (₺)
                <input
                  type="number"
                  name="price"
                  value={stockForm.price}
                  onChange={handleStockChange}
                  placeholder="0"
                  min="0"
                  step="0.01"
                />
              </label>
              <label>
                Açılış miktarı
                <input
                  type="number"
                  name="quantity"
                  value={stockForm.quantity}
                  onChange={handleStockChange}
                  placeholder="0"
                  min="0"
                  step="0.01"
                />
              </label>
              <button type="submit">Stok Kartı Kaydet</button>
            </form>
          </div>

          <div className="card">
            <h2>Stok Kartları</h2>
            <div className="summary">
              <span>Toplam kart: {stockItems.length}</span>
              <span>
                Toplam stok değeri: ₺{totalStockValue.toLocaleString("tr-TR")}
              </span>
            </div>
            {stockItems.length === 0 ? (
              <p className="empty">Henüz stok kartı eklenmedi.</p>
            ) : (
              <div className="table">
                <div className="table-row table-head">
                  <span>Ürün</span>
                  <span>Kod</span>
                  <span>Birim</span>
                  <span>Fiyat</span>
                  <span>Miktar</span>
                </div>
                {stockItems.map((item) => (
                  <div key={item.id} className="table-row">
                    <span>{item.name}</span>
                    <span>{item.code}</span>
                    <span>{item.unit || "-"}</span>
                    <span>₺{item.price.toLocaleString("tr-TR")}</span>
                    <span>{item.quantity.toLocaleString("tr-TR")}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="grid">
          <div className="card">
            <h2>Cari Kartı Ekle</h2>
            <p className="helper">Cari kodu otomatik oluşur.</p>
            <form className="form" onSubmit={handleCariSubmit}>
              <label>
                Otomatik cari kodu
                <input name="code" value={nextCariCode} readOnly />
              </label>
              <label>
                Cari adı
                <input
                  name="name"
                  value={cariForm.name}
                  onChange={handleCariChange}
                  placeholder="Örn. Yıldız Ticaret"
                  required
                />
              </label>
              <label>
                Telefon
                <input
                  name="phone"
                  value={cariForm.phone}
                  onChange={handleCariChange}
                  placeholder="0555 555 55 55"
                />
              </label>
              <label>
                E-posta
                <input
                  name="email"
                  value={cariForm.email}
                  onChange={handleCariChange}
                  placeholder="info@firma.com"
                />
              </label>
              <label>
                Adres
                <input
                  name="address"
                  value={cariForm.address}
                  onChange={handleCariChange}
                  placeholder="İl/İlçe"
                />
              </label>
              <button type="submit">Cari Kartı Kaydet</button>
            </form>
          </div>

          <div className="card">
            <h2>Cari Kartlar</h2>
            <div className="summary">
              <span>Toplam cari: {cariItems.length}</span>
            </div>
            {cariItems.length === 0 ? (
              <p className="empty">Henüz cari kart eklenmedi.</p>
            ) : (
              <div className="table">
                <div className="table-row table-head table-cari">
                  <span>Firma</span>
                  <span>Kod</span>
                  <span>Telefon</span>
                  <span>E-posta</span>
                </div>
                {cariItems.map((cari) => (
                  <div key={cari.id} className="table-row table-cari">
                    <span>{cari.name}</span>
                    <span>{cari.code}</span>
                    <span>{cari.phone || "-"}</span>
                    <span>{cari.email || "-"}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="grid">
          <div className="card">
            <h2>Stok Hareketi</h2>
            <p className="helper">
              Giriş/çıkış hareketleri stok miktarını otomatik günceller.
            </p>
            <form className="form" onSubmit={handleMovementSubmit}>
              <label>
                Ürün seç
                <select
                  name="itemId"
                  value={movementForm.itemId}
                  onChange={handleMovementChange}
                  required
                >
                  <option value="">Seçiniz</option>
                  {stockItems.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.code} · {item.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Hareket tipi
                <select
                  name="type"
                  value={movementForm.type}
                  onChange={handleMovementChange}
                >
                  <option value="in">Stok Girişi</option>
                  <option value="out">Stok Çıkışı</option>
                </select>
              </label>
              <label>
                Miktar
                <input
                  type="number"
                  name="quantity"
                  value={movementForm.quantity}
                  onChange={handleMovementChange}
                  placeholder="0"
                  min="0"
                  step="0.01"
                />
              </label>
              <label>
                Not
                <input
                  name="note"
                  value={movementForm.note}
                  onChange={handleMovementChange}
                  placeholder="Fatura / İrsaliye"
                />
              </label>
              <button type="submit">Hareket Kaydet</button>
            </form>
          </div>

          <div className="card">
            <h2>Stok Hareketleri</h2>
            {movements.length === 0 ? (
              <p className="empty">Henüz stok hareketi girilmedi.</p>
            ) : (
              <div className="table">
                <div className="table-row table-head table-move">
                  <span>Ürün</span>
                  <span>Kod</span>
                  <span>Tip</span>
                  <span>Miktar</span>
                  <span>Not</span>
                </div>
                {movements.map((movement) => (
                  <div key={movement.id} className="table-row table-move">
                    <span>{movement.itemName}</span>
                    <span>{movement.code}</span>
                    <span>
                      {movement.type === "in" ? "Giriş" : "Çıkış"}
                    </span>
                    <span>{movement.quantity}</span>
                    <span>{movement.note || "-"}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="grid">
          <div className="card">
            <h2>Gelir / Gider Kaydı</h2>
            <form className="form" onSubmit={handleCashSubmit}>
              <label>
                Tür
                <select
                  name="type"
                  value={cashForm.type}
                  onChange={handleCashChange}
                >
                  <option value="income">Gelir</option>
                  <option value="expense">Gider</option>
                </select>
              </label>
              <label>
                Tutar (₺)
                <input
                  type="number"
                  name="amount"
                  value={cashForm.amount}
                  onChange={handleCashChange}
                  placeholder="0"
                  min="0"
                  step="0.01"
                />
              </label>
              <label>
                Açıklama
                <input
                  name="note"
                  value={cashForm.note}
                  onChange={handleCashChange}
                  placeholder="Örn. Kasa tahsilatı"
                />
              </label>
              <button type="submit">Kaydet</button>
            </form>
          </div>

          <div className="card">
            <h2>Gelir / Gider Özeti</h2>
            <div className="summary">
              <span>Gelir: ₺{cashSummary.income.toLocaleString("tr-TR")}</span>
              <span>Gider: ₺{cashSummary.expense.toLocaleString("tr-TR")}</span>
              <span>
                Net: ₺
                {(cashSummary.income - cashSummary.expense).toLocaleString(
                  "tr-TR"
                )}
              </span>
            </div>
            {cashEntries.length === 0 ? (
              <p className="empty">Henüz gelir/gider kaydı yok.</p>
            ) : (
              <div className="table">
                <div className="table-row table-head table-cash">
                  <span>Tür</span>
                  <span>Tutar</span>
                  <span>Açıklama</span>
                </div>
                {cashEntries.map((entry) => (
                  <div key={entry.id} className="table-row table-cash">
                    <span>{entry.type === "income" ? "Gelir" : "Gider"}</span>
                    <span>₺{entry.amount.toLocaleString("tr-TR")}</span>
                    <span>{entry.note || "-"}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="card roadmap">
          <h2>Sıradaki Adımlar</h2>
          <ol>
            <li>Cari kartlara bakiye ve vade takibi ekleyelim.</li>
            <li>Stok hareketlerini fatura ekranına bağlayalım.</li>
            <li>Raporları PDF/Excel dışa aktarıma hazırlayalım.</li>
            <li>Verileri yerel veritabanına (SQLite) kaydedelim.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
