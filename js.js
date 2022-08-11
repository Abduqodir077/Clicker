let img = document.getElementById("img");

let clicks = 0; // change int to var here
function countClicks() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

img.addEventListener("click", () =>{
    document.getElementById("clicks").innerHTML = 0;
})