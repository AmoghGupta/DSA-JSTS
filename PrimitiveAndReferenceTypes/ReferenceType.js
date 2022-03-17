// Anything else other than primitive value is known as Reference value (typeof Reference value is object).

// If you do check the type of reference values using the same pre-existed operator of JS typeof then you will get the type always as object .

const student = { name: "David" }; // reference [object]
const teacher = ["Stella", "Mike"]; // reference [array]
const displayMessage= () => ({}); // reference [function]

