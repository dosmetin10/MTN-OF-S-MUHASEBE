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
const customerDebtForm = document.getElementById("customer-debt-form");
const customerPaymentForm = document.getElementById("customer-payment-form");
const customerCreateDateInput = document.getElementById("customer-create-date");
const customerDebtDateInput = document.getElementById("customer-debt-date");
const customerJobForm = document.getElementById("customer-job-form");
const customerJobDateInput = document.getElementById("customer-job-date");
const customerPaymentDateInput = document.getElementById(
  "customer-payment-date"
);
const debtCustomerSelect = document.getElementById("debt-customer");
const paymentCustomerSelect = document.getElementById("payment-customer");
const customersTable = document.getElementById("customers-table");
const customerSearchInput = document.getElementById("customer-search");
const customerSearchButton = document.getElementById("customer-search-btn");
const customerSearchSuggestion = document.getElementById(
  "customer-search-suggestion"
);
const stockForm = document.getElementById("stock-form");
const stocksTable = document.getElementById("stocks-table");
const stocksTotalEl = document.getElementById("stocks-total");
const stockReceiptToggle = document.getElementById("stock-receipt-toggle");
const stockReceiptCard = document.getElementById("stock-receipt-card");
const stockReceiptBody = document.getElementById("stock-receipt-body");
const stockReceiptAddRow = document.getElementById("stock-receipt-add-row");
const stockReceiptSave = document.getElementById("stock-receipt-save");
const stockReceiptSubmit = document.getElementById("stock-receipt-submit");
const stockReceiptNote = document.getElementById("stock-receipt-note");
const stockReceiptDateInput = document.getElementById("stock-receipt-date");
const stockReceiptSupplierInput = document.getElementById(
  "stock-receipt-supplier"
);
const stockReceiptsTable = document.getElementById("stock-receipts-table");
const stockSearchInput = document.getElementById("stock-search");
const stockSearchButton = document.getElementById("stock-search-btn");
const stockSearchSuggestion = document.getElementById("stock-search-suggestion");
const stockExportCsvButton = document.getElementById("stock-export-csv");
const stockExportPdfButton = document.getElementById("stock-export-pdf");
const stockImportOpenButton = document.getElementById("stock-import-open");
const stockImportFileInput = document.getElementById("stock-import-file");
const stockImportModal = document.getElementById("stock-import-modal");
const stockImportCloseButton = document.getElementById("stock-import-close");
const stockImportPickButton = document.getElementById("stock-import-pick");
const stockImportFileName = document.getElementById("stock-import-file-name");
const stockImportWarehouseSelect = document.getElementById(
  "stock-import-warehouse"
);
const stockImportUpdateMode = document.getElementById(
  "stock-import-update-mode"
);
const stockImportMapCode = document.getElementById("stock-import-map-code");
const stockImportMapName = document.getElementById("stock-import-map-name");
const stockImportMapQty = document.getElementById("stock-import-map-qty");
const stockImportPreviewBody = document.getElementById(
  "stock-import-preview"
);
const stockImportSummary = document.getElementById("stock-import-summary");
const stockImportConfirmButton = document.getElementById(
  "stock-import-confirm"
);
const stockImportExportErrors = document.getElementById(
  "stock-import-export-errors"
);
const stockImportStatus = document.getElementById("stock-import-status");
const cashForm = document.getElementById("cash-form");
const cashTable = document.getElementById("cash-table");
const cashStartInput = document.getElementById("cash-start");
const cashEndInput = document.getElementById("cash-end");
const cashTypeSelect = document.getElementById("cash-type");
const cashDateInput = document.getElementById("cash-date");
const salesTable = document.getElementById("sales-table");
const reportCustomersButton = document.getElementById("report-customers");
const reportStocksButton = document.getElementById("report-stocks");
const reportCashButton = document.getElementById("report-cash");
const reportStockMovementsButton = document.getElementById(
  "report-stock-movements"
);
const reportCashSummaryButton = document.getElementById("report-cash-summary");
const reportPathEl = document.getElementById("report-path");
const assistantDailyEl = document.getElementById("assistant-daily");
const assistantRemindersEl = document.getElementById("assistant-reminders");
const assistantSuggestionsEl = document.getElementById("assistant-suggestions");
const assistantRefreshButton = document.getElementById("assistant-refresh");
const assistantStatusEl = document.getElementById("assistant-status");
const topSearchInput = document.getElementById("top-search");
const topSearchButton = document.getElementById("top-search-btn");
const detailCustomerSelect = document.getElementById("detail-customer");
const detailTable = document.getElementById("detail-table");
const detailReportButton = document.getElementById("detail-report");
const detailSummaryEl = document.getElementById("detail-summary");
const detailVatModeSelect = document.getElementById("detail-vat-mode");
const detailVatRateInput = document.getElementById("detail-vat-rate");
const customerTabsEl = document.getElementById("customer-tabs");
const customerTabPanelsEl = document.getElementById("customer-tab-panels");
const customerJobsTable = document.getElementById("customer-jobs-table");
const customerEditForm = document.getElementById("customer-edit-form");
const customerEditSelect = document.getElementById("customer-edit-select");
const debtCurrencySelect = document.getElementById("debt-currency");
const paymentCurrencySelect = document.getElementById("payment-currency");
const jobCurrencySelect = document.getElementById("job-currency");
const loginScreen = document.getElementById("login-screen");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const appShell = document.getElementById("app-shell");
const stockMovementForm = document.getElementById("stock-movement-form");
const movementStockSelect = document.getElementById("movement-stock");
const stockMovementDateInput = document.getElementById("stock-movement-date");
const stockMovementsTable = document.getElementById("stock-movements-table");
const stockReceiptSearchInput = document.getElementById(
  "stock-receipt-search"
);
const stockReceiptSearchHint = document.getElementById(
  "stock-receipt-search-hint"
);
const stockReceiptStartInput = document.getElementById("stock-receipt-start");
const stockReceiptEndInput = document.getElementById("stock-receipt-end");
const stockReceiptTransferButton = document.getElementById(
  "stock-receipt-transfer"
);
const stockMasterTable = document.getElementById("stock-master-table");
const stockMasterSearchInput = document.getElementById("stock-master-search");
const stockMasterSearchButton = document.getElementById("stock-master-search-btn");
const stockMasterSearchHint = document.getElementById("stock-master-search-hint");
const invoiceFileInput = document.getElementById("invoice-file");
const invoiceNoteInput = document.getElementById("invoice-note");
const invoiceSaveButton = document.getElementById("invoice-save");
const invoicesTable = document.getElementById("invoices-table");
const settingsForm = document.getElementById("settings-form");
const autoSyncPathInput = document.getElementById("auto-sync-path");
const autoSyncEnabledSelect = document.getElementById("auto-sync-enabled");
const cloudBackupPathInput = document.getElementById("cloud-backup-path");
const cloudBackupEnabledSelect = document.getElementById("cloud-backup-enabled");
const autoBackupEnabledSelect = document.getElementById("auto-backup-enabled");
const lastAutoBackupEl = document.getElementById("last-auto-backup");
const settingsStatusEl = document.getElementById("settings-status");
const resetDataButton = document.getElementById("reset-data");
const firstRunScreen = document.getElementById("first-run-screen");
const firstRunForm = document.getElementById("first-run-form");
const logoFileInput = document.getElementById("logo-file");
const logoPreview = document.getElementById("logo-preview");
const brandTitle = document.getElementById("brand-title");
const brandLogo = document.getElementById("brand-logo");
const userRoleEl = document.getElementById("user-role");
const userNameEl = document.getElementById("user-name");
const licenseKeyInput = document.getElementById("license-key");
const licenseCheckButton = document.getElementById("license-check");
const customerDetailModal = document.getElementById("customer-detail-modal");
const customerDetailClose = document.getElementById("customer-detail-close");
const customerDetailModalBody = document.getElementById(
  "customer-detail-modal-body"
);
const customerDetailModalTitle = document.getElementById(
  "customer-detail-modal-title"
);
const stockReceiptModal = document.getElementById("stock-receipt-modal");
const stockReceiptModalTitle = document.getElementById(
  "stock-receipt-modal-title"
);
const stockReceiptModalBody = document.getElementById(
  "stock-receipt-modal-body"
);
const stockReceiptModalClose = document.getElementById("stock-receipt-close");

const formatCurrency = (value, currency = "TRY") =>
  new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency,
    minimumFractionDigits: 2
  }).format(value || 0);

const applyCurrencyFormat = (input, currencySelect) => {
  if (!input || !currencySelect) {
    return;
  }
  const handler = () => {
    if (currencySelect.value !== "TRY") {
      return;
    }
    const numeric = Number(input.value || 0);
    input.value = numeric.toFixed(2);
  };
  input.addEventListener("blur", handler);
};

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const calculateVatTotals = (amount, vatRate, vatMode) => {
  const normalizedAmount = Number(amount || 0);
  const normalizedRate = Number(vatRate || 0) / 100;
  if (vatMode === "include" && normalizedRate > 0) {
    const base = normalizedAmount / (1 + normalizedRate);
    const vat = normalizedAmount - base;
    return { base, vat, total: normalizedAmount };
  }
  const vat = normalizedAmount * normalizedRate;
  return { base: normalizedAmount, vat, total: normalizedAmount + vat };
};

const normalizeHeader = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

const normalizeStockName = (value) => {
  if (!value) {
    return "";
  }
  let normalized = String(value).toUpperCase();
  normalized = normalized
    .replace(/İ/g, "I")
    .replace(/Ğ/g, "G")
    .replace(/Ü/g, "U")
    .replace(/Ş/g, "S")
    .replace(/Ö/g, "O")
    .replace(/Ç/g, "C");
  const replacements = [
    [/\bMANSON\b/g, "MANSON"],
    [/\bMANŞON\b/g, "MANSON"],
    [/\bKOLLEKTOR\b/g, "KOLLEKTOR"],
    [/\bKOLLEKOR\b/g, "KOLLEKTOR"],
    [/\bKOLLEKTÖR\b/g, "KOLLEKTOR"]
  ];
  replacements.forEach(([pattern, next]) => {
    normalized = normalized.replace(pattern, next);
  });
  normalized = normalized.replace(/3\"4/g, "3/4\"");
  normalized = normalized.replace(/1\"1\"4/g, "1 1/4\"");
  const inchMap = {
    "1/2": "20",
    "3/4": "25",
    "1": "32",
    "1 1/4": "40",
    "1 1/2": "50",
    "2": "63"
  };
  Object.entries(inchMap).forEach(([inch, qValue]) => {
    normalized = normalized.replace(new RegExp(`${inch}\"`, "g"), `Q${qValue}`);
  });
  if (normalized.includes("INÇ") || normalized.includes("\"")) {
    normalized = normalized.replace(/INÇ/g, "").replace(/\"/g, "");
    if (!normalized.includes("PPRC")) {
      normalized = `${normalized.trim()} PPRC`;
    }
  }
  normalized = normalized.replace(/\s+/g, " ").trim();
  return normalized;
};

let users = [
  { username: "mtn", password: "1453" },
  { username: "muhasebe", password: "1453" }
];
let currentSettings = {};
let cachedCustomers = [];
let cachedStocks = [];
let cachedStockMovements = [];
let cachedCustomerDebts = [];
let cachedCustomerJobs = [];
let cachedCashTransactions = [];
let cachedSales = [];
let cachedStockReceipts = [];
const customerTabs = new Map();
let importHeaders = [];
let importRows = [];
let importErrors = [];

const normalizeText = (value) => String(value || "").trim().toLowerCase();

// Varsayım: "Şunu mu demek istediniz?" için basit karakter benzerliği yeterlidir.
const similarityScore = (term, target) => {
  const source = normalizeText(term);
  const candidate = normalizeText(target);
  if (!source || !candidate) {
    return 0;
  }
  if (candidate.includes(source)) {
    return 1;
  }
  const sourceChars = new Set(source);
  const candidateChars = new Set(candidate);
  const intersection = [...sourceChars].filter((ch) =>
    candidateChars.has(ch)
  ).length;
  const union = new Set([...sourceChars, ...candidateChars]).size || 1;
  return intersection / union;
};

const getSuggestion = (term, items, getLabel) => {
  if (!term) {
    return "";
  }
  let best = "";
  let bestScore = 0;
  items.forEach((item) => {
    const label = getLabel(item);
    const score = similarityScore(term, label);
    if (score > bestScore) {
      bestScore = score;
      best = label;
    }
  });
  return bestScore >= 0.3 ? best : "";
};

const applyBranding = (settings) => {
  const companyName = settings.companyName || "MTN Muhasebe";
  if (brandTitle) {
    brandTitle.textContent = companyName.toUpperCase();
  }
  if (document?.title) {
    document.title = companyName;
  }
  if (brandLogo) {
    if (settings.logoDataUrl) {
      brandLogo.src = settings.logoDataUrl;
      brandLogo.style.display = "block";
    } else {
      brandLogo.src = "assets/logo.svg";
      brandLogo.style.display = "block";
    }
  }
};

const applyUserProfile = (profile) => {
  if (userNameEl) {
    userNameEl.textContent = profile?.displayName || profile?.username || "Kullanıcı";
  }
  if (userRoleEl) {
    userRoleEl.textContent = `Rol: ${profile?.role || "kullanıcı"}`;
  }
};

const handleLogin = (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const { username, password } = Object.fromEntries(formData.entries());
  const matchedUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (matchedUser) {
    loginScreen.style.display = "none";
    appShell.classList.remove("app--hidden");
    applyUserProfile(matchedUser);
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
  cachedCustomers = items;
  customersTable.innerHTML = "";
  const searchTerm = normalizeText(customerSearchInput?.value);
  const filtered = searchTerm
    ? items.filter((item) => {
        const name = normalizeText(item.name);
        const code = normalizeText(item.code);
        return name.includes(searchTerm) || code.includes(searchTerm);
      })
    : items;
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
  if (customerEditSelect) {
    customerEditSelect.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Cari Seç";
    customerEditSelect.appendChild(defaultOption);
  }
  if (debtCustomerSelect) {
    debtCustomerSelect.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Cari Seç";
    debtCustomerSelect.appendChild(defaultOption);
  }
  if (detailCustomerSelect) {
    detailCustomerSelect.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Cari Seç";
    detailCustomerSelect.appendChild(defaultOption);
  }
  filtered.forEach((item) => {
    const row = document.createElement("tr");
    row.dataset.customerId = item.id || "";
    row.innerHTML = `
      <td>${item.code || "-"}</td>
      <td>${item.name || "-"}</td>
      <td>${item.phone || "-"}</td>
      <td>${item.taxNumber || "-"}</td>
      <td>${item.email || "-"}</td>
      <td>${formatCurrency(Number(item.balance) || 0)}</td>
    `;
    const nameCell = row.querySelectorAll("td")[1];
    if (nameCell) {
      nameCell.classList.add("link-cell");
      nameCell.addEventListener("click", async () => {
        const data = await window.mtnApp.getData();
        openCustomerTab(data, item);
      });
    }
    row.addEventListener("dblclick", () => {
      if (detailCustomerSelect && item.id) {
        detailCustomerSelect.value = item.id;
      }
      renderCustomerDetail({
        customers: cachedCustomers,
        customerDebts: cachedCustomerDebts,
        customerJobs: cachedCustomerJobs,
        cashTransactions: cachedCashTransactions,
        sales: cachedSales
      });
      openCustomerDetailModal(
        {
          customers: cachedCustomers,
          customerDebts: cachedCustomerDebts,
          customerJobs: cachedCustomerJobs,
          cashTransactions: cachedCashTransactions,
          sales: cachedSales
        },
        item
      );
      const detailModule = document.getElementById("customer-detail-module");
      detailModule?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    customersTable.appendChild(row);
  });
  items.forEach((item) => {
    if (offerCustomerSelect) {
      const option = document.createElement("option");
      option.value = item.id || item.name || "";
      option.textContent = item.code
        ? `${item.code} - ${item.name || "Cari"}`
        : item.name || "Cari";
      offerCustomerSelect.appendChild(option);
    }
    if (paymentCustomerSelect) {
      const option = document.createElement("option");
      option.value = item.id || item.name || "";
      option.textContent = item.code
        ? `${item.code} - ${item.name || "Cari"}`
        : item.name || "Cari";
      paymentCustomerSelect.appendChild(option);
    }
    if (debtCustomerSelect) {
      const option = document.createElement("option");
      option.value = item.id || item.name || "";
      option.textContent = item.code
        ? `${item.code} - ${item.name || "Cari"}`
        : item.name || "Cari";
      debtCustomerSelect.appendChild(option);
    }
    if (detailCustomerSelect) {
      const option = document.createElement("option");
      option.value = item.id || item.name || "";
      option.textContent = item.code
        ? `${item.code} - ${item.name || "Cari"}`
        : item.name || "Cari";
      detailCustomerSelect.appendChild(option);
    }
    if (customerEditSelect) {
      const option = document.createElement("option");
      option.value = item.id || item.name || "";
      option.textContent = item.code
        ? `${item.code} - ${item.name || "Cari"}`
        : item.name || "Cari";
      customerEditSelect.appendChild(option);
    }
  });
  if (customerSearchSuggestion) {
    const suggestion = getSuggestion(
      searchTerm,
      items,
      (item) => item.name || ""
    );
    if (searchTerm && !filtered.length) {
      customerSearchSuggestion.textContent = suggestion
        ? `Şunu mu demek istediniz: ${suggestion}`
        : "Aradığınız kriterlere uygun kayıt bulunamadı.";
    } else {
      customerSearchSuggestion.textContent = "";
    }
  }
};

const renderStocks = (items) => {
  cachedStocks = items;
  stocksTable.innerHTML = "";
  const searchTerm = normalizeText(stockSearchInput?.value);
  const filtered = searchTerm
    ? items.filter((item) => {
        const name = normalizeText(item.name);
        const code = normalizeText(item.code);
        return name.includes(searchTerm) || code.includes(searchTerm);
      })
    : items;
  if (movementStockSelect) {
    movementStockSelect.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Malzeme Seç";
    movementStockSelect.appendChild(defaultOption);
  }
  filtered.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.code || "-"}</td>
      <td>${item.name || "-"}</td>
      <td>${item.diameter || "-"}</td>
      <td>${item.unit || "-"}</td>
      <td>${item.quantity || 0}</td>
      <td>${item.threshold || 0}</td>
    `;
    stocksTable.appendChild(row);
  });
  items.forEach((item) => {
    if (movementStockSelect) {
      const option = document.createElement("option");
      option.value = item.name || "";
      option.textContent = item.code
        ? `${item.code} - ${item.name || "Malzeme"}`
        : item.name || "Malzeme";
      movementStockSelect.appendChild(option);
    }
  });
  if (stocksTotalEl) {
    const total = items.reduce(
      (sum, item) => sum + Number(item.quantity || 0),
      0
    );
    stocksTotalEl.textContent = total;
  }
  if (stockSearchSuggestion) {
    const suggestion = getSuggestion(
      searchTerm,
      items,
      (item) => item.name || ""
    );
    if (searchTerm && !filtered.length) {
      stockSearchSuggestion.textContent = suggestion
        ? `Şunu mu demek istediniz: ${suggestion}`
        : "Aradığınız kriterlere uygun kayıt bulunamadı.";
    } else {
      stockSearchSuggestion.textContent = "";
    }
  }
  renderStockMasterList(items);
};

const renderStockMasterList = (items) => {
  if (!stockMasterTable) {
    return;
  }
  const term = normalizeText(stockMasterSearchInput?.value);
  const filtered = term
    ? items.filter((item) => {
        const name = normalizeText(item.name);
        const code = normalizeText(item.code);
        return name.includes(term) || code.includes(term);
      })
    : items;
  stockMasterTable.innerHTML = "";
  filtered.forEach((item) => {
    const row = document.createElement("tr");
    const lastUpdated = item.updatedAt || item.createdAt;
    row.innerHTML = `
      <td>${item.code || "-"}</td>
      <td>${item.name || "-"}</td>
      <td>${item.warehouse || "Ana Depo"}</td>
      <td>${item.quantity || 0}</td>
      <td>${item.unit || "-"}</td>
      <td>${lastUpdated ? new Date(lastUpdated).toLocaleDateString("tr-TR") : "-"}</td>
    `;
    stockMasterTable.appendChild(row);
  });
  if (stockMasterSearchHint) {
    stockMasterSearchHint.textContent =
      term && !filtered.length
        ? "Aradığınız kriterlere uygun stok bulunamadı."
        : "";
  }
};

const renderStockMovements = (items) => {
  cachedStockMovements = items;
  if (!stockMovementsTable) {
    return;
  }
  stockMovementsTable.innerHTML = "";
  const sorted = [...items].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  sorted.forEach((item) => {
    const row = document.createElement("tr");
    const typeLabel =
      item.type === "giris"
        ? "Giriş"
        : item.type === "cikis"
          ? "Çıkış"
          : item.type || "-";
    row.innerHTML = `
      <td>${new Date(item.createdAt).toLocaleDateString("tr-TR")}</td>
      <td>${item.stockName || "-"}</td>
      <td>${typeLabel}</td>
      <td>${Number(item.quantity || 0)}</td>
      <td>${item.note || "-"}</td>
    `;
    stockMovementsTable.appendChild(row);
  });
};

const renderStockReceipts = (items) => {
  cachedStockReceipts = items;
  if (!stockReceiptsTable) {
    return;
  }
  stockReceiptsTable.innerHTML = "";
  const term = normalizeText(stockReceiptSearchInput?.value);
  const startValue = stockReceiptStartInput?.value;
  const endValue = stockReceiptEndInput?.value;
  const filtered = term
    ? items.filter((receipt) => {
        const supplier = normalizeText(receipt.supplierName);
        const note = normalizeText(receipt.note);
        const dateLabel = new Date(receipt.createdAt)
          .toLocaleDateString("tr-TR")
          .toLowerCase();
        return (
          supplier.includes(term) ||
          note.includes(term) ||
          dateLabel.includes(term)
        );
      })
    : items;
  const dateFiltered = filtered.filter((receipt) => {
    if (!startValue && !endValue) {
      return true;
    }
    const receiptDate = new Date(receipt.createdAt);
    if (startValue) {
      const startDate = new Date(startValue);
      if (receiptDate < startDate) {
        return false;
      }
    }
    if (endValue) {
      const endDate = new Date(endValue);
      endDate.setHours(23, 59, 59, 999);
      if (receiptDate > endDate) {
        return false;
      }
    }
    return true;
  });
  dateFiltered.forEach((receipt) => {
    const row = document.createElement("tr");
    const isTransferred = Boolean(receipt.transferredAt);
    row.innerHTML = `
      <td><input type="checkbox" data-receipt-id="${receipt.id || ""}" ${isTransferred ? "disabled" : ""} /></td>
      <td>${new Date(receipt.createdAt).toLocaleDateString("tr-TR")}</td>
      <td>${receipt.supplierName || "-"}</td>
      <td>${Array.isArray(receipt.items) ? receipt.items.length : 0}</td>
      <td>${receipt.note || "-"}</td>
      <td>${isTransferred ? "Aktarıldı" : "Bekliyor"}</td>
    `;
    row.addEventListener("dblclick", () => {
      openStockReceiptModal(receipt);
    });
    stockReceiptsTable.appendChild(row);
  });
  if (stockReceiptSearchHint) {
    stockReceiptSearchHint.textContent =
      term && !dateFiltered.length
        ? "Aradığınız kriterlere uygun kayıt bulunamadı."
        : "";
  }
};

const renderInvoices = (items) => {
  if (!invoicesTable) {
    return;
  }
  invoicesTable.innerHTML = "";
  (items || []).forEach((invoice) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${new Date(invoice.createdAt).toLocaleDateString("tr-TR")}</td>
      <td>${escapeHtml(invoice.name || "-")}</td>
      <td>${escapeHtml(invoice.note || "-")}</td>
      <td><button class="ghost" data-path="${escapeHtml(
        invoice.path || ""
      )}">Aç</button></td>
    `;
    row.querySelector("button")?.addEventListener("click", async () => {
      await window.mtnApp?.openFile?.(invoice.path);
    });
    invoicesTable.appendChild(row);
  });
};

const renderImportMappingOptions = () => {
  if (!stockImportMapName || !stockImportMapQty || !stockImportMapCode) {
    return;
  }
  const createOptions = (select) => {
    select.innerHTML = "";
    const blank = document.createElement("option");
    blank.value = "";
    blank.textContent = "Seçiniz";
    select.appendChild(blank);
    importHeaders.forEach((header) => {
      const option = document.createElement("option");
      option.value = header;
      option.textContent = header;
      select.appendChild(option);
    });
  };
  createOptions(stockImportMapCode);
  createOptions(stockImportMapName);
  createOptions(stockImportMapQty);

  const normalized = importHeaders.reduce((acc, header) => {
    acc[normalizeHeader(header)] = header;
    return acc;
  }, {});
  const nameHeader =
    normalized["stok adı"] ||
    normalized["stok adi"] ||
    normalized["malzeme"] ||
    normalized["ürün"] ||
    normalized["urun"];
  const qtyHeader =
    normalized["adet"] ||
    normalized["miktar"] ||
    normalized["stok adet"] ||
    normalized["stok adedi"];
  const codeHeader =
    normalized["stok kodu"] ||
    normalized["stok kodu (öneri)"] ||
    normalized["stok kodu (oneri)"] ||
    normalized["kod"];

  if (nameHeader) {
    stockImportMapName.value = nameHeader;
  }
  if (qtyHeader) {
    stockImportMapQty.value = qtyHeader;
  }
  if (codeHeader) {
    stockImportMapCode.value = codeHeader;
  }
};

const buildImportPreview = () => {
  if (!stockImportPreviewBody || !stockImportSummary) {
    return;
  }
  const mapName = stockImportMapName?.value || "";
  const mapQty = stockImportMapQty?.value || "";
  const mapCode = stockImportMapCode?.value || "";
  importErrors = [];
  const updateMode = stockImportUpdateMode?.value || "update";
  let newCount = 0;
  let updateCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  const rows = importRows.map((row, index) => {
    const name = normalizeStockName(row[mapName] ?? "");
    const code = row[mapCode] ?? "";
    const qtyRaw = row[mapQty];
    const quantity = Number(String(qtyRaw || "").replace(",", "."));
    const errors = [];
    if (!mapName || !mapQty) {
      errors.push("Zorunlu alan eşleştirme eksik.");
    }
    if (!name) {
      errors.push("Stok adı yok.");
    }
    if (Number.isNaN(quantity)) {
      errors.push("Adet sayı değil.");
    }
    if (!Number.isNaN(quantity) && quantity < 0) {
      errors.push("Adet negatif olamaz.");
    }

    let status = "Yeni";
    const matchByCode = code
      ? cachedStocks.find((item) => item.code === code)
      : null;
    const matchByName = name
      ? cachedStocks.find(
          (item) => normalizeText(item.name) === normalizeText(name)
        )
      : null;

    if (matchByCode || matchByName) {
      if (updateMode === "skip") {
        status = "Atlandı";
      } else {
        status = "Güncelle";
      }
    }

    if (errors.length) {
      status = "Hatalı";
      errorCount += 1;
      importErrors.push({
        index: index + 1,
        code,
        name,
        quantity: qtyRaw,
        errors: errors.join(" | ")
      });
    } else if (status === "Güncelle") {
      updateCount += 1;
    } else if (status === "Atlandı") {
      skipCount += 1;
    } else {
      newCount += 1;
    }

    return {
      index,
      code,
      name,
      quantity: Number.isNaN(quantity) ? qtyRaw : quantity,
      status
    };
  });

  stockImportPreviewBody.innerHTML = rows
    .slice(0, 50)
    .map(
      (row) => `
      <tr>
        <td>${escapeHtml(row.code || "-")}</td>
        <td>${escapeHtml(row.name || "-")}</td>
        <td>${escapeHtml(row.quantity || "-")}</td>
        <td>${escapeHtml(row.status)}</td>
      </tr>
    `
    )
    .join("");

  const summaryItems = stockImportSummary.querySelectorAll("strong");
  if (summaryItems.length >= 5) {
    summaryItems[0].textContent = String(importRows.length);
    summaryItems[1].textContent = String(newCount);
    summaryItems[2].textContent = String(updateCount);
    summaryItems[3].textContent = String(skipCount);
    summaryItems[4].textContent = String(errorCount);
  }
};

const createReceiptRow = () => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input data-field="name" placeholder="Malzeme adı" /></td>
    <td><input data-field="diameter" placeholder="Çap" /></td>
    <td><input data-field="unit" placeholder="Birim" /></td>
    <td><input data-field="quantity" type="number" min="0" step="1" /></td>
    <td><input data-field="threshold" type="number" min="0" step="1" /></td>
  `;
  return row;
};

const renderCustomerJobs = (items, customerId) => {
  if (!customerJobsTable) {
    return;
  }
  customerJobsTable.innerHTML = "";
  const filtered = (items || []).filter(
    (job) => job.customerId === customerId
  );
  filtered.forEach((job) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${new Date(job.createdAt).toLocaleDateString("tr-TR")}</td>
      <td>${job.title || "-"}</td>
      <td>${Number(job.quantity || 0)}</td>
      <td>${job.unit || "-"}</td>
      <td>${formatCurrency(Number(job.unitPrice || 0), job.currency || "TRY")}</td>
      <td>${formatCurrency(Number(job.total || 0), job.currency || "TRY")}</td>
      <td>${job.note || "-"}</td>
    `;
    customerJobsTable.appendChild(row);
  });
};

const renderCash = (items) => {
  cachedCashTransactions = items;
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
      <td>${item.customerName || "-"}</td>
      <td>${formatCurrency(Number(item.amount) || 0, item.currency || "TRY")}</td>
      <td>${item.note || "-"}</td>
    `;
    cashTable.appendChild(row);
  });
};

const renderSales = (items) => {
  cachedSales = items;
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
    if (detailSummaryEl) {
      detailSummaryEl.innerHTML = "";
    }
    refreshCustomerTabs(data);
    return;
  }
  const sales = (data.sales || []).filter(
    (sale) => sale.customerId === customerId
  );
  const payments = (data.cashTransactions || []).filter(
    (entry) => entry.customerId === customerId
  );
  const debts = (data.customerDebts || []).filter(
    (entry) => entry.customerId === customerId
  );
  const jobs = (data.customerJobs || []).filter(
    (entry) => entry.customerId === customerId
  );
  const customer = (data.customers || []).find(
    (item) => item.id === customerId
  );
  const totalSales = sales.reduce(
    (sum, sale) => sum + Number(sale.total || 0),
    0
  );
  const totalPayments = payments.reduce(
    (sum, payment) => sum + Number(payment.amount || 0),
    0
  );
  const totalDebts = debts.reduce(
    (sum, debt) => sum + Number(debt.amount || 0),
    0
  );
  const totalJobs = jobs.reduce(
    (sum, job) => sum + Number(job.total || 0),
    0
  );
  const totalItems = sales.reduce((sum, sale) => {
    const items = Array.isArray(sale.items) ? sale.items : [];
    return (
      sum +
      items.reduce(
        (itemSum, item) => itemSum + Number(item.quantity || 0),
        0
      )
    );
  }, 0);
  detailTable.innerHTML = "";
  const entries = [
    ...sales.map((sale) => ({
      createdAt: sale.createdAt,
      type: "Satış",
      amount: Number(sale.total || 0),
      note: "Satış faturası"
    })),
    ...debts.map((debt) => ({
      createdAt: debt.createdAt,
      type: "Borç",
      amount: Number(debt.amount || 0),
      currency: debt.currency || "TRY",
      note: debt.note || "Cari Borç"
    })),
    ...payments.map((payment) => ({
      createdAt: payment.createdAt,
      type: "Tahsilat",
      amount: Number(payment.amount || 0),
      currency: payment.currency || "TRY",
      note: payment.note || "Cari Tahsilat"
    }))
  ].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  entries.forEach((entry) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${new Date(entry.createdAt).toLocaleDateString("tr-TR")}</td>
      <td>${entry.type}</td>
      <td>${formatCurrency(Number(entry.amount) || 0, entry.currency || "TRY")}</td>
      <td>${entry.note}</td>
    `;
    detailTable.appendChild(row);
  });

  if (detailSummaryEl) {
    detailSummaryEl.innerHTML = `
      <div>
        Toplam İş Kalemi
        <strong>${totalItems}</strong>
      </div>
      <div>
        Satış Toplamı
        <strong>${formatCurrency(totalSales)}</strong>
      </div>
      <div>
        Tahsilat Toplamı
        <strong>${formatCurrency(totalPayments)}</strong>
      </div>
      <div>
        Toplam Borç
        <strong>${formatCurrency(Number(customer?.balance || 0))}</strong>
      </div>
      <div>
        Açılış + Ek Borç
        <strong>${formatCurrency(totalDebts)}</strong>
      </div>
      <div>
        İş Kalemleri Toplamı
        <strong>${formatCurrency(totalJobs)}</strong>
      </div>
    `;
  }
  renderCustomerJobs(data.customerJobs || [], customerId);
  refreshCustomerTabs(data);
};

const buildCustomerTabContent = (data, customerId) => {
  const sales = (data.sales || []).filter((sale) => sale.customerId === customerId);
  const payments = (data.cashTransactions || []).filter(
    (entry) => entry.customerId === customerId
  );
  const debts = (data.customerDebts || []).filter(
    (entry) => entry.customerId === customerId
  );
  const jobs = (data.customerJobs || []).filter(
    (entry) => entry.customerId === customerId
  );
  const totalSales = sales.reduce(
    (sum, sale) => sum + Number(sale.total || 0),
    0
  );
  const totalPayments = payments.reduce(
    (sum, payment) => sum + Number(payment.amount || 0),
    0
  );
  const totalDebts = debts.reduce(
    (sum, debt) => sum + Number(debt.amount || 0),
    0
  );
  const totalJobs = jobs.reduce(
    (sum, job) => sum + Number(job.total || 0),
    0
  );
  const summaryHtml = `
    <div class="detail-summary">
      <div>Toplam Satış <strong>${formatCurrency(totalSales)}</strong></div>
      <div>Tahsilat <strong>${formatCurrency(totalPayments)}</strong></div>
      <div>Açılış + Ek Borç <strong>${formatCurrency(totalDebts)}</strong></div>
      <div>İş Kalemleri Toplamı <strong>${formatCurrency(totalJobs)}</strong></div>
    </div>
  `;
  const jobRows = jobs
    .map(
      (job) => `
      <tr>
        <td>${new Date(job.createdAt).toLocaleDateString("tr-TR")}</td>
        <td>${job.title || "-"}</td>
        <td>${Number(job.quantity || 0)}</td>
        <td>${job.unit || "-"}</td>
        <td>${formatCurrency(Number(job.total || 0), job.currency || "TRY")}</td>
        <td>${job.note || "-"}</td>
      </tr>
    `
    )
    .join("");
  const entries = [
    ...sales.map((sale) => ({
      createdAt: sale.createdAt,
      type: "Satış",
      amount: Number(sale.total || 0),
      note: "Satış faturası"
    })),
    ...debts.map((debt) => ({
      createdAt: debt.createdAt,
      type: "Borç",
      amount: Number(debt.amount || 0),
      currency: debt.currency || "TRY",
      note: debt.note || "Cari Borç"
    })),
    ...payments.map((payment) => ({
      createdAt: payment.createdAt,
      type: "Tahsilat",
      amount: Number(payment.amount || 0),
      currency: payment.currency || "TRY",
      note: payment.note || "Cari Tahsilat"
    }))
  ].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  const entryRows = entries
    .map(
      (entry) => `
      <tr>
        <td>${new Date(entry.createdAt).toLocaleDateString("tr-TR")}</td>
        <td>${entry.type}</td>
        <td>${formatCurrency(Number(entry.amount || 0), entry.currency || "TRY")}</td>
        <td>${entry.note}</td>
      </tr>
    `
    )
    .join("");
  return `
    ${summaryHtml}
    <div class="table-card table-card--sheet">
      <h3>İş Kalemleri</h3>
      <table>
        <thead>
          <tr>
            <th>Tarih</th>
            <th>İş Kalemi</th>
            <th>Miktar</th>
            <th>Birim</th>
            <th>Tutar</th>
            <th>Açıklama</th>
          </tr>
        </thead>
        <tbody>${jobRows || "<tr><td colspan='6'>Kayıt yok.</td></tr>"}</tbody>
      </table>
    </div>
    <div class="table-card">
      <h3>Hareketler</h3>
      <table>
        <thead>
          <tr>
            <th>Tarih</th>
            <th>Tür</th>
            <th>Tutar</th>
            <th>Açıklama</th>
          </tr>
        </thead>
        <tbody>${entryRows || "<tr><td colspan='4'>Kayıt yok.</td></tr>"}</tbody>
      </table>
    </div>
  `;
};

const activateCustomerTab = (customerId) => {
  if (!customerTabsEl || !customerTabPanelsEl) {
    return;
  }
  const tabButtons = customerTabsEl.querySelectorAll(".tab");
  const tabPanels = customerTabPanelsEl.querySelectorAll(".tab-panel");
  tabButtons.forEach((tab) =>
    tab.classList.toggle("tab--active", tab.dataset.customerId === customerId)
  );
  tabPanels.forEach((panel) =>
    panel.classList.toggle(
      "tab-panel--active",
      panel.dataset.customerId === customerId
    )
  );
};

const openCustomerTab = (data, customer) => {
  if (!customerTabsEl || !customerTabPanelsEl || !customer?.id) {
    return;
  }
  const customerId = customer.id;
  if (customerTabs.has(customerId)) {
    activateCustomerTab(customerId);
    return;
  }
  const tabButton = document.createElement("button");
  tabButton.className = "tab";
  tabButton.dataset.customerId = customerId;
  tabButton.innerHTML = `
    <span>${escapeHtml(customer.name || "Cari")}</span>
    <span class="tab__close" aria-label="Kapat">✕</span>
  `;
  tabButton.addEventListener("click", (event) => {
    if (event.target?.classList?.contains("tab__close")) {
      event.stopPropagation();
      const panel = customerTabs.get(customerId);
      panel?.remove();
      tabButton.remove();
      customerTabs.delete(customerId);
      const firstTab = customerTabsEl.querySelector(".tab");
      if (firstTab) {
        activateCustomerTab(firstTab.dataset.customerId);
      }
      return;
    }
    activateCustomerTab(customerId);
  });
  const panel = document.createElement("div");
  panel.className = "tab-panel";
  panel.dataset.customerId = customerId;
  panel.innerHTML = buildCustomerTabContent(data, customerId);
  customerTabsEl.appendChild(tabButton);
  customerTabPanelsEl.appendChild(panel);
  customerTabs.set(customerId, panel);
  activateCustomerTab(customerId);
};

const refreshCustomerTabs = (data) => {
  customerTabs.forEach((panel, customerId) => {
    panel.innerHTML = buildCustomerTabContent(data, customerId);
  });
};

const openCustomerDetailModal = (data, customer) => {
  if (!customerDetailModal || !customerDetailModalBody) {
    return;
  }
  const customerId = customer.id;
  const sales = (data.sales || []).filter(
    (sale) => sale.customerId === customerId
  );
  const payments = (data.cashTransactions || []).filter(
    (entry) => entry.customerId === customerId
  );
  const debts = (data.customerDebts || []).filter(
    (entry) => entry.customerId === customerId
  );
  const jobs = (data.customerJobs || []).filter(
    (entry) => entry.customerId === customerId
  );
  const summaryHtml = `
    <div class="detail-summary">
      <div>Toplam Satış <strong>${formatCurrency(
        sales.reduce((sum, s) => sum + Number(s.total || 0), 0)
      )}</strong></div>
      <div>Tahsilat <strong>${formatCurrency(
        payments.reduce((sum, p) => sum + Number(p.amount || 0), 0)
      )}</strong></div>
      <div>Bakiye <strong>${formatCurrency(
        Number(customer.balance || 0)
      )}</strong></div>
    </div>
  `;
  const jobsRows = jobs
    .map(
      (job) => `
      <tr>
        <td>${new Date(job.createdAt).toLocaleDateString("tr-TR")}</td>
        <td>${job.title || "-"}</td>
        <td>${Number(job.quantity || 0)}</td>
        <td>${job.unit || "-"}</td>
        <td>${formatCurrency(Number(job.total || 0), job.currency || "TRY")}</td>
        <td>${job.note || "-"}</td>
      </tr>`
    )
    .join("");
  const modalHtml = `
    ${summaryHtml}
    <div class="table-card table-card--sheet">
      <h3>İş Kalemleri</h3>
      <table>
        <thead>
          <tr>
            <th>Tarih</th>
            <th>İş Kalemi</th>
            <th>Miktar</th>
            <th>Birim</th>
            <th>Tutar</th>
            <th>Açıklama</th>
          </tr>
        </thead>
        <tbody>${jobsRows || "<tr><td colspan='6'>Kayıt yok.</td></tr>"}</tbody>
      </table>
    </div>
  `;
  customerDetailModalBody.innerHTML = modalHtml;
  if (customerDetailModalTitle) {
    customerDetailModalTitle.textContent = `Cari Detay - ${customer.name || ""}`;
  }
  customerDetailModal.classList.add("modal--open");
  customerDetailModal.setAttribute("aria-hidden", "false");
};

const openStockReceiptModal = (receipt) => {
  if (!stockReceiptModal || !stockReceiptModalBody) {
    return;
  }
  const items = Array.isArray(receipt.items) ? receipt.items : [];
  const rows = items
    .map(
      (item) => `
      <tr>
        <td>${escapeHtml(item.name || "-")}</td>
        <td>${escapeHtml(item.diameter || "-")}</td>
        <td>${escapeHtml(item.unit || "-")}</td>
        <td>${Number(item.quantity || 0)}</td>
        <td>${Number(item.threshold || 0)}</td>
      </tr>
    `
    )
    .join("");
  stockReceiptModalBody.innerHTML = `
    <div class="detail-summary">
      <div>Tarih <strong>${new Date(receipt.createdAt).toLocaleDateString(
        "tr-TR"
      )}</strong></div>
      <div>Malzemeci <strong>${escapeHtml(receipt.supplierName || "-")}</strong></div>
      <div>Not <strong>${escapeHtml(receipt.note || "-")}</strong></div>
    </div>
    <div class="table-card table-card--sheet">
      <h3>Fiş Kalemleri</h3>
      <table>
        <thead>
          <tr>
            <th>Malzeme</th>
            <th>Çap</th>
            <th>Birim</th>
            <th>Adet</th>
            <th>Kritik</th>
          </tr>
        </thead>
        <tbody>${rows || "<tr><td colspan='5'>Kayıt yok.</td></tr>"}</tbody>
      </table>
    </div>
  `;
  if (stockReceiptModalTitle) {
    stockReceiptModalTitle.textContent = "Fiş Detay";
  }
  stockReceiptModal.classList.add("modal--open");
  stockReceiptModal.setAttribute("aria-hidden", "false");
};

const openStockImportModal = () => {
  if (!stockImportModal) {
    return;
  }
  stockImportModal.classList.add("modal--open");
  stockImportModal.setAttribute("aria-hidden", "false");
  buildImportPreview();
};

const closeStockImportModal = () => {
  if (!stockImportModal) {
    return;
  }
  stockImportModal.classList.remove("modal--open");
  stockImportModal.setAttribute("aria-hidden", "true");
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
  renderAssistant(data);

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

const updateSubnav = (containerId, targetId) => {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }
  const buttons = container.querySelectorAll(".subnav__item");
  const sections = container.querySelectorAll(".subsection");
  buttons.forEach((button) => {
    const target = button.dataset.target;
    if (target === targetId) {
      button.classList.add("subnav__item--active");
    } else {
      button.classList.remove("subnav__item--active");
    }
  });
  sections.forEach((section) => {
    if (section.id === targetId) {
      section.classList.add("subsection--active");
    } else {
      section.classList.remove("subsection--active");
    }
  });
};

const bindSubnav = (containerId, defaultTarget) => {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }
  updateSubnav(containerId, defaultTarget);
  container.querySelectorAll(".subnav__item").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      updateSubnav(containerId, button.dataset.target);
    });
  });
};

const renderAssistantList = (el, items) => {
  if (!el) {
    return;
  }
  el.innerHTML = "";
  if (!items.length) {
    const li = document.createElement("li");
    li.textContent = "Henüz veri yok.";
    el.appendChild(li);
    return;
  }
  items.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    el.appendChild(li);
  });
};

const renderAssistant = (data) => {
  if (!assistantDailyEl || !assistantRemindersEl || !assistantSuggestionsEl) {
    return;
  }
  const cashTransactions = data.cashTransactions || [];
  const totalIncome = cashTransactions
    .filter((item) => item.type === "gelir")
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const totalExpense = cashTransactions
    .filter((item) => item.type === "gider")
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const cashBalance = totalIncome - totalExpense;
  const totalCustomers = (data.customers || []).length;
  const totalStocks = (data.stocks || []).length;
  const totalStockQty = (data.stocks || []).reduce(
    (sum, item) => sum + Number(item.quantity || 0),
    0
  );

  const daily = [
    `Kasa neti: ${formatCurrency(cashBalance)}`,
    `Toplam cari: ${totalCustomers}`,
    `Toplam stok kartı: ${totalStocks}`,
    `Depo toplam adedi: ${totalStockQty}`
  ];

  const lowStocks = (data.stocks || []).filter((item) => {
    const threshold = Number(item.threshold || 0);
    return threshold > 0 && Number(item.quantity || 0) <= threshold;
  });
  const pendingBalances = (data.customers || [])
    .filter((item) => Number(item.balance || 0) > 0)
    .slice(0, 5);

  const reminders = [
    ...lowStocks.slice(0, 5).map(
      (item) => `Kritik stok: ${item.name} (${item.quantity || 0})`
    ),
    ...pendingBalances.map(
      (item) => `Tahsilat bekleyen cari: ${item.name} (${formatCurrency(
        Number(item.balance || 0)
      )})`
    )
  ];

  const suggestions = [];
  if (!currentSettings.enableAutoBackup) {
    suggestions.push("Otomatik yedeklemeyi aktif ederek veri güvenliğini artırın.");
  }
  if (!lowStocks.length && totalStocks > 0) {
    suggestions.push("Kritik stok yok, periyodik sayım raporu almayı unutmayın.");
  }
  if (totalCustomers === 0) {
    suggestions.push("Cari kartlarınızı ekleyerek tahsilat akışını yönetin.");
  }
  if (!suggestions.length) {
    suggestions.push("Tüm modüller güncel görünüyor. Raporları düzenli alın.");
  }

  renderAssistantList(assistantDailyEl, daily);
  renderAssistantList(assistantRemindersEl, reminders);
  renderAssistantList(assistantSuggestionsEl, suggestions);

  if (assistantStatusEl) {
    assistantStatusEl.textContent = `Son güncelleme: ${new Date().toLocaleString(
      "tr-TR"
    )}`;
  }
};

const loadInitialData = async () => {
  if (!window.mtnApp?.getData) {
    return;
  }
  const data = await window.mtnApp.getData();
  renderCustomers(data.customers || []);
  renderStocks(data.stocks || []);
  renderStockMasterList(data.stocks || []);
  renderCash(data.cashTransactions || []);
  renderSales(data.sales || []);
  renderStockMovements(data.stockMovements || []);
  cachedCustomerDebts = data.customerDebts || [];
  cachedCustomerJobs = data.customerJobs || [];
  renderStockReceipts(data.stockReceipts || []);
  renderInvoices(data.invoices || []);
  renderSummary(data);
  renderCustomerDetail(data);
};

const readLogoFile = (file) =>
  new Promise((resolve) => {
    if (!file) {
      resolve("");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result || "");
    reader.readAsDataURL(file);
  });

const setTodayDate = () => {
  const today = new Date().toISOString().split("T")[0];
  if (cashDateInput) {
    cashDateInput.value = today;
  }
  if (stockMovementDateInput) {
    stockMovementDateInput.value = today;
  }
  if (stockReceiptDateInput) {
    stockReceiptDateInput.value = today;
  }
  if (customerCreateDateInput) {
    customerCreateDateInput.value = today;
  }
  if (customerDebtDateInput) {
    customerDebtDateInput.value = today;
  }
  if (customerJobDateInput) {
    customerJobDateInput.value = today;
  }
  if (customerPaymentDateInput) {
    customerPaymentDateInput.value = today;
  }
};

const buildLocalCode = (prefix) => {
  const stamp = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 12);
  const random = Math.floor(Math.random() * 900 + 100);
  return `${prefix}-${stamp}-${random}`;
};

const setAutoCodes = () => {
  if (customerForm?.elements?.code) {
    customerForm.elements.code.value = buildLocalCode("CAR");
  }
  if (stockForm?.elements?.code) {
    stockForm.elements.code.value = buildLocalCode("STK");
  }
};

const initApp = async () => {
  if (!window.mtnApp?.getSettings) {
    return;
  }
  const settings = await window.mtnApp.getSettings();
  currentSettings = settings;
  applyBranding(settings);
  if (settings.users?.length) {
    users = settings.users;
  }
  if (licenseKeyInput) {
    licenseKeyInput.value = settings.licenseKey || "";
  }
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
  if (autoBackupEnabledSelect) {
    autoBackupEnabledSelect.value = String(settings.enableAutoBackup);
  }
  if (lastAutoBackupEl) {
    lastAutoBackupEl.textContent = settings.lastAutoBackupAt
      ? new Date(settings.lastAutoBackupAt).toLocaleString("tr-TR")
      : "Henüz yok";
  }
  setTodayDate();
  setAutoCodes();

  if (!settings.hasOnboarded && firstRunScreen) {
    firstRunScreen.classList.remove("first-run--hidden");
    loginScreen.style.display = "none";
    if (logoPreview && settings.logoDataUrl) {
      logoPreview.src = settings.logoDataUrl;
    }
    if (logoPreview && !settings.logoDataUrl) {
      logoPreview.src = "assets/logo.svg";
    }
    if (firstRunForm) {
      firstRunForm.companyName.value = settings.companyName || "";
      firstRunForm.defaultCashName.value = settings.defaultCashName || "";
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
  const companyName = currentSettings.companyName || "MTN Enerji";
  const taxOffice = currentSettings.taxOffice || "Vergi Dairesi";
  const taxNumber = currentSettings.taxNumber || "0000000000";
  const logoSrc = currentSettings.logoDataUrl || "";
  const logoHtml = logoSrc
    ? `<img class="report-logo-img" src="${logoSrc}" alt="Firma logosu" />`
    : `<div class="report-logo">MTN</div>`;
  const companyHtml = `
    <div class="report-header">
      <div>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(companyName)}</p>
        <p>Vergi Dairesi: ${escapeHtml(taxOffice)} • Vergi No: ${escapeHtml(
          taxNumber
        )}</p>
      </div>
      ${logoHtml}
    </div>
  `;
  const watermark = includeWatermark
    ? `<div class="report-watermark">${
        logoSrc
          ? `<img src="${logoSrc}" alt="Firma logosu" />`
          : escapeHtml(companyName)
      }</div>`
    : "";
  return `
    ${companyHtml}
    ${watermark}
    <table>
      <thead><tr>${headerCells}</tr></thead>
      <tbody>${rowHtml}</tbody>
    </table>
    ${options.footerHtml || ""}
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
  const companyName = currentSettings.companyName || "MTN Enerji";
  const taxOffice = currentSettings.taxOffice || "Vergi Dairesi";
  const taxNumber = currentSettings.taxNumber || "0000000000";
  const logoSrc = currentSettings.logoDataUrl || "";
  const logoHtml = logoSrc
    ? `<img class="report-logo-img" src="${logoSrc}" alt="Firma logosu" />`
    : `<div class="report-logo">MTN</div>`;
  return `
    <div class="report-header">
      <div>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(companyName)}</p>
        <p>Vergi Dairesi: ${escapeHtml(taxOffice)} • Vergi No: ${escapeHtml(
          taxNumber
        )}</p>
      </div>
      ${logoHtml}
    </div>
    <div class="report-watermark">${
      logoSrc ? `<img src="${logoSrc}" alt="Firma logosu" />` : escapeHtml(companyName)
    }</div>
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

const buildCustomerJobsInvoiceHtml = (customerName, jobs, totals, vatSummary) => {
  const rowHtml = jobs
    .map(
      (job) =>
        `<tr>
          <td>${escapeHtml(job.title)}</td>
          <td>${escapeHtml(job.quantity)}</td>
          <td>${escapeHtml(job.unit)}</td>
          <td>${escapeHtml(job.unitPrice)}</td>
          <td>${escapeHtml(job.total)}</td>
        </tr>`
    )
    .join("");
  const companyName = currentSettings.companyName || "MTN Enerji";
  const taxOffice = currentSettings.taxOffice || "Vergi Dairesi";
  const taxNumber = currentSettings.taxNumber || "0000000000";
  const logoSrc = currentSettings.logoDataUrl || "";
  const logoHtml = logoSrc
    ? `<img class="report-logo-img" src="${logoSrc}" alt="Firma logosu" />`
    : `<div class="report-logo">MTN</div>`;
  const watermark = logoSrc
    ? `<div class="report-watermark"><img src="${logoSrc}" alt="Firma logosu" /></div>`
    : `<div class="report-watermark">${escapeHtml(companyName)}</div>`;
  return `
    <div class="report-header">
      <div>
        <h1>${escapeHtml(customerName)} - Cari Ekstre</h1>
        <p>${escapeHtml(companyName)}</p>
        <p>Vergi Dairesi: ${escapeHtml(taxOffice)} • Vergi No: ${escapeHtml(
          taxNumber
        )}</p>
      </div>
      ${logoHtml}
    </div>
    ${watermark}
    <table>
      <thead>
        <tr>
          <th>İş Kalemi</th>
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
        <tr><td>İş Kalemleri Toplamı</td><td style="text-align:right;">${escapeHtml(
          totals.jobsTotal
        )}</td></tr>
        <tr><td>KDV</td><td style="text-align:right;">${escapeHtml(
          vatSummary?.vat || formatCurrency(0)
        )}</td></tr>
        <tr><td>Tahsilat Toplamı</td><td style="text-align:right;">${escapeHtml(
          totals.paymentsTotal
        )}</td></tr>
        <tr><td><strong>Genel Toplam</strong></td><td style="text-align:right;"><strong>${escapeHtml(
          vatSummary?.total || totals.balanceTotal
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
    headers = ["Kod", "Ünvan", "Telefon", "Vergi No", "E-posta", "Bakiye"];
    rows = (data.customers || []).map((item) => [
      item.code || "-",
      item.name || "-",
      item.phone || "-",
      item.taxNumber || "-",
      item.email || "-",
      formatCurrency(Number(item.balance) || 0)
    ]);
  }

  if (type === "stocks") {
    title = "Stok Raporu";
    headers = ["Kod", "Malzeme", "Çap", "Birim", "Stok", "Kritik Seviye"];
    rows = (data.stocks || []).map((item) => [
      item.code || "-",
      item.name || "-",
      item.diameter || "-",
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
    const normalizedName = normalizeText(payload.name);
    if (
      normalizedName &&
      cachedCustomers.some(
        (customer) => normalizeText(customer.name) === normalizedName
      )
    ) {
      reportPathEl.textContent =
        "Bu isimde bir cari zaten var. Lütfen farklı bir isim girin.";
      return;
    }
    if (!payload.createdAt) {
      payload.createdAt = new Date().toISOString().split("T")[0];
    }
    await window.mtnApp.createCustomer(payload);
    const data = await window.mtnApp.getData();
    renderCustomers(data.customers || []);
    renderSummary(data);
    customerForm.reset();
    setAutoCodes();
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
    if (Number(payload.amount || 0) <= 0) {
      reportPathEl.textContent = "Tahsilat tutarı 0'dan büyük olmalı.";
      return;
    }
    const result = await window.mtnApp.collectPayment({
      customerId,
      amount: payload.amount,
      note: payload.note,
      createdAt: payload.createdAt,
      currency: payload.currency || "TRY"
    });
    renderCustomers(result.customers || []);
    renderCash(result.cashTransactions || []);
    renderSummary(result);
    renderCustomerDetail(result);
    reportPathEl.textContent = "Tahsilat kaydedildi.";
    customerPaymentForm.reset();
    setTodayDate();
  });
}

if (customerEditForm && customerEditSelect) {
  customerEditSelect.addEventListener("change", () => {
    const selected = cachedCustomers.find(
      (item) => item.id === customerEditSelect.value
    );
    if (!selected) {
      customerEditForm.reset();
      return;
    }
    customerEditForm.elements.name.value = selected.name || "";
    customerEditForm.elements.phone.value = selected.phone || "";
    customerEditForm.elements.taxNumber.value = selected.taxNumber || "";
    customerEditForm.elements.email.value = selected.email || "";
    customerEditForm.elements.address.value = selected.address || "";
  });

  customerEditForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!window.mtnApp?.updateCustomer) {
      reportPathEl.textContent = "Cari güncelleme servisi hazır değil.";
      return;
    }
    const customerId = customerEditSelect.value;
    if (!customerId) {
      reportPathEl.textContent = "Lütfen cari seçin.";
      return;
    }
    const formData = new FormData(customerEditForm);
    const payload = Object.fromEntries(formData.entries());
    const result = await window.mtnApp.updateCustomer({
      customerId,
      ...payload
    });
    renderCustomers(result || []);
    reportPathEl.textContent = "Cari güncellendi.";
  });
}

if (customerDebtForm) {
  customerDebtForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!window.mtnApp?.addDebt) {
      reportPathEl.textContent = "Borç servisi hazır değil.";
      return;
    }
    const formData = new FormData(customerDebtForm);
    const payload = Object.fromEntries(formData.entries());
    const customerId = debtCustomerSelect?.value || "";
    if (!customerId) {
      reportPathEl.textContent = "Lütfen cari seçin.";
      return;
    }
    if (Number(payload.amount || 0) <= 0) {
      reportPathEl.textContent = "Borç tutarı 0'dan büyük olmalı.";
      return;
    }
    const result = await window.mtnApp.addDebt({
      customerId,
      amount: payload.amount,
      note: payload.note,
      createdAt: payload.createdAt,
      currency: payload.currency || "TRY"
    });
    cachedCustomerDebts = result.customerDebts || [];
    renderCustomers(result.customers || []);
    renderSummary(result);
    renderCustomerDetail(result);
    reportPathEl.textContent = "Borç kaydedildi.";
    customerDebtForm.reset();
    setTodayDate();
  });
}

const updateJobTotal = () => {
  if (!customerJobForm) {
    return;
  }
  const quantity = Number(customerJobForm.elements.quantity?.value || 0);
  const unitPrice = Number(customerJobForm.elements.unitPrice?.value || 0);
  if (customerJobForm.elements.total) {
    customerJobForm.elements.total.value = (quantity * unitPrice || 0).toFixed(
      2
    );
  }
};

if (customerJobForm) {
  ["quantity", "unitPrice"].forEach((field) => {
    customerJobForm.elements[field]?.addEventListener("input", updateJobTotal);
  });
  customerJobForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!window.mtnApp?.addCustomerJob) {
      reportPathEl.textContent = "İş kalemi servisi hazır değil.";
      return;
    }
    const customerId = detailCustomerSelect?.value || "";
    if (!customerId) {
      reportPathEl.textContent = "Lütfen cari seçin.";
      return;
    }
    updateJobTotal();
    const formData = new FormData(customerJobForm);
    const payload = Object.fromEntries(formData.entries());
    if (Number(payload.total || 0) <= 0) {
      reportPathEl.textContent = "İş kalemi tutarı 0'dan büyük olmalı.";
      return;
    }
    const result = await window.mtnApp.addCustomerJob({
      customerId,
      title: payload.title,
      quantity: payload.quantity,
      unit: payload.unit,
      unitPrice: payload.unitPrice,
      total: payload.total,
      note: payload.note,
      createdAt: payload.createdAt,
      currency: payload.currency || "TRY"
    });
    cachedCustomerJobs = result.customerJobs || [];
    renderCustomers(result.customers || []);
    renderSummary(result);
    renderCustomerDetail(result);
    reportPathEl.textContent = "İş kalemi kaydedildi.";
    customerJobForm.reset();
    setTodayDate();
  });
}

if (stockForm) {
  stockForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(stockForm);
    const payload = Object.fromEntries(formData.entries());
    payload.name = normalizeStockName(payload.name);
    await window.mtnApp.createStock(payload);
    const data = await window.mtnApp.getData();
    renderStocks(data.stocks || []);
    renderStockMovements(data.stockMovements || []);
    renderStockMasterList(data.stocks || []);
    renderSummary(data);
    stockForm.reset();
    setAutoCodes();
  });

  stockForm.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    stockForm.requestSubmit();
  });
}

if (invoiceSaveButton) {
  invoiceSaveButton.addEventListener("click", async () => {
    if (!window.mtnApp?.createInvoice) {
      reportPathEl.textContent = "Fatura servisi hazır değil.";
      return;
    }
    const file = invoiceFileInput?.files?.[0];
    if (!file) {
      reportPathEl.textContent = "Lütfen fatura dosyası seçin.";
      return;
    }
    const buffer = await file.arrayBuffer();
    const bytes = Array.from(new Uint8Array(buffer));
    const result = await window.mtnApp.createInvoice({
      name: file.name,
      type: file.type,
      size: file.size,
      note: invoiceNoteInput?.value || "",
      bytes
    });
    renderInvoices(result.invoices || []);
    if (invoiceFileInput) {
      invoiceFileInput.value = "";
    }
    if (invoiceNoteInput) {
      invoiceNoteInput.value = "";
    }
    reportPathEl.textContent = "Fatura kaydedildi.";
  });
}

if (stockReceiptToggle && stockReceiptCard) {
  stockReceiptToggle.addEventListener("click", () => {
    stockReceiptCard.classList.toggle("is-hidden");
    if (!stockReceiptCard.classList.contains("is-hidden") && stockReceiptBody) {
      if (!stockReceiptBody.children.length) {
        stockReceiptBody.appendChild(createReceiptRow());
      }
    }
  });
}

if (stockReceiptAddRow && stockReceiptBody) {
  stockReceiptAddRow.addEventListener("click", (event) => {
    event.preventDefault();
    stockReceiptBody.appendChild(createReceiptRow());
  });
}

if (topSearchInput) {
  const handleTopSearch = async () => {
    const term = topSearchInput.value.trim();
    if (!term) {
      return;
    }
    if (window.mtnApp?.getData) {
      const data = await window.mtnApp.getData();
      renderCustomers(data.customers || []);
      renderStocks(data.stocks || []);
      renderSales(data.sales || []);
      renderCash(data.cashTransactions || []);
    }
    if (customerSearchInput) {
      customerSearchInput.value = term;
      renderCustomers(cachedCustomers);
    }
    if (stockSearchInput) {
      stockSearchInput.value = term;
      renderStocks(cachedStocks);
    }
  };
  topSearchInput.addEventListener("input", handleTopSearch);
  if (topSearchButton) {
    topSearchButton.addEventListener("click", (event) => {
      event.preventDefault();
      handleTopSearch();
    });
  }
}

if (stockReceiptSubmit && stockReceiptBody) {
  stockReceiptSubmit.addEventListener("click", async (event) => {
    event.preventDefault();
    if (!window.mtnApp?.createStockReceipt) {
      reportPathEl.textContent = "Fiş servisi hazır değil.";
      return;
    }
    const rows = Array.from(stockReceiptBody.querySelectorAll("tr")).map(
      (row) => ({
        name: normalizeStockName(
          row.querySelector("[data-field='name']")?.value || ""
        ),
        diameter: row.querySelector("[data-field='diameter']")?.value || "",
        unit: row.querySelector("[data-field='unit']")?.value || "",
        quantity: row.querySelector("[data-field='quantity']")?.value || "",
        threshold: row.querySelector("[data-field='threshold']")?.value || ""
      })
    );
    const items = rows.filter((item) => item.name && Number(item.quantity) > 0);
    if (!items.length) {
      reportPathEl.textContent = "Fiş için en az bir malzeme girin.";
      return;
    }
    const approved = window.confirm("Fiş depoya aktarılsın mı?");
    if (!approved) {
      return;
    }
    const supplierName = stockReceiptSupplierInput?.value?.trim();
    const noteParts = [];
    if (supplierName) {
      noteParts.push(`Malzemeci: ${supplierName}`);
    }
    if (stockReceiptNote?.value) {
      noteParts.push(stockReceiptNote.value);
    }
    const result = await window.mtnApp.createStockReceipt({
      items,
      note: noteParts.join(" • "),
      createdAt:
        stockReceiptDateInput?.value || new Date().toISOString().split("T")[0],
      supplierName
    });
    renderStocks(result.stocks || []);
    renderStockMovements(result.stockMovements || []);
    renderStockReceipts(result.stockReceipts || []);
    renderSummary(result);
    reportPathEl.textContent = "Fiş depoya aktarıldı.";
    stockReceiptBody.innerHTML = "";
    stockReceiptBody.appendChild(createReceiptRow());
    if (stockReceiptNote) {
      stockReceiptNote.value = "";
    }
    if (stockReceiptSupplierInput) {
      stockReceiptSupplierInput.value = "";
    }
  });
}

if (stockReceiptSave && stockReceiptBody) {
  stockReceiptSave.addEventListener("click", async (event) => {
    event.preventDefault();
    if (!window.mtnApp?.saveStockReceipt) {
      reportPathEl.textContent = "Fiş kaydetme servisi hazır değil.";
      return;
    }
    const rows = Array.from(stockReceiptBody.querySelectorAll("tr")).map(
      (row) => ({
        name: normalizeStockName(
          row.querySelector("[data-field='name']")?.value || ""
        ),
        diameter: row.querySelector("[data-field='diameter']")?.value || "",
        unit: row.querySelector("[data-field='unit']")?.value || "",
        quantity: row.querySelector("[data-field='quantity']")?.value || "",
        threshold: row.querySelector("[data-field='threshold']")?.value || ""
      })
    );
    const items = rows.filter((item) => item.name && Number(item.quantity) > 0);
    if (!items.length) {
      reportPathEl.textContent = "Fiş için en az bir malzeme girin.";
      return;
    }
    const supplierName = stockReceiptSupplierInput?.value?.trim();
    const noteParts = [];
    if (supplierName) {
      noteParts.push(`Malzemeci: ${supplierName}`);
    }
    if (stockReceiptNote?.value) {
      noteParts.push(stockReceiptNote.value);
    }
    const result = await window.mtnApp.saveStockReceipt({
      items,
      note: noteParts.join(" • "),
      createdAt:
        stockReceiptDateInput?.value || new Date().toISOString().split("T")[0],
      supplierName
    });
    renderStockReceipts(result.stockReceipts || []);
    reportPathEl.textContent = "Fiş kaydedildi.";
  });
}

if (cashForm) {
  cashForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(cashForm);
    const payload = Object.fromEntries(formData.entries());
    const amountValue = Number(payload.amount || 0);
    if (amountValue <= 0) {
      reportPathEl.textContent = "Kasa tutarı 0'dan büyük olmalı.";
      return;
    }
    await window.mtnApp.createCash(payload);
    const data = await window.mtnApp.getData();
    renderCash(data.cashTransactions || []);
    renderSummary(data);
    cashForm.reset();
    setTodayDate();
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

const handleCustomerSearch = () => {
  renderCustomers(cachedCustomers);
};

if (customerSearchInput) {
  customerSearchInput.addEventListener("input", handleCustomerSearch);
}

if (customerSearchButton) {
  customerSearchButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleCustomerSearch();
  });
}

const handleStockSearch = () => {
  renderStocks(cachedStocks);
  renderStockMasterList(cachedStocks);
};

if (stockSearchInput) {
  stockSearchInput.addEventListener("input", handleStockSearch);
}

if (stockSearchButton) {
  stockSearchButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleStockSearch();
  });
}

if (stockMasterSearchInput) {
  stockMasterSearchInput.addEventListener("input", () => {
    renderStockMasterList(cachedStocks);
  });
}

if (stockMasterSearchButton) {
  stockMasterSearchButton.addEventListener("click", (event) => {
    event.preventDefault();
    renderStockMasterList(cachedStocks);
  });
}

if (stockReceiptSearchInput) {
  stockReceiptSearchInput.addEventListener("input", () => {
    renderStockReceipts(cachedStockReceipts);
  });
}

if (stockReceiptStartInput) {
  stockReceiptStartInput.addEventListener("input", () => {
    renderStockReceipts(cachedStockReceipts);
  });
}

if (stockReceiptEndInput) {
  stockReceiptEndInput.addEventListener("input", () => {
    renderStockReceipts(cachedStockReceipts);
  });
}

if (stockImportMapCode) {
  [stockImportMapCode, stockImportMapName, stockImportMapQty].forEach(
    (select) => {
      select?.addEventListener("change", buildImportPreview);
    }
  );
}

if (stockImportUpdateMode) {
  stockImportUpdateMode.addEventListener("change", buildImportPreview);
}

if (stockImportFileInput) {
  stockImportFileInput.addEventListener("change", async () => {
    if (!window.mtnApp?.parseStockImportFile) {
      if (stockImportStatus) {
        stockImportStatus.textContent = "Dosya servisi hazır değil.";
      }
      return;
    }
    const file = stockImportFileInput.files?.[0];
    if (!file) {
      return;
    }
    if (file.name.toLowerCase().endsWith(".pdf")) {
      stockImportStatus.textContent =
        "PDF içe aktarımı için OCR desteği gerekir. Bu sürümde yalnızca CSV/XLSX desteklenir.";
      return;
    }
    if (stockImportFileName) {
      stockImportFileName.textContent = file.name;
    }
    const buffer = await file.arrayBuffer();
    const bytes = Array.from(new Uint8Array(buffer));
    const result = await window.mtnApp.parseStockImportFile({
      name: file.name,
      bytes
    });
    if (result?.error) {
      importHeaders = [];
      importRows = [];
      renderImportMappingOptions();
      buildImportPreview();
      if (stockImportStatus) {
        stockImportStatus.textContent = `Dosya okunamadı: ${result.error}`;
      }
      return;
    }
    importHeaders = result.headers || [];
    importRows = result.rows || [];
    renderImportMappingOptions();
    buildImportPreview();
    if (stockImportStatus) {
      stockImportStatus.textContent = "";
    }
  });
}

if (stockImportExportErrors) {
  stockImportExportErrors.addEventListener("click", () => {
    if (!importErrors.length) {
      if (stockImportStatus) {
        stockImportStatus.textContent = "Hata listesi bulunamadı.";
      }
      return;
    }
    const header = "Satır,Stok Kodu,Stok Adı,Adet,Hata\n";
    const rows = importErrors
      .map(
        (row) =>
          `${row.index},"${row.code || ""}","${row.name || ""}","${
            row.quantity || ""
          }","${row.errors}"`
      )
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "stok-import-hatalar.csv";
    link.click();
    URL.revokeObjectURL(url);
  });
}

if (stockImportConfirmButton) {
  stockImportConfirmButton.addEventListener("click", async () => {
    if (!importRows.length) {
      stockImportStatus.textContent = "İçe aktarım için dosya seçin.";
      return;
    }
    const mapName = stockImportMapName?.value || "";
    const mapQty = stockImportMapQty?.value || "";
    const mapCode = stockImportMapCode?.value || "";
    if (!mapName || !mapQty) {
      stockImportStatus.textContent = "Stok adı ve adet eşleştirmesi zorunlu.";
      return;
    }
    const updateMode = stockImportUpdateMode?.value || "update";
    const depot = stockImportWarehouseSelect?.value || "Ana Depo";
    let created = 0;
    let updated = 0;
    let skipped = 0;
    let invalid = 0;
    for (const row of importRows) {
      const name = normalizeStockName(row[mapName] ?? "");
      const code = row[mapCode] ?? "";
      const qtyRaw = row[mapQty];
      const quantity = Number(String(qtyRaw || "").replace(",", "."));
      if (!name || Number.isNaN(quantity) || quantity < 0) {
        invalid += 1;
        continue;
      }
      const matchByCode = code
        ? cachedStocks.find((item) => item.code === code)
        : null;
      const matchByName = name
        ? cachedStocks.find(
            (item) => normalizeText(item.name) === normalizeText(name)
          )
        : null;
      if ((matchByCode || matchByName) && updateMode === "skip") {
        skipped += 1;
        continue;
      }
      await window.mtnApp.createStock({
        code: code || "",
        name,
        quantity,
        warehouse: depot,
        note: `İçe aktarım (${depot})`
      });
      if (matchByCode || matchByName) {
        updated += 1;
      } else {
        created += 1;
      }
    }
    const data = await window.mtnApp.getData();
    renderStocks(data.stocks || []);
    renderStockMovements(data.stockMovements || []);
    renderSummary(data);
    stockImportStatus.textContent = `İçe aktarma tamamlandı. Yeni: ${created}, Güncellenen: ${updated}, Atlanan: ${skipped}, Hatalı: ${invalid}.`;
  });
}

if (stockReceiptTransferButton) {
  stockReceiptTransferButton.addEventListener("click", async () => {
    if (!window.mtnApp?.transferStockReceipt) {
      reportPathEl.textContent = "Fiş aktarım servisi hazır değil.";
      return;
    }
    const selected = Array.from(
      stockReceiptsTable?.querySelectorAll("input[type='checkbox']:checked") ||
        []
    ).map((input) => input.getAttribute("data-receipt-id"));
    if (!selected.length) {
      reportPathEl.textContent = "Lütfen aktarılacak fiş seçin.";
      return;
    }
    let processed = 0;
    let skipped = 0;
    let updated = 0;
    let created = 0;
    for (const receiptId of selected) {
      if (!receiptId) {
        continue;
      }
      const result = await window.mtnApp.transferStockReceipt({
        receiptId,
        warehouse: "Ana Depo"
      });
      if (!result.ok) {
        skipped += 1;
        continue;
      }
      processed += 1;
      updated += result.updated || 0;
      created += result.created || 0;
    }
    const data = await window.mtnApp.getData();
    renderStocks(data.stocks || []);
    renderStockMovements(data.stockMovements || []);
    renderStockReceipts(data.stockReceipts || []);
    renderStockMasterList(data.stocks || []);
    renderSummary(data);
    reportPathEl.textContent = `Depoya aktarıldı. İşlenen: ${processed}, Yeni: ${created}, Güncellenen: ${updated}, Atlanan: ${skipped}.`;
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
    if (Number(payload.quantity || 0) <= 0) {
      reportPathEl.textContent = "Stok miktarı 0'dan büyük olmalı.";
      return;
    }
    const result = await window.mtnApp.moveStock({
      stockName,
      type: payload.type,
      quantity: payload.quantity,
      createdAt: payload.createdAt,
      note: payload.note
    });
    renderStocks(result.stocks || []);
    renderStockMovements(result.stockMovements || []);
    renderSummary(result);
    reportPathEl.textContent = "Stok hareketi kaydedildi.";
    stockMovementForm.reset();
    setTodayDate();
  });
}

if (debtCurrencySelect) {
  applyCurrencyFormat(
    customerDebtForm?.elements?.amount,
    debtCurrencySelect
  );
}

if (paymentCurrencySelect) {
  applyCurrencyFormat(
    customerPaymentForm?.elements?.amount,
    paymentCurrencySelect
  );
}

if (jobCurrencySelect) {
  applyCurrencyFormat(
    customerJobForm?.elements?.unitPrice,
    jobCurrencySelect
  );
  applyCurrencyFormat(customerJobForm?.elements?.total, jobCurrencySelect);
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
      enableCloudBackup: cloudBackupEnabledSelect?.value === "true",
      enableAutoBackup: autoBackupEnabledSelect?.value === "true"
    };
    const existingSettings = await window.mtnApp.getSettings();
    const nextSettings = { ...existingSettings, ...payload };
    await window.mtnApp.saveSettings(nextSettings);
    currentSettings = nextSettings;
    settingsStatusEl.textContent = "Ayarlar kaydedildi.";
  });
}

if (licenseCheckButton) {
  licenseCheckButton.addEventListener("click", (event) => {
    event.preventDefault();
    settingsStatusEl.textContent =
      "Lisans kontrol servisi henüz aktif değil.";
  });
}

if (resetDataButton) {
  resetDataButton.addEventListener("click", async () => {
    if (!window.mtnApp?.resetData) {
      settingsStatusEl.textContent = "Sıfırlama servisi hazır değil.";
      return;
    }
    const approved = window.confirm(
      "Tüm verileri silmek üzeresiniz. Emin misiniz?"
    );
    if (!approved) {
      return;
    }
    const data = await window.mtnApp.resetData();
    renderCustomers(data.customers || []);
    renderStocks(data.stocks || []);
    renderStockMasterList(data.stocks || []);
    renderCash(data.cashTransactions || []);
    renderSales(data.sales || []);
    renderStockMovements(data.stockMovements || []);
    cachedCustomerDebts = data.customerDebts || [];
    cachedCustomerJobs = data.customerJobs || [];
    renderInvoices(data.invoices || []);
    renderSummary(data);
    renderCustomerDetail(data);
    settingsStatusEl.textContent = "Tüm veriler sıfırlandı.";
  });
}

if (logoFileInput && logoPreview) {
  logoFileInput.addEventListener("change", async () => {
    const file = logoFileInput.files?.[0];
    const previewUrl = await readLogoFile(file);
    if (previewUrl) {
      logoPreview.src = previewUrl;
    }
  });
}

if (firstRunForm) {
  firstRunForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!window.mtnApp?.saveSettings) {
      settingsStatusEl.textContent = "Kurulum servisi hazır değil.";
      return;
    }
    const formData = new FormData(firstRunForm);
    const payload = Object.fromEntries(formData.entries());
    const logoFile = logoFileInput?.files?.[0];
    const logoDataUrl = await readLogoFile(logoFile);
    const nextSettings = {
      // Varsayım: varsayılan kasa adı ileride kasa kartı eklendiğinde kullanılacak.
      companyName: payload.companyName,
      taxOffice: payload.taxOffice || "",
      taxNumber: payload.taxNumber || "",
      logoDataUrl,
      defaultCashName: payload.defaultCashName,
      hasOnboarded: true,
      users: [
        {
          username: payload.adminUsername,
          password: payload.adminPassword,
          role: payload.adminRole,
          displayName: payload.adminUsername
        }
      ],
      licenseKey: ""
    };
    const existingSettings = await window.mtnApp.getSettings();
    await window.mtnApp.saveSettings({ ...existingSettings, ...nextSettings });
    currentSettings = { ...existingSettings, ...nextSettings };
    applyBranding(nextSettings);
    users = nextSettings.users;
    firstRunScreen.classList.add("first-run--hidden");
    loginScreen.style.display = "";
    loginError.textContent = "Kurulum tamamlandı. Giriş yapabilirsiniz.";
  });
}

window.addEventListener("error", () => {
  if (settingsStatusEl) {
    settingsStatusEl.textContent =
      "Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.";
  }
});

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

const downloadCsv = (filename, headers, rows) => {
  const escapeValue = (value) =>
    `"${String(value ?? "").replaceAll('"', '""')}"`;
  const content = [
    headers.map(escapeValue).join(","),
    ...rows.map((row) => row.map(escapeValue).join(","))
  ].join("\n");
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

if (stockExportCsvButton) {
  stockExportCsvButton.addEventListener("click", (event) => {
    event.preventDefault();
    const headers = [
      "Kod",
      "Malzeme",
      "Çap",
      "Birim",
      "Adet",
      "Kritik Seviye"
    ];
    const rows = (cachedStocks || []).map((item) => [
      item.code || "",
      item.name || "",
      item.diameter || "",
      item.unit || "",
      item.quantity || 0,
      item.threshold || 0
    ]);
    downloadCsv("stok-listesi.csv", headers, rows);
  });
}

if (stockExportPdfButton) {
  stockExportPdfButton.addEventListener("click", (event) => {
    event.preventDefault();
    generateReport("stocks");
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

if (assistantRefreshButton) {
  assistantRefreshButton.addEventListener("click", async () => {
    if (!window.mtnApp?.getData) {
      if (assistantStatusEl) {
        assistantStatusEl.textContent = "Veri servisi hazır değil.";
      }
      return;
    }
    const data = await window.mtnApp.getData();
    renderAssistant(data);
  });
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
    const customerId = detailCustomerSelect?.value;
    if (!customerId) {
      reportPathEl.textContent = "Lütfen cari seçin.";
      return;
    }
    const data = await window.mtnApp.getData();
    const customerName =
      detailCustomerSelect?.selectedOptions?.[0]?.textContent || "Cari";
    const sales = (data.sales || []).filter(
      (sale) => sale.customerId === customerId
    );
    const payments = (data.cashTransactions || []).filter(
      (entry) => entry.customerId === customerId
    );
    const debts = (data.customerDebts || []).filter(
      (entry) => entry.customerId === customerId
    );
    const jobs = (data.customerJobs || []).filter(
      (entry) => entry.customerId === customerId
    );
    const vatMode = detailVatModeSelect?.value || "exclude";
    const vatRate = Number(detailVatRateInput?.value || 0);
    if (jobs.length) {
      const jobRows = jobs.map((job) => ({
        title: job.title || "-",
        quantity: Number(job.quantity || 0),
        unit: job.unit || "-",
        unitPrice: formatCurrency(Number(job.unitPrice || 0)),
        total: formatCurrency(Number(job.total || 0))
      }));
      const baseTotal = jobs.reduce(
        (sum, job) => sum + Number(job.total || 0),
        0
      );
      const vatTotals = calculateVatTotals(baseTotal, vatRate, vatMode);
      const totals = {
        jobsTotal: formatCurrency(
          jobs.reduce((sum, job) => sum + Number(job.total || 0), 0)
        ),
        paymentsTotal: formatCurrency(
          payments.reduce((sum, item) => sum + Number(item.amount || 0), 0)
        ),
        balanceTotal: formatCurrency(
          (data.customers || []).find((item) => item.id === customerId)
            ?.balance || 0
        )
      };
      const html = buildCustomerJobsInvoiceHtml(
        customerName,
        jobRows,
        totals,
        {
          vat: formatCurrency(vatTotals.vat),
          total: formatCurrency(vatTotals.total)
        }
      );
      const result = await window.mtnApp.generateReport({
        title: `Cari-Ekstre-${customerName.replace(/\s+/g, "-")}`,
        html
      });
      reportPathEl.textContent = `Rapor kaydedildi: ${result.reportFile}`;
      await window.mtnApp?.openFile?.(result.reportFile);
      return;
    }
    const rows = [
      ...sales.map((sale) => ({
        createdAt: sale.createdAt,
        row: [
          new Date(sale.createdAt).toLocaleDateString("tr-TR"),
          "Satış",
          formatCurrency(Number(sale.total) || 0),
          "Satış faturası"
        ]
      })),
      ...debts.map((debt) => ({
        createdAt: debt.createdAt,
        row: [
          new Date(debt.createdAt).toLocaleDateString("tr-TR"),
          "Borç",
          formatCurrency(Number(debt.amount) || 0),
          debt.note || "Cari Borç"
        ]
      })),
      ...payments.map((payment) => ({
        createdAt: payment.createdAt,
        row: [
          new Date(payment.createdAt).toLocaleDateString("tr-TR"),
          "Tahsilat",
          formatCurrency(Number(payment.amount) || 0),
          payment.note || "Cari Tahsilat"
        ]
      }))
    ]
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      .map((entry) => entry.row);
    const salesTotal = sales.reduce(
      (sum, sale) => sum + Number(sale.total || 0),
      0
    );
    const vatTotals = calculateVatTotals(salesTotal, vatRate, vatMode);
    const footerHtml = `
      <div style="margin-top:16px;display:flex;justify-content:flex-end;">
        <table style="width:260px;border-collapse:collapse;">
          <tr><td>Ara Toplam</td><td style="text-align:right;">${escapeHtml(
            formatCurrency(vatTotals.base)
          )}</td></tr>
          <tr><td>KDV</td><td style="text-align:right;">${escapeHtml(
            formatCurrency(vatTotals.vat)
          )}</td></tr>
          <tr><td><strong>Genel Toplam</strong></td><td style="text-align:right;"><strong>${escapeHtml(
            formatCurrency(vatTotals.total)
          )}</strong></td></tr>
        </table>
      </div>
    `;
    const html = buildReportTable(
      `Cari Ekstre - ${customerName}`,
      ["Tarih", "Tür", "Tutar", "Açıklama"],
      rows,
      { includeWatermark: true, footerHtml }
    );
    const result = await window.mtnApp.generateReport({
      title: `Cari-Ekstre-${customerName.replace(/\s+/g, "-")}`,
      html
    });
    reportPathEl.textContent = `Rapor kaydedildi: ${result.reportFile}`;
    await window.mtnApp?.openFile?.(result.reportFile);
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
    const validItems = items.filter(
      (item) => item.name && Number(item.quantity || 0) > 0
    );
    if (!validItems.length) {
      reportPathEl.textContent = "Satış için en az bir ürün girin.";
      return;
    }
    const total = Number(
      totalEl.textContent.replace(/[^\d,.-]/g, "").replace(",", ".")
    );
    if (Number.isNaN(total) || total <= 0) {
      reportPathEl.textContent = "Satış toplamı 0'dan büyük olmalı.";
      return;
    }
    const result = await window.mtnApp.createSale({
      customerId,
      customerName,
      vatRate,
      paymentType: offerPaymentSelect?.value || "nakit",
      total,
      items: validItems
    });
    renderStocks(result.stocks || []);
    renderStockMovements(result.stockMovements || []);
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

if (customerDetailClose && customerDetailModal) {
  customerDetailClose.addEventListener("click", () => {
    customerDetailModal.classList.remove("modal--open");
    customerDetailModal.setAttribute("aria-hidden", "true");
  });
  customerDetailModal.addEventListener("click", (event) => {
    if (event.target === customerDetailModal) {
      customerDetailModal.classList.remove("modal--open");
      customerDetailModal.setAttribute("aria-hidden", "true");
    }
  });
}

if (stockReceiptModalClose && stockReceiptModal) {
  stockReceiptModalClose.addEventListener("click", () => {
    stockReceiptModal.classList.remove("modal--open");
    stockReceiptModal.setAttribute("aria-hidden", "true");
  });
  stockReceiptModal.addEventListener("click", (event) => {
    if (event.target === stockReceiptModal) {
      stockReceiptModal.classList.remove("modal--open");
      stockReceiptModal.setAttribute("aria-hidden", "true");
    }
  });
}

if (stockImportOpenButton) {
  stockImportOpenButton.addEventListener("click", () => {
    openStockImportModal();
  });
}

if (stockImportCloseButton && stockImportModal) {
  stockImportCloseButton.addEventListener("click", () => {
    closeStockImportModal();
  });
  stockImportModal.addEventListener("click", (event) => {
    if (event.target === stockImportModal) {
      closeStockImportModal();
    }
  });
}

if (stockImportPickButton && stockImportFileInput) {
  stockImportPickButton.addEventListener("click", () => {
    stockImportFileInput.click();
  });
}

// Menu click handler
const menuItems = document.querySelectorAll(".menu__item");
const panels = document.querySelectorAll(".panel");
const quickActionButtons = document.querySelectorAll(".quick-actions button");
const panelTitleEl = document.getElementById("panel-title");

const showPanel = (panelId, title) => {
  panels.forEach((panel) => panel.classList.remove("panel--active"));
  const target = document.getElementById(panelId);
  if (target) {
    target.classList.add("panel--active");
  }
  if (panelTitleEl && title) {
    panelTitleEl.textContent = title;
  }
};

const activateMenuByPanel = (panelId) => {
  menuItems.forEach((el) => {
    if (el.dataset.panel === panelId) {
      el.classList.add("menu__item--active");
    } else {
      el.classList.remove("menu__item--active");
    }
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const panelId = item.dataset.panel;
    const title = item.dataset.title || item.textContent;
    if (!panelId) {
      return;
    }
    activateMenuByPanel(panelId);
    showPanel(panelId, title);
  });
});

quickActionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetPanel = button.dataset.panel;
    if (!targetPanel) {
      return;
    }
    const title =
      document.querySelector(`[data-panel='${targetPanel}']`)?.dataset.title ||
      "";
    showPanel(targetPanel, title);
    activateMenuByPanel(targetPanel);
  });
});

showPanel("dashboard-panel", "Ana Panel");
bindSubnav("customers-module", "customer-create-section");
initApp().then(loadInitialData);
