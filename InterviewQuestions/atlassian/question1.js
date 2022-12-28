// Create a basic implementation of a streams API. 
// The user should be able to push values to a stream, and subscribe to values that are pushed to that stream.

// For example,

// const z = new Stream();
// z.subscribe((value) => console.log(value));
// z.subscribe((value) => console.log(value * 2));
// z.subscribe((value) => console.log(value * 3));
// z.push(2);

// Should return
// 2
// 4
// 6

class Stream {
    constructor() {
        // cache incoming values
        this.cache = [];
    }
    
    subscribe(fn) {
        this.cache.push(fn);
    }
    
    push(val) {
        // Use arrow function to get ref to access to class this.
        this.cache.forEach((item) => {
            item.call(this, val);
        })
    }
}
    
const stream = new Stream();
stream.subscribe((value) => console.log(value));
stream.subscribe((value) => console.log(value * 2));
stream.subscribe((value) => console.log(value * 3));
stream.push(2);