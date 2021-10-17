// Interfaces let you define the structure of objects.
// You can type function parameters, variables, and function return types explicitly with them. 

interface Tweet {
    author: string,
    text: string,
    likes: number,
    retweets: number
}

const retweet = (): Tweet=>{
    return {
        author: "amogh",
        text: "gupta",
        likes: 2,
        retweets: 12
    }
}