btnForm = document.getElementById('btn__form')
btnForm.addEventListener('click', emailValidate);

function emailValidate() {
  let regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regex.test(document.getElementById('input__form').value) == false) {
    $("#input__form").addClass("error");
    document.getElementById("alert__svg").style.visibility = "visible";
    document.getElementById("error__msg").style.visibility = "visible";
  } else {
    $("#input__form").removeClass("error");
    document.getElementById("alert__svg").style.visibility = "hidden";
    document.getElementById("error__msg").style.visibility = "hidden";
    alert('Sended successfully!')
  }
}