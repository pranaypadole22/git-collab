let input=document.getElementById("input");
let btn=document.getElementById("btn");
let result=document.getElementById("result");

let baseUrl="https://api.api-ninjas.com/v1/quotes?category=";
let apiKey='W+zXsu7VZ5AT943yMapGkQ==bGQuu9TycdRnG9uX';
btn.addEventListener("click",async()=>{
    const category=input.value.trim();
    const Url=baseUrl+ encodeURIComponent(category);

    const quotes=await getquotes(Url);


     if(quotes && quotes.length>0){
        result.innerHTML=`<p><strong>Quote:</strong>${quotes[0].quote}</p>
        <p><strong>Author:</strong>${quotes[0].author}</p>
        <p><strong>Category:</strong>${quotes[0].category}</p>`
        // quotes[0].quote;
     }
     else{
        result.innerText = "No quotes found for this category.";
     }
});
async function getquotes(Url){
    try{
let res=await axios.get(Url,{
    headers:{
        'X-Api-Key':apiKey
    }
   });
return res.data;
    }catch(err){
        console.log(err);
return [];
    }
}