/* =======================================
   LOVE FOR FAYROUZ V2
   Part 1
======================================= */

// ---------- Hero ----------

const hero = document.getElementById("hero");

hero.innerHTML = `

<div class="card">

<h3>Made With ❤️</h3>

<h1>For<br>Fayrouz A. Mamman</h1>

<p id="typing"></p>

<br>

<button id="startBtn">

Begin Our Journey ❤️

</button>

</div>

`;


// ---------- Typewriter ----------

const text =

`Hello Fayrouz ❤️

I created this little website especially for you.

Every click tells another part of the story.

I hope it brings a smile to your face.

— Al-Ameen Umar`;

const typing = document.getElementById("typing");

let i = 0;

function typeWriter(){

    if(i < text.length){

        if(text[i] === "\n"){

            typing.innerHTML += "<br>";

        }else{

            typing.innerHTML += text[i];

        }

        i++;

        setTimeout(typeWriter,40);

    }

}

typeWriter();


// ---------- Start Button ----------

document.getElementById("startBtn").onclick = ()=>{

document.getElementById("story").scrollIntoView({

behavior:"smooth"

});

};


// ---------- Floating Hearts ----------

const hearts = document.getElementById("hearts");

function createHeart(){

const heart = document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(18+Math.random()*18)+"px";

heart.style.opacity=Math.random();

heart.style.transition="8s linear";

hearts.appendChild(heart);

requestAnimationFrame(()=>{

heart.style.transform=`translateY(-120vh) rotate(${Math.random()*360}deg)`;

heart.style.opacity=0;

});

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,300);


// ---------- Music ----------

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=()=>{

if(playing){

music.pause();

musicBtn.innerHTML="🎵";

}else{

music.play();

musicBtn.innerHTML="⏸️";

}

playing=!playing;

};


// ---------- Story ----------

document.getElementById("story").innerHTML=`

<div class="card">

<h2>🌹 Our Story</h2>

<p>

Every meaningful story begins with a simple hello.

Meeting you reminded me that even ordinary moments can become special.

This website is my way of saying thank you for taking the time to explore something I created just for you.

❤️

</p>

</div>

`;