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
const customerTransactionForm = document.getElementById(
  "customer-transaction-form"
);
const customerTransactionDateInput = document.getElementById(
  "customer-transaction-date"
);
const customerJobForm = document.getElementById("customer-job-form");
const customerJobDateInput = document.getElementById("customer-job-date");
const transactionCustomerSelect = document.getElementById(
  "transaction-customer"
);
const transactionTypeSelect = document.getElementById("transaction-type");
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
const stockReceiptSubmit = document.getElementById("stock-receipt-submit");
const stockReceiptNote = document.getElementById("stock-receipt-note");
const stockReceiptDateInput = document.getElementById("stock-receipt-date");
const stockReceiptSupplierInput = document.getElementById(
  "stock-receipt-supplier"
);
const stockReceiptWarehouseSelect = document.getElementById(
  "stock-receipt-warehouse"
);
const stockReceiptFileInput = document.getElementById("stock-receipt-file");
const stockSearchInput = document.getElementById("stock-search");
const stockSearchButton = document.getElementById("stock-search-btn");
const stockSearchSuggestion = document.getElementById("stock-search-suggestion");
const stockExportCsvButton = document.getElementById("stock-export-csv");
const stockExportPdfButton = document.getElementById("stock-export-pdf");
const stockImportFileInput = document.getElementById("stock-import-file");
const stockImportWarehouseSelect = document.getElementById(
  "stock-import-warehouse"
);
const stockImportPreviewButton = document.getElementById(
  "stock-import-preview"
);
const stockImportApplyButton = document.getElementById("stock-import-apply");
const stockImportResetButton = document.getElementById("stock-import-reset");
const stockImportSummaryEl = document.getElementById("stock-import-summary");
const stockImportTable = document.getElementById("stock-import-table");
const stockReceiptsTable = document.getElementById("stock-receipts-table");
const stockReceiptsTransferButton = document.getElementById(
  "stock-receipts-transfer"
);
const receiptFilterStartInput = document.getElementById("receipt-filter-start");
const receiptFilterEndInput = document.getElementById("receipt-filter-end");
const receiptFilterSupplierInput = document.getElementById(
  "receipt-filter-supplier"
);
const receiptFilterWarehouseSelect = document.getElementById(
  "receipt-filter-warehouse"
);
const receiptFilterStatusSelect = document.getElementById(
  "receipt-filter-status"
);
const stockListSearchInput = document.getElementById("stock-list-search");
const stockListSearchButton = document.getElementById("stock-list-search-btn");
const stockListTable = document.getElementById("stock-list-table");
const stockListEmptyEl = document.getElementById("stock-list-empty");
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
const customerBalanceReportButton = document.getElementById(
  "customer-balance-report"
);
const reportPathEl = document.getElementById("report-path");
const assistantDailyEl = document.getElementById("assistant-daily");
const assistantRemindersEl = document.getElementById("assistant-reminders");
const assistantSuggestionsEl = document.getElementById("assistant-suggestions");
const assistantRefreshButton = document.getElementById("assistant-refresh");
const assistantStatusEl = document.getElementById("assistant-status");
const detailCustomerSelect = document.getElementById("detail-customer");
const detailTable = document.getElementById("detail-table");
const detailReportButton = document.getElementById("detail-report");
const detailSummaryEl = document.getElementById("detail-summary");
const customerJobsTable = document.getElementById("customer-jobs-table");
const loginScreen = document.getElementById("login-screen");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const appShell = document.getElementById("app-shell");
const stockMovementForm = document.getElementById("stock-movement-form");
const movementStockSelect = document.getElementById("movement-stock");
const stockMovementDateInput = document.getElementById("stock-movement-date");
const stockMovementsTable = document.getElementById("stock-movements-table");
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
const topbarLogo = document.getElementById("topbar-logo");
const userRoleEl = document.getElementById("user-role");
const userNameEl = document.getElementById("user-name");
const dashboardUserEl = document.getElementById("dashboard-user");
const companyForm = document.getElementById("company-form");
const companyNameInput = document.getElementById("company-name");
const companyOwnerInput = document.getElementById("company-owner");
const companyTaxOfficeInput = document.getElementById("company-tax-office");
const companyTaxNumberInput = document.getElementById("company-tax-number");
const companyPhoneInput = document.getElementById("company-phone");
const companyIbanInput = document.getElementById("company-iban");
const companyBankInput = document.getElementById("company-bank");
const companyAddressInput = document.getElementById("company-address");
const footerCompanyName = document.getElementById("footer-company-name");
const footerCompanyOwner = document.getElementById("footer-company-owner");
const loginPasswordInput = document.getElementById("login-password");
const loginToggleButton = document.getElementById("login-toggle");
const logoutButton = document.getElementById("logout-button");
const backupSecondaryButton = document.getElementById("backup-now-secondary");
const licenseKeyInput = document.getElementById("license-key");
const licenseCheckButton = document.getElementById("license-check");
const invoiceForm = document.getElementById("invoice-form");
const invoiceDateInput = document.getElementById("invoice-date");
const invoiceFileInput = document.getElementById("invoice-file");
const invoicesTable = document.getElementById("invoices-table");

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

const setStatus = (message) => {
  if (reportPathEl) {
    reportPathEl.textContent = message;
  }
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
let cachedInvoices = [];
let cachedImportRows = [];

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
  const companyName = settings.companyName || "MTN Masaüstü";
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
  if (topbarLogo) {
    topbarLogo.src = brandLogo?.src || "assets/logo.svg";
    topbarLogo.style.display = "block";
  }
  if (footerCompanyName) {
    footerCompanyName.textContent = companyName;
  }
  if (footerCompanyOwner) {
    footerCompanyOwner.textContent = settings.companyOwner || "Metin Döş";
  }
};

const applyUserProfile = (profile) => {
  const displayName = profile?.displayName || profile?.username || "Kullanıcı";
  if (userNameEl) {
    userNameEl.textContent = displayName;
  }
  if (dashboardUserEl) {
    dashboardUserEl.textContent = displayName.toUpperCase();
  }
  if (userRoleEl) {
    userRoleEl.textContent = profile?.role || "kullanıcı";
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

if (loginToggleButton && loginPasswordInput) {
  loginToggleButton.addEventListener("click", () => {
    const isHidden = loginPasswordInput.type === "password";
    loginPasswordInput.type = isHidden ? "text" : "password";
    loginToggleButton.textContent = isHidden ? "🙈" : "👁️";
  });
}

if (logoutButton) {
  logoutButton.addEventListener("click", () => {
    appShell.classList.add("app--hidden");
    loginScreen.style.display = "grid";
  });
}


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
        const normalized = normalizeText(item.normalizedName);
        return (
          name.includes(searchTerm) ||
          code.includes(searchTerm) ||
          normalized.includes(searchTerm)
        );
      })
    : items;
  if (offerCustomerSelect) {
    offerCustomerSelect.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Genel";
    offerCustomerSelect.appendChild(defaultOption);
  }
  if (transactionCustomerSelect) {
    transactionCustomerSelect.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Cari Seç";
    transactionCustomerSelect.appendChild(defaultOption);
  }
  if (detailCustomerSelect) {
    detailCustomerSelect.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Cari Seç";
    detailCustomerSelect.appendChild(defaultOption);
  }
  filtered.forEach((item) => {
    const isActive = item.isActive !== false;
    const row = document.createElement("tr");
    row.dataset.customerId = item.id || "";
    row.innerHTML = `
      <td>${item.code || "-"}</td>
      <td>${item.name || "-"}</td>
      <td>${item.type === "tedarikci" ? "Tedarikçi" : "Müşteri"}</td>
      <td>${item.phone || "-"}</td>
      <td>${item.taxNumber || "-"}</td>
      <td>${item.email || "-"}</td>
      <td>${formatCurrency(Number(item.balance) || 0)}</td>
      <td>
        <span class="badge ${isActive ? "badge--income" : "badge--expense"}">
          ${isActive ? "Aktif" : "Pasif"}
        </span>
      </td>
      <td>
        <button class="ghost" data-toggle-status="${
          item.id
        }" data-active="${isActive ? "true" : "false"}">
          ${isActive ? "Pasife Al" : "Aktifleştir"}
        </button>
      </td>
    `;
    row.querySelector("[data-toggle-status]")?.addEventListener("click", async () => {
      if (!window.mtnApp?.toggleCustomerStatus) {
        setStatus("Cari servisi hazır değil.");
        return;
      }
      const nextActive = !isActive;
      const result = await window.mtnApp.toggleCustomerStatus({
        customerId: item.id,
        isActive: nextActive
      });
      renderCustomers(result || []);
      setStatus(nextActive ? "Cari aktifleştirildi." : "Cari pasife alındı.");
    });
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
      const detailModule = document.getElementById("customer-detail-module");
      detailModule?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    customersTable.appendChild(row);
  });
  items.forEach((item) => {
    if (item.isActive === false) {
      return;
    }
    if (offerCustomerSelect) {
      const option = document.createElement("option");
      option.value = item.id || item.name || "";
      option.textContent = item.code
        ? `${item.code} - ${item.name || "Cari"}`
        : item.name || "Cari";
      offerCustomerSelect.appendChild(option);
    }
    if (transactionCustomerSelect) {
      const option = document.createElement("option");
      option.value = item.id || item.name || "";
      option.textContent = item.code
        ? `${item.code} - ${item.name || "Cari"}`
        : item.name || "Cari";
      transactionCustomerSelect.appendChild(option);
    }
    if (detailCustomerSelect) {
      const option = document.createElement("option");
      option.value = item.id || item.name || "";
      option.textContent = item.code
        ? `${item.code} - ${item.name || "Cari"}`
        : item.name || "Cari";
      detailCustomerSelect.appendChild(option);
    }
  });
  if (customerSearchSuggestion) {
    const suggestion = getSuggestion(
      searchTerm,
      items,
      (item) => item.name || ""
    );
    customerSearchSuggestion.textContent =
      searchTerm && !filtered.length && suggestion
        ? `Şunu mu demek istediniz: ${suggestion}`
        : "";
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
    const isActive = item.isActive !== false;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.code || "-"}</td>
      <td>${item.normalizedName || item.name || "-"}</td>
      <td>${item.diameter || "-"}</td>
      <td>${item.unit || "-"}</td>
      <td>${item.quantity || 0}</td>
      <td>${formatCurrency(Number(item.purchasePrice || 0))}</td>
      <td>${formatCurrency(Number(item.salePrice || 0))}</td>
      <td>${Number(item.vatRate || 0)}</td>
      <td>${item.threshold || 0}</td>
      <td>
        <span class="badge ${isActive ? "badge--income" : "badge--expense"}">
          ${isActive ? "Aktif" : "Pasif"}
        </span>
      </td>
      <td>
        <button class="ghost" data-toggle-stock="${
          item.id
        }" data-active="${isActive ? "true" : "false"}">
          ${isActive ? "Pasife Al" : "Aktifleştir"}
        </button>
      </td>
    `;
    row.querySelector("[data-toggle-stock]")?.addEventListener("click", async () => {
      if (!window.mtnApp?.toggleStockStatus) {
        setStatus("Stok servisi hazır değil.");
        return;
      }
      const nextActive = !isActive;
      const result = await window.mtnApp.toggleStockStatus({
        stockId: item.id,
        isActive: nextActive
      });
      renderStocks(result || []);
      setStatus(nextActive ? "Stok aktifleştirildi." : "Stok pasife alındı.");
    });
    stocksTable.appendChild(row);
  });
  items.forEach((item) => {
    if (item.isActive === false) {
      return;
    }
    if (movementStockSelect) {
      const option = document.createElement("option");
      option.value = item.normalizedName || item.name || "";
      option.textContent = item.code
        ? `${item.code} - ${item.normalizedName || item.name || "Malzeme"}`
        : item.normalizedName || item.name || "Malzeme";
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
      (item) => item.normalizedName || item.name || ""
    );
    stockSearchSuggestion.textContent =
      searchTerm && !filtered.length && suggestion
        ? `Şunu mu demek istediniz: ${suggestion}`
        : "";
  }
  renderStockList(items);
};

const renderStockList = (items) => {
  if (!stockListTable) {
    return;
  }
  stockListTable.innerHTML = "";
  const searchTerm = normalizeText(stockListSearchInput?.value);
  const filtered = searchTerm
    ? items.filter((item) => {
        const name = normalizeText(item.name);
        const code = normalizeText(item.code);
        const normalized = normalizeText(item.normalizedName);
        return (
          name.includes(searchTerm) ||
          code.includes(searchTerm) ||
          normalized.includes(searchTerm)
        );
      })
    : items;
  filtered.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.code || "-"}</td>
      <td>${item.normalizedName || item.name || "-"}</td>
      <td>${item.warehouse || "Ana Depo"}</td>
      <td>${item.quantity || 0}</td>
      <td>${item.unit || "-"}</td>
      <td>${item.isActive === false ? "Pasif" : "Aktif"}</td>
      <td>${
        item.updatedAt
          ? new Date(item.updatedAt).toLocaleDateString("tr-TR")
          : "-"
      }</td>
    `;
    stockListTable.appendChild(row);
  });
  if (stockListEmptyEl) {
    stockListEmptyEl.textContent =
      searchTerm && !filtered.length
        ? "Aradığınız kriterlere uygun stok bulunamadı."
        : "";
  }
};

const renderStockReceipts = (items) => {
  cachedStockReceipts = items || [];
  if (!stockReceiptsTable) {
    return;
  }
  stockReceiptsTable.innerHTML = "";
  const supplierTerm = normalizeText(receiptFilterSupplierInput?.value);
  const warehouseFilter = receiptFilterWarehouseSelect?.value || "";
  const statusFilter = receiptFilterStatusSelect?.value || "";
  const startDate = receiptFilterStartInput?.value
    ? new Date(receiptFilterStartInput.value)
    : null;
  const endDate = receiptFilterEndInput?.value
    ? new Date(receiptFilterEndInput.value)
    : null;
  if (endDate) {
    endDate.setHours(23, 59, 59, 999);
  }
  const filtered = cachedStockReceipts.filter((receipt) => {
    if (
      supplierTerm &&
      !normalizeText(receipt.supplier).includes(supplierTerm)
    ) {
      return false;
    }
    if (warehouseFilter && receipt.warehouse !== warehouseFilter) {
      return false;
    }
    if (statusFilter === "transferred" && !receipt.transferredAt) {
      return false;
    }
    if (statusFilter === "pending" && receipt.transferredAt) {
      return false;
    }
    const createdAt = receipt.createdAt ? new Date(receipt.createdAt) : null;
    if (startDate && createdAt && createdAt < startDate) {
      return false;
    }
    if (endDate && createdAt && createdAt > endDate) {
      return false;
    }
    return true;
  });
  filtered.forEach((receipt) => {
    const row = document.createElement("tr");
    const total = (receipt.items || []).reduce(
      (sum, item) =>
        sum + Number(item.purchasePrice || 0) * Number(item.quantity || 0),
      0
    );
    row.innerHTML = `
      <td><input type="checkbox" data-receipt-id="${receipt.id}" ${
        receipt.transferredAt ? "disabled" : ""
      } /></td>
      <td>${new Date(receipt.createdAt).toLocaleDateString("tr-TR")}</td>
      <td>${receipt.warehouse || "Ana Depo"}</td>
      <td>${receipt.supplier || "-"}</td>
      <td>${receipt.items?.length || 0}</td>
      <td>${formatCurrency(total)}</td>
      <td>${
        receipt.transferredAt ? "Aktarıldı" : "Bekliyor"
      }</td>
    `;
    row.addEventListener("dblclick", async () => {
      if (!receipt.attachment?.path) {
        return;
      }
      const result = await window.mtnApp?.openFile?.(receipt.attachment.path);
      if (result && !result.ok) {
        setStatus("Dosya açılamadı.");
      }
    });
    stockReceiptsTable.appendChild(row);
  });
};

const renderInvoices = (items) => {
  cachedInvoices = items || [];
  if (!invoicesTable) {
    return;
  }
  invoicesTable.innerHTML = "";
  const sorted = [...cachedInvoices].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  sorted.forEach((invoice) => {
    const row = document.createElement("tr");
    const fileLabel = invoice.attachment?.name || "-";
    row.innerHTML = `
      <td>${new Date(invoice.createdAt).toLocaleDateString("tr-TR")}</td>
      <td>${invoice.vendor || "-"}</td>
      <td>${formatCurrency(Number(invoice.amount || 0))}</td>
      <td><button class="ghost" data-open-path="${
        invoice.attachment?.path || ""
      }">${fileLabel}</button></td>
      <td>${invoice.note || "-"}</td>
    `;
    row
      .querySelector("[data-open-path]")
      ?.addEventListener("click", async () => {
        if (!invoice.attachment?.path) {
          return;
        }
        const result = await window.mtnApp?.openFile?.(invoice.attachment.path);
        if (result && !result.ok) {
          setStatus("Dosya açılamadı.");
        }
      });
    invoicesTable.appendChild(row);
  });
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

const createReceiptRow = () => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input data-field="name" placeholder="Malzeme adı" /></td>
    <td><input data-field="diameter" placeholder="Çap" /></td>
    <td><input data-field="unit" placeholder="Birim" /></td>
    <td><input data-field="quantity" type="number" min="0" step="1" /></td>
    <td><input data-field="purchasePrice" type="number" min="0" step="0.01" /></td>
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
      <td>${formatCurrency(Number(job.unitPrice || 0))}</td>
      <td>${formatCurrency(Number(job.total || 0))}</td>
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
      <td>${formatCurrency(Number(item.amount) || 0)}</td>
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
      note: debt.note || "Cari Borç"
    })),
    ...payments.map((payment) => ({
      createdAt: payment.createdAt,
      type: "Tahsilat",
      amount: Number(payment.amount || 0),
      note: payment.note || "Cari Tahsilat"
    }))
  ].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  entries.forEach((entry) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${new Date(entry.createdAt).toLocaleDateString("tr-TR")}</td>
      <td>${entry.type}</td>
      <td>${formatCurrency(Number(entry.amount) || 0)}</td>
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
  renderStockList(data.stocks || []);
  renderCash(data.cashTransactions || []);
  renderSales(data.sales || []);
  renderStockMovements(data.stockMovements || []);
  cachedCustomerDebts = data.customerDebts || [];
  cachedCustomerJobs = data.customerJobs || [];
  cachedStockReceipts = data.stockReceipts || [];
  cachedInvoices = data.invoices || [];
  renderSummary(data);
  renderCustomerDetail(data);
  renderStockReceipts(data.stockReceipts || []);
  renderInvoices(data.invoices || []);
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
  if (customerJobDateInput) {
    customerJobDateInput.value = today;
  }
  if (customerTransactionDateInput) {
    customerTransactionDateInput.value = today;
  }
  if (invoiceDateInput) {
    invoiceDateInput.value = today;
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
  if (stockReceiptWarehouseSelect) {
    stockReceiptWarehouseSelect.value =
      settings.defaultWarehouse || "Ana Depo";
  }
  if (stockImportWarehouseSelect) {
    stockImportWarehouseSelect.value =
      settings.defaultWarehouse || "Ana Depo";
  }
  if (licenseKeyInput) {
    licenseKeyInput.value = settings.licenseKey || "";
  }
  if (companyNameInput) {
    companyNameInput.value = settings.companyName || "";
  }
  if (companyOwnerInput) {
    companyOwnerInput.value = settings.companyOwner || "";
  }
  if (companyTaxOfficeInput) {
    companyTaxOfficeInput.value = settings.taxOffice || "";
  }
  if (companyTaxNumberInput) {
    companyTaxNumberInput.value = settings.taxNumber || "";
  }
  if (companyPhoneInput) {
    companyPhoneInput.value = settings.companyPhone || "";
  }
  if (companyIbanInput) {
    companyIbanInput.value = settings.companyIban || "";
  }
  if (companyBankInput) {
    companyBankInput.value = settings.companyBank || "";
  }
  if (companyAddressInput) {
    companyAddressInput.value = settings.companyAddress || "";
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
      firstRunForm.companyOwner.value = settings.companyOwner || "";
      firstRunForm.companyPhone.value = settings.companyPhone || "";
      firstRunForm.companyIban.value = settings.companyIban || "";
      firstRunForm.companyBank.value = settings.companyBank || "";
      firstRunForm.companyAddress.value = settings.companyAddress || "";
      firstRunForm.taxOffice.value = settings.taxOffice || "";
      firstRunForm.taxNumber.value = settings.taxNumber || "";
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

const buildCustomerJobsInvoiceHtml = (customerName, jobs, totals) => {
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
        <tr><td>Tahsilat Toplamı</td><td style="text-align:right;">${escapeHtml(
          totals.paymentsTotal
        )}</td></tr>
        <tr><td><strong>Genel Bakiye</strong></td><td style="text-align:right;"><strong>${escapeHtml(
          totals.balanceTotal
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
      item.normalizedName || item.name || "-",
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

  if (type === "customer-balance") {
    title = "Borçlular Listesi";
    headers = ["Cari Adı", "Borç", "Alacak", "Net"];
    const balances = (data.customers || []).map((customer) => {
      const balance = Number(customer.balance || 0);
      return [
        customer.name || "-",
        balance > 0 ? formatCurrency(balance) : formatCurrency(0),
        balance < 0 ? formatCurrency(Math.abs(balance)) : formatCurrency(0),
        formatCurrency(balance)
      ];
    });
    const totalNet = (data.customers || []).reduce(
      (sum, customer) => sum + Number(customer.balance || 0),
      0
    );
    rows = [
      ...balances,
      ["GENEL TOPLAM", "-", "-", formatCurrency(totalNet)]
    ];
  }

  const html = buildReportTable(title, headers, rows, {
    includeWatermark:
      type === "customers" || type === "cash" || type === "customer-balance"
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
    const hasDuplicate = cachedCustomers.some(
      (customer) => normalizeText(customer.name) === normalizedName
    );
    if (hasDuplicate) {
      setStatus("Bu isimde bir cari zaten mevcut. Lütfen kontrol edin.");
      return;
    }
    await window.mtnApp.createCustomer(payload);
    const data = await window.mtnApp.getData();
    renderCustomers(data.customers || []);
    renderSummary(data);
    customerForm.reset();
    setAutoCodes();
  });
}

if (customerTransactionForm) {
  customerTransactionForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!window.mtnApp?.createCustomerTransaction) {
      setStatus("Cari işlem servisi hazır değil.");
      return;
    }
    const formData = new FormData(customerTransactionForm);
    const payload = Object.fromEntries(formData.entries());
    const customerId = transactionCustomerSelect?.value || "";
    if (!customerId) {
      setStatus("Lütfen cari seçin.");
      return;
    }
    const result = await window.mtnApp.createCustomerTransaction({
      customerId,
      type: payload.type,
      amount: payload.amount,
      note: payload.note,
      createdAt: payload.createdAt
    });
    cachedCustomerDebts = result.customerDebts || [];
    renderCustomers(result.customers || []);
    renderCash(result.cashTransactions || []);
    renderSummary(result);
    renderCustomerDetail(result);
    setStatus("Cari işlem kaydedildi.");
    customerTransactionForm.reset();
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
    if (!payload.title || Number(payload.quantity || 0) <= 0) {
      setStatus("İş kalemi için zorunlu alanları doldurun.");
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
      createdAt: payload.createdAt
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
    await window.mtnApp.createStock(payload);
    const data = await window.mtnApp.getData();
    renderStocks(data.stocks || []);
    renderStockMovements(data.stockMovements || []);
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

if (stockReceiptSubmit && stockReceiptBody) {
  stockReceiptSubmit.addEventListener("click", async (event) => {
    event.preventDefault();
    if (!window.mtnApp?.createStockReceipt) {
      setStatus("Fiş servisi hazır değil.");
      return;
    }
    const rows = Array.from(stockReceiptBody.querySelectorAll("tr")).map(
      (row) => ({
        name: row.querySelector("[data-field='name']")?.value || "",
        diameter: row.querySelector("[data-field='diameter']")?.value || "",
        unit: row.querySelector("[data-field='unit']")?.value || "",
        quantity: row.querySelector("[data-field='quantity']")?.value || "",
        purchasePrice:
          row.querySelector("[data-field='purchasePrice']")?.value || "",
        threshold: row.querySelector("[data-field='threshold']")?.value || ""
      })
    );
    const items = rows.filter((item) => item.name && Number(item.quantity) > 0);
    if (!items.length) {
      setStatus("Fiş için en az bir malzeme girin.");
      return;
    }
    const approved = window.confirm("Fiş kaydedilsin ve depoya aktarılsın mı?");
    if (!approved) {
      return;
    }
    const supplierName = stockReceiptSupplierInput?.value?.trim();
    const warehouseName = stockReceiptWarehouseSelect?.value || "Ana Depo";
    const noteParts = [];
    if (supplierName) {
      noteParts.push(`Malzemeci: ${supplierName}`);
    }
    if (stockReceiptNote?.value) {
      noteParts.push(stockReceiptNote.value);
    }
    let attachment = null;
    const file = stockReceiptFileInput?.files?.[0];
    if (file && window.mtnApp?.saveAttachment) {
      attachment = await window.mtnApp.saveAttachment({
        path: file.path,
        name: file.name,
        category: "stock-receipt"
      });
    }
    const result = await window.mtnApp.createStockReceipt({
      items,
      note: noteParts.join(" • "),
      supplier: supplierName,
      warehouse: warehouseName,
      attachment,
      createdAt:
        stockReceiptDateInput?.value || new Date().toISOString().split("T")[0]
    });
    renderStocks(result.stocks || []);
    renderStockMovements(result.stockMovements || []);
    renderStockReceipts(result.stockReceipts || []);
    renderSummary(result);
    setStatus("Fiş kaydedildi ve depoya aktarıldı.");
    stockReceiptBody.innerHTML = "";
    stockReceiptBody.appendChild(createReceiptRow());
    if (stockReceiptNote) {
      stockReceiptNote.value = "";
    }
    if (stockReceiptSupplierInput) {
      stockReceiptSupplierInput.value = "";
    }
    if (stockReceiptFileInput) {
      stockReceiptFileInput.value = "";
    }
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
    setTodayDate();
  });
}

if (invoiceForm) {
  invoiceForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!window.mtnApp?.createInvoice) {
      setStatus("Fatura servisi hazır değil.");
      return;
    }
    const formData = new FormData(invoiceForm);
    const payload = Object.fromEntries(formData.entries());
    const file = invoiceFileInput?.files?.[0];
    if (!file) {
      setStatus("Fatura dosyası seçin.");
      return;
    }
    const attachment = await window.mtnApp.saveAttachment({
      path: file.path,
      name: file.name,
      category: "invoice"
    });
    const result = await window.mtnApp.createInvoice({
      vendor: payload.vendor,
      amount: payload.amount,
      note: payload.note,
      createdAt: payload.createdAt,
      attachment
    });
    renderInvoices(result.invoices || []);
    setStatus("Fatura kaydedildi.");
    invoiceForm.reset();
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

const resetStockImport = () => {
  cachedImportRows = [];
  if (stockImportSummaryEl) {
    stockImportSummaryEl.textContent = "Dosya seçilmedi.";
  }
  if (stockImportTable) {
    stockImportTable.innerHTML = "";
  }
  if (stockImportFileInput) {
    stockImportFileInput.value = "";
  }
};

const renderStockImportPreview = (report) => {
  if (!stockImportTable) {
    return;
  }
  stockImportTable.innerHTML = "";
  if (stockImportSummaryEl) {
    stockImportSummaryEl.textContent = `Yeni: ${report.summary.newCount}, Güncellenecek: ${report.summary.updateCount}, Hatalı: ${report.summary.errorCount}`;
  }
  report.rows.forEach((row) => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
      <td>${row.statusLabel}</td>
      <td>${row.code || "-"}</td>
      <td>${row.name || "-"}</td>
      <td>${row.quantity || "-"}</td>
      <td>${row.unit || "-"}</td>
    `;
    stockImportTable.appendChild(tableRow);
  });
};

if (stockImportPreviewButton) {
  stockImportPreviewButton.addEventListener("click", async (event) => {
    event.preventDefault();
    if (!window.mtnApp?.previewStockImport) {
      setStatus("Toplu aktarım servisi hazır değil.");
      return;
    }
    const file = stockImportFileInput?.files?.[0];
    if (!file) {
      setStatus("Lütfen bir dosya seçin.");
      return;
    }
    const result = await window.mtnApp.previewStockImport({
      path: file.path,
      warehouse: stockImportWarehouseSelect?.value || "Ana Depo"
    });
    if (result.error) {
      setStatus(result.error);
      return;
    }
    cachedImportRows = result.rows || [];
    renderStockImportPreview(result.report);
  });
}

if (stockImportApplyButton) {
  stockImportApplyButton.addEventListener("click", async (event) => {
    event.preventDefault();
    if (!window.mtnApp?.applyStockImport) {
      setStatus("Toplu aktarım servisi hazır değil.");
      return;
    }
    if (!cachedImportRows.length) {
      setStatus("Önce önizleme alın.");
      return;
    }
    const approved = window.confirm("Toplu aktarım onaylansın mı?");
    if (!approved) {
      return;
    }
    const result = await window.mtnApp.applyStockImport({
      rows: cachedImportRows,
      warehouse: stockImportWarehouseSelect?.value || "Ana Depo"
    });
    renderStocks(result.stocks || []);
    renderStockMovements(result.stockMovements || []);
    renderStockReceipts(result.stockReceipts || []);
    renderSummary(result);
    renderStockImportPreview(result.report);
    setStatus("Toplu aktarım tamamlandı.");
  });
}

if (stockImportResetButton) {
  stockImportResetButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetStockImport();
  });
}

const handleStockListSearch = () => {
  renderStockList(cachedStocks);
};

if (stockListSearchInput) {
  stockListSearchInput.addEventListener("input", handleStockListSearch);
}

if (stockListSearchButton) {
  stockListSearchButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleStockListSearch();
  });
}

const handleReceiptFilter = () => {
  renderStockReceipts(cachedStockReceipts);
};

[
  receiptFilterStartInput,
  receiptFilterEndInput,
  receiptFilterSupplierInput,
  receiptFilterWarehouseSelect,
  receiptFilterStatusSelect
].forEach((input) => {
  input?.addEventListener("input", handleReceiptFilter);
  input?.addEventListener("change", handleReceiptFilter);
});

if (stockReceiptsTransferButton) {
  stockReceiptsTransferButton.addEventListener("click", async () => {
    if (!window.mtnApp?.transferStockReceipts) {
      setStatus("Depo aktarım servisi hazır değil.");
      return;
    }
    const selectedIds = Array.from(
      stockReceiptsTable?.querySelectorAll("input[type='checkbox']:checked") ||
        []
    ).map((input) => input.dataset.receiptId);
    if (!selectedIds.length) {
      setStatus("Aktarım için fiş seçin.");
      return;
    }
    const result = await window.mtnApp.transferStockReceipts({
      receiptIds: selectedIds
    });
    renderStocks(result.stocks || []);
    renderStockMovements(result.stockMovements || []);
    renderStockReceipts(result.stockReceipts || []);
    renderSummary(result);
    setStatus(result.message || "Fişler depoya aktarıldı.");
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

if (companyForm) {
  companyForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!window.mtnApp?.saveSettings) {
      settingsStatusEl.textContent = "Firma servisi hazır değil.";
      return;
    }
    const formData = new FormData(companyForm);
    const payload = Object.fromEntries(formData.entries());
    const existingSettings = await window.mtnApp.getSettings();
    const nextSettings = { ...existingSettings, ...payload };
    await window.mtnApp.saveSettings(nextSettings);
    currentSettings = nextSettings;
    applyBranding(nextSettings);
    settingsStatusEl.textContent = "Firma bilgileri kaydedildi.";
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
    renderCash(data.cashTransactions || []);
    renderSales(data.sales || []);
    renderStockMovements(data.stockMovements || []);
    cachedCustomerDebts = data.customerDebts || [];
    cachedCustomerJobs = data.customerJobs || [];
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
      companyOwner: payload.companyOwner || "",
      companyAddress: payload.companyAddress || "",
      companyPhone: payload.companyPhone || "",
      companyIban: payload.companyIban || "",
      companyBank: payload.companyBank || "",
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

const handleBackup = async () => {
  if (!window.mtnApp?.createBackup) {
    if (backupPathEl) {
      backupPathEl.textContent = "Yedekleme servisi hazır değil.";
    }
    return;
  }

  const payload = await buildBackupPayload();
  const result = await window.mtnApp.createBackup(payload);
  if (lastBackupEl) {
    lastBackupEl.textContent = new Date(result.createdAt).toLocaleString("tr-TR");
  }
  if (backupPathEl) {
    backupPathEl.textContent = `Yedek klasörü: ${result.backupDir}`;
  }
};

if (backupButton) {
  backupButton.addEventListener("click", handleBackup);
}

if (backupSecondaryButton) {
  backupSecondaryButton.addEventListener("click", handleBackup);
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
      item.normalizedName || item.name || "",
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

if (customerBalanceReportButton) {
  customerBalanceReportButton.addEventListener("click", () =>
    generateReport("customer-balance")
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
    if (jobs.length) {
      const jobRows = jobs.map((job) => ({
        title: job.title || "-",
        quantity: Number(job.quantity || 0),
        unit: job.unit || "-",
        unitPrice: formatCurrency(Number(job.unitPrice || 0)),
        total: formatCurrency(Number(job.total || 0))
      }));
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
        totals
      );
      const result = await window.mtnApp.generateReport({
        title: `Cari-Ekstre-${customerName.replace(/\s+/g, "-")}`,
        html
      });
      reportPathEl.textContent = `Rapor kaydedildi: ${result.reportFile}`;
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

// Menu click handler
const menuItems = document.querySelectorAll(".menu__item");
const menuActionItems = document.querySelectorAll(".menu__action[data-panel]");
const panels = document.querySelectorAll(".panel");
const quickActionButtons = document.querySelectorAll(
  ".action-card, .quick-pill"
);
const panelTitleEl = document.getElementById("panel-title");

const panelTitles = {
  "dashboard-panel": "Ana",
  "customers-panel": "Cari",
  "stocks-panel": "Stok",
  "stock-list-panel": "Malzeme Stok Listesi",
  "sales-panel": "Teklif",
  "invoices-panel": "Fatura",
  "cash-panel": "Kasa",
  "reports-panel": "Raporlar",
  "assistant-panel": "Mühendislik",
  "settings-panel": "Ayarlar"
};

const showPanel = (panelId, title) => {
  panels.forEach((panel) => panel.classList.remove("panel--active"));
  const target = document.getElementById(panelId);
  if (target) {
    target.classList.add("panel--active");
  }
  if (panelTitleEl) {
    panelTitleEl.textContent = title || panelTitles[panelId] || "Panel";
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
    const title = item.dataset.title || panelTitles[panelId] || item.textContent;
    if (!panelId) {
      return;
    }
    activateMenuByPanel(panelId);
    showPanel(panelId, title);
  });
});

menuActionItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const panelId = item.dataset.panel;
    if (!panelId) {
      return;
    }
    const title = panelTitles[panelId] || item.textContent.trim();
    showPanel(panelId, title);
    activateMenuByPanel(panelId);
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
      panelTitles[targetPanel] ||
      "";
    showPanel(targetPanel, title);
    activateMenuByPanel(targetPanel);
  });
});

showPanel("dashboard-panel", "Ana");
initApp().then(loadInitialData);
