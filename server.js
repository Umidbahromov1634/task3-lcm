const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;
const ROUTE_EMAIL = process.env.ROUTE_EMAIL || "umidbahromov24_gmail_com";

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
function lcm(x, y) {
  return (x * y) / gcd(x, y);
}

app.get(`/${ROUTE_EMAIL}`, (req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  let x = parseInt(req.query.x, 10);
  let y = parseInt(req.query.y, 10);

  if (isNaN(x) || isNaN(y) || x <= 0 || y <= 0) {
    return res.end("NaN");
  }

  return res.end(lcm(x, y).toString());
});

app.get(`/${ROUTE_EMAIL}*`, (req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("NaN");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




