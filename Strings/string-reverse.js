// reversing string

"hello world".split('').reverse().join('')

//O/p  dlrow olleh



// reverse individual word 
"Hello World".split(" ").map((word)=>{
    return word.split('').reverse().join('')
 })

 //O/p olleH dlroW