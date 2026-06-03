<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Example</title>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

    <style>
        #eventCard {
            width: 300px;
            padding: 15px;
            margin: 20px;
            border: 1px solid black;
            background-color: lightblue;
        }

        #message {
            margin-top: 15px;
            font-weight: bold;
            color: green;
        }
    </style>
</head>
<body>

    <h1>Local Community Event Portal</h1>

    <div id="eventCard">
        <h3>Music Night</h3>
        <p>Venue: Community Hall</p>
    </div>

    <button id="registerBtn">
        Register
    </button>

    <button id="hideBtn">
        Fade Out Card
    </button>

    <button id="showBtn">
        Fade In Card
    </button>

    <p id="message"></p>

    <script src="main.js"></script>

</body>
</html>


$(document).ready(function () {

    $("#registerBtn").click(function () {

        $("#message").text(
            "Registration Successful!"
        );

    });

 
    $("#hideBtn").click(function () {

        $("#eventCard").fadeOut();

    });

   
    $("#showBtn").click(function () {

        $("#eventCard").fadeIn();

    });

});
