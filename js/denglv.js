// $(".ma").click(function(){
//     console.log(".ma");
    
    
//     let like=false;
//     if(like=true){
//         $(".ma").css({display:"block"})
//         $(".nike").css({display:"none"})
//     }else{
//         $(".ma").css({display:"none"})
//         $(".nike").css({display:"block"})
//     }
// })

let ma=document.querySelector(".ma")
console.log(ma);
let nike=document.querySelector(".nike")
// 扫码对应的内容
let miks=document.querySelector(".miks")
console.log(nike);
// 账户登录对应的内容
let conlogn=document.querySelector(".conlogn")
console.log(conlogn);

ma.addEventListener("click",function(){
    miks.style.display="block";
    conlogn.style.display="none";
})
nike.addEventListener("click",function(){
    miks.style.display="none";
    conlogn.style.display="block";
})