// the Set stores my watched movies by number, and automatically prevents duplicates
const watched = new Set();

// this function runs every time a "Mark as Watched" button is clicked
// then the num parameter matches the card id, card-1, card-2, etc.,
function toggleWatched(num) {
    // grabs the card and button that was clicked
    const card = document.getElementById('card-' + num);
    const btn = card.querySelector('.watch-btn');

    if (watched.has(num)) {
        // IFit's already in the Set, then remove it and reset the card back to normal
        watched.delete(num);
        card.style.opacity = '1';
        btn.textContent = 'Mark as Watched';
    } else {
        // if it's not in the Set, add it and dim the card to show that it's been watched
        watched.add(num);
        card.style.opacity = '0.5';
        btn.textContent = '✓ Watched';
    }

    // recalibrate how many are in the Set and then update the counter in the header for the user to see
    document.getElementById('progress').textContent = watched.size + '/10 watched';
}