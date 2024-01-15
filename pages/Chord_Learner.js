const chords = [
    { name: 'C', audio: '/assets/Chords/C-Chord.wav' },
    { name: 'G', audio: '/assets/Chords/G-Chord.wav' },
    { name: 'D', audio: '/assets/Chords/D-Chord.wav' },
    { name: 'A', audio: '/assets/Chords/A-Chord.wav' },
    { name: 'E', audio: '/assets/Chords/E-Chord.wav' },
];

const optionsContainer = document.getElementById('optionsContainer');
let currentChordIndex = 0;

document.getElementById('playChordBtn').addEventListener('click', playChord);
document.getElementById('nextChordBtn').addEventListener('click', nextChord);

function playChord() {
    const currentChord = chords[currentChordIndex];
    const audio = new Audio(currentChord.audio);
    audio.play();
    generateOptions(currentChord.name);
}

function nextChord() {
    // Move to the next chord or loop back to the first chord
    currentChordIndex = (currentChordIndex + 1) % chords.length;
    playChord();
}

function generateOptions(correctChord) {
    optionsContainer.innerHTML = '';

    // Create an array with three random chords (excluding the correct chord)
    const randomChords = chords.filter(chord => chord.name !== correctChord);
    const shuffledChords = [...randomChords].sort(() => Math.random() - 0.5);

    // Add the correct chord to the options array at a random position
    const correctChordPosition = Math.floor(Math.random() * 4);
    shuffledChords.splice(correctChordPosition, 0, chords.find(chord => chord.name === correctChord));

    // Generate options
    for (let i = 0; i < 4; i++) {
        const option = document.createElement('div');
        option.classList.add('option');
        option.textContent = shuffledChords[i].name;
        option.addEventListener('click', () => checkAnswer(shuffledChords[i].name, correctChord, option));
        optionsContainer.appendChild(option);
    }
}

function checkAnswer(selectedChord, correctChord, optionElement) {
    if (selectedChord === correctChord) {
        alert('Correct! Well done.');
        optionElement.style.backgroundColor = 'green';
    } else {
        alert('Incorrect. Try again!');
        optionElement.style.backgroundColor = 'red';
    }
}
