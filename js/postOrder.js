
function init(){
    var onClick = document.getElementById("submit_button");
    var alertInfo = document.getElementById("fname");
    onClick.addEventListener("click", function() {
      alert ("Thank you for your purchase, " + alertInfo.value + "!");
    });
}
window.addEventListener('load', init);


function submit_by_id() {
  if (validation()) {
    document.getElementById("submit_button").submit(); //form submission
    location.href = 'https://projecttwoitmd362.github.io/ProjectTwo/postOrder.html';
  }
}

function validation() {
  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  if (name === '' || email === '') {
    alert("Please fill all fields!");
    return false;
  } else {
    return true;
  }
}

function URL() {
    location.href = 'https://projecttwoitmd362.github.io/ProjectTwo/postOrder.html';
}

document.addEventListener("click", submit_by_id);
