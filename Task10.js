<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern JavaScript Features</title>
</head>
<body>

    <h1>Local Community Event Portal</h1>

    <script src="main.js"></script>

</body>
</html>

const events = [

    {
        name: "Music Night",
        category: "Music",
        seats: 100
    },

    {
        name: "Baking Workshop",
        category: "Workshop",
        seats: 40
    },

    {
        name: "Sports Day",
        category: "Sports",
        seats: 80
    }
];



function registerUser(
    userName = "Guest",
    eventName = "General Event"
) {
    console.log(
        `${userName} registered for ${eventName}`
    );
}

registerUser();
registerUser("Reshma", "Music Night");



const {
    name,
    category,
    seats
} = events[0];

console.log("Event Details:");
console.log(name);
console.log(category);
console.log(seats);




const clonedEvents = [...events];


const musicEvents =
    clonedEvents.filter(
        event => event.category === "Music"
    );

console.log("Music Events:");
console.log(musicEvents);