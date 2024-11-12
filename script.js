const list = document.querySelectorAll('.list');

function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => 
item.addEventListener('click', activeLink));

document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.getElementById("bookingForm");
    const bookingTableBody = document.querySelector("#bookingTable tbody");
    const navigationLinks = document.querySelectorAll(".navigation a");

    // Function to handle navigation link clicks
    function handleNavigationClick(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
    }

    // Attach event listeners to navigation links
    navigationLinks.forEach(link => {
        link.addEventListener("click", handleNavigationClick);
    });

    // Function to handle form submission
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const service = document.getElementById("service").value;
        const comments = document.getElementById("comments").value;

        // Create new table row
        const newRow = bookingTableBody.insertRow();

        // Insert cells with form values
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);

        cell1.textContent = name;
        cell2.textContent = email;
        cell3.textContent = phone;
        cell4.textContent = date;
        cell5.textContent = time;
        cell6.textContent = service;
        cell7.textContent = comments;

        // Clear form fields
        bookingForm.reset();
    });
});

