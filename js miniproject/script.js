let input=document.getElementById("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",()=>{
    let item =document.createElement("li");
    item.style.listStyle="none";
    item.innerText=input.value;
    ul.appendChild(item);
    let deleteBtn=document.createElement("button");
deleteBtn.innerText="delete";
deleteBtn.classList.add("delete");
item.appendChild(deleteBtn);
ul.appendChild(item);
input.value="";
});
ul.addEventListener("click",(event)=>{
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
listItem.remove();
console.log("deleted");
    
    }
})