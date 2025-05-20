document.addEventListener("DOMContentLoaded", () =>{
    let Menu1=document.getElementById("menu1")
    let Menu2=document.getElementById("menu2")
    let Menu3=document.getElementById("menu3")
    let Menu4=document.getElementById("menu4")


    Menu1.addEventListener("mouseover",function(){
        Menu1.style.color="gray"
    })
    Menu2.addEventListener("mouseover",function(){
        Menu2.style.color="gray"
    })
    Menu3.addEventListener("mouseover",function(){
        Menu3.style.color="gray"
    })
    Menu4.addEventListener("mouseover",function(){
        Menu4.style.color="gray"
    })
    Menu1.addEventListener("mouseout",function(){
        Menu1.style.color="#454846"
    })
    Menu2.addEventListener("mouseout",function(){
        Menu2.style.color="#454846"
    })
    Menu3.addEventListener("mouseout",function(){
        Menu3.style.color="#454846"
    })
    Menu4.addEventListener("mouseout",function(){
        Menu4.style.color="#454846"
    })

});