const animateButton = document.getElementById("animateButton");
const photoContainer = document.getElementById("photoContainer");
const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg",
];


window.addEventListener('load', function() {
  const audio = document.getElementById("bgMusic");
  audio.play();
});


let currentPhotoIndex = 0;

function changePhoto() {
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  const newPhoto = photos[currentPhotoIndex];
  const img = document.createElement("img");
  img.src = newPhoto;
  img.classList.add("photo");
  photoContainer.innerHTML = "";
  photoContainer.appendChild(img);
}





// Automatically change photo every 5 seconds
setInterval(changePhoto, 5000);



const typingText = document.getElementById("typingText");

const sentence =
  "Happy Birthday, Ifunanya! Wishing you a day filled with joy, love, and beautiful moments that make your heart smile. May this year bring you happiness and success in everything you do. Cheers to another amazing year ahead! 🎉🎂";
let index = 0;

function typeText() {
  if (index < sentence.length) {
    typingText.textContent += sentence.charAt(index);
    index++;
    setTimeout(typeText, 50);
  }
}

// Start the typing animation
typeText();




      particlesJS("particles-js", {
        particles: {
          number: {
            value: 100, // Adjust the number of particles
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#f4ec38", // Set the color of the particles
          },
          shape: {
            type: "star", // Set the shape of the particles (circle, edge, triangle, polygon, star, image)
            stroke: {
              width: 0,
              color: "#a71212",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5, // Set the opacity of the particles
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5, // Set the size of the particles
            random: true,
            anim: {
              enable: true,
              speed: 20,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            
          },
          move: {
            enable: true,
            speed: 7, // Adjust the speed of the particles
            direction: "bottom", // Set the direction of the particles' movement (none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left)
            random: true,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 100,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    