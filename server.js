const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;
const ROUTE_EMAIL = process.env.ROUTE_EMAIL || "umidbahromov24_gmail_com";

// функция для НОД
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// функция для НОК
function lcm(x, y) {
  return (x * y) / gcd(x, y);
}

app.get(`/${ROUTE_EMAIL}`, (req, res) => {
  res.type("text/plain");

  let x = parseInt(req.query.x, 10);
  let y = parseInt(req.query.y, 10);

  // если не числа → NaN
  if (isNaN(x) || isNaN(y)) {
    return res.send("NaN");
  }

  // если x или y <= 0 → NaN (0 и отрицательные не считаются натуральными)
  if (x <= 0 || y <= 0) {
    return res.send("NaN");
  }

  // оба >0 → считаем НОК
  return res.send(lcm(x, y).toString());
});

// если заходят без параметров
app.get(`/${ROUTE_EMAIL}*`, (req, res) => {
  res.type("text/plain").send("NaN");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


