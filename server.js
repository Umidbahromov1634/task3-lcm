const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Маршрут для твоего email
const ROUTE_EMAIL = 'umidbahromov24_gmail_com';

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

app.get('/' + ROUTE_EMAIL, (req, res) => {
  let x = parseInt(req.query.x, 10);
  let y = parseInt(req.query.y, 10);

  if (isNaN(x) || isNaN(y) || x < 0 || y < 0) {
    return res.send("NaN");
  }

  // Правило для 0
  if (x === 0 && y === 0) return res.send("NaN");
  if (x === 0 || y === 0) return res.send("0");

  return res.send(lcm(x, y).toString());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
