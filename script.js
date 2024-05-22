
const notes_container=document.querySelector(".notes_container");
const add_note=document.getElementById("add_note");
const container=document.querySelector(".container");
const delete_note=document.getElementById("delete_note");

delete_note.addEventListener("click",()=>{
  notes_container.innerHTML="";
  localStorage.clear("notes");
})

function shownotes(){
  notes_container.innerHTML=localStorage.getItem("notes");
}

shownotes();

function updateStorage(){
  localStorage.setItem('notes',notes_container.innerHTML);
}

add_note.addEventListener("click",()=>{
    let content=document.createElement("p");
    content.classList.add("input_box");
    content.setAttribute("contenteditable","true")
    let img=document.createElement("img");
    img.src="/images/delete.png";
    content.append(img);
    notes_container.append(content);  
    updateStorage();
})


notes_container.addEventListener("click",(e)=>{
  if(e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    updateStorage();
  }else if(e.target.tagName=="P"){
    notes=document.querySelectorAll(".input_box");
    notes.forEach(el => {
      el.onkeyup=function (){
        updateStorage();
      }
    });
  }
})



document.addEventListener("keydown",()=>{
if(event.key=="Enter"){
  document.execCommand("insertLineBreak");
  event.preventDefault();
}
})



