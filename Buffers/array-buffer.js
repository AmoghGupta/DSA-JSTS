// ArrayBuffer is the core object, the root of everything, the raw binary data.
// The basic binary object is ArrayBuffer – a reference to a fixed-length contiguous memory area.
// ArrayBuffer has nothing in common with Array:
// ArrayBuffer is a memory area. What’s stored in it? It has no clue. Just a raw sequence of bytes.
// To access individual bytes, another “view” object is needed, not buffer[index].

//Creating a buffer (basically meaning we are creating a memory)
let buffer = new ArrayBuffer(16); // create a buffer of length 16 i.e 16 bytes 
console.log(buffer);  // [Uint8Contents]: <00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>,
console.log(buffer.byteLength); //16
// By default its Uint8Array

// Views (Now with views you decide how you want to view/store data in that memory )
// A view object does not store anything on it’s own. 
// It’s the “eyeglasses” that give an interpretation of the bytes stored in the ArrayBuffer.
// To manipulate an ArrayBuffer, we need to use a “view” object.


// Uint8Array – treats each byte in ArrayBuffer as a separate number, with possible values from 0 to 255
let view = new Uint8Array(buffer);
console.log(view); //Uint8Array [0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0,0, 0, 0, 0]
view[0] = 242;
// iterate over values
for(let num of view) {
    console.log(num); 
}

// Uint32Array – treats every 4 bytes as an integer, with possible values from 0 to 4294967295. 
// That’s called a “32-bit unsigned integer”.
let buffer1 = new ArrayBuffer(16);
let view1 = new Uint32Array(buffer1); // treat buffer as a sequence of 32-bit integers
console.log(view1); // Uint32Array [ 0, 0, 0, 0 ]
view1[0] = 4294967290;
// iterate over values
for(let num of view1) {
    console.log(num); 
}

