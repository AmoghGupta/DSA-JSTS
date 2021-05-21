var publisherSubscriber = {};

// we send in a container object which will handle the subscriptions and publishings
(function(container) {
    // the id represents a unique subscription id to a topic
    var id = 0;

    // we subscribe to a specific topic by sending in
    // a callback function to be executed on event firing
    container.subscribe = function(topic, f) {
        if (!(topic in container)) {
          container[topic] = [];
        }

        container[topic].push({
            "id": ++id,
            "callback": f
        });

        return id;
    }

    // each subscription has its own unique ID, which we use
    // to remove a subscriber from a certain topic
    container.unsubscribe = function(topic, id) {
        var subscribers = [];
        for (var subscriber of container[topic]) {
            if (subscriber.id !== id) {
                subscribers.push(subscriber);
            }
        }
        container[topic] = subscribers;
    }

    container.publish = function(topic, data) {
        for (var subscriber of container[topic]) {
            // when executing a callback, it is usually helpful to read
            // the documentation to know which arguments will be
            // passed to our callbacks by the object firing the event
            subscriber.callback(data);
        }
    }

})(publisherSubscriber);

var subscriptionID1 = publisherSubscriber.subscribe("mouseClicked", function(data) {
    console.log("I am Bob's callback function for a mouse clicked event and this is my event data: " + JSON.stringify(data));
});

var subscriptionID2 = publisherSubscriber.subscribe("mouseHovered", function(data) {
    console.log("I am Bob's callback function for a hovered mouse event and this is my event data: " + JSON.stringify(data));
});

var subscriptionID3 = publisherSubscriber.subscribe("mouseClicked", function(data) {
    console.log("I am Alice's callback function for a mouse clicked event and this is my event data: " + JSON.stringify(data));
});

// NOTE: after publishing an event with its data, all of the
// subscribed callbacks will execute and will receive
// a data object from the object firing the event
// there are 3 console.logs executed
publisherSubscriber.publish("mouseClicked", {"data": "data1"});
publisherSubscriber.publish("mouseHovered", {"data": "data2"});

// we unsubscribe from an event by removing the subscription ID
publisherSubscriber.unsubscribe("mouseClicked", subscriptionID3);

// there are 2 console.logs executed
publisherSubscriber.publish("mouseClicked", {"data": "data1"});
publisherSubscriber.publish("mouseHovered", {"data": "data2"});