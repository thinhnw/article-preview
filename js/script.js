let shareButton = document.getElementById("share-button");
let media = document.getElementsByClassName("media")[0];

let status = false;
function mouseClickFunction() {
    status = !status;
}

function mouseCancel() {
    console.log(status);
    if (status) {
        media.style.display = "grid";        
        status = false;
        return;
    }
    media.style.display = "none";
    status = false;
}