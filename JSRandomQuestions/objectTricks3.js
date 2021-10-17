var state = "ab";

var obj = {
    [`fade-${state}`]: true,
    [`fade-${state}-active`]: true
}

console.log(obj);

// {"fade-ab": true,"fade-ab-active": true}