// simple notes app
let notes=JSON.parse(localStorage.getItem("notes")||"[]");
function addNote(txt){notes.push(txt);localStorage.setItem("notes",JSON.stringify(notes));}
addNote("Welcome note saved in localStorage!");
console.log("Notes :",notes);
