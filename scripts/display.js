import { database } from "./firebase-config.js";
import { get, ref } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Reference to the "users" path in Firebase
const usersRef = ref(database, 'users');

// Retrieve data from Firebase
get(usersRef)
    .then((snapshot) => {
        if (snapshot.exists()) {
            const users = snapshot.val();
            const tableBody = document.querySelector('#userTable tbody');

            // Iterate through the users object and add each user as a table row
            for (const key in users) {
                if (users.hasOwnProperty(key)) {
                    const user = users[key];
                    const row = document.createElement('tr');

                    // Create table cells for each user attribute
                    row.innerHTML = `
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                        <td>${user.email}</td>
                        <td>${user.city}</td>
                        <td>${user.province}</td>
                        <td>${user.zip}</td>
                    `;
                    tableBody.appendChild(row);
                }
            }
        } else {
            console.log("No data available");
        }
    })
    .catch((error) => {
        console.error("Error retrieving data: ", error);
    });
