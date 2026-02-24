// 1 Number
const parentDiv = document.getElementById("parent-div");
parentDiv.addEventListener("click", function(){
    console.log("click");
})


// 2 Number
const buttonMainContainer = document.getElementById("parent-div");
buttonMainContainer.addEventListener("click", function(event){
    if(event.target.classList.contains("child-div")){
        console.log(event.target.innerText);
    }
})
