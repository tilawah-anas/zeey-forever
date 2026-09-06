const dhikrs = [
  "سُبْحَانَ ٱللَّهِ",
  "ٱلْحَمْدُ لِلَّهِ",
  "ٱللَّهُ أَكْبَرُ",
  "أَسْتَغْفِرُ ٱللَّهَ",
];

const dhikrText = document.getElementById("dhikrText");
const counter = document.getElementById("counter");

const tasbihButton = document.getElementById("tasbihButton");
const minusButton = document.getElementById("minusButton");
const resetButton = document.getElementById("resetButton");

const dhikrOptions = document.querySelectorAll(".dhikr-option");

let currentDhikr = 0;
let counts = [0, 0, 0, 0];

// Load saved counts
const savedCounts = localStorage.getItem("tasbihCounts");

if (savedCounts) {
  counts = JSON.parse(savedCounts);
}

// Display current dhikr
function updateDisplay() {
  dhikrText.textContent = dhikrs[currentDhikr];
  counter.textContent = counts[currentDhikr];
}

// Save counts
function saveCounts() {
  localStorage.setItem("tasbihCounts", JSON.stringify(counts));
}

// Add one
function increaseCount() {
  counts[currentDhikr]++;
  updateDisplay();
  saveCounts();
}

// Remove one
function decreaseCount() {
  if (counts[currentDhikr] > 0) {
    counts[currentDhikr]--;
    updateDisplay();
    saveCounts();
  }
}

// Reset current dhikr
function resetCount() {
  counts[currentDhikr] = 0;
  updateDisplay();
  saveCounts();
}

// Change dhikr
dhikrOptions.forEach((option) => {
  option.addEventListener("click", () => {
    currentDhikr = Number(option.dataset.dhikr);

    dhikrOptions.forEach((item) => {
      item.classList.remove("active");
    });

    option.classList.add("active");

    updateDisplay();
  });
});

// Buttons
tasbihButton.addEventListener("click", increaseCount);
plusButton.addEventListener("click", increaseCount);
minusButton.addEventListener("click", decreaseCount);
resetButton.addEventListener("click", resetCount);

// Initial display
updateDisplay();
