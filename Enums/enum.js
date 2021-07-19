const Color = {
    RED: 1,
    BLUE: 2,
    GREEN: 3,
    YELLOW: 4
 };
 Object.freeze(Color);
 
 // Example usage:
 let carColor = Color.BLUE;
 // Trying to add new colors fails silently:
 Color.WHITE = 5;
 console.log(Color)