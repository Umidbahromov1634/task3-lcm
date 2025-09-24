const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;
const ROUTE_EMAIL = process.env.ROUTE_EMAIL || "umidbahromov24_gmail_com";

// НОД через BigInt
function gcd(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  return b === 0n ? a : gcd(b, a % b);
}

// НОК через BigInt
function lcm(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  return (a * b) / gcd(a, b);
}

app.get("/:email", (req, res) => {
  const email = req.params.email;

  if (email !== ROUTE_EMAIL) {
    return res.status(404).send("Not Found");
  }

  const { x, y } = req.query;

  // Если параметры отсутствуют
  if (x === undefined || y === undefined) {
    return res.send("NaN");
  }

  let a, b;
  try {
    a = BigInt(x);
    b = BigInt(y);
  } catch {
    return res.send("NaN");
  }

  // Оба нуля
  if (a === 0n && b === 0n) return res.send("NaN");

  // Один ноль, другой > 0
  if ((a === 0n && b > 0n) || (b === 0n && a > 0n)) return res.send("0");

  // Если отрицательные
  if (a < 0n || b < 0n) return res.send("NaN");

  // Обычный расчёт НОК
  return res.send(lcm(a, b).toString());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});







