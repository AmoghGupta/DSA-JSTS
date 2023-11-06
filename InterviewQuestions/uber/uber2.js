// Implement a loading bar that animates from 0 to 100% in 3 seconds

// HTML
{/* 
    <div class="loading-bar">
    <div class="progress-bar"></div>
    </div> 
*/}

// CSS Implementation

// .loading-bar {
//     width: 100%;
//     height: 10px;
//     border: 1px solid black;
//     overflow: hidden;
// }
  
// .progress-bar {
//     width: 0%;
//     height: 100%;
//     background-color: blue;
//     animation: progress 3s linear forwards;
// }

// @keyframes progress {
//     from { width: 0%; }
//     to { width: 100%; }
// }


// <!DOCTYPE html>
// <html>
// <head>
// <title>Page Title</title>
// </head>
// <body>

// <h1>Loader Bar</h1>
// <div style="
//     width: 400px;
//     height: 30px;
//     border: 1px solid;
// "><div id="abc" style="
//     width: 0px;
//     height: 30px;
//     background: green;
// "></div></div>
// <script>
// 	let width = 0;
// 	let interal = setInterval(()=>{
//      width = width+400/3;
// 	 document.getElementById("abc").style.width = width+'px';
//      if(width > 399){
//     	clearInterval(interal);
//      }
//     },1000);
    
// </script>
// </body>
// </html>
