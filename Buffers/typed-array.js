// The common term for all these views (Uint8Array, Uint32Array, etc) is TypedArray. 
// They share the same set of methods and properities.
// Please note, there’s no constructor called TypedArray, it’s just a common “umbrella” term to represent one of 
// views over ArrayBuffer: Int8Array, Uint8Array and so on, the full list will soon follow.

// TypedArray has regular Array methods, with notable exceptions.
// We can iterate, map, slice, find, reduce etc.


//If an Array, or any array-like object is given, it creates a typed array of the same length and copies the content.
let arr = new Uint8Array([0, 1, 2, 3]);
console.log(arr.length); // 4, created binary array of the same length
console.log(arr[1]); //1, filled with 4 bytes (unsigned 8-bit integers) with given values

// If another TypedArray is supplied, it does the same: creates a typed array of the same length and copies values. 
// Values are converted to the new type in the process, if needed.
let arr16 = new Uint16Array([1, 1000]);
let arr8 = new Uint8Array(arr16);
console.log(arr8[0]); // 1
console.log(arr8[1]); // 232, tried to copy 1000, but can't fit 1000 into 8 bits 

// For a numeric argument length – creates the typed array to contain that many elements. 
// Its byte length will be length multiplied by the number of bytes in a single item TypedArray.BYTES_PER_ELEMENT
let arr = new Uint16Array(4); // create typed array for 4 integers
console.log(Uint16Array.BYTES_PER_ELEMENT); // 2 bytes per integer
console.log(arr.byteLength); // 8 (size in bytes) 

//Without arguments, creates an zero-length typed array.

