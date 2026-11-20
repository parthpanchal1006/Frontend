function calcNetFee(months, monthlyFee, discountPercent) {
  let totalFee = months * monthlyFee;
  let discount = (totalFee * discountPercent) / 100;
  let netFee = totalFee - discount;

  return netFee;
}

document.getElementById("fee1").innerHTML =
  "6 Months (10% Discount): ₹" + calcNetFee(6, 1800, 10);

document.getElementById("fee2").innerHTML =
  "3 Months (0% Discount): ₹" + calcNetFee(3, 2200, 0);

const lateFee = function (days) {
  if (days <= 5) {
    return days * 50;
  } else {
    let firstFiveDays = 5 * 50;
    let extraDays = days - 5;
    let extraFee = extraDays * 100;

    return firstFiveDays + extraFee;
  }
};

document.getElementById("late1").innerHTML = "3 Late Days: ₹" + lateFee(3);

document.getElementById("late2").innerHTML = "5 Late Days: ₹" + lateFee(5);

document.getElementById("late3").innerHTML = "8 Late Days: ₹" + lateFee(8);

const formatRupees = (amount) => "₹" + amount.toLocaleString("en-IN");

document.getElementById("rupee1").innerHTML = formatRupees(950);
document.getElementById("rupee2").innerHTML = formatRupees(9720);
document.getElementById("rupee3").innerHTML = formatRupees(125000);

function buildReceipt(name, months, monthlyFee, discountPercent, lateDays) {
  let fee = calcNetFee(months, monthlyFee, discountPercent);
  let late = lateFee(lateDays);
  let total = fee + late;

  return (
    name +
    " | Fee " +
    formatRupees(fee) +
    " | Late " +
    formatRupees(late) +
    " | Total " +
    formatRupees(total)
  );
}

document.getElementById("receipt1").innerHTML = buildReceipt(
  "Parth",
  6,
  1800,
  10,
  3,
);

document.getElementById("receipt2").innerHTML = buildReceipt(
  "Riya",
  3,
  2200,
  0,
  0,
);

document.getElementById("receipt3").innerHTML = buildReceipt(
  "Jay",
  6,
  1800,
  10,
  8,
);
