//To create a custom event we use the Event constructor or CustomEvent interface

// To assign event
const startEvent = new Event("start");

// To trigger the event Listener
document.addEventListener("start", () => {
    console.log("The start event was triggered")
});

// To trigger the Event
document.dispatchEvent(startEvent);
