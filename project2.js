var ul=document.getElementById("list-content");
var input=document.getElementById("inp");


function add(){
   var listitem=document.createElement("li");
   listitem.innerHTML=input.value+'<button onclick="dele(event)">Delete</button>';
   ul.append(listitem);
   input.value="";
}

function dele(){
    event.target.parentElement.remove();
}