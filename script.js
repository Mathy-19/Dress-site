const buttons=document.querySelectorAll(".btn")
const boxes=document.querySelectorAll(".box")
const searchInput=document.querySelector("#search")

searchInput.addEventListener("keyup",(e)=>{
  const searchItem=e.target.value.toLowerCase().trim();
  boxes.forEach((box)=>{
    const data=box.dataset.item
    if(data==searchItem){
      box.style.display="block"
    }
    else{
      box.style.display="none"
    }
  })
})
buttons.forEach((button=>{
  button.addEventListener('click',(e)=>{
    e.preventDefault();
    searchActivebtn(e);

   const dataFilter=e.target.dataset.filter
   boxes.forEach((box)=>{
     if(dataFilter=="all"){
       box.style.display="block"
     }
     else{
       const filterItem=box.dataset.item
       if(filterItem==dataFilter){
         box.style.display="block"
       }
       else{
         box.style.display="none"
       }
     }
   })
   
   
  })
}))


function searchActivebtn(e){
  buttons.forEach((button)=>{
    button.classList.remove("btn-clicked")
  })
  e.target.classList.add("btn-clicked")

}