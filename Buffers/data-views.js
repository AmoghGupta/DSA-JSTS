// DataView is a special super-flexible “untyped” view over ArrayBuffer. 
// It allows to access the data on any offset in any format.

// With DataView we access the data with methods like .getUint8(i) or .getUint16(i). 
// We choose the format at method call time instead of the construction time.

// new DataView(buffer, [byteOffset], [byteLength])

//create a buffer
let buffer = new Uint8Array([255, 255, 255, 255]).buffer;

//pass buffer to dataview
let dataView = new DataView(buffer);

// get 8-bit number at offset 0
console.log(dataView.getUint8(0)); // 255

// now get 16-bit number at offset 0, it consists of 2 bytes, together interpreted as 65535
console.log(dataView.getUint16(0)); // 65535 (biggest 16-bit unsigned int)

// now get 32-bit number at offset 0, it consists of 4 bytes, together interpreted as 4294967295
console.log(dataView.getUint32(0)); // 4294967295 (biggest 32-bit unsigned int)

dataView.setUint32(0, 0); // set 4-byte number to zero, thus setting all bytes to 0