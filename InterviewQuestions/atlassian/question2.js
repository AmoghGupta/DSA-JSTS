function Stream() {
    let subscriber = [];
    
    return {
        subscribe: function(method) {
            if(typeof method === 'function'){
                subscriber.push(method);
            }
            else{
                throw new Error('Pass a valid method.');
            }
        },
        push: function(val) {
            subscriber.forEach((method)=> {
                method(val);
            })
        }
    };
}
    
var stream = new Stream();
stream.subscribe((val)=>console.log(val*1));
stream.subscribe((val)=>console.log(val*2));
stream.subscribe((val)=>console.log(val*3));
stream.subscribe(111);

stream.push(2);