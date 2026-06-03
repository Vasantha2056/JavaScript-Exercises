<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Objects and Prototypes</title>
</head>
<body>

    <h1>Local Community Event Portal</h1>

    <script src="main.js"></script>

</body>
</html>

function Event(name, date, seats) {
    this.name = name;
    this.date = date;
    this.seats = seats;
}


Event.prototype.checkAvailability = function () {

    if (this.seats > 0) {
        return "Seats Available";
    } else {
        return "Event Full";
    }

};


const event1 =
    new Event(
        "Community Festival",
        "15-Aug-2026",
        50
    );


console.log(event1.checkAvailability());


console.log("Event Details:");

Object.entries(event1).forEach(
    ([key, value]) => {
        console.log(`${key}: ${value}`);
    }
);