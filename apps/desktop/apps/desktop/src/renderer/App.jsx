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
  address: "",
  balance: "",
  dueDate: ""
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

const emptyInvoiceForm = {
  cariId: "",
  itemId: "",
  quantity: "",
  price: "",
  note: ""
};

const formatCode = (prefix, index) => {
  return `${prefix}${String(index).padStart(4, "0")}`;
};

const formatDate = (value) => {
  if (!value) {
    return "-";
  }
  return new Date(value).toLocaleDateString("tr-TR");
};

export default function App() {
  const moduleParam = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("module") : null;
  const mapModule = {
    stock: "stok",
    stok: "stok",
    cari: "cari",
    invoice: "fatura",
    fatura: "fatura",
    movement: "hareket",
    hareket: "hareket",
    cash: "kasa",
    kasa: "kasa"
  };
  const activeModule = moduleParam ? (mapModule[moduleParam] || moduleParam) : null;

  const openModule = (name) => {
    const moduleName = mapModule[name] || name;
    if (window && window.electronAPI && window.electronAPI.openModule) {
      window.electronAPI.openModule(moduleName);
    } else {
      console.warn("IPC unavailable, cannot open module window", moduleName);
    }
  };
  const [stockForm, setStockForm] = useState(emptyStockForm);
  const [cariForm, setCariForm] = useState(emptyCariForm);
  const [movementForm, setMovementForm] = useState(emptyMovementForm);
  const [cashForm, setCashForm] = useState(emptyCashForm);
  const [invoiceForm, setInvoiceForm] = useState(emptyInvoiceForm);
  const [stockItems, setStockItems] = useState([]);
  const [cariItems, setCariItems] = useState([]);
  const [movements, setMovements] = useState([]);
  const [cashEntries, setCashEntries] = useState([]);
  const [invoices, setInvoices] = useState([]);

  const nextStockCode = formatCode("MLZ", stockItems.length + 1);
  const nextCariCode = formatCode("CARI", cariItems.length + 1);
  const nextInvoiceCode = formatCode("FTR", invoices.length + 1);

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

  const handleInvoiceChange = (event) => {
    const { name, value } = event.target;
    setInvoiceForm((prev) => ({ ...prev, [name]: value }));

    if (name === "itemId") {
      const selectedItem = stockItems.find((item) => item.id === value);
      if (selectedItem && !invoiceForm.price) {
        setInvoiceForm((prev) => ({
          ...prev,
          itemId: value,
          price: String(selectedItem.price)
        }));
      }
    }
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
      address: cariForm.address.trim(),
      balance: Number(cariForm.balance),
      dueDate: cariForm.dueDate
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

  const handleInvoiceSubmit = (event) => {
    event.preventDefault();
    const selectedCari = cariItems.find((cari) => cari.id === invoiceForm.cariId);
    const selectedItem = stockItems.find(
      (item) => item.id === invoiceForm.itemId
    );
    const quantity = Number(invoiceForm.quantity);
    const price = Number(invoiceForm.price);

    if (!selectedCari || !selectedItem || !quantity || !price) {
      return;
    }

    if (selectedItem.quantity < quantity) {
      return;
    }

    const invoice = {
      id: crypto.randomUUID(),
      code: nextInvoiceCode,
      cariName: selectedCari.name,
      cariCode: selectedCari.code,
      itemName: selectedItem.name,
      itemCode: selectedItem.code,
      quantity,
      price,
      total: quantity * price,
      note: invoiceForm.note.trim()
    };

    const movement = {
      id: crypto.randomUUID(),
      itemId: selectedItem.id,
      itemName: selectedItem.name,
      code: selectedItem.code,
      type: "out",
      quantity,
      note: `Fatura ${invoice.code}`
    };

    setInvoices((prev) => [invoice, ...prev]);
    setMovements((prev) => [movement, ...prev]);
    setStockItems((prev) =>
      prev.map((item) => {
        if (item.id !== selectedItem.id) {
          return item;
        }
        return { ...item, quantity: item.quantity - quantity };
      })
    );
    setInvoiceForm(emptyInvoiceForm);
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
          <button type="button" className="nav-item active" onClick={() => { /* main overview */ }}>
            Genel Bakış
          </button>
          <button type="button" className="nav-item" onClick={() => openModule("stok")}>
            Stok Yönetimi
          </button>
          <button type="button" className="nav-item" onClick={() => openModule("cari")}>
            Cari Kartlar
          </button>
          <button type="button" className="nav-item" onClick={() => openModule("fatura")}>
            Faturalar
          </button>
          <button type="button" className="nav-item" onClick={() => openModule("hareket")}>
            Stok Hareketleri
          </button>
          <button type="button" className="nav-item" onClick={() => openModule("kasa")}>
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

        {!activeModule && (
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
            <p className="label">Fatura</p>
            <p className="metric">{invoices.length}</p>
            <p className="hint">Kesilen fatura</p>
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
        )}

        {(!activeModule || activeModule === "stok") && (
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
        )}

        {(!activeModule || activeModule === "cari") && (
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
              <label>
                Açılış bakiyesi (₺)
                <input
                  type="number"
                  name="balance"
                  value={cariForm.balance}
                  onChange={handleCariChange}
                  placeholder="0"
                  min="0"
                  step="0.01"
                />
              </label>
              <label>
                Vade tarihi
                <input
                  type="date"
                  name="dueDate"
                  value={cariForm.dueDate}
                  onChange={handleCariChange}
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
                  <span>Bakiye</span>
                  <span>Vade</span>
                  <span>Telefon</span>
                </div>
                {cariItems.map((cari) => (
                  <div key={cari.id} className="table-row table-cari">
                    <span>{cari.name}</span>
                    <span>{cari.code}</span>
                    <span>₺{cari.balance.toLocaleString("tr-TR")}</span>
                    <span>{formatDate(cari.dueDate)}</span>
                    <span>{cari.phone || "-"}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        )}

        {(!activeModule || activeModule === "fatura") && (
        <section className="grid">
          <div className="card">
            <h2>Fatura Kes</h2>
            <p className="helper">Fatura oluşturduğunuzda stoktan düşer.</p>
            <form className="form" onSubmit={handleInvoiceSubmit}>
              <label>
                Fatura kodu
                <input name="code" value={nextInvoiceCode} readOnly />
              </label>
              <label>
                Cari seç
                <select
                  name="cariId"
                  value={invoiceForm.cariId}
                  onChange={handleInvoiceChange}
                  required
                >
                  <option value="">Seçiniz</option>
                  {cariItems.map((cari) => (
                    <option key={cari.id} value={cari.id}>
                      {cari.code} · {cari.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Ürün seç
                <select
                  name="itemId"
                  value={invoiceForm.itemId}
                  onChange={handleInvoiceChange}
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
                Miktar
                <input
                  type="number"
                  name="quantity"
                  value={invoiceForm.quantity}
                  onChange={handleInvoiceChange}
                  placeholder="0"
                  min="0"
                  step="0.01"
                />
              </label>
              <label>
                Birim fiyat (₺)
                <input
                  type="number"
                  name="price"
                  value={invoiceForm.price}
                  onChange={handleInvoiceChange}
                  placeholder="0"
                  min="0"
                  step="0.01"
                />
              </label>
              <label>
                Not
                <input
                  name="note"
                  value={invoiceForm.note}
                  onChange={handleInvoiceChange}
                  placeholder="Fatura notu"
                />
              </label>
              <button type="submit">Fatura Oluştur</button>
            </form>
          </div>

          <div className="card">
            <h2>Faturalar</h2>
            {invoices.length === 0 ? (
              <p className="empty">Henüz fatura kesilmedi.</p>
            ) : (
              <div className="table">
                <div className="table-row table-head table-invoice">
                  <span>Fatura</span>
                  <span>Cari</span>
                  <span>Ürün</span>
                  <span>Miktar</span>
                  <span>Tutar</span>
                </div>
                {invoices.map((invoice) => (
                  <div key={invoice.id} className="table-row table-invoice">
                    <span>{invoice.code}</span>
                    <span>{invoice.cariName}</span>
                    <span>{invoice.itemName}</span>
                    <span>{invoice.quantity}</span>
                    <span>₺{invoice.total.toLocaleString("tr-TR")}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        )}

        {(!activeModule || activeModule === "hareket") && (
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
        )}

        {(!activeModule || activeModule === "kasa") && (
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
        )}

        {!activeModule && (
        <section className="card roadmap">
          <h2>Sıradaki Adımlar</h2>
          <ol>
            <li>Tahsilat/ödeme ekranı ekleyelim (cari bakiyeyi güncelleme).</li>
            <li>Fatura çıktısı ve yazdırma şablonları hazırlayalım.</li>
            <li>Raporları PDF/Excel dışa aktarıma hazırlayalım.</li>
            <li>Verileri yerel veritabanına (SQLite) kaydedelim.</li>
          </ol>
        </section>
        )}
      </main>
    </div>
  );
}
