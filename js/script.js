let shareButton = document.getElementsByClassName("share-btn")[0];
let media = document.getElementsByClassName("media")[0];

let status = false;
function mouseClickFunction() {
    status = !status;
}

function mouseCancel() {
    console.log(status);
    if (status) {
        media.style.display = "grid";    
        shareButton.classList.add("active");
        status = false;
        return;
    }
    media.style.display = "none";
    shareButton.classList.remove("active");
    status = false;
}