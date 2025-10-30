function addTask(){
  const input=document.getElementById("taskInput");
  if(input.value.trim()==="")return;
  const li=document.createElement("li");
  li.textContent=input.value;
  li.onclick=()=>li.remove();
  document.getElementById("taskList").appendChild(li);
  input.value="";
}
