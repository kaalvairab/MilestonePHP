

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
}

// Left Navbar

leftNav = document.getElementById('leftNav');
leftNav.addEventListener("click", show);
function show() {
  document.getElementById('leftNavLinks').style.display = "block";
  document.getElementById('leftNavLinks').style.right = "0";


}


leftNavClose = document.getElementById('leftNavClose');
leftNavClose.addEventListener("click", close);
function close() {
  document.getElementById('leftNavLinks').style.right = "-500vw";
  document.getElementById('leftNavLinks').style.display = "none";

}