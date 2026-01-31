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

        //question to pick randomly and ask the user
        const questions = [
            { q: " What is a named storage location in memory?", a: "Variable" },
            { q: "What is the process of finding and fixing errors?", a: "Debugging" },
            { q: "What structure executes code repeatedly?", a: "Loop" },
            { q: "What is a self-contained block of code designed to perform a particular task?", a: "Function" },
            { q: "What does 'API' stand for?", a: "Application Program Interface" },
            { q: "Which data type represents true or false?", a: "Boolean" },
            { q: "Which data structure uses LIFO (Last-In-First-Out)?", a: "Stack" },
            { q: "What is a collection of elements that can be accessed by index?", a: "Array" },
            { q: "Which data type holds alphanumeric text?", a: "String" },
            { q: "What data structure uses FIFO (First-In-First-Out)?", a: "Queue" },
        ];

        //pick random question from the lsit
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];

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
        <h2>${randomQuestion.q}</h2>
        <textarea id="answer" name="code" rows="4" cols="50" placeholder="Write your answer here" style="background-color: white; color: black; padding: 10px; font-size: 16px; font-family: Arial;"></textarea>
        <button id="btn" style="padding: 10px 20px; margin-top: 10px; font-size: 16px; cursor: pointer; background-color: #4CAF50; color: white; border: none; border-radius: 4px;">Click me</button>`;

        document.body.appendChild(Overlay);

        //gets the answer from the user
        document.getElementById("btn").addEventListener("click", function () {
            //check if the answer that user gave is same as the aswer in the questions list 
            if (document.getElementById("answer").value.toLowerCase() === randomQuestion.a.toLowerCase().trim()) {
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