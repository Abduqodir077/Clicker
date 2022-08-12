let par = 0;

function btn(){
    par += 1;
    document.getElementById("par").innerHTML = par;
}

img.addEventListener("click", () => {
    document.getElementById("par").innerHTML = 0;
})

function btn(){
    if(localStorage.btn){
        localStorage.btn = Number(localStorage.btn)+1;
    } else {
        localStorage.btn = 1;
    }
    document.getElementById("par").innerHTML = localStorage.btn;
}

// let par2 = 0;

// function btn2(){
//     par2++;
//     document.getElementById("par2").innerHTML = par2;
// }