// The catch() method returns a Promise and deals with rejected cases only. 

const promise1 = new Promise((resolve, reject) => {
    throw 'Uh-oh!';
  });
  
  promise1.catch((error) => {
    console.error(error);
  });