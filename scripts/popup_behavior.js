

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
    print("Fetching from Tenor GIFs");
    const response = await fetch("https://g.tenor.com/v1/search?q="+query+"&key="+apikey+"&limit="+limit);

    const images_to_display = document.getElementsByClassName("grid-item");

    // code to display them here
    for (let i = 0; i < response.length; i++){
        let gif_image = response[i];
        images_to_display[i].children.src = "../icons/satania-icon-96.png";
    }
}


browser.runtime.onInstalled.addListener(() => { //getelement returning undefined
    const search_box = document.getElementById("search-box");
    console.log(typeof(search_box));
    search_box.addEventListener("change", function(event){
        grabGIFs(search_box.textContent,API_KEY,9);
    });
});

function reportExecuteScriptError(error) {
    console.error("Failed to execute content script.");
}

// Main driver code