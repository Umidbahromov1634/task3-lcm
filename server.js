const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;
const ROUTE_EMAIL = process.env.ROUTE_EMAIL || "umidbahromov24_gmail_com";

// НОД
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// НОК
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

app.get("/:email", (req, res) => {
  const email = req.params.email;

  if (email !== ROUTE_EMAIL) {
    return res.status(404).send("Not Found");
  }

  const { x, y } = req.query;
  const a = parseInt(x, 10);
  const b = parseInt(y, 10);

  // Если не числа
  if (isNaN(a) || isNaN(b)) {
    return res.send("NaN");
  }

  // Оба нуля
  if (a === 0 && b === 0) {
    return res.send("NaN");
  }

  // Один ноль, другой > 0
  if ((a === 0 && b > 0) || (b === 0 && a > 0)) {
    return res.send("0");
  }

  // Если отрицательные
  if (a < 0 || b < 0) {
    return res.send("NaN");
  }

  // Оба > 0 → обычный расчёт НОК
  return res.send(String(lcm(a, b)));
});

// Без параметров → NaN
app.get("/:email", (req, res) => {
  const email = req.params.email;

  if (email !== ROUTE_EMAIL) {
    return res.status(404).send("Not Found");
  }

  res.send("NaN");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





