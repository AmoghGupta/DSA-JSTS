// To assign event
const event = new CustomEvent("start", {
    detail: {
      platform : "GeeksforGeeks"
    }
});

// To trigger the event Listener
document.addEventListener('start', (e)=>{
    console.log(
      `start event triggered on platform :
      ${e.detail.platform}`
      );
});

// To trigger the Event
document.dispatchEvent(event);