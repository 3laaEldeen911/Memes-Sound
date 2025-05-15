let lengthButton = document.querySelectorAll(".drum").length

for(let i =0 ; i<lengthButton ; i++)


document.querySelectorAll(".drum")[i].addEventListener("click" , handleClick)


function handleClick(){
    alert("clicked")
}


