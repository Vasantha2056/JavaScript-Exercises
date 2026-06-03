<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functions and Closures</title>
</head>
<body>

    <h1>Local Community Event Portal</h1>

    <script src="main.js"></script>

</body>
</html>

let events = [];


function addEvent(name, category) {
    events.push({
        name: name,
        category: category
    });
}


function registerUser(eventName, userName) {
    console.log(`${userName} registered for ${eventName}`);
}


function createRegistrationTracker(category) {

    let totalRegistrations = 0;

    return function () {
        totalRegistrations++;
        console.log(
            `${category} Registrations: ${totalRegistrations}`
        );
    };
}


function filterEventsByCategory(callback) {
    return events.filter(callback);
}


addEvent("Community Festival", "Cultural");
addEvent("Sports Day", "Sports");
addEvent("Music Night", "Cultural");


registerUser("Community Festival", "Reshma");


const culturalTracker =
    createRegistrationTracker("Cultural");

culturalTracker();
culturalTracker();


const culturalEvents =
    filterEventsByCategory(
        event => event.category === "Cultural"
    );

console.log("Filtered Events:");
console.log(culturalEvents);