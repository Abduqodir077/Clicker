let par = 0;

function btn(){
    par += 1;
    document.getElementById("par").innerHTML = par;
}

img.addEventListener("click", () => {
    document.getElementById("par").innerHTML = 0;
})