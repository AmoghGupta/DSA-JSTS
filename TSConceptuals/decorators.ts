//Decorators introduces programmers to write the metadata annotation which will help you to introspect your code. 

//A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.

// Class decorator,Method Decorator, Accessor or Property Decorator,Parameter Decorator 


function f(){
    console.log("f(): evaluated");
    return function(target, propertyKey:string, descriptor:PropertyDescriptor){
        console.log("f(): called");
    }
}


class C{
    @f()
    method(){}
}

// O/p
// f(): evaluated
// f(): called