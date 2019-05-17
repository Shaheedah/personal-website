function myFunction() {
    var x, text;
  
    // Get the value of the input field with id="number"
    x = document.getElementById("number").value;
  
    // If x is Not a Number 
    if (isNaN(x)) {
      text = "Input not valid";
    } if(x<19) {
      text = "Try again";
    } if(x>19 && x<25){
      text = "You're close! Try again"
    }if(x ==22){
      text = "That's correct!"
    }else{
        text = "Sorry, you're out of attempts"
    }
    document.getElementById("demo").innerHTML = text;
  }