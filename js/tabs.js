// ============================================
// JBIN PROJECT - TAB FUNCTIONALITY
// For Services page tabbed interface
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    if (tabButtons.length === 0) return; // Exit if no tabs on page

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');

                // Smooth scroll to panel if needed
                const panelTop = targetPanel.offsetTop - 100;
                if (window.pageYOffset > panelTop) {
                    window.scrollTo({
                        top: panelTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});
