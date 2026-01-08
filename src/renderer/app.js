const offerBody = document.getElementById("offer-body");
const addRowButton = document.getElementById("add-row");
const totalEl = document.getElementById("offer-total");
const versionEl = document.getElementById("app-version");

const formatCurrency = (value) =>
  new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2
  }).format(value || 0);

const calculateTotal = () => {
  const rows = Array.from(offerBody.querySelectorAll("tr"));
  const total = rows.reduce((sum, row) => {
    const totalInput = row.querySelector("[data-field='total']");
    const value = Number(totalInput?.value) || 0;
    return sum + value;
  }, 0);

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

if (window.mtnApp) {
  versionEl.textContent = window.mtnApp.version;
}
