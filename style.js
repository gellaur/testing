// Toggle animasi muncul/hilangnya biodata
function toggleBio() {
    let bio = document.getElementById("bioSection");
    if (bio.classList.contains("show")) {
        bio.classList.remove("show");
    } else {
        bio.classList.add("show");
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
    console.log("Gambar saat ini:", imageSources[imageIndex]); // Debugging
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
