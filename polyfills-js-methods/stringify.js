function stringify(obj) {
    let objString = '';
    objString += '{';
    for (const key in obj) {
        const value = obj[key];
        objString += `"${key}":`;
        if (typeof obj[key] === 'object') {
            objString += `${stringify(value)}`;
        } else if (typeof value === 'string') {
            objString += `"${value}"`;
        } else if (typeof obj[key] === 'number') {
            objString += `${value}`;
        }
        objString += `,`;
    }
    objString += '}';
    return objString;
}

const sampleObj = {
    "name": "Juan",
    "age": 29,
    "address": {
       "street": "Street 1",
       "number": 3
    }
 }

 console.log(stringify(sampleObj));