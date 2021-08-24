// Use generics to reuse the same function with different types and still use the main features of types

function addItem<T>(item:T, array:T[]){
    return [...array,item];
}

addItem("item2",["item1"]);
addItem(3,[44,56]);

addItem(true,[false,true]);
