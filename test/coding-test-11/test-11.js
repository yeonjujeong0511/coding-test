const fs = require("fs");
const http = require("http");

const header = fs.readFileSync("header.txt", "utf-8");
// console.log(header);
const main = fs.readFileSync("main.txt", "utf-8");
// console.log(main);

const footer = fs.readFileSync("footer.txt", "utf-8");
// console.log(footer);
const bodyarr = [];
bodyarr.push(header + "\r\n", main + "\r\n", footer + "\r\n");
console.log(bodyarr);

fs.writeFileSync("body.txt", bodyarr.join(""));
const body = fs.readFileSync("body.txt", "utf-8");
const head = fs.readFileSync("head.txt", "utf-8");

const html = [];
html.push(head, body);
fs.writeFileSync("html.txt", html.join(""));
console.log(html);

//서버 만들어서 실행
const app = http.createServer((req, res) => {
  const html = fs.readFileSync("html.txt", "utf-8");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(html);
  res.end();
});

app.listen(8080, () => {
  console.log("서버 접속 완료");
});
