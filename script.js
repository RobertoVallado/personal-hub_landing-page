const words = [
  "Software Developer",
  "Security Researcher",
  // "Problem Solver",
  // "Développeur logiciel",
  "Spécialiste en sécurité",
  // "Adepte du code propre",
  // "Résolveur de problèmes",
  "Développeur full-stack",
  // "Bounty Hunter",
  // "Hacker"
];

const typed = document.getElementById("typed");

let wordIndex = Math.floor(Math.random() * words.length);
let charIndex = 0;
let deleting = false;

function pickRandomIndex(exclude) {
  if (words.length === 1) return 0;

  let i;
  do {
    i = Math.floor(Math.random() * words.length);
  } while (i === exclude);

  return i;
}

function type() {
  if (!typed) return;

  const currentWord = words[wordIndex];

  if (!deleting) {
    typed.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(type, 900); // pause at full word
      return;
    }
  } else {
    typed.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = pickRandomIndex(wordIndex); // 🎲
    }
  }

  setTimeout(type, deleting ? 30 : 70);
}

window.addEventListener("DOMContentLoaded", () => {
    type();

    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
