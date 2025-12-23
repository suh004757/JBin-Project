// ============================================
// JBIN PROJECT - FILTER FUNCTIONALITY
// For Projects page filtering
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length === 0) return; // Exit if no filters on page

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');

                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'block';
                    // Add fade-in animation
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Initialize: show all projects
    projectCards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
    });

});
