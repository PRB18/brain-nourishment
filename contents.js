(function () {


    console.log('InstaBlocker: contents.js loaded');
    //get the unlock time from the localStorage
    const current = localStorage.getItem("unlock");
    if (current) {
        //if there is "unlock" present in localStorage then parse it into normal form from JSON
        const unlockex = JSON.parse(current);
        //if the curret time is less than the unlock time then the website should stay unlocked. so we dont put the overlay on.
        if (Date.now() < unlockex) {
            return;
        }
    }

    function createOverlay() {

        //creating css 
        const css = `
    .toll-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #1a1a1a; /* Dark Grey > Pure Black */
        z-index: 9999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Courier New', monospace; /* Hacker Vibes */
        color: #00ff00; /* Matrix Green */
    }

    .toll-input {
        padding: 15px;
        font-size: 18px;
        margin: 20px 0;
        border: 2px solid #00ff00;
        background-color: black;
        color: white;
        width: 300px;
        outline: none;
    }

    .toll-btn {
        padding: 10px 30px;
        font-size: 20px;
        cursor: pointer;
        background-color: #00ff00;
        color: black;
        border: none;
        font-weight: bold;
        text-transform: uppercase;
    }

    .toll-btn:hover {
        background-color: white; /* Interaction feedback */
    }
`;
        //creating a style element through dom
        const style = document.createElement("style");
        style.textContent = css;
        document.head.appendChild(style);


        const Overlay = document.createElement("div");
        Overlay.className = "toll-overlay";

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
        console.log("🎲 Rolled Index:", randomIndex);//check randomness
        const randomQuestion = questions[randomIndex];


        Overlay.innerHTML = `<h1>Access Blocked</h1>
        <h2>${randomQuestion.q}</h2>
        <textarea id="answer" name="code" rows="4" cols="50" placeholder="Write your answer here" class="toll-input"></textarea>
        <button id="btn" class="toll-btn">Click me</button>`;

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