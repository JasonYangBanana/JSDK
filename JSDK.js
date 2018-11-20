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
// window.JSDK = JSDK;
(function () {
    let body = document.querySelector('body');
    function thsr() {
        let iframe = document.createElement('iframe');
        iframe.src = 'http://www.thsrc.com.tw/tw/TimeTable/SearchResult';
        iframe.width = '1200px';
        iframe.height = '600px';
        iframe.id = "thsr";
        body.appendChild(iframe);
    }
    JSDK.thsr = thsr;
    function tra() { 
        let iframe = document.createElement('iframe');
        iframe.src = 'http://twtraffic.tra.gov.tw/twrail/TW_QuickSearch.aspx';
        iframe.width = '1200px';
        iframe.height = '600px';
        iframe.id = "tra";
        body.appendChild(iframe);
    }
    JSDK.tra = tra;

    //導入js ,css使用
    function loadFile(path, type) {
        if (type === 'js') {
            var filePath = document.createElement('script');
            filePath.type = 'text/javascript';
            filePath.src = path;
        } else if (type === 'css') {
            var filePath = document.createElement('link');
            filePath.rel = 'stylesheet';
            filePath.type = 'text/css';
            filePath.href = path;
        }
        const head = document.querySelectorAll('head')[0];
        head.appendChild(filePath);
    }

    function calendarInit() {
        //導入月曆的css
        loadFile('https://jasonyangbanana.github.io/JSDK/css/dist/jsCalendar.css', 'css');
        loadFile('https://jasonyangbanana.github.io/JSDK/js/dist/jsCalendar.js', 'js');
        const myCalendar = document.querySelector('.my-calendar');
        setTimeout(() => {
            jsCalendar.new(myCalendar);
        }, 3000);
    }
    JSDK.calendarInit = calendarInit;
}());