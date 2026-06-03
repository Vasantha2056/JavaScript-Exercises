<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Handling</title>
</head>
<body>

    <h1>Local Community Event Portal</h1>

    
    <label>Select Category:</label>
    <select id="category" onchange="filterEvents()">
        <option value="All">All</option>
        <option value="Music">Music</option>
        <option value="Workshop">Workshop</option>
        <option value="Sports">Sports</option>
    </select>

    <br><br>

    
    <input
        type="text"
        id="searchBox"
        placeholder="Search Event"
        onkeydown="searchEvent()"
    >

    <br><br>

   
    <div id="eventContainer"></div>

    <p id="status"></p>

    <script src="main.js"></script>

</body>
</html>

const events = [
    { name: "Music Night", category: "Music" },
    { name: "Baking Workshop", category: "Workshop" },
    { name: "Sports Day", category: "Sports" }
];


function displayEvents(eventList) {

    const container =
        document.getElementById("eventContainer");

    container.innerHTML = "";

    eventList.forEach(event => {

        container.innerHTML += `
            <div>
                <h3>${event.name}</h3>
                <p>${event.category}</p>

                <button
                    onclick="registerEvent('${event.name}')">
                    Register
                </button>

                <hr>
            </div>
        `;
    });
}


function registerEvent(eventName) {

    document.getElementById("status").textContent =
        `Registered for ${eventName}`;
}


function filterEvents() {

    const category =
        document.getElementById("category").value;

    if (category === "All") {
        displayEvents(events);
    } else {

        const filtered =
            events.filter(
                event =>
                event.category === category
            );

        displayEvents(filtered);
    }
}


function searchEvent() {

    const searchText =
        document.getElementById("searchBox")
        .value
        .toLowerCase();

    const filtered =
        events.filter(
            event =>
            event.name.toLowerCase()
            .includes(searchText)
        );

    displayEvents(filtered);
}


displayEvents(events);
