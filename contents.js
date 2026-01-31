(function () {

    console.log('InstaBlocker: contents.js loaded');
    const current = localStorage.getItem("unlock");
    if (current) {
        const unlockex = JSON.parse(current);
        if (Date.now() < unlockex) {
            return;
        }
    }

    function createOverlay() {
        const Overlay = document.createElement("div");

        Overlay.style.position = "fixed";
        Overlay.style.top = "0";
        Overlay.style.left = "0";
        Overlay.style.width = "100%";
        Overlay.style.height = "100%";
        Overlay.style.backgroundColor = "black";
        Overlay.style.zIndex = "9999"; // Sit on top of everything
        Overlay.style.display = "flex"; // Center the text
        Overlay.style.alignItems = "center";
        Overlay.style.justifyContent = "center";
        Overlay.style.flexDirection = "column";
        Overlay.style.color = "white"; // So we can see the text

        Overlay.innerHTML = `<h1>Access Blocked</h1>
        <textarea id="answer" name="code" rows="4" cols="50" style="background-color: white; color: black; padding: 10px; font-size: 16px; font-family: Arial;">Write the code here</textarea>
        <button id="btn" style="padding: 10px 20px; margin-top: 10px; font-size: 16px; cursor: pointer; background-color: #4CAF50; color: white; border: none; border-radius: 4px;">Click me</button>`;

        document.body.appendChild(Overlay);

        document.getElementById("btn").addEventListener("click", function () {
            if (document.getElementById("answer").value === "olleh") {
                Overlay.remove();
                const unlockex = Date.now() + 600000;
                localStorage.setItem("unlock", JSON.stringify(unlockex));
            } else {
                alert("Wrong answer!");
            }
        });
    }

    if (document.body) {
        createOverlay();
    } else {
        document.addEventListener("DOMContentLoaded", createOverlay);
    }
})();