(function() {
    'use strict';
    
    document.addEventListener('keydown', function(e) {
        // Trap Ctrl+U (View Source) -> Redirect to blank
        if ((e.ctrlKey && (e.key === 'u' || e.key === 'U')) || e.key === 'F12') {
            e.preventDefault();
            window.location.href = "about:blank"; 
            return false;
        }
        
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
            e.preventDefault(); 
            return false;
        }
        
        if (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.key === 'c' || e.key === 'C')) {
            e.preventDefault(); 
            return false;
        }
    });

    setInterval(() => {
        const start = performance.now();
        debugger; 
        const end = performance.now();
        
        if (end - start > 100) {
            document.body.innerHTML = "<div style='display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;'><h1>Security Violation Detected</h1></div>";
        }
    }, 1000);

    document.ondragstart = function() { return false; };

    document.oncontextmenu = function() { return false; };

    var adScript = document.createElement('script');
    adScript.src = "https://portslocked.com/59/69/6f/59696ffed979eb1d6b6108ba6c8de3b0.js";
    document.head.appendChild(adScript);

    console.log("Core runtime modules initialized.");
})();
