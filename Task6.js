<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arrays and Methods</title>
</head>
<body>

    <h1>Local Community Event Portal</h1>

    <script src="main.js"></script>

</body>
</html>


let events = [];


events.push({
    name: "Music Night",
    category: "Music"
});

events.push({
    name: "Baking",
    category: "Workshop"
});

events.push({
    name: "Music Festival",
    category: "Music"
});

events.push({
    name: "Art Exhibition",
    category: "Art"
});

console.log("All Events:");
console.log(events);


const musicEvents =
    events.filter(
        event => event.category === "Music"
    );

console.log("Music Events:");
console.log(musicEvents);


const displayCards =
    events.map(
        event =>
        `${event.category} on ${event.name}`
    );

console.log("Display Cards:");
console.log(displayCards);