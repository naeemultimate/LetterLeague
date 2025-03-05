// Load stored scores from localStorage
let naeemScore = localStorage.getItem('naeemScore') ? parseInt(localStorage.getItem('naeemScore')) : 0;
let gioScore = localStorage.getItem('gioScore') ? parseInt(localStorage.getItem('gioScore')) : 0;
let defeeScore = localStorage.getItem('defeeScore') ? parseInt(localStorage.getItem('defeeScore')) : 0;

// Display stored scores on page load
document.getElementById('naeem-score').innerText = naeemScore;
document.getElementById('gio-score').innerText = gioScore;
document.getElementById('defee-score').innerText = defeeScore;


// Function to increase score
function increaseScore(player) {
    if (player === 'naeem') {
        naeemScore++;
        localStorage.setItem('naeemScore', naeemScore);
        document.getElementById('naeem-score').innerText = naeemScore;
    } else if (player === 'gio') {
        gioScore++;
        localStorage.setItem('gioScore', gioScore);
        document.getElementById('gio-score').innerText = gioScore;
    } else if (player === 'defee') {
        defeeScore++;
        localStorage.setItem('defeeScore', defeeScore);
        document.getElementById('defee-score').innerText = gioScore;
    }
}



// Function to reset scores
function resetScores() {
    localStorage.removeItem('naeemScore');
    localStorage.removeItem('gioScore');
    localStorage.removeItem('defeeScore');
    location.reload();
}
