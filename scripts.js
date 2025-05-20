// Fun Fact Interactivity!
const funFacts = [
  "Did you know? 82% of students want more say in school decisions!",
  "Patrick once volunteered 24 hours straight for a good cause.",
  "Fun fact: Lower café prices = more pizza for everyone! 🍕",
  "WNSS has students from more than 10 countries—diversity rules!",
  "Did you know? The best ideas often come from you, not just teachers.",
  "Patrick’s favorite spirit day? Pajama Day! 💤",
  "Student events with music get 60% more participation.",
  "Patrick's #1 belief: School should be fun AND fair.",
];
const factText = document.getElementById('funFactText');
const factBtn = document.getElementById('newFactBtn');
let lastFactIdx = 0;
factBtn.addEventListener('click', () => {
  let idx;
  do {
    idx = Math.floor(Math.random() * funFacts.length);
  } while (idx === lastFactIdx);
  lastFactIdx = idx;
  factText.textContent = funFacts[idx];
});

// Animate goal cards when hovered (bounce)
document.querySelectorAll('.goal-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.07)';
    card.style.boxShadow = '0 8px 30px rgba(30, 64, 175, 0.19)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});
