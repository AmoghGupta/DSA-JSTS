// Design a system that takes big URLs like “http://www.geeksforgeeks.org/count-sum-of-digits-in-numbers-from-1-to-n/” and 
// converts them into a short URL. It is given that URLs are stored in database and every URL has an associated integer id.  
// So your program should take an integer id and generate a URL. 

// A URL character can be one of the following

// A lower case alphabet [‘a’ to ‘z’], total 26 characters
// An upper case alphabet [‘A’ to ‘Z’], total 26 characters
// A digit [‘0′ to ‘9’], total 10 characters
// There are total 26 + 26 + 10 = 62 possible characters.

// So the task is to convert an integer (database id) to a base 62 number where digits of 62 base are "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN
// OPQRSTUVWXYZ0123456789"
 
// Function to generate a short url from integer ID
function idToShortURL(n)
{
    // Map to store 62 possible characters
    let map = "abcdefghijklmnopqrstuvwxyzABCDEF"
    "GHIJKLMNOPQRSTUVWXYZ0123456789";
    let base = map.length;
 
    let shorturl = [];
 
    // Convert given integer id to a base 62 number
    while (n)
    {
        // use above map to store actual character
        // in short url
        shorturl.push(map[n % base]);
        n = Math.floor(n / base);
    }
    // Reverse shortURL to complete base conversion
    shorturl.reverse();
    return shorturl.join("");
}

 
// Driver program to test above function
let n = 12345;
let shorturl = idToShortURL(n);
console.log("Generated short url is " + shorturl);
