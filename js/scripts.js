function playerMove(){
  alert("nice");
}

function submitForm(){
  s = document.getElementById("submission").value;
  if (s.toLowerCase() === "yes") {
    document.getElementById("response").innerHTML = "Glad you like it! me too :)";
  } else if (s.toLowerCase() === "no") {
    document.getElementById("response").innerHTML = "Sorry not sorry xP";
  } else {
    document.getElementById("response").innerHTML = "";
  }
}
