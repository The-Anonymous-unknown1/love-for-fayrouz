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
// ===============================
// LOVE LETTER SECTION
// ===============================

document.getElementById("letter").innerHTML = `

<div class="love-letter">

<h2>💌 A Letter For You 💌</h2>

<div id="envelope">
📩
</div>

<div id="letterContent">

<p id="typedLetter"></p>

<button id="nextGallery">
Our Dream ❤️
</button>

</div>

</div>

`;

const envelope = document.getElementById("envelope");
const letter = document.getElementById("typedLetter");
const nextGallery = document.getElementById("nextGallery");

nextGallery.style.display = "none";

const loveLetter = `

Dear Fayrouz,

If you've reached this part of the website...

thank you.

I wanted to create something different.

Not because expensive gifts matter...

but because time and effort are gifts too.

Every line here comes from a sincere heart.

You deserve kindness.

You deserve respect.

You deserve someone who appreciates your smile,
your dreams,
and the amazing person you are.

Whether this becomes the beginning of something beautiful...

or simply a wonderful memory...

I'm grateful that our paths crossed.

Thank you for being you.

❤️

With sincerity,

Al-Ameen Umar

`;

envelope.onclick = () => {

    envelope.style.display = "none";

    document.getElementById("letterContent").style.display = "block";

    let i = 0;

    function typeLetter(){

        if(i < loveLetter.length){

            if(loveLetter[i] === "\n"){
                letter.innerHTML += "<br>";
            }else{
                letter.innerHTML += loveLetter[i];
            }

            i++;

            setTimeout(typeLetter,30);

        }else{

            nextGallery.style.display = "inline-block";

        }

    }

    typeLetter();

};

nextGallery.onclick = ()=>{

document.getElementById("gallery").scrollIntoView({

behavior:"smooth"

});

};

// ===============================
// HERO SECTION
// ===============================

document.getElementById("hero").innerHTML = `

<div class="hero-container">

    <div class="glass-card">

        <h3>Made With ❤️ Especially For</h3>

        <h1>
            Fayrouz<br>
            A. Mamman
        </h1>

        <p id="heroTyping"></p>

        <button id="beginStory">
            Begin Our Story ❤️
        </button>

    </div>

</div>

`;

const heroMessage =
"Hello Fayrouz ❤️\n\nThis isn't just a website...\nIt's a small journey created especially for you.\n\nEvery click reveals another piece of my heart.\n\n— Al-Ameen Umar";

const heroTyping = document.getElementById("heroTyping");

let heroIndex = 0;

function typeHero(){

    if(heroIndex < heroMessage.length){

        if(heroMessage[heroIndex] === "\n"){
            heroTyping.innerHTML += "<br>";
        }else{
            heroTyping.innerHTML += heroMessage[heroIndex];
        }

        heroIndex++;

        setTimeout(typeHero,40);

    }

}

typeHero();

document.getElementById("beginStory").onclick = () => {

    document.getElementById("story").scrollIntoView({
        behavior:"smooth"
    });

};