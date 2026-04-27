// Track watched movies using a Set (no duplicates)
const watched = new Set();

// Toggle a movie's watched state
function toggleWatched(num) {
    const card = document.getElementById('card-' + num);
    const btn = card.querySelector('.watch-btn');

    if (watched.has(num)) {
        // Unmark as watched
        watched.delete(num);
        card.style.opacity = '1';
        btn.textContent = 'Mark as Watched';
    } else {
        // Mark as watched
        watched.add(num);
        card.style.opacity = '0.5';
        btn.textContent = '✓ Watched';
    }

    // Update the progress counter
    document.getElementById('progress').textContent = watched.size + '/10 watched';
}