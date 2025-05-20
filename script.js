document.addEventListener("DOMContentLoaded", () =>{
    //ヘッダーの要素の色をホバーで変える
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

//画像を変える
// let Like=document.getElementById("like")
// let GoodAt=document.getElementById("good_at")
// let Club=document.getElementById("club")
// let Qualification=document.getElementById("qualification")
// let LikeSpan=document.getElementById("like_span")
// let GoodAtSpan=document.getElementById("good_at_span")
// let ClubSpan=document.getElementById("club_span")
// let QualificationSpan=document.getElementById("qualification_span")
// GoodAt.addEventListener("mouseover",function(){
//     GoodAtSpan.style.color="transparent"
//     GoodAt.style.backgroundImage='url("good_at_img.jpg")'
// })
// GoodAt.addEventListener("mouseout",function(){
//     GoodAtSpan.style.color="#DEAD6A"
//     GoodAt.style.backgroundImage=''
// })
});