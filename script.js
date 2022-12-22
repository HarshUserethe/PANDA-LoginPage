



var username = document.querySelector("#username")
var pass = document.querySelector("#password")
var lhand = document.querySelector("#left-hand")
var rhand = document.querySelector("#right-hand")
var submit = document.querySelector("#submit")

pass.addEventListener("click",function(){
   lhand.style.transform = "rotate(-125deg)";
   lhand.style.height = "160px";
   lhand.style.top = "44vh"
   lhand.style.left = "36vw"
   
   
   lhand.style.transformOrigin = "0 0"

   
   
})

pass.addEventListener("click",function(){
    rhand.style.transform = "rotate(125deg)";
    rhand.style.height = "160px";
    rhand.style.top = "38.5vh"
    rhand.style.right = "29vw"
    
    
    rhand.style.transformOrigin = "0 0"
 
    
    
 })


 username.addEventListener("click", function(){
    lhand.style.transform = "rotate(0)";
    lhand.style.height = "10vh";
    lhand.style.top = "40vh"
    lhand.style.left = "32vw"
    
    
    lhand.style.transformOrigin = "0 0"
 })

 username.addEventListener("click", function(){
    rhand.style.transform = "rotate(0)";
    rhand.style.height = "10vh";
    rhand.style.top = "40vh"
    rhand.style.right = "32.5vw"
    rhand.style.transformOrigin = "0 0"
 })


 submit.addEventListener("click",function(){
    rhand.style.transform = "rotate(0)";
    rhand.style.height = "10vh";
    rhand.style.top = "40vh"
    rhand.style.right = "32.5vw"
    rhand.style.transformOrigin = "0 0"

    lhand.style.transform = "rotate(0)";
    lhand.style.height = "10vh";
    lhand.style.top = "40vh"
    lhand.style.left = "32vw"
    
    
    lhand.style.transformOrigin = "0 0"
 })
