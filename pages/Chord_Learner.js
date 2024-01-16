const chords = [
    { name: 'C', audio: '/assets/Chords/C-Chord.wav' },
    { name: 'G', audio: '/assets/Chords/G-Chord.wav' },
    { name: 'D', audio: '/assets/Chords/D-Chord.wav' },
    { name: 'A', audio: '/assets/Chords/A-Chord.wav' },
    { name: 'E', audio: '/assets/Chords/E-Chord.wav' },
];

const optionsContainer = document.getElementById('optionsContainer');
let currentChordIndex = 0;
let points = 0;
let hasAnswered = false; // Flag to track whether the user has answered the current question

document.getElementById('playChordBtn').addEventListener('click', playChord);
document.getElementById('nextChordBtn').addEventListener('click', nextChord);

function playChord() {
    if (hasAnswered) {
        return; // If user has already answered, do nothing
    }

    const currentChord = chords[currentChordIndex];
    const audio = new Audio(currentChord.audio);
    audio.play();
}

function nextChord() {
    // Move to the next chord or loop back to the first chord
    currentChordIndex = (currentChordIndex + 1) % chords.length;
    hasAnswered = false; // Reset the flag for the next question
    generateOptions(); // Regenerate options for the new chord
}

function generateOptions() {
    optionsContainer.innerHTML = '';

    const correctChord = chords[currentChordIndex];

    // Create an array with three random chords (excluding the correct chord)
    const randomChords = chords.filter(chord => chord.name !== correctChord.name);
    const shuffledChords = [...randomChords].sort(() => Math.random() - 0.5);

    // Add the correct chord to the options array at a random position
    const correctChordPosition = Math.floor(Math.random() * 4);
    shuffledChords.splice(correctChordPosition, 0, correctChord);

    // Generate options
    for (let i = 0; i < 4; i++) {
        const option = document.createElement('div');
        option.classList.add('option');
        option.textContent = shuffledChords[i].name;
        option.addEventListener('click', () => checkAnswer(shuffledChords[i].name, correctChord.name, option));
        optionsContainer.appendChild(option);
    }
}

function checkAnswer(selectedChord, correctChord, optionElement) {
    if (hasAnswered) {
        return; // If user has already answered, do nothing
    }

    hasAnswered = true; // Set the flag to indicate that the user has answered
    if (selectedChord === correctChord) {
        playSound('/assets/sounds/correct.mp3'); // Play correct sound
        optionElement.style.backgroundColor = 'green';
        points += 10; // Add points for correct answer
        displayPoints();
    } else {
        playSound('/assets/sounds/incorrect.mp3'); // Play incorrect sound
        optionElement.style.backgroundColor = 'red';
         // Display the correct answer in green
         const correctOption = Array.from(optionsContainer.children).find(option =>
            option.textContent.trim() === correctChord.trim()
        );
        if (correctOption) {
            correctOption.style.backgroundColor = 'green';
        }
    }
}

function displayPoints() {
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (pointsDisplay) {
        pointsDisplay.textContent = `Points: ${points}`;
    }
}

function playSound(soundPath) {
    const sound = new Audio(soundPath);
    sound.play();
}

// Initial options generation
generateOptions();
