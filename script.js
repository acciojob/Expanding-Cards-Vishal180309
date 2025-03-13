// Get all panels
const panels = document.querySelectorAll('.panel');

// Function to remove active class from all panels
function removeActiveClasses() {
    panels.forEach(panel => panel.classList.remove('active'));
}

// Add event listener to each panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});
