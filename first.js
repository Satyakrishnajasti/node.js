// const fs = require("fs");

// fs.writeFileSync('hello.txt','Hello from Node.js');

const http = require("http");
const url = require("url");
const port = 8080;

const server = http.createServer((req, res) => {
  //   res.writeHead(200, { "Content-type": "text/html" });
  //   res.write("Hello world");
  //   res.write(req.url);
  //   var q = url.parse(req.url, true).query;
  //   var txt = q.year + " " + q.month;
  //   res.end();
  console.log(req.url, req.method, req.headers);
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head> <title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title>My first application</title></head>");
  res.write("<body>");
  res.write("<h1>Node Js<h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(port, function (error) {
  if (error) {
    console.log("erer");
  }
});
