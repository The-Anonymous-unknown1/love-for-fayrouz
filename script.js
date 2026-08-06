// ===============================
// FOR FAYROUZ ❤️
// Premium Love Website Script
// ===============================

// ---------- Typewriter ----------

const message =
"Hello Fayrouz .A. Mamman ❤️\n\nThis little website was made especially for you.\nEvery click reveals another piece of my heart.\n\n— Al-Ameen Umar";

const typing = document.getElementById("typing");

let index = 0;

function typeWriter(){

    if(index < message.length){

        if(message[index] === "\n"){
            typing.innerHTML += "<br>";
        }else{
            typing.innerHTML += message[index];
        }

        index++;

        setTimeout(typeWriter,45);

    }

}

typeWriter();


// ---------- Floating Hearts ----------

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "absolute";
    heart.style.left = Math.random()*100+"vw";
    heart.style.top = "100vh";

    heart.style.fontSize = (15+Math.random()*25)+"px";

    heart.style.opacity = Math.random();

    heart.style.color = "#ff6fa8";

    heart.style.transition = "transform 8s linear, opacity 8s linear";

    hearts.appendChild(heart);

    requestAnimationFrame(()=>{

        heart.style.transform =
        `translateY(-120vh) rotate(${Math.random()*360}deg)`;

        heart.style.opacity = "0";

    });

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,300);


// ---------- Music ----------

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = ()=>{

    if(playing){

        music.pause();

        musicBtn.innerHTML="🎵";

    }else{

        music.play();

        musicBtn.innerHTML="⏸";

    }

    playing=!playing;

};


// ---------- Begin Button ----------

document.getElementById("begin").onclick=()=>{

document.getElementById("story").scrollIntoView({

behavior:"smooth"

});

};


// ---------- Story Section ----------

document.getElementById("story").innerHTML = `

<div style="max-width:900px;margin:auto;text-align:center;">

<h2 style="font-size:55px;margin-bottom:30px;color:#ffd3e6;">
🌹 Our Story Begins
</h2>

<p style="font-size:22px;line-height:2;">

Every beautiful story starts with one unexpected moment.

Meeting you reminded me that even ordinary days can become special because of someone.

This isn't a promise of perfection.

It's simply a sincere wish to keep learning about you, laughing with you, and creating meaningful memories together.

❤️

</p>

</div>

`;