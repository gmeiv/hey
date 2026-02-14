

document.querySelectorAll('.flower-container').forEach(el => {
  el.innerHTML = `<div class="flower-top">
                  <div class="flower-petal flower-petal__1"></div>
                  <div class="flower-petal flower-petal__2"></div>
                  <div class="flower-petal flower-petal__3"></div>
                  <div class="flower-petal flower-petal__4"></div>
                  <div class="flower-petal flower-petal__5"></div>
                  <div class="flower-petal flower-petal__6"></div>
                  <div class="flower-petal flower-petal__7"></div>
                  <div class="flower-petal flower-petal__8"></div>
                  <div class="flower-circle"></div>
                  <div class="flower-light flower-light__1"></div>
                  <div class="flower-light flower-light__2"></div>
                  <div class="flower-light flower-light__3"></div>
                  <div class="flower-light flower-light__4"></div>
                  <div class="flower-light flower-light__5"></div>
                  <div class="flower-light flower-light__6"></div>
                  <div class="flower-light flower-light__7"></div>
                  <div class="flower-light flower-light__8"></div>
                  </div>

                  <div class="flower-bottom">
                  <div class="flower-stem"></div>
                  <div class="flower-leaf flower-leaf__1"></div>
                  <div class="flower-leaf flower-leaf__2"></div>
                  <div class="flower-leaf flower-leaf__3"></div>
                  <div class="flower-leaf flower-leaf__4"></div>
                  <div class="flower-leaf flower-leaf__5"></div>
                  <div class="flower-leaf flower-leaf__6"></div>

                  <div class="flower-grass flower-grass__1"></div>
                  <div class="flower-grass flower-grass__2"></div>
                  <div class="flower-grass flower-grass__3"></div>
                  <div class="flower-grass flower-grass__4"></div>
                  </div>`;
    });

    const flowers = Array.from(document.querySelectorAll('.flower-container'));
    const animatedClass = 'animate';
    
    flowers[0].classList.add(animatedClass);
    
    setTimeout(() => {
      for (let i = 1; i <= 2 && i < flowers.length; i++) {
        flowers[i].classList.add(animatedClass);
      }
    
      let remaining = flowers.slice(3); 
      const interval = setInterval(() => {
        if (remaining.length === 0) {
          clearInterval(interval);
          return;
        }
    
        const randomIndex = Math.floor(Math.random() * remaining.length);
        const el = remaining.splice(randomIndex, 1)[0]; 
        el.classList.add(animatedClass);
      }, 500);
    
    }, 3000);

    const texts = [
  ,
  "I love you",
  "More than you know",
  "More than I love myself",
  "More than you will say you love me", 
  "Maybe my all of my body parts",
  "Will be jealous of you",
  "Because you occupied my heart",
  "Occupied my mind too", 
  "You have my soul in your hands",
  "You have my life in your eyes",
  "And even the brightest stars",
  "Will be jealous of your shine",
  "Even the radiating sun",
  "Will be dazzled by your light",
  "And I will be forever grateful",
  "To have you in my life"
];

let index = 0;
const textElement = document.querySelector(".intro-text");

// Function to fade in the text
function fadeInText(move = true) {
  if (move) {
    // First text: fade in + move up + glow
    textElement.style.animation = `
      fadeIn 3s ease forwards,
      glow 3s ease-in-out infinite alternate 2s,
      moveUp 3s ease 2.5s forwards
    `;
  } else {
    // Subsequent texts: fade in only (no move)
    textElement.style.animation = `
      fadeIn 3s ease forwards,
      glow 3s ease-in-out infinite alternate 2s
    `;
  }
}

// Function to fade out the text
function fadeOutText() {
  textElement.style.animation = "fadeOut 1.5s ease forwards";
}

// Function to change text content
function changeText() {
  fadeOutText();

  setTimeout(() => {
    index = (index + 1) % texts.length;
    textElement.textContent = texts[index];

    // For first text only, allow move; others just fade
    fadeInText(false);
  }, 1500); // matches fadeOut duration
}

// Start with the first text moving
fadeInText(true);

// Change text every 5 seconds
setInterval(changeText, 5000);

