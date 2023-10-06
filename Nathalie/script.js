/** Ændre profil billede */
// Få fat i alle elementer med klassen "changingImage"
const changingImages = document.querySelectorAll('.profile__images');

// En liste med de forskellige billedkilder, du vil skifte mellem
const imageSources = ['images/swoosh-profile.png', 'images/swoosh-profile3.png', 'images/swoosh-profile2.png', 'images/swoosh-profile4.png'];

// En variabel til at spore det aktuelle billede for hver klasse
const currentImageIndexes = Array(changingImages.length).fill(0);

// Funktion til at ændre billedet for hvert element med klassen "changingImage"
function changeImages() {
  changingImages.forEach((image, index) => {
    // Opdater src-attributten med den næste kilde i listen
    image.src = imageSources[currentImageIndexes[index]];

    // Øg indekset, og sørg for, at det forbliver inden for listen
    currentImageIndexes[index] = (currentImageIndexes[index] + 1) % imageSources.length;
  });
}

// Sæt intervallet til at ændre billederne hvert 4. sekund (4000 millisekunder)
setInterval(changeImages, 4000);
