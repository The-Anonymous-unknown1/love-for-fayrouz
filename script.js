// Romantic typing effect

const text =
"Hello Fayrouz A. Mamman ❤️\n\nSomeone has something very special to tell you...\n\nTake my hand and let's begin this little journey together.";

const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {
    if (i < text.length) {
        if (text.charAt(i) === "\n") {
            typing.innerHTML += "<br>";
        } else {
            typing.innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(typeWriter, 60);
    }
}

typeWriter();


// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-50px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "1";
    heart.style.opacity = "0.8";

    document.body.appendChild(heart);

    let y = -50;

    const fall = setInterval(() => {

        y += 3;

        heart.style.top = y + "px";

        if (y > window.innerHeight) {
            clearInterval(fall);
            heart.remove();
        }

    }, 20);

}

setInterval(createHeart, 500);


// Button Click
document.getElementById("startButton").addEventListener("click", () => {

    document.body.style.transition = "1s";
    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "chapter1.html";

    }, 1000);

});