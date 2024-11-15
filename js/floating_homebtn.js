const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        
// Function to check and toggle button visibility
function checkScroll() {
    if (window.pageYOffset > 100) {
        // Show the button when scrolled down 100px from the top
        scrollToTopBtn.classList.add('show');
    } else {
        // Hide the button when not scrolled enough
        scrollToTopBtn.classList.remove('show');
    }
}
        
// Scroll to top when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
});
        
// Listen for scroll events to toggle button visibility
window.addEventListener('scroll', checkScroll);