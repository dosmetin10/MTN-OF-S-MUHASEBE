const offerBody = document.getElementById("offer-body");
const addRowButton = document.getElementById("add-row");
const totalEl = document.getElementById("offer-total");
const subtotalEl = document.getElementById("offer-subtotal");
const vatTotalEl = document.getElementById("offer-vat-total");
const vatInput = document.getElementById("offer-vat");
const offerPdfButton = document.getElementById("offer-pdf");
const offerCustomerSelect = document.getElementById("offer-customer");
const offerPaymentSelect = document.getElementById("offer-payment");
const offerSaveButton = document.getElementById("offer-save");
const versionEl = document.getElementById("app-version");
const backupButton = document.getElementById("backup-now");
const lastBackupEl = document.getElementById("last-backup");
const backupPathEl = document.getElementById("backup-path");
const summaryCollectionsEl = document.getElementById("summary-collections");
const summaryCashEl = document.getElementById("summary-cash");
const summaryBalanceEl = document.getElementById("summary-balance");
const summaryAlertsEl = document.getElementById("summary-alerts");
const customerForm = document.getElementById("customer-form");
const customerPaymentForm = document.getElementById("customer-payment-form");
const paymentCustomerSelect = document.getElementById("payment-customer");
const customersTable = document.getElementById("customers-table");
const stockForm = document.getElementById("stock-form");
const stocksTable = document.getElementById("stocks-table");
const cashForm = document.getElementById("cash-form");
const cashTable = document.getElementById("cash-table");
const cashStartInput = document.getElementById("cash-start");
const cashEndInput = document.getElementById("cash-end");
const cashTypeSelect = document.getElementById("cash-type");
const salesTable = document.getElementById("sales-table");
const reportCustomersButton = document.getElementById("report-customers");
const reportStocksButton = document.getElementById("report-stocks");
const reportCashButton = document.getElementById("report-cash");
const reportStockMovementsButton = document.getElementById(
  "report-stock-movements"
);
const reportCashSummaryButton = document.getElementById("report-cash-summary");
const reportPathEl = document.getElementById("report-path");
const detailCustomerSelect = document.getElementById("detail-customer");
const detailTable = document.getElementById("detail-table");
const detailReportButton = document.getElementById("detail-report");
const loginScreen = document.getElementById("login-screen");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const appShell = document.getElementById("app-shell");
const stockMovementForm = document.getElementById("stock-movement-form");
const movementStockSelect = document.getElementById("movement-stock");
const settingsForm = document.getElementById("settings-form");
const autoSyncPathInput = document.getElementById("auto-sync-path");
const autoSyncEnabledSelect = document.getElementById("auto-sync-enabled");
const cloudBackupPathInput = document.getElementById("cloud-backup-path");
const cloudBackupEnabledSelect = document.getElementById("cloud-backup-enabled");
const settingsStatusEl = document.getElementById("settings-status");

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
  if (offerCustomerSelect) {
    offerCustomerSelect.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Genel";
    offerCustomerSelect.appendChild(defaultOption);
  }
  if (paymentCustomerSelect) {
    paymentCustomerSelect.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Cari Seç";
    paymentCustomerSelect.appendChild(defaultOption);
  }
  if (detailCustomerSelect) {
    detailCustomerSelect.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Cari Seç";
    detailCustomerSelect.appendChild(defaultOption);
  }
  items.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name || "-"}</td>
      <td>${item.phone || "-"}</td>
      <td>${item.taxNumber || "-"}</td>
      <td>${item.email || "-"}</td>
      <td>${formatCurrency(Number(item.balance) || 0)}</td>
    `;
    customersTable.appendChild(row);
    if (offerCustomerSelect) {
      const option = document.createElement("option");
      option.value = item.id || item.name || "";
      option.textContent = item.name || "Cari";
      offerCustomerSelect.appendChild(option);
    }
    if (paymentCustomerSelect) {
      const option = document.createElement("option");
      option.value = item.id || item.name || "";
      option.textContent = item.name || "Cari";
      paymentCustomerSelect.appendChild(option);
    }
    if (detailCustomerSelect) {
      const option = document.createElement("option");
      option.value = item.id || item.name || "";
      option.textContent = item.name || "Cari";
      detailCustomerSelect.appendChild(option);
    }
  });
};

const renderStocks = (items) => {
  stocksTable.innerHTML = "";
  if (movementStockSelect) {
    movementStockSelect.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Malzeme Seç";
    movementStockSelect.appendChild(defaultOption);
  }
  items.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name || "-"}</td>
      <td>${item.unit || "-"}</td>
      <td>${item.quantity || 0}</td>
      <td>${item.threshold || 0}</td>
    `;
    stocksTable.appendChild(row);
    if (movementStockSelect) {
      const option = document.createElement("option");
      option.value = item.name || "";
      option.textContent = item.name || "Malzeme";
      movementStockSelect.appendChild(option);
    }
  });
};

const renderCash = (items) => {
  let filtered = items;
  const startValue = cashStartInput?.value;
  const endValue = cashEndInput?.value;
  const typeValue = cashTypeSelect?.value;

  if (startValue) {
    const startDate = new Date(startValue);
    filtered = filtered.filter(
      (item) => new Date(item.createdAt) >= startDate
    );
  }
  if (endValue) {
    const endDate = new Date(endValue);
    endDate.setHours(23, 59, 59, 999);
    filtered = filtered.filter((item) => new Date(item.createdAt) <= endDate);
  }
  if (typeValue) {
    filtered = filtered.filter((item) => item.type === typeValue);
  }

  cashTable.innerHTML = "";
  filtered.forEach((item) => {
    const row = document.createElement("tr");
    const badgeClass =
      item.type === "gider" ? "badge badge--expense" : "badge badge--income";
    row.innerHTML = `
      <td>${new Date(item.createdAt).toLocaleDateString("tr-TR")}</td>
      <td><span class="${badgeClass}">${item.type || "-"}</span></td>
      <td>${formatCurrency(Number(item.amount) || 0)}</td>
      <td>${item.note || "-"}</td>
    `;
    cashTable.appendChild(row);
  });
};

const renderSales = (items) => {
  if (!salesTable) {
    return;
  }
  salesTable.innerHTML = "";
  items.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${new Date(item.createdAt).toLocaleDateString("tr-TR")}</td>
      <td>${item.customerName || "Genel"}</td>
      <td>${formatCurrency(Number(item.total) || 0)}</td>
      <td>${Number(item.vatRate || 0)}</td>
    `;
    salesTable.appendChild(row);
  });
};

const renderCustomerDetail = (data) => {
  if (!detailTable) {
    return;
  }
  const customerId = detailCustomerSelect?.value;
  if (!customerId) {
    detailTable.innerHTML = "";
    return;
  }
  const sales = (data.sales || []).filter(
    (sale) => sale.customerId === customerId
  );
  const payments = (data.cashTransactions || []).filter(
    (entry) => entry.customerId === customerId
  );
  detailTable.innerHTML = "";

  sales.forEach((sale) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${new Date(sale.createdAt).toLocaleDateString("tr-TR")}</td>
      <td>Satış</td>
      <td>${formatCurrency(Number(sale.total) || 0)}</td>
      <td>Satış faturası</td>
    `;
    detailTable.appendChild(row);
  });

  payments.forEach((payment) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${new Date(payment.createdAt).toLocaleDateString("tr-TR")}</td>
      <td>Tahsilat</td>
      <td>${formatCurrency(Number(payment.amount) || 0)}</td>
      <td>${payment.note || "Cari Tahsilat"}</td>
    `;
    detailTable.appendChild(row);
  });
};

const renderSummary = (data) => {
  if (!summaryCollectionsEl || !summaryCashEl || !summaryBalanceEl) {
    return;
  }
  const cashTransactions = data.cashTransactions || [];
  const totalCollections = cashTransactions
    .filter((item) => item.type === "gelir")
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const cashBalance = cashTransactions.reduce((sum, item) => {
    const amount = Number(item.amount || 0);
    return item.type === "gider" ? sum - amount : sum + amount;
  }, 0);
  const totalBalance = (data.customers || []).reduce(
    (sum, item) => sum + Number(item.balance || 0),
    0
  );

  summaryCollectionsEl.textContent = formatCurrency(totalCollections);
  summaryCashEl.textContent = formatCurrency(cashBalance);
  summaryBalanceEl.textContent = formatCurrency(totalBalance);

  if (summaryAlertsEl) {
    summaryAlertsEl.innerHTML = "";
    const lowStocks = (data.stocks || []).filter((item) => {
      const threshold = Number(item.threshold || 0);
      return threshold > 0 && Number(item.quantity || 0) <= threshold;
    });
    const pendingBalances = (data.customers || [])
      .filter((item) => Number(item.balance || 0) > 0)
      .slice(0, 3);

    lowStocks.slice(0, 3).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `Kritik stok: ${item.name} (${item.quantity || 0})`;
      summaryAlertsEl.appendChild(li);
    });

    pendingBalances.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `Cari bakiye: ${item.name} ${formatCurrency(
        Number(item.balance || 0)
      )}`;
      summaryAlertsEl.appendChild(li);
    });

    if (!summaryAlertsEl.children.length) {
      const li = document.createElement("li");
      li.textContent = "Yeni hatırlatıcı yok.";
      summaryAlertsEl.appendChild(li);
    }
  }
};

const loadInitialData = async () => {
  if (!window.mtnApp?.getData) {
    return;
  }
  const data = await window.mtnApp.getData();
  renderCustomers(data.customers || []);
  renderStocks(data.stocks || []);
  renderCash(data.cashTransactions || []);
  renderSales(data.sales || []);
  renderSummary(data);
  renderCustomerDetail(data);
  if (window.mtnApp?.getSettings) {
    const settings = await window.mtnApp.getSettings();
    if (autoSyncPathInput) {
      autoSyncPathInput.value = settings.autoSyncPath || "";
    }
    if (autoSyncEnabledSelect) {
      autoSyncEnabledSelect.value = String(settings.enableAutoSync);
    }
    if (cloudBackupPathInput) {
      cloudBackupPathInput.value = settings.cloudBackupPath || "";
    }
    if (cloudBackupEnabledSelect) {
      cloudBackupEnabledSelect.value = String(settings.enableCloudBackup);
    }
  }
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
    ? `<div class="report-watermark"><img src="assets/logo.svg" alt="MTN logo" /></div>`
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
    <div class="report-watermark"><img src="assets/logo.svg" alt="MTN logo" /></div>
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
    title = "Cari Ekstre";
    headers = ["Ünvan", "Telefon", "Vergi No", "E-posta", "Bakiye"];
    rows = (data.customers || []).map((item) => [
      item.name || "-",
      item.phone || "-",
      item.taxNumber || "-",
      item.email || "-",
      formatCurrency(Number(item.balance) || 0)
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
    headers = ["Tarih", "Cari", "Tutar", "KDV (%)"];
    rows = (data.sales || []).map((item) => [
      new Date(item.createdAt).toLocaleDateString("tr-TR"),
      item.customerName || "Genel",
      formatCurrency(Number(item.total) || 0),
      Number(item.vatRate || 0)
    ]);
  }

  if (type === "stock-movements") {
    title = "Stok Hareket Raporu";
    headers = ["Tarih", "Malzeme", "Tür", "Miktar", "Açıklama"];
    rows = (data.stockMovements || []).map((item) => [
      new Date(item.createdAt).toLocaleDateString("tr-TR"),
      item.stockName || "-",
      item.type || "-",
      Number(item.quantity || 0),
      item.note || "-"
    ]);
  }

  if (type === "cash-summary") {
    title = "Kasa Özet Raporu";
    const totalIncome = (data.cashTransactions || [])
      .filter((item) => item.type === "gelir")
      .reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const totalExpense = (data.cashTransactions || [])
      .filter((item) => item.type === "gider")
      .reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const net = totalIncome - totalExpense;
    headers = ["Kalem", "Tutar"];
    rows = [
      ["Toplam Gelir", formatCurrency(totalIncome)],
      ["Toplam Gider", formatCurrency(totalExpense)],
      ["Net", formatCurrency(net)]
    ];
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
    await window.mtnApp.createCustomer(payload);
    const data = await window.mtnApp.getData();
    renderCustomers(data.customers || []);
    renderSummary(data);
    customerForm.reset();
  });
}

if (customerPaymentForm) {
  customerPaymentForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!window.mtnApp?.collectPayment) {
      reportPathEl.textContent = "Tahsilat servisi hazır değil.";
      return;
    }
    const formData = new FormData(customerPaymentForm);
    const payload = Object.fromEntries(formData.entries());
    const customerId = paymentCustomerSelect?.value || "";
    if (!customerId) {
      reportPathEl.textContent = "Lütfen cari seçin.";
      return;
    }
    const result = await window.mtnApp.collectPayment({
      customerId,
      amount: payload.amount,
      note: payload.note
    });
    renderCustomers(result.customers || []);
    renderCash(result.cashTransactions || []);
    renderSummary(result);
    renderCustomerDetail(result);
    reportPathEl.textContent = "Tahsilat kaydedildi.";
    customerPaymentForm.reset();
  });
}

if (stockForm) {
  stockForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(stockForm);
    const payload = Object.fromEntries(formData.entries());
    await window.mtnApp.createStock(payload);
    const data = await window.mtnApp.getData();
    renderStocks(data.stocks || []);
    renderSummary(data);
    stockForm.reset();
  });
}

if (cashForm) {
  cashForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(cashForm);
    const payload = Object.fromEntries(formData.entries());
    await window.mtnApp.createCash(payload);
    const data = await window.mtnApp.getData();
    renderCash(data.cashTransactions || []);
    renderSummary(data);
    cashForm.reset();
  });
}

if (cashStartInput) {
  [cashStartInput, cashEndInput, cashTypeSelect].forEach((input) => {
    input?.addEventListener("input", async () => {
      const data = await window.mtnApp.getData();
      renderCash(data.cashTransactions || []);
    });
  });
}

if (stockMovementForm) {
  stockMovementForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!window.mtnApp?.moveStock) {
      reportPathEl.textContent = "Stok hareket servisi hazır değil.";
      return;
    }
    const formData = new FormData(stockMovementForm);
    const payload = Object.fromEntries(formData.entries());
    const stockName = movementStockSelect?.value || "";
    if (!stockName) {
      reportPathEl.textContent = "Lütfen malzeme seçin.";
      return;
    }
    const result = await window.mtnApp.moveStock({
      stockName,
      type: payload.type,
      quantity: payload.quantity,
      note: payload.note
    });
    renderStocks(result.stocks || []);
    renderSummary(result);
    reportPathEl.textContent = "Stok hareketi kaydedildi.";
    stockMovementForm.reset();
  });
}

if (settingsForm) {
  settingsForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!window.mtnApp?.saveSettings) {
      settingsStatusEl.textContent = "Ayar servisi hazır değil.";
      return;
    }
    const payload = {
      autoSyncPath: autoSyncPathInput?.value || "",
      cloudBackupPath: cloudBackupPathInput?.value || "",
      enableAutoSync: autoSyncEnabledSelect?.value === "true",
      enableCloudBackup: cloudBackupEnabledSelect?.value === "true"
    };
    await window.mtnApp.saveSettings(payload);
    settingsStatusEl.textContent = "Ayarlar kaydedildi.";
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

if (reportStockMovementsButton) {
  reportStockMovementsButton.addEventListener("click", () =>
    generateReport("stock-movements")
  );
}

if (reportCashSummaryButton) {
  reportCashSummaryButton.addEventListener("click", () =>
    generateReport("cash-summary")
  );
}

if (detailCustomerSelect) {
  detailCustomerSelect.addEventListener("change", async () => {
    const data = await window.mtnApp.getData();
    renderCustomerDetail(data);
  });
}

if (detailReportButton) {
  detailReportButton.addEventListener("click", async () => {
    if (!window.mtnApp?.generateReport) {
      reportPathEl.textContent = "Rapor servisi hazır değil.";
      return;
    }
    const customerName =
      detailCustomerSelect?.selectedOptions?.[0]?.textContent || "Cari";
    const rows = Array.from(detailTable?.querySelectorAll("tr") || []).map(
      (row) => Array.from(row.children).map((cell) => cell.textContent || "")
    );
    const html = buildReportTable(
      `Cari Ekstre - ${customerName}`,
      ["Tarih", "Tür", "Tutar", "Açıklama"],
      rows,
      { includeWatermark: true }
    );
    const result = await window.mtnApp.generateReport({
      title: `Cari-Ekstre-${customerName.replace(/\s+/g, "-")}`,
      html
    });
    reportPathEl.textContent = `Rapor kaydedildi: ${result.reportFile}`;
  });
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

if (offerSaveButton) {
  offerSaveButton.addEventListener("click", async () => {
    if (!window.mtnApp?.createSale) {
      reportPathEl.textContent = "Satış servisi hazır değil.";
      return;
    }
    const customerId = offerCustomerSelect?.value || "";
    const customerName =
      offerCustomerSelect?.selectedOptions?.[0]?.textContent || "Genel";
    const vatRate = Number(vatInput?.value || 0);
    const items = Array.from(offerBody.querySelectorAll("tr")).map((row) => ({
      name: row.querySelector("[data-field='name']")?.value || "",
      quantity: Number(row.querySelector("[data-field='quantity']")?.value || 0),
      unit: row.querySelector("[data-field='unit']")?.value || "",
      price: Number(row.querySelector("[data-field='price']")?.value || 0),
      total: Number(row.querySelector("[data-field='total']")?.value || 0)
    }));
    const total = Number(
      totalEl.textContent.replace(/[^\d,.-]/g, "").replace(",", ".")
    );
    const result = await window.mtnApp.createSale({
      customerId,
      customerName,
      vatRate,
      paymentType: offerPaymentSelect?.value || "nakit",
      total,
      items
    });
    renderStocks(result.stocks || []);
    renderCash(result.cashTransactions || []);
    renderSales(result.sales || []);
    renderCustomers(result.customers || []);
    renderSummary(result);
    renderCustomerDetail(result);
    reportPathEl.textContent = "Satış kaydedildi ve stok güncellendi.";
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
}

loadInitialData();
