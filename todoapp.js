let todo=[];

let req=prompt("Please Enter your request:-");
while(true){
    if(req=="quit"||req=="Quit"){
        console.log("Quiting App");
        break;
    }
    if(req=="list"||req=="List"){
        console.log("--------------------");
        for( let i=0;i<todo.length;i++ ){
            console.log(i,todo[i]);
        }
        console.log("--------------------");
    }else if(req=="add"||req=="Add"){
        let task=prompt("Enter task you want to add");
        todo.push(task);
        console.log("Task Added");
    }
   
    else if(req=="delete"||req=="Delete"){
        let idx=prompt("Enter index you want to delete ");
        todo.splice(idx,1);
        console.log("Task deleted")
    }else{
        console.log("You entered wrong Request");
    }
    req=prompt("Please Enter your request:-");
}