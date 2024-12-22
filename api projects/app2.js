// let btn=document.getElementById("btn");
// let result=document.getElementById("result");



// let url="http:openlibrary.org/api/volumes/brief/isbn/9780525440987.json";
// btn.addEventListener("click",async()=>{
//     let isbn=document.getElementById("isbn").value.trim();
// try{
// const res=await axios.get(url);
// if(res.data[`ISBN:${isbn}`]){
//     const book=res.data[`ISBN:${isbn}`].details;
// result.innerHTML=`
// <h2>${book.tittle}</h2>
// <p><strong>Author:</strong>${book.authors?.map(author=>author.name).join(",")||"N/A"}</p>
// <p><strong>Publish Date:</strong>${book.publish_date||"N/A"}</p>
// <p><strong>Number of Pages:</strong> ${book.number_of_pages || "N/A"}</p>
// <p><strong>Publisher:</strong> ${book.publishers?.map(pub => pub.name).join(", ") || "N/A"}</p>
// <p><strong>Subjects:</strong> ${book.subjects?.map(sub => sub.name).join(", ") || "N/A"}</p>
// <img src="${book.covers?.[0] ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg` : ''}" alt="Book Cover">

// `;

// }else{
//     result.innerHTML="<p>Book not found</p>";
// }
// }catch(){
//     console.error("Error fetching data:", error);
//     result.innerHTML = "<p>There was an error fetching the book data. Please try again later.</p>";
//   }
// }
// );

let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", async () => {
  let isbn = document.getElementById("isbn").value.trim();
  
  // Use the correct OpenLibrary API URL
  let url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
  
  try {
    const res = await axios.get(url);

    // Check if the book data is available
    const bookKey = `ISBN:${isbn}`;
    if (res.data[bookKey]) {
      const book = res.data[bookKey];

      // Display book details
      result.innerHTML = `
        <h2>${book.title || "N/A"}</h2>
        <p><strong>Author:</strong> ${book.authors?.map(author => author.name).join(", ") || "N/A"}</p>
        <p><strong>Publish Date:</strong> ${book.publish_date || "N/A"}</p>
        <p><strong>Number of Pages:</strong> ${book.number_of_pages || "N/A"}</p>
        <p><strong>Publisher:</strong> ${book.publishers?.map(pub => pub.name).join(", ") || "N/A"}</p>
        <p><strong>Subjects:</strong> ${book.subjects?.map(sub => sub.name).join(", ") || "N/A"}</p>
        <img src="${book.cover?.medium || ''}" alt="Book Cover">
      `;
    } else {
      // Display a message if the book is not found
      result.innerHTML = "<p>Book not found.</p>";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    result.innerHTML = "<p>There was an error fetching the book data. Please try again later.</p>";
  }
});

