function playerMove(){
  alert("nice");
}

function submitForm(){
  s = document.getElementById("submission").value;
  if (s.toLowerCase() === "yes".toLowerCase()) {
    document.getElementById("response").innerHTML = "Glad you like it! me too :)"
  }
}
