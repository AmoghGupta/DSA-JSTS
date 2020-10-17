// The splice() method changes the contents of an array by removing or replacing existing
// elements and/or adding new elements in place.

//array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
//o/p :  ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
//o/p :  ["Jan", "Feb", "March", "April", "May"]



