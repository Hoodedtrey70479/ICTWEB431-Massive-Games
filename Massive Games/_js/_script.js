window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    document.getElementById("header").style.maxHeight = "50px";
    document.getElementById("logo").style.maxHeight = "45px";
    document.getElementById("menu").style.display = "none";
  } else {
    document.getElementById("header").style.maxHeight = "150px";
    document.getElementById("logo").style.maxHeight = "100px";
    document.getElementById("menu").style.display = "";
  }
}