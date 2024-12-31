function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
import { database } from "./firebase-config.js";
import { ref, push } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Handle form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const zip = document.getElementById('zip').value;

    // Create an object to store the data
    const userData = {
        firstName,
        lastName,
        email,
        city,
        province,
        zip,
    };

    // Reference to the database path
    const usersRef = ref(database, 'users'); // Users collection

    // Push new data to Firebase
    push(usersRef, userData)
        .then(() => {
            alert('Data successfully sent to Firebase!');
        })
        .catch((error) => {
            alert('Error sending data to Firebase: ' + error.message);
        });
});

