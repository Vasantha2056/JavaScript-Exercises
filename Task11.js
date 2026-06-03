<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Registration Form</title>

    <style>
        .error {
            color: red;
            font-size: 14px;
        }

        .success {
            color: green;
            font-weight: bold;
        }

        form {
            width: 300px;
            margin: 20px auto;
        }

        input, select, button {
            width: 100%;
            margin: 5px 0;
            padding: 8px;
        }
    </style>
</head>
<body>

    <h1>Community Event Registration</h1>

    <form id="registrationForm">

        <input
            type="text"
            name="userName"
            placeholder="Enter Name">

        <span id="nameError" class="error"></span>

        <input
            type="email"
            name="email"
            placeholder="Enter Email">

        <span id="emailError" class="error"></span>

        <select name="eventName">
            <option value="">Select Event</option>
            <option value="Music Night">Music Night</option>
            <option value="Sports Day">Sports Day</option>
            <option value="Baking Workshop">Baking Workshop</option>
        </select>

        <span id="eventError" class="error"></span>

        <button type="submit">
            Register
        </button>

    </form>

    <p id="message"></p>

    <script src="main.js"></script>

</body>
</html>

const form =
    document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

   
    event.preventDefault();

    
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("eventError").textContent = "";
    document.getElementById("message").textContent = "";

    
    const name =
        form.elements["userName"].value.trim();

    const email =
        form.elements["email"].value.trim();

    const selectedEvent =
        form.elements["eventName"].value;

    let isValid = true;

   

    if (name === "") {
        document.getElementById("nameError")
            .textContent =
            "Name is required";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError")
            .textContent =
            "Email is required";
        isValid = false;
    }

    if (selectedEvent === "") {
        document.getElementById("eventError")
            .textContent =
            "Please select an event";
        isValid = false;
    }

    
    if (isValid) {

        document.getElementById("message")
            .innerHTML =
            `<span class="success">
            Registration Successful for
            ${selectedEvent}
            </span>`;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Event:", selectedEvent);
    }

});