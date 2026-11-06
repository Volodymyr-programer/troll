let smile = document.getElementById("smile");
let button = document.getElementById("but");
let text = document.getElementById("text");

let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let d4 = document.getElementById("d4");
let d5 = document.getElementById("d5");

let count = 0;
let dmg1 = false;
let dmg2 = false;
let dmg3 = false;
let dmg4 = false;
let dmg5 = false;


const audio = new Audio('laser.mp3');
audio.preload = "auto";

function playLaser() {
    audio.currentTime = 0;          // перемотуємо на початок
    audio.play().catch(() => {});   // ігноруємо блокування браузера
}


document.addEventListener("click", () => {
    audio.play().then(() => {
        audio.pause();
        audio.currentTime = 0;
    }).catch(() => {});
}, { once: true });


d1.addEventListener("mousemove", () => { if (dmg1) restart(); });
d2.addEventListener("mousemove", () => { if (dmg1) restart(); });

d4.addEventListener("mousemove", () => { if (dmg2) restart(); });
d5.addEventListener("mousemove", () => { if (dmg2) restart(); });

d3.addEventListener("mousemove", () => { if (dmg3) restart(); });
d4.addEventListener("mousemove", () => { if (dmg3) restart(); });
d5.addEventListener("mousemove", () => { if (dmg3) restart(); });

d1.addEventListener("mousemove", () => { if (dmg4) restart(); });
d2.addEventListener("mousemove", () => { if (dmg4) restart(); });
d4.addEventListener("mousemove", () => { if (dmg4) restart(); });
d5.addEventListener("mousemove", () => { if (dmg4) restart(); });


function wave1() {
    count = 0;
    text.style.display = "none";

    d1.style.background = "darksalmon";
    d2.style.background = "darksalmon";

    setTimeout(() => {
        playLaser();
        d1.style.background = "red";
        d2.style.background = "red";
        dmg1 = true;
    }, 1000);

    setTimeout(() => {
        dmg1 = false;
        d1.style.background = "transparent";
        d2.style.background = "transparent";
        d1.style.pointerEvents = "none";
        d2.style.pointerEvents = "none";
        wave2();
    }, 2000);
}

function wave2() {
    d4.style.pointerEvents = "auto";
    d5.style.pointerEvents = "auto";

    d4.style.background = "darksalmon";
    d5.style.background = "darksalmon";

    setTimeout(() => {
        playLaser();
        d4.style.background = "red";
        d5.style.background = "red";
        dmg2 = true;
    }, 1000);

    setTimeout(() => {
        dmg2 = false;
        d4.style.background = "transparent";
        d5.style.background = "transparent";
        d4.style.pointerEvents = "none";
        d5.style.pointerEvents = "none";
        wave3();
    }, 2000);
}

function wave3() {
    d3.style.pointerEvents = "auto";
    d4.style.pointerEvents = "auto";
    d5.style.pointerEvents = "auto";

    d3.style.background = "darksalmon";
    d4.style.background = "darksalmon";
    d5.style.background = "darksalmon";

    setTimeout(() => {
        playLaser();
        d3.style.background = "red";
        d4.style.background = "red";
        d5.style.background = "red";
        dmg3 = true;               
    }, 1000);

    setTimeout(() => {
        dmg3 = false;
        d3.style.background = "transparent";
        d4.style.background = "transparent";
        d5.style.background = "transparent";
        d3.style.pointerEvents = "none";
        d4.style.pointerEvents = "none";
        d5.style.pointerEvents = "none";
        wave4();
    }, 2000);
}

function wave4() {
    d1.style.pointerEvents = "auto";
    d2.style.pointerEvents = "auto";
    d4.style.pointerEvents = "auto";
    d5.style.pointerEvents = "auto";

    d1.style.background = "darksalmon";
    d2.style.background = "darksalmon";
    d4.style.background = "darksalmon";
    d5.style.background = "darksalmon";

    setTimeout(() => {
        playLaser();
        d1.style.background = "red";
        d2.style.background = "red";
        d4.style.background = "red";
        d5.style.background = "red";
        dmg4 = true;
    }, 1000);

    setTimeout(() => {
        dmg4 = false;
        d1.style.background = "transparent";
        d2.style.background = "transparent";
        d4.style.background = "transparent";
        d5.style.background = "transparent";
        d1.style.pointerEvents = "none";
        d2.style.pointerEvents = "none";
        d4.style.pointerEvents = "none";
        d5.style.pointerEvents = "none";
        finish();
    }, 2000);
}

function finish() {
 smile.style.backgroundImage = "url('good.png')";
 text.style.display = "block";
 text.innerText = "ну добре, ти мене перміг,але";
 setTimeout(() => {
        smile.style.display = "none";
        text.style.display = "none";
        rick()

    }, 1000);
}
function rick(){
   const secretAudio = new Audio('secret.mp3');

secretAudio.currentTime = 0;
secretAudio.play().catch(() => {});
let img1 = document.createElement("div")
document.body.appendChild(img1)
 img1.style.backgroundImage = "url('secret2.jfif')";
 img1.style.position = "fixed";
    img1.style.top = "0";
    img1.style.left = "0";
    img1.style.width = "100vw";
    img1.style.height = "100vh";
    img1.style.zIndex = "999";
    img1.style.backgroundImage = "url('secret2.jfif')";
    img1.style.backgroundSize = "cover";
    img1.style.backgroundRepeat = "no-repeat";
    img1.style.backgroundPosition = "center";
}

function restart() {
    window.location.reload();
}


button.addEventListener("mouseenter", () => {

    count++;

    button.style.left = Math.floor(Math.random() * 75) + "%";
    button.style.top = Math.floor(Math.random() * 75) + "%";

    if (count === 5) {
        smile.style.backgroundImage = "url('normal.png')";
        text.innerText = "Та нажми ти нарешті";
    }

    if (count === 10) {
        text.innerText = "Кнопка прям перед тобою";
    }

    if (count === 15) {
        text.innerText = "Очі розуй";
    }

    if (count === 20) {
        text.innerText = "Будь ласка, нажми на кнопку";
    }

    if (count === 25) {
        smile.style.backgroundImage = "url('bad.png')";
        text.innerText = "ТИ МЕНЕ ЗАДОВБАВ!!";
        text.style.color = "red";
        button.style.display = "none";

        setTimeout(() => {
            wave1();
        }, 2000);
    }
});