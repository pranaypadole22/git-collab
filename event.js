// let btn=document.getElementById("btn");
// btn.addEventListener("click",()=>{
// btn.style.backgroundColor="green";
// });

// let button=document.createElement("button");
// button.innerText="Click Me!";
// button.addEventListener("click",()=>{
    
//     button.style.backgroundColor="green";
// });
// document.querySelector("body").appendChild(button);

 let cont=document.getElementById("container");
let inp=document.getElementById("inp");
 inp.addEventListener("input",()=>{
   let input=inp.value;
   const allowedCharacters = input.replace(/[^a-zA-Z\s]/g, '');
    cont.innerHTML=allowedCharacters;
 });
