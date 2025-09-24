const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;
const ROUTE_EMAIL = process.env.ROUTE_EMAIL || "umidbahromov24_gmail_com";

// функция для расчёта НОД
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// функция для расчёта НОК
function lcm(x, y) {
  return (x * y) / gcd(x, y);
}

app.get(`/${ROUTE_EMAIL}`, (req, res) => {
  res.type("text/plain"); // всегда отдаём чистый текст

  let x = parseInt(req.query.x, 10);
  let y = parseInt(req.query.y, 10);

  // проверка на NaN
  if (isNaN(x) || isNaN(y)) {
    return res.send("NaN");
  }

  // оба равны 0 → NaN
  if (x === 0 && y === 0) {
    return res.send("NaN");
  }

  // если одно 0, другое >0 → вернуть 0
  if ((x === 0 && y > 0) || (y === 0 && x > 0)) {
    return res.send("0");
  }

  // если отрицательные → NaN
  if (x < 0 || y < 0) {
    return res.send("NaN");
  }

  // оба >0 → обычный НОК
  return res.send(lcm(x, y).toString());
});

// обработка без параметров (чтобы вернуть NaN, а не 404)
app.get(`/${ROUTE_EMAIL}*`, (req, res) => {
  res.type("text/plain").send("NaN");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

