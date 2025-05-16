let lengthButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < lengthButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}


function handleClick() {
  let SoundClick = this.innerHTML
  switch (SoundClick) {
    case "w":
    let sound1 = new Audio("assets/sound/meme(1).mp3")
    sound1.play()
      break;

      case "a":
    let sound2 = new Audio("assets/sound/meme(2).mp3")
    sound2.play()
      break;

      case "b":
    let sound3 = new Audio("assets/sound/meme(3).mp3")
    sound3.play()
      break;

      case "s":
    let sound4 = new Audio("assets/sound/meme(4).mp3")
    sound4.play()
      break;

      case "d":
    let sound5 = new Audio("assets/sound/meme(5).mp3")
    sound5.play()
      break;
      
      case "j":
    let sound6 = new Audio("assets/sound/meme(6).mp3")
    sound6.play()
      break;

      case "k":
    let sound7 = new Audio("assets/sound/meme(7).mp3")
    sound7.play()
      break;

      case "l":
    let sound8 = new Audio("assets/sound/meme(8).mp3")
    sound8.play()
      break;

  
      
  
    default:
      break;
  }

}

