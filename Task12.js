<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX & Fetch API</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }

        input, button {
            margin: 5px;
            padding: 8px;
        }

        #message {
            margin-top: 15px;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <h1>Event Registration</h1>

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

const message =
    document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const userData = {

        name:
            document.getElementById("name").value,

        email:
            document.getElementById("email").value
    };

    message.textContent =
        "Submitting registration...";

    
    setTimeout(() => {

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

            if (!response.ok) {
                throw new Error(
                    "Registration Failed"
                );
            }

            return response.json();
        })

        .then(data => {

            console.log(data);

            message.textContent =
                "Registration Successful!";
        })

        .catch(error => {

            console.error(error);

            message.textContent =
                "Registration Failed!";
        });

    }, 2000);

});