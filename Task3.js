<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Validation</title>
</head>
<body>

    <h1>Local Community Event Portal</h1>

    <script src="main.js"></script>

</body>
</html>



const events = [
    { name: "Community Festival", upcoming: true, seats: 50 },
    { name: "Sports Day", upcoming: false, seats: 30 },
    { name: "Workshop", upcoming: true, seats: 0 }
];


console.log("Available Events:");

events.forEach(event => {

    if (event.upcoming && event.seats > 0) {
        console.log(`${event.name} - Seats Available: ${event.seats}`);
    } else {
        console.log(`${event.name} - Not Available`);
    }

});


try {

    let selectedEvent = events[2]; 

    if (selectedEvent.seats <= 0) {
        throw new Error("Registration failed: No seats available.");
    }

    selectedEvent.seats--;
    console.log("Registration Successful");

} catch (error) {

    console.log(error.message);

}