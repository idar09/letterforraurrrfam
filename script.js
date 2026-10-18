
const message = `Memiliki teman yang baik adalah sebuah berkah.

Kadang aku merasa aneh ketika orang-orang mulai membandingkan kita. Tentang nilai, tentang siapa yang lebih unggul, tentang siapa yang lebih cepat mencapai sesuatu. Padahal, aku tidak pernah melihat persahabatan kita sebagai sebuah perlombaan.

Aku senang melihat kalian berhasil. Aku ingin bisa ikut bangga tanpa diam-diam merasa bahwa keberhasilan kalian berarti aku gagal. Aku ingin bisa mendengar kabar baik tentang kalian tanpa bertanya dalam hati, "Lalu bagaimana denganku?"

Mungkin terkadang perbandingan membuat semuanya terasa sedikit rumit. Hal-hal kecil yang sebenarnya tidak perlu dipikirkan bisa menjadi besar karena terlalu banyak dipikirkan. Dan aku takut, suatu hari nanti, semua itu justru membuat kita saling salah paham.

Aku tidak ingin nilai menjadi alasan kita menjauh. Aku tidak ingin pencapaian menjadi alasan kita merasa harus bersaing. Aku juga tidak ingin perkataan orang lain perlahan membuat kita melihat satu sama lain sebagai lawan, padahal sejak awal kita hanya sahabat yang sedang tumbuh bersama.

Kalau suatu hari kita berbeda pendapat, aku berharap kita masih mau saling mendengarkan. Kalau ada sesuatu yang membuat salah satu dari kita sakit hati, semoga kita bisa membicarakannya sebelum semuanya menjadi terlalu jauh. Dan kalau ada masa ketika kita sama-sama keras kepala, semoga kita tetap ingat bahwa persahabatan ini jauh lebih berharga daripada memenangkan sebuah perdebatan kecil.

Karena aku tidak ingin menjadi lebih baik dari kalian.

Aku juga tidak ingin kalian menjadi lebih baik dariku.

Aku hanya ingin kita sama-sama menjadi versi terbaik dari diri kita sendiri, tanpa harus merasa salah satu dari kita harus kalah.

Semoga kita bisa terus saling mendukung, bahkan ketika jalan kita tidak selalu sama. Semoga keberhasilan salah satu dari kita selalu bisa menjadi sesuatu yang dirayakan bersama, bukan sesuatu yang membuat yang lain merasa kurang.

Dan yang paling penting, semoga kita tidak kehilangan satu sama lain hanya karena hal-hal kecil yang sebenarnya bisa dibicarakan.

Aku berharap kita akan tetap menjadi sahabat, bahkan setelah banyak hal berubah.`;

let isTyping = false;

function showLetter() {
  if (isTyping) return;

  const introText = document.getElementById("introText");
  const readButton = document.getElementById("readButton");
  const letterBox = document.getElementById("letterBox");
  const typedText = document.getElementById("typedText");

  if (!letterBox || !typedText) {
    alert("Elemen surat tidak ditemukan. Periksa kembali index.html.");
    return;
  }

  isTyping = true;

  if (introText) {
    introText.style.display = "none";
  }

  if (readButton) {
    readButton.style.display = "none";
  }

  letterBox.style.display = "block";
  typedText.textContent = "";

  // Tampilkan slide surat terlebih dahulu
  changeSlide(1);

  let i = 0;

  function typeWriter() {
    if (i < message.length) {
      typedText.textContent += message.charAt(i);
      i++;

      // Mengikuti tulisan di dalam kotak surat
      letterBox.scrollTop = letterBox.scrollHeight;

      const currentChar = message.charAt(i - 1);
      const delay = currentChar === "\n" ? 180 : 30;

      setTimeout(typeWriter, delay);
    } else {
      isTyping = false;
    }
  }

  typeWriter();
}

function changeSlide(slideNumber) {
  const slides = document.querySelectorAll(".slide");
  const nextSlide = document.getElementById("slide" + slideNumber);

  if (!nextSlide) {
    console.error("Slide " + slideNumber + " tidak ditemukan.");
    return;
  }

  // Hentikan video dari slide sebelumnya
  document.querySelectorAll(".slide video").forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });

  // Sembunyikan semua slide
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Tampilkan slide yang dipilih
  nextSlide.classList.add("active");

  // Kembalikan posisi scroll ke atas
  const letterBox = document.getElementById("letterBox");

  if (letterBox) {
    letterBox.scrollTop = 0;
  }
}
