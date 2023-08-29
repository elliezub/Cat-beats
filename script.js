const seemore = document.getElementById('seemore');
const songs = document.getElementsByClassName('songs');

function revealSongs() {
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].classList.contains('hidden')) {
            songs[i].classList.remove('hidden')
            seemore.innerText = "Show less"
        } else {
            songs[i].classList.add('hidden')
            seemore.innerText = "Load more cat songs"
        }
    }
}

