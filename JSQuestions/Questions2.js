// sum(1)(2)(3)(4)..( n)()

// function chaining

function sum(a){
    return function(b){
        return a+b;
    }
}

sum(2)(3);



