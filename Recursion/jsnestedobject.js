// print all keys,values recursively of a nested object

var defaultsettings = {
    "ajaxsettings" : { 
        "ak1" : "v1", 
        "ak2" : "v2", 
    },
    "uisettings" : { 
        "ui1" : "v1", 
        "ui22" : "v2", 
        "ui23": {
            "ui23a":"v1a",
            "ui23b":"v1b",
            "ui23c":"v1c",
            "ui23": {
                "ui23a":"v1a",
                "ui23b":"v1b",
                "ui23c":"v1c"
            }
        } 
    }
  };

  let flattenedObject = {};

  function printAllUsingRecursion(obj,key){
    if(!(obj instanceof Object )){
        console.log(key+ ' '+obj);
        flattenedObject[key]=obj;
        return;
    }

    for(const [key] of Object.entries(obj)){
        printAllUsingRecursion(obj[key],key);
    }
    
  }

  printAllUsingRecursion(defaultsettings,'');

  console.log('Flattened Object: '+ JSON.stringify(flattenedObject));