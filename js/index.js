let btn=document.getElementById("submit");
let input=document.getElementById("input");
let box1=document.querySelector(".drop");
let boxs=document.querySelectorAll(".boxs");
let select=null;
btn.addEventListener("click",()=>{
    if(!input.value==''){
        box1.innerHTML+=`<div class='bg-primary text-white p-1 rounded-1 mb-1 item' draggable='true'><p>${input.value}</p></div>`;
        input.value='';

    }
    drag();

})

function drag(){
    let items=document.querySelectorAll(".item")
    items.forEach(item=>{
        item.addEventListener("dragstart",()=>{
            select=item;
            console.log(select)
            item.classList.remove("opacity-100")
            item.classList.add("opacity-25")

        })
        item.addEventListener("dragend",()=>{
            select=null;
            item.classList.remove("opacity-25")
            item.classList.add("opacity-100")
            

        })

        boxs.forEach(box=>{
            box.addEventListener("dragover",(e)=>{
                e.preventDefault();
                box.classList.replace("bg-light","bg-primary")
                box.classList.replace("text-primary","text-white")
            })

            box.addEventListener("dragleave",()=>{
                box.classList.replace("bg-primary","bg-light")
                box.classList.replace("text-white","text-primary")
            })
            box.addEventListener('drop',()=>{
                console.log(select);
                console.log("llllll");

                box.append(select);
                box.classList.replace("bg-primary","bg-light")
                box.classList.replace("text-white","text-primary")
            })
        })

    })

}

