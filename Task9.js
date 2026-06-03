<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Async JavaScript</title>
</head>
<body>

    <h1>Community Events</h1>

    <button onclick="loadEvents()">
        Load Events
    </button>

    <p id="loading"></p>

    <ul id="eventList"></ul>

    <script src="main.js"></script>

</body>
</html>


function loadEvents() {

    document.getElementById("loading").textContent =
        "Loading events...";

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(response => {

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            return response.json();
        })

        .then(data => {

            document.getElementById("loading").textContent =
                "";

            const eventList =
                document.getElementById("eventList");

            eventList.innerHTML = "";

            data.forEach(event => {

                const li =
                    document.createElement("li");

                li.textContent = event.name;

                eventList.appendChild(li);
            });
        })

        .catch(error => {

            document.getElementById("loading").textContent =
                error.message;
        });
}



async function loadEventsAsync() {

    try {

        document.getElementById("loading").textContent =
            "Loading events...";

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data =
            await response.json();

        document.getElementById("loading").textContent =
            "";

        const eventList =
            document.getElementById("eventList");

        eventList.innerHTML = "";

        data.forEach(event => {

            const li =
                document.createElement("li");

            li.textContent = event.name;

            eventList.appendChild(li);
        });

    } catch (error) {

        document.getElementById("loading").textContent =
            error.message;
    }
}