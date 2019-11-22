function init(){
    var onClick = document.getElementById("submit_button");
    var alertInfo = document.getElementById("fname");
    onClick.addEventListener("click", function() {
        alert ("Thank you for your purchase, " + alertInfo.value + "!");
    });
}
window.addEventListener('load', init);

