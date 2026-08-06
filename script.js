/* =======================================
   LOVE FOR FAYROUZ V2
   Part 1
======================================= */

// ---------- Hero ----------

const hero = document.getElementById("hero");

hero.innerHTML = `

<div class="card">

<h3>Made With ❤️</h3>

<h1>For<br>Fayrouz .A. Mamman</h1>

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
/* =======================================
   LOVE LETTER
======================================= */

document.getElementById("letter").innerHTML = `

<div class="card">

<h2>💌 A Letter For You</h2>

<div id="envelope" style="font-size:120px;cursor:pointer;">
📩
</div>

<div id="letterBox" style="display:none;">

<p id="letterText"></p>

<br>

<button id="galleryBtn">
Our Memories ❤️
</button>

</div>

</div>

`;

const letterMessage = `Dear Fayrouz,

Thank you for opening this little letter.

I didn't want to give you something ordinary.

I wanted to create something that would always be here whenever you wanted to revisit it.

Every line on this website was written with sincerity.

Whether we're sharing conversations, smiles, or quiet moments, I appreciate the chance to know you.

Thank you for being part of this journey.

With respect and admiration,

❤️ Al-Ameen Umar`;

document.getElementById("envelope").onclick = function(){

this.style.display = "none";

document.getElementById("letterBox").style.display = "block";

const target = document.getElementById("letterText");

let x = 0;

function write(){

if(x < letterMessage.length){

if(letterMessage[x] == "\n"){

target.innerHTML += "<br>";

}else{

target.innerHTML += letterMessage[x];

}

x++;

setTimeout(write,30);

}

}

write();

};

document.getElementById("galleryBtn").onclick = function(){

document.getElementById("gallery").scrollIntoView({

behavior:"smooth"

});

};


/* =======================================
   GALLERY
======================================= */

document.getElementById("gallery").innerHTML = `

<div class="card">

<h2>📸 Beautiful Moments</h2>

<p>
Every memory begins with a single moment.
</p>

<div class="gallery">

<img src="assets/images/Love5.jpg">

<img src="assets/images/Love7.jpg">

<img src="assets/images/Love2.jpg">

<img src="assets/images/Love4.png">

</div>

<br>

<button id="reasonBtn">

Continue ❤️

</button>

</div>

`;

document.getElementById("reasonBtn").onclick = function(){

document.getElementById("reasons").scrollIntoView({

behavior:"smooth"

});

};


/* =======================================
   REASONS
======================================= */

document.getElementById("reasons").innerHTML = `

<div class="card">

<h2>💖 Things I Admire About You</h2>

<p>

🌹 Your smile.<br><br>

🌹 Your kindness.<br><br>

🌹 Your strength.<br><br>

🌹 The way you make ordinary moments feel special.<br><br>

🌹 The person you're becoming every day.

</p>

<br>

<button id="surpriseBtn">

One More Surprise 🎁

</button>

</div>

`;

document.getElementById("surpriseBtn").onclick = function(){

document.getElementById("surprise").scrollIntoView({

behavior:"smooth"

});

};
/* =======================================
   SURPRISE
======================================= */

document.getElementById("surprise").innerHTML = `

<div class="card">

<h2>🎁 One Last Surprise</h2>

<div id="giftBox" style="font-size:120px;cursor:pointer;">
🎁
</div>

<div id="giftMessage" style="display:none;">

<h2>❤️ Dear Fayrouz ❤️</h2>

<p>

Thank you for visiting this little world I created.

It isn't about expensive gifts.

It's about showing that someone is worth time, effort, and creativity.

No matter what the future brings, I hope this website reminds you that you are appreciated.

🌹

</p>

<br>

<button id="finishBtn">

The Final Chapter ✨

</button>

</div>

</div>

`;

document.getElementById("giftBox").onclick = function(){

this.style.display = "none";

document.getElementById("giftMessage").style.display = "block";

};

document.getElementById("finishBtn").onclick = function(){

document.getElementById("ending").scrollIntoView({

behavior:"smooth"

});

};


/* =======================================
   ENDING
======================================= */

document.getElementById("ending").innerHTML = `

<div class="card">

<div id="heart" style="font-size:120px;animation:beat 1s infinite;">

❤️

</div>

<h1>Thank You</h1>

<h2>

Al-Ameen Umar ❤️ Fayrouz A. Mamman

</h2>

<p>

Every story starts with one moment.

Thank you for sharing this one with me.

I hope this website made you smile.

✨ The End... or maybe just the beginning. ✨

</p>

<br>

<button onclick="window.scrollTo({top:0,behavior:'smooth'})">

Back To The Beginning 🌹

</button>

</div>

`;


/* =======================================
   SIMPLE SPARKLES
======================================= */

function sparkle(){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize="18px";

star.style.opacity=".8";

star.style.pointerEvents="none";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2000);

}

setInterval(sparkle,600);

/* =======================================
   LOADING SCREEN
======================================= */

window.addEventListener("load",()=>{

setTimeout(()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},1500);

},3000);

});

// ==============================
// LIGHTBOX
// ==============================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

};

});

closeBtn.onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};

// =========================
// SURPRISE
// =========================

const surpriseBtn=document.getElementById("surpriseBtn");

const surprise=document.getElementById("surpriseMessage");

surpriseBtn.onclick=()=>{

surprise.style.display="block";

surpriseBtn.style.display="none";

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

};

// ======================================
// YES / NO LOVE GAME
// ======================================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const answer = document.getElementById("answer");
const buttons = document.getElementById("buttons");

let level = 0;

const funnyReplies = [

"🥺 Are you sure?",

"😢 Think again...",

"🙈 I didn't see that...",

"😂 Wrong answer!",

"❤️ Try YES instead!",

"🌹 You almost clicked it!",

"😜 Nice try!",

"💖 I'm faster than you!",

"🤣 Nope!",

"🥹 Pleaseeeee..."

];

const yesTexts = [

"YES ❤️",

"YES PLEASE 🥺",

"CLICK ME 😍",

"I LOVE YOU ❤️",

"PRESS ME 💖",

"YOU KNOW YOU WANT TO 😁",

"JUST SAY YES 🥰",

"😘 ONE MORE CLICK"

];

buttons.addEventListener("mousemove",(e)=>{

const rect = buttons.getBoundingClientRect();

const btnRect = noBtn.getBoundingClientRect();

const dx=e.clientX-(btnRect.left+btnRect.width/2);

const dy=e.clientY-(btnRect.top+btnRect.height/2);

const distance=Math.sqrt(dx*dx+dy*dy);

if(distance<70){

const maxX=rect.width-noBtn.offsetWidth;

const maxY=rect.height-noBtn.offsetHeight;

noBtn.style.left=Math.random()*maxX+"px";

noBtn.style.top=Math.random()*maxY+"px";

level++;

yesBtn.style.transform=`scale(${1+level*0.15})`;

if(level<yesTexts.length){

yesBtn.innerHTML=yesTexts[level];

}

answer.innerHTML=funnyReplies[Math.floor(Math.random()*funnyReplies.length)];

}

});

yesBtn.onclick=()=>{

document.body.style.background="linear-gradient(#ff4f91,#ff99cc)";

answer.innerHTML=`

<h1 style="font-size:60px;">

🥰❤️ YAYYYYY!! ❤️🥰

</h1>

<h2>

You just made me the happiest person alive!

</h2>

<p>

Thank you, Fayrouz.

This little website was made especially for you.

I hope every smile you had while exploring it was real.

❤️

Love,

<b>Al-Ameen Umar</b>

</p>

`;

heartConfetti();

};

/* =======================================
   START EXPERIENCE
======================================= */

const loader = document.getElementById("loader");
const startBtn = document.getElementById("startExperience");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

startBtn.onclick = () => {

    music.play().catch(() => {
        console.log("Music playback was blocked until user interaction.");
    });

    playing = true;

    musicBtn.innerHTML = "⏸️";

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    },1000);

};

musicBtn.onclick = () => {

    if(playing){

        music.pause();

        musicBtn.innerHTML="🎵";

    }else{

        music.play();

        musicBtn.innerHTML="⏸️";

    }

    playing=!playing;

};