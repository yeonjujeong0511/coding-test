const fs = require("fs");
const http = require("http");
const qs = require("querystring");
const url = require("url");
const { runInNewContext } = require("vm");

// header.txt를 읽고 header에 저장
const header = fs.readFileSync("txt/header.txt", "utf-8");
// console.log(header);
// main.txt를 읽고 header에 저장
const main = fs.readFileSync("txt/main.txt", "utf-8");
// console.log(main);
// footer.txt를 읽고 header에 저장
const footer = fs.readFileSync("txt/footer.txt", "utf-8");
// console.log(footer);

// header + main + footer를 body.txt에 담기전에
// 담을 내용들을 배열에 저장하려고 하기때문에 빈배열을 선언해준다.
const bodyarr = [];

// 빈배열에 요소들을 추가한다. "\r\n" 을 붙여준 이유는 줄바꿈을 해서 보기 편하게하기 위해!
bodyarr.push(header + "\r\n", main + "\r\n", footer + "\r\n");

//console.log(bodyarr);
// ['<ul><li>메뉴</li></ul>\r\n','<div id="root">hello</div>\r\n','<footer>kdt 클래스</footer>\r\n']

// body.txt에 bodyarr를 넣어줄 것이다.
// 파일이 없다면 생성해서 값을 넣어준다.
// 배열에 요소가 3개이기때문에 join을 통해 하나의 요소로 값을 넣어준다.
fs.writeFileSync("body.txt", bodyarr.join(""));

// 위와 같이 body에 body.txt를 읽고 저장
const body = fs.readFileSync("body.txt", "utf-8");
// head에 heda.txt를 읽고 저장
const head = fs.readFileSync("head.txt", "utf-8");

// 역시 빈배열 선언 후, head와 body를 넣어준다.
const html = [];
html.push(head, body);
fs.writeFileSync("html.txt", html.join(""));
//console.log(html);

//서버 만들어서 실행
// GET 요청을 받으면, url의 요청에 따라 각각의 url로 이동하게 된다.

//리팩토링
//반복되는 내용들을 함수화시킨다.
function getRes(res, statusCode, write) {
  res.writeHead(statusCode, { "Content-Type": "text/html;charset=UTF-8" });
  // 응답 헤더에 대한 정보를 기록
  res.write(write);
  // 본문에 보여지는 부분
  res.end();
  // 응답을 종료
}

const app = http.createServer((req, res) => {
  if (req.method === "GET") {
    //console.log("GET 요청 받음");
    if (req.url === "/") {
      //console.log("메인페이지로 이동");
      const html = fs.readFileSync("html.txt", "utf-8");
      getRes(res, 200, html);
    } else if (req.url === "/a") {
      console.log("a 페이지로 이동");
      getRes(res, 200, "<h1>Hi A page</h1>");
    } else if (req.url === "/b") {
      console.log("b 페이지로 이동");
      getRes(res, 200, "hi B page");
    } else if (req.url === "/c") {
      console.log("c 페이지로 이동");
      getRes(res, 200, "hi C page");
    } else if (req.url === "/d") {
      console.log("d 페이지로 이동");
      getRes(res, 200, "Hi D page");
    } else if (req.url === "/post") {
      console.log("get post page");
      const post = fs.readFileSync("index.html", "utf-8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(post);
      res.end();
    } else {
      // 위에 선언된 url이 아닌 다른 url 요청시, 페이지를 찾을 수 없다는 것을 나타내준다.
      res.writeHead(404);
      res.end("NOT FOUND PAGE");
    }
  } else if (req.method === "POST") {
    if (req.url === "/post/result") {
      console.log("연결");
      // 받을 데이터
      let body = "";
      // 데이터를 받을 때는 req.on()
      // 데이터를 수신받을때마다 data 콜백 실행
      req.on("data", function (data) {
        body = body + data;
        console.log(body);
      });
      // name=%EA%BC%AC%EB%B6%80%EA%B8%B0&password=1234
      //const decodat = decodeUsRI(data);
      //console.log(new URLSearchParams(decodat));
      req.on("end", function () {
        // * qs는 요즘 안씀 //
        let post = qs.parse(body);
        console.log(post);
        let name = post.name;
        let pwd = post.password;
        console.log(`name:${name} password:${pwd}\r\n`);
        //result.txt 파일에 입력받은 데이터를 추가시키면서 기존 내역에 저장시킬 수 있다
        fs.appendFileSync(
          "result.txt",
          `name:${name} password:${pwd}\r\n`,
          "utf-8"
        );
        // 페이지에 이름과 비밀번호를 띄어준다.
        res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
        res.write(`name:${name} password:${pwd}\r\n`, "utf-8");
        res.end();
      });
    }
  }
});
// port 8080으로 서버연결
app.listen(8080, () => {
  console.log("서버 접속 완료");
});
