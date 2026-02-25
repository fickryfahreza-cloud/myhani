let counter = 5;
let lilinMati = 0;
const lagu = document.getElementById('lagu');
const video = document.getElementById('videoUltah');

function kadoDiklik() {
    counter--;
    const teks = document.getElementById('teksKlik');
    
    if (counter > 0) {
        teks.innerText = counter + " clicks lagi...";
    } else {
        bukaKado();
    }
}

function bukaKado() {
    // Sembunyikan intro, munculkan konten
    document.getElementById('section1').classList.add('hidden');
    document.getElementById('section2').classList.remove('hidden');
    document.body.style.backgroundColor = "#d81b60";

    // Putar Musik
    lagu.play().catch(() => console.log("Interaksi diperlukan untuk musik"));

    // Efek Konfeti
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
}

// Kontrol Audio saat Video diputar
video.onplay = () => lagu.pause();
video.onpause = () => lagu.play();
video.onended = () => lagu.play();

function tiupLilin(elemen) {
    if (elemen.innerText !== "💨") {
        elemen.innerText = "💨";
        elemen.style.opacity = "0.3";
        lilinMati++;

        if (lilinMati === 3) {
            document.getElementById('btnTiup').classList.remove('hidden');
        }
    }
}

function munculkanSurat() {
    document.getElementById('surat').classList.remove('hidden');
    setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
}
