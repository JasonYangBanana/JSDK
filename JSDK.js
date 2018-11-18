//使用者輸入這串js code，即可使用我們提供的 sdk js

// (function () {
//     var firstScript, script = document.createElement('script');
//     script.text = 'text／javascript';
//     script.async = true;
//     screen.src = '我們提供的sdk js';
//     // 讓我們的js 永遠在第一個被 loading
//     firstScript = document.getElementsByTagName('script')[0] //取得的第一個 <script>
//     firstScript.parentNode.insertBefore(script, firstScript); //將我們引入的 <script> 置於第一個
// }());

let JSDK = {};
(function () {
    function thsr() {
        let body = document.querySelector('body');
        let iframe = document.createElement('iframe');
        iframe.src = 'http://www.thsrc.com.tw/tw/TimeTable/SearchResult';
        iframe.id = "thsr";
    }
    JSDK.thsr = thsr();
}());

console.log(JSDK)

const http = require('http');
const PORT = process.env.PORT || 5000;
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'text/json;charset=utf-8');
    res.end();
});

server.listen(PORT);
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });