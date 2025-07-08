let nav = document.getElementById("nav");
window.onscroll = function(){
  if(scrollY >= 100){
    nav.style.borderBottomRightRadius = "100px";
    nav.style.borderBottomLeftRadius = "100px";
    nav.style.backgroundColor = "#0071f8";
    nav.style.padding = "20px";
  }else{
    nav.style.backgroundColor = "transparent";
    nav.style.padding = "65px";
  }
}