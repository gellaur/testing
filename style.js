function toggleBio() {
    let bio = document.getElementById("bioSection");
    let facts = document.querySelector(".div-4");

    if (bio.classList.contains("show")) {
        bio.classList.remove("show");
        facts.classList.remove("show");
        setTimeout(() => {
            bio.style.display = "none";
            facts.style.display = "none";
        }, 500); // Delay agar efek animasi tetap terlihat sebelum menghilang
    } else {
        bio.style.display = "block";
        facts.style.display = "block";
        setTimeout(() => {
            bio.classList.add("show");
            facts.classList.add("show");
        }, 10); // Sedikit delay agar transisi berjalan lancar
    }
}

// Galeri Foto dengan Navigasi Next & Previous
let imageIndex = 0;
let imageSources = [
    "https://nayiella.github.io/image/photo-1.jpg",
    "https://nayiella.github.io/image/photo-2.jpg",
    "https://nayiella.github.io/image/photo-3.jpg",
    "https://nayiella.github.io/image/photo-4.jpg",
    "https://nayiella.github.io/image/photo-5.jpg",
    "https://nayiella.github.io/image/photo-6.jpg"
];

function updateGallery() {
    document.getElementById("galleryImage").src = imageSources[imageIndex];
}

function prevImage() {
    imageIndex = (imageIndex - 1 + imageSources.length) % imageSources.length;
    updateGallery();
}

function nextImage() {
    imageIndex = (imageIndex + 1) % imageSources.length;
    updateGallery();
}

window.onload = function () {
    updateGallery();
};
