
document.getElementById("taxForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const income = parseFloat(this.income.value);
  const ageGroup = this.age.value;
  const deductions = Array.from(this.querySelectorAll("input[name='deductions']:checked"))
    .map(el => parseFloat(el.value));

  const totalDeductions = deductions.reduce((acc, val) => acc + val, 0);
  const taxableIncome = Math.max(income - totalDeductions, 0);

  let taxRate = 0;
  let exemptionLimit = ageGroup === "above60" ? 300000 : 250000;

  if (taxableIncome > exemptionLimit && taxableIncome <= 500000) {
    taxRate = 0.05;
  } else if (taxableIncome > 500000 && taxableIncome <= 1000000) {
    taxRate = 0.2;
  } else if (taxableIncome > 1000000) {
    taxRate = 0.3;
  }

  const totalTax = (taxableIncome - exemptionLimit) * taxRate;
  const originalTax = (income - exemptionLimit) * taxRate;
  const savedTax = Math.max(originalTax - totalTax, 0);

  document.getElementById("taxSavedText").textContent = `You saved ₹${savedTax.toFixed(2)} in taxes!`;

  let badge = "Tax Novice";
  if (savedTax >= 50000) badge = "Smart Saver 🧠";
  if (savedTax >= 100000) badge = "Tax Champion 🏆";

  document.getElementById("badgeText").textContent = `Badge: ${badge}`;
  document.getElementById("resultBox").style.display = "block";
});
