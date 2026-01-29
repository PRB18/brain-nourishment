
//1.creating an overley
const Overlay = document.createElement("div");

//2.add style to the overlay
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



//3.add input field and button inside the Overlay
Overlay.innerHTML = `<h1>Access Blocked</h1> 
<textarea id="answer" name="code" rows="4" cols="50" style="background-color: white; color: black; padding: 10px; font-size: 16px; font-family: Arial;">Write the code here</textarea>
<button id="btn" style="padding: 10px 20px; margin-top: 10px; font-size: 16px; cursor: pointer; background-color: #4CAF50; color: white; border: none; border-radius: 4px;">Click me</button>`


//4.appedn the overley to the body
document.body.appendChild(Overlay);

//5.getting the value from the textarea when button is clicked
document.getElementById("btn").addEventListener("click", function () {
    if (document.getElementById("answer").value === "olleh") {
        Overlay.remove();
    }
    else {
        alert("Wrong answer!");
    }
});