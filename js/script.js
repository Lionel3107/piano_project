// Get all the keys
const pianoKeys = document.querySelectorAll('.piano-keys .key')
// Get the valume slider
const volumeSlider = document.querySelector('.volume-slider input')
// Declare an audio element
// Get the chekbox
const checkBox = document.querySelector('.keys-checkbox input')
    let audio = new Audio('./tunes/a.wav');

// The pressed keys
let allKeys = [];

// Play sound accordinnd to the clicked key
const playSound = (key) => {
    audio.src = `./tunes/${key}.wav`
    audio.play()
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add('active')
    setTimeout(() => {
        clickedKey.classList.remove('active')
    }, 150)
}

// Function for each key pressed on tne keyboard
const pressKey = (e) => {
    if (allKeys.includes(e.key)) playSound(e.key)
}

// Loop over keys array and add an event listener to each key
pianoKeys.forEach((key) => {
    allKeys.push(key.dataset.key)
    key.addEventListener('click', () => playSound(key.dataset.key))
})

// Handle the volume according to the value of the range input
const handleVolumeChange = (e)=>{
    audio.volume = e.target.value;
}
const showHidekeys = () => {
    pianoKeys.forEach(key =>key.classList.toggle('hide'));
}


// Add an event listener to the document
document.addEventListener('keydown', pressKey)

// Add a event listener to the volume slider
volumeSlider.addEventListener('change', handleVolumeChange)

// Add an event listener to the checkbox
checkBox.addEventListener('click', showHidekeys)