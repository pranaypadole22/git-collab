let btn=document.getElementById("btn");
let result=document.getElementById("result");
let url="http://universities.hipolabs.com/search?name=India";


btn.addEventListener("click",async()=>{
    let state=document.querySelector("input").value.trim().toLowerCase();
    console.log(state);
    let colArr=await getcolleges();
    let filteredcolleges=colArr.filter(college=>
        college["state-province"]&&college["state-province"].toLowerCase()===state

    );
    console.log(colArr);
    show(filteredcolleges);
});

function show(colArr){
    result.innerText="";
    for(let col of colArr){
        console.log(col.name);
    let li=document.createElement("li");
    li.innerText=col.name;
    li.style.textDecoration="none";
    result.appendChild(li);
    }
    
}

async function getcolleges(){
    try{
        let res=await axios.get(url);
        return res.data;
    }catch(err){
        return [];
    }
}

