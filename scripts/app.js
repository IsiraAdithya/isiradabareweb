// Define the sidebar functions in global scope so they can be called from HTML onclick
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'flex';
    }
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'none';
    }
}

// Wait for the DOM to be fully loaded before running any code that manipulates the DOM
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the sidebar to be hidden when the page loads
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'none';
    }
    
    // Set up any other event listeners or initialization code here
    console.log('FITNATION app initialized successfully');
    
    // If you need to add event listeners to other elements, do it here
    // For example:
    /*
    const loginButton = document.querySelector('.login-button');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }
    */
});