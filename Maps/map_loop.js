const map = new Map();

map.set("one", 42);
map.set("two", 72);

for(const [key,value] of map){
    console.log(key + " is "+ value);
}
