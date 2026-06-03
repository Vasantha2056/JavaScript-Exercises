<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Details</title>
</head>
<body>

    <h1>Local Community Event Portal</h1>

    <script src="main.js"></script>

</body>
</html>

const eventName = "Community Festival";
const eventDate = "15-Aug-2026";


let seats = 100;


console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Available Seats: ${seats}`);


seats--;

console.log(`Seats after registration: ${seats}`);


seats++;

console.log(`Seats after cancellation: ${seats}`);