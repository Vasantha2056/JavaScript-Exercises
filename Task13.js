<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Debugging and Testing</title>
</head>
<body>

    <h1>Community Event Registration</h1>

    <form id="registrationForm">

        <input
            type="text"
            id="name"
            placeholder="Enter Name"
            required>

        <input
            type="email"
            id="email"
            placeholder="Enter Email"
            required>

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

form.addEventListener("submit", function(event) {

    
    event.preventDefault();

    console.log("Form submission started");

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    console.log("Name:", name);
    console.log("Email:", email);

    const userData = {
        name,
        email
    };

    console.log("Payload:", userData);

    debugger;

    fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",

            headers: {
                "Content-Type":
                "application/json"
            },

            body:
                JSON.stringify(userData)
        }
    )

    .then(response => {

        console.log(
            "Response Status:",
            response.status
        );

        return response.json();
    })

    .then(data => {

        console.log(
            "Server Response:",
            data
        );

        document.getElementById("message")
            .textContent =
            "Registration Successful";
    })

    .catch(error => {

        console.error(
            "Fetch Error:",
            error
        );

        document.getElementById("message")
            .textContent =
            "Registration Failed";
    });

});