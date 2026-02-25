// 1. KUMPULKAN SEMUA VARIABEL DI ATAS

let counter = 5;

let lilinMati = 0;

const lagu = document.getElementById('lagu');

const video = document.getElementById('videoUltah');



// 2. FUNGSI UNTUK KLIK KADO

function kadoDiklik() {

    counter--;

    const teks = document.getElementById('teksKlik');

   

    if (counter > 0) {

        teks.innerText = counter + " clicks lagi...";

    } else {

        bukaKado();

    }

}



// 3. FUNGSI SAAT KADO TERBUKA

function bukaKado() {

    // Putar Lagu Sal Priadi

    lagu.play();
    video.onpause = function() {
    lagu.play();
};

// 3. Saat video selesai (Ended), jalankan kembali lagunya
video.onended = function() {
    lagu.play();
};
function kadoDiklik() {
    // Memunculkan section 2
    document.getElementById('section1').classList.add('hidden');
    document.getElementById('section2').classList.remove('hidden');
    
    // MEMULAI LAGU (Penting agar musik jalan setelah interaksi klik)
    lagu.play().catch(error => {
        console.log("Autoplay diblokir, tapi lagu akan jalan saat video selesai.");
    });

    // Jalankan confetti (opsional)
    confetti();
}



    // Efek Konfeti

    confetti({

        particleCount: 200,

        spread: 100,

        origin: { y: 0.6 }

    });



    // Pindah Tampilan

    document.getElementById('section1').classList.add('hidden');

    document.getElementById('section2').classList.remove('hidden');

    document.body.style.backgroundColor = "#d81b60";

}



// 4. LOGIKA AUDIO (MATIKAN LAGU SAAT VIDEO DIPUTAR)

video.onplay = function() {

    lagu.pause();

};



video.onpause = function() {

    // Jika ingin lagu kembali berputar saat video berhenti, aktifkan baris bawah ini:

    // lagu.play();

};



// 5. FUNGSI TIUP LILIN

function tiupLilin(elemen) {

    if (elemen.innerText !== "💨") { // Cek agar tidak diklik dua kali

        elemen.innerText = "💨";

        elemen.style.opacity = "0.3";

        lilinMati++;



        if (lilinMati === 3) {

            document.getElementById('btnTiup').classList.remove('hidden');

        }

    }

}



// 6. FUNGSI MUNCULKAN SURAT AKHIR

function munculkanSurat() {

    document.getElementById('surat').classList.remove('hidden');

    window.scrollTo({

        top: document.body.scrollHeight,

        behavior: 'smooth'

    });
}