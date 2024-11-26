let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = ()  => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()  => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

// Hide Menu And Search Box On Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');

}

//header
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);

});


//search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const carBoxes = document.querySelectorAll('.box'); // Adjust this selector to match your actual car boxes

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission behavior if any

            const searchTerm = searchInput.value.toLowerCase();
            let found = false;

            carBoxes.forEach(box => {
                const title = box.querySelector('h3').textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    box.style.display = ''; // Show the box
                    if (!found) {
                        // Scroll into view and highlight the first matched box
                        box.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        found = true;
                    }
                } else {
                    box.style.display = 'none'; // Hide non-matching boxes
                }
            });

            if (!found) {
                // If no matches are found, show all boxes (or you can choose to keep them hidden)
                carBoxes.forEach(box => {
                    box.style.display = '';
                });
            }

            // Clear the search input field
            searchInput.value = '';
        }
    });

    function resetCarBoxes() {
        const carBoxes = document.querySelectorAll('.box');
        carBoxes.forEach(box => {
            box.style.display = '';
        });
    }
    
    // Reset car boxes when navigating to a different section
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(event) {
            // Example: Reset on link click
            resetCarBoxes();
        });
    });

    // Optionally, you might want to reset car boxes on page load if a page reload happens
    window.addEventListener('load', function() {
        resetCarBoxes();
    });
});