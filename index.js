var body = document.getElementById("body");
var bodyText = document.getElementById("container");

body.addEventListener("mousemove",()=>{
    body.style.transition = "all 1s ease"
    body.style.backgroundColor = `rgb(
        ${(Math.random()*250)+1},${(Math.random()*250)+1},${(Math.random()*250)+1}, ${Math.random()}
        )`;
    bodyText.style.transition = "all 0.6s ease"
    bodyText.style.color = `rgb(
        ${(Math.random()*250)},${(Math.random()*250)},${(Math.random()*250)}, ${Math.random()}
        )`
    
});


