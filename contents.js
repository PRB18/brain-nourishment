//1.clearinng the page
document.body.innerHTML="";

//2.setting the background to black
document.styleSheets.backgroundColor = "black";

//3.create a headding to disply
const h1 = document.createElement("h1");

h1.innerText = "PAY FOR YOUR SINS";
h1.style.color = "red";
h1.style.textAlign = "center";
h1.style.marginTop = "20%";
h1.style.fontSize = "50px";

//4.add the heading to the body
document.body.appendChild(h1);