// The MutationObserver API allows you to continuously monitor the changes being made to the DOM tree. 
// When the DOM nodes change, we can invoke a callback function to detect the changes.

        // Html Part 👇
 
        // <ul id="itemsList">
        //     <li class="item">First Item</li>
        //     <li class="item">Second Item</li>
        //     <li class="item">Third Item</li>
        // </ul>
        // <button class="btn" onclick="deleteFirstItem()">Delete First Item</button>

        // JavaScript Part 👇

        const itemsList = document.querySelector("#itemsList")

        //MutationObserver takes callBack Function 👇
        const observer = new MutationObserver((mutations) => {
            console.log("Changes in Item List", mutations);
        })
       
        observer.observe(itemsList, {
            childList: true // detect the changes in children of ul
        })
       
        function deleteFirstItem() {
            if(itemsList?.children?.length > 0) { 
                itemsList.children[0].remove() 
            }
        }