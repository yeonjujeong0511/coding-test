const fs = require("fs");
const http = require("http");

const app = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      console.log("메인페이지");
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
    if (req.url === "/post") {
      console.log("post page");
      console.log(new Date());
      // 받을 데이터
      let body = "";
      // 데이터를 받을 때는 req.on()
      // 데이터를 수신받을때마다 data 콜백 실행
      req.on("data", function (data) {
        body = body + data;
      });
      req.on("end", function () {
        // * qs는 요즘 안씀 //
        // let post = qs.parse(body);
        // console.log(post);
        // let name = post.name;
        // let pwd = post.password;
        // console.log(`name:${name} password:${pwd}\r\n`);
        let bodyData = decodeURI(body);
        let bodyarr = bodyData.split("&");
        const name = bodyarr[0].split("=")[1];
        const pwd = bodyarr[1].split("=")[1];
        function Data(name, pwd) {
          this.name = name;
          this.password = pwd;
          this.date = new Date();
        }
        // 파일이름 생성을 위한 년월일시간만 뽑는 함수
        function getCurrentDate() {
          let date = new Date();
          let year = date.getFullYear().toString();
          let month = date.getMonth() + 1;
          month = month < 10 ? "0" + month.toString() : month.toString();
          let day = date.getDate();
          day = day < 10 ? "0" + day.toString() : day.toString();
          let hour = date.getHours();
          hour = hour < 10 ? "0" + hour.toString() : hour.toString();
          let minites = date.getMinutes();
          minites =
            minites < 10 ? "0" + minites.toString() : minites.toString();
          let seconds = date.getSeconds();
          seconds =
            seconds < 10 ? "0" + seconds.toString() : seconds.toString();
          return year + month + day + hour + minites + seconds;
        }
        console.log(new Data(name, pwd));
        fs.writeFileSync(
          `${getCurrentDate()}.json`,
          JSON.stringify(new Data(name, pwd))
        );
        res.writeHead(200, { "Content-Type": "text/json; charset=UTF-8" });
        res.write(JSON.stringify(new Data(name, pwd)), "utf-8");
        res.end();
      });
    }
  }
});

app.listen(5580, () => {
  console.log("port 5580");
});
