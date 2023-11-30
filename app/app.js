var accdr = document.getElementsByClassName("accordion");

var closebtn = document.getElementsByClassName("close_btn");

var i;
var windowHeight = window.innerHeight;
// content = myElement = document.getElementById('myElement');

for (i = 0; i < accdr.length; i++) {
  /* Accionar boton abrir - escudos */
  accdr[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      console.log(windowHeight);
      content.style.maxHeight = (windowHeight-10) + "px";
      console.log(content.style.CSSStyleDeclaration.length);
    }
  });

  /* Accionar boton cerrar */
  closebtn[i].addEventListener("click", function () {
    var parent = this.parentNode;
    if (parent.style.maxHeight) {
      parent.style.maxHeight = null;
    } else {
      parent.style.maxHeight = 1 + "vh";
    }
  });
}
