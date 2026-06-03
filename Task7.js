<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation</title>
</head>
<body>

    <h1>Local Community Event Portal</h1>

    <div id="eventContainer"></div>

    <p id="status">No action performed.</p>

    <script src="main.js"></script>

</body>
</html>


const events = [
    "Music Night",
    "Baking Workshop",
    "Sports Day"
];


const container =
    document.querySelector("#eventContainer");


events.forEach(event => {

    const card =
        document.createElement("div");

    card.innerHTML = `
        <h3>${event}</h3>
        <button onclick="registerEvent('${event}')">
            Register
        </button>

        <button onclick="cancelEvent('${event}')">
            Cancel
        </button>
        <hr>
    `;

    container.appendChild(card);

});


function registerEvent(eventName) {

    document.querySelector("#status").textContent =
        `Registered for ${eventName}`;

}


function cancelEvent(eventName) {

    document.querySelector("#status").textContent =
        `Cancelled registration for ${eventName}`;

}
