const offerBody = document.getElementById("offer-body");
const addRowButton = document.getElementById("add-row");
const totalEl = document.getElementById("offer-total");
const subtotalEl = document.getElementById("offer-subtotal");
const vatTotalEl = document.getElementById("offer-vat-total");
const vatInput = document.getElementById("offer-vat");
const offerPdfButton = document.getElementById("offer-pdf");
const versionEl = document.getElementById("app-version");
const backupButton = document.getElementById("backup-now");
const lastBackupEl = document.getElementById("last-backup");
const backupPathEl = document.getElementById("backup-path");
const customerForm = document.getElementById("customer-form");
const customersTable = document.getElementById("customers-table");
const stockForm = document.getElementById("stock-form");
const stocksTable = document.getElementById("stocks-table");
const cashForm = document.getElementById("cash-form");
const cashTable = document.getElementById("cash-table");
const reportCustomersButton = document.getElementById("report-customers");
const reportStocksButton = document.getElementById("report-stocks");
const reportCashButton = document.getElementById("report-cash");
const reportPathEl = document.getElementById("report-path");
const loginScreen = document.getElementById("login-screen");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const appShell = document.getElementById("app-shell");

const formatCurrency = (value) =>
  new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2
  }).format(value || 0);

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const users = [
  { username: "mtn", password: "1453" },
  { username: "muhasebe", password: "1453" }
];

const handleLogin = (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const { username, password } = Object.fromEntries(formData.entries());
  const matched = users.some(
    (user) => user.username === username && user.password === password
  );

  if (matched) {
    loginScreen.style.display = "none";
    appShell.classList.remove("app--hidden");
  } else {
    loginError.textContent = "Kullanıcı adı veya şifre hatalı.";
  }
};

const calculateTotal = () => {
  const rows = Array.from(offerBody.querySelectorAll("tr"));
  const subtotal = rows.reduce((sum, row) => {
    const quantity = Number(
      row.querySelector("[data-field='quantity']")?.value || 0
    );
    const price = Number(
      row.querySelector("[data-field='price']")?.value || 0
    );
    const totalInput = row.querySelector("[data-field='total']");
    const rowTotal = quantity * price;
    if (totalInput) {
      totalInput.value = rowTotal ? rowTotal.toFixed(2) : "";
    }
    return sum + rowTotal;
  }, 0);

  const vatRate = Number(vatInput?.value || 0) / 100;
  const vatTotal = subtotal * vatRate;
  const total = subtotal + vatTotal;

  subtotalEl.textContent = formatCurrency(subtotal);
  vatTotalEl.textContent = formatCurrency(vatTotal);
  totalEl.textContent = formatCurrency(total);
};

const createRow = () => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input data-field="name" placeholder="Malzeme adı" /></td>
    <td><input data-field="quantity" type="number" min="0" step="1" /></td>
    <td><input data-field="unit" placeholder="Birim" /></td>
    <td><input data-field="price" type="number" min="0" step="0.01" /></td>
    <td><input data-field="total" type="number" min="0" step="0.01" /></td>
  `;

  const inputs = row.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("input", calculateTotal);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const newRow = createRow();
        offerBody.appendChild(newRow);
        newRow.querySelector("input")?.focus();
      }
    });
  });

  return row;
};

addRowButton.addEventListener("click", () => {
  const newRow = createRow();
  offerBody.appendChild(newRow);
  newRow.querySelector("input")?.focus();
});

offerBody.appendChild(createRow());
calculateTotal();

if (vatInput) {
  vatInput.addEventListener("input", calculateTotal);
}

if (window.mtnApp) {
  versionEl.textContent = window.mtnApp.version;
}

const renderCustomers = (items) => {
  customersTable.innerHTML = "";
  items.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name || "-"}</td>
      <td>${item.phone || "-"}</td>
      <td>${item.taxNumber || "-"}</td>
      <td>${item.email || "-"}</td>
    `;
    customersTable.appendChild(row);
  });
};

const renderStocks = (items) => {
  stocksTable.innerHTML = "";
  items.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name || "-"}</td>
      <td>${item.unit || "-"}</td>
      <td>${item.quantity || 0}</td>
      <td>${item.threshold || 0}</td>
    `;
    stocksTable.appendChild(row);
  });
};

const renderCash = (items) => {
  cashTable.innerHTML = "";
  items.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${new Date(item.createdAt).toLocaleDateString("tr-TR")}</td>
      <td>${item.type || "-"}</td>
      <td>${formatCurrency(Number(item.amount) || 0)}</td>
      <td>${item.note || "-"}</td>
    `;
    cashTable.appendChild(row);
  });
};

const loadInitialData = async () => {
  if (!window.mtnApp?.getData) {
    return;
  }
  const data = await window.mtnApp.getData();
  renderCustomers(data.customers || []);
  renderStocks(data.stocks || []);
  renderCash(data.cashTransactions || []);
};

const buildReportTable = (title, headers, rows, options = {}) => {
  const headerCells = headers.map((header) => `<th>${header}</th>`).join("");
  const rowHtml = rows
    .map(
      (row) =>
        `<tr>${row
          .map((cell) => `<td>${escapeHtml(cell)}</td>`)
          .join("")}</tr>`
    )
    .join("");
  const { includeWatermark = false } = options;
  const companyHtml = `
    <div class="report-header">
      <div>
        <h1>${escapeHtml(title)}</h1>
        <p>MTN ENERJİ MÜHENDİSLİK (METİN DÖŞ)</p>
        <p>Ertuğrulgazi Mah. Suyolu Cad. No:77 Şahinbey / G.ANTEP</p>
        <p>Tel: 0535 641 90 61 • Vergi Dairesi: ŞAHİNBEY • Vergi No: 14168163156</p>
      </div>
      <div class="report-logo">MTN</div>
    </div>
  `;
  const watermark = includeWatermark
    ? `<div class="report-watermark">MTN ENERJİ MÜHENDİSLİK</div>`
    : "";
  return `
    ${companyHtml}
    ${watermark}
    <table>
      <thead><tr>${headerCells}</tr></thead>
      <tbody>${rowHtml}</tbody>
    </table>
  `;
};

const buildInvoiceHtml = (title, rows) => {
  const rowHtml = rows
    .map(
      (row) =>
        `<tr>${row
          .map((cell) => `<td>${escapeHtml(cell)}</td>`)
          .join("")}</tr>`
    )
    .join("");
  return `
    <div class="report-header">
      <div>
        <h1>${escapeHtml(title)}</h1>
        <p>MTN ENERJİ MÜHENDİSLİK (METİN DÖŞ)</p>
        <p>Ertuğrulgazi Mah. Suyolu Cad. No:77 Şahinbey / G.ANTEP</p>
        <p>Tel: 0535 641 90 61 • Vergi Dairesi: ŞAHİNBEY • Vergi No: 14168163156</p>
      </div>
      <div class="report-logo">MTN</div>
    </div>
    <div class="report-watermark">MTN ENERJİ MÜHENDİSLİK</div>
    <table>
      <thead>
        <tr>
          <th>Malzeme</th>
          <th>Miktar</th>
          <th>Birim</th>
          <th>Birim Fiyat</th>
          <th>Tutar</th>
        </tr>
      </thead>
      <tbody>${rowHtml}</tbody>
    </table>
    <div style="margin-top:16px;display:flex;justify-content:flex-end;">
      <table style="width:260px;border-collapse:collapse;">
        <tr><td>Ara Toplam</td><td style="text-align:right;">${escapeHtml(
          subtotalEl.textContent
        )}</td></tr>
        <tr><td>KDV</td><td style="text-align:right;">${escapeHtml(
          vatTotalEl.textContent
        )}</td></tr>
        <tr><td><strong>Genel Toplam</strong></td><td style="text-align:right;"><strong>${escapeHtml(
          totalEl.textContent
        )}</strong></td></tr>
      </table>
    </div>
  `;
};

const generateReport = async (type) => {
  if (!window.mtnApp?.getData || !window.mtnApp?.generateReport) {
    reportPathEl.textContent = "Rapor servisi hazır değil.";
    return;
  }
  const data = await window.mtnApp.getData();
  let title = "";
  let headers = [];
  let rows = [];

  if (type === "customers") {
    title = "Cari Raporu";
    headers = ["Ünvan", "Telefon", "Vergi No", "E-posta"];
    rows = (data.customers || []).map((item) => [
      item.name || "-",
      item.phone || "-",
      item.taxNumber || "-",
      item.email || "-"
    ]);
  }

  if (type === "stocks") {
    title = "Stok Raporu";
    headers = ["Malzeme", "Birim", "Stok", "Kritik Seviye"];
    rows = (data.stocks || []).map((item) => [
      item.name || "-",
      item.unit || "-",
      item.quantity || 0,
      item.threshold || 0
    ]);
  }

  if (type === "cash") {
    title = "Satış Raporu";
    headers = ["Tarih", "Tür", "Tutar", "Açıklama"];
    rows = (data.cashTransactions || []).map((item) => [
      new Date(item.createdAt).toLocaleDateString("tr-TR"),
      item.type || "-",
      formatCurrency(Number(item.amount) || 0),
      item.note || "-"
    ]);
  }

  const html = buildReportTable(title, headers, rows, {
    includeWatermark: type === "customers" || type === "cash"
  });
  const result = await window.mtnApp.generateReport({ title, html });
  reportPathEl.textContent = `Rapor kaydedildi: ${result.reportFile}`;
};

if (customerForm) {
  customerForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(customerForm);
    const payload = Object.fromEntries(formData.entries());
    const updated = await window.mtnApp.createCustomer(payload);
    renderCustomers(updated);
    customerForm.reset();
  });
}

if (stockForm) {
  stockForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(stockForm);
    const payload = Object.fromEntries(formData.entries());
    const updated = await window.mtnApp.createStock(payload);
    renderStocks(updated);
    stockForm.reset();
  });
}

if (cashForm) {
  cashForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(cashForm);
    const payload = Object.fromEntries(formData.entries());
    const updated = await window.mtnApp.createCash(payload);
    renderCash(updated);
    cashForm.reset();
  });
}

const buildBackupPayload = () => {
  const rows = Array.from(offerBody.querySelectorAll("tr")).map((row) => {
    const getValue = (field) =>
      row.querySelector(`[data-field='${field}']`)?.value || "";
    return {
      name: getValue("name"),
      quantity: getValue("quantity"),
      unit: getValue("unit"),
      price: getValue("price"),
      total: getValue("total")
    };
  });

  return window.mtnApp?.getData
    ? window.mtnApp.getData().then((data) => ({
        meta: {
          appVersion: window.mtnApp?.version || "0.1.0",
          module: "teklif"
        },
        teklif: rows,
        toplam: totalEl.textContent,
        data
      }))
    : {
        meta: {
          appVersion: window.mtnApp?.version || "0.1.0",
          module: "teklif"
        },
        teklif: rows,
        toplam: totalEl.textContent
      };
};

if (backupButton) {
  backupButton.addEventListener("click", async () => {
    if (!window.mtnApp?.createBackup) {
      backupPathEl.textContent = "Yedekleme servisi hazır değil.";
      return;
    }

    const payload = await buildBackupPayload();
    const result = await window.mtnApp.createBackup(payload);
    lastBackupEl.textContent = new Date(result.createdAt).toLocaleString("tr-TR");
    backupPathEl.textContent = `Yedek klasörü: ${result.backupDir}`;
  });
}

if (reportCustomersButton) {
  reportCustomersButton.addEventListener("click", () =>
    generateReport("customers")
  );
}

if (reportStocksButton) {
  reportStocksButton.addEventListener("click", () => generateReport("stocks"));
}

if (reportCashButton) {
  reportCashButton.addEventListener("click", () => generateReport("cash"));
}

if (offerPdfButton) {
  offerPdfButton.addEventListener("click", async () => {
    if (!window.mtnApp?.generateReport) {
      reportPathEl.textContent = "Rapor servisi hazır değil.";
      return;
    }
    const rows = Array.from(offerBody.querySelectorAll("tr")).map((row) => [
      row.querySelector("[data-field='name']")?.value || "-",
      row.querySelector("[data-field='quantity']")?.value || "0",
      row.querySelector("[data-field='unit']")?.value || "-",
      row.querySelector("[data-field='price']")?.value || "0",
      row.querySelector("[data-field='total']")?.value || "0"
    ]);
    const html = buildInvoiceHtml("Satış Faturası", rows);
    const result = await window.mtnApp.generateReport({
      title: "Satis-Faturasi",
      html
    });
    reportPathEl.textContent = `Rapor kaydedildi: ${result.reportFile}`;
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
}

loadInitialData();
