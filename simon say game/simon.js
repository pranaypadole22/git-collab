// let gameSeq=[];
// let userSeq=[];

// let started=false;
// let level=0;

// document.addEventListener("keypress",()=>{
//     if(started==false){
//         console.log("game is started");
//         started=true;
//     }
// });
 let gameSeq = [];
let userSeq = [];

 let started = false;
 let level = 0;


document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", () => {
        if (!started) {
            console.log("Game is started");
            started = true;
            
        }
    });
});
