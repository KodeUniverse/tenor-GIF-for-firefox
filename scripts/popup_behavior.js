

/**
 * Listen for clicks on the buttons, and send appropriate msg to content script in the page
 * 
 */

const API_KEY = "AIzaSyB6v7LFNrYwcSg5w-VsoLah0-qkWlHhcH4";

/*function listenForClicks() {
    document.addEventListener("click", );
}*/
//limit is the number of images to fetch
async function grabGIFs(query, apikey, limit) {
    const response = await fetch("https://g.tenor.com/v1/search?q="+query+"&key="+apikey+"&limit="+limit);

    // code to display them here
}

function listenForInput() {
    const search_box = document.getElementsByName("search-box")[0]
    search_box.addEventListener("change", function(event){
        
    });

}