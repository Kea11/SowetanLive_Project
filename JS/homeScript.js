const close = document.querySelector('.close');
const nav = document.getElementById("tag");

close.style.display = 'none';

function myFunction() {
    var open = document.getElementById("myLinks");
    nav.style.display = 'none';
    close.style.display = 'block';
    if (open.style.display === "block") {
      open.style.display = "none";
    } else {
      open.style.display = "block";
    }
  };

close.addEventListener('click',()=>{
window.location = "index.html"
});

<<<<<<< HEAD
var d = new Date();
d.setFullYear(2020);
document.getElementById("Date").innerHTML = d;
=======
// var d = new Date();
// d.setFullYear(2020);
// document.getElementById("Date").innerHTML = d;
>>>>>>> cd90d06839fdb0538bedd465339aad94ae3c3f2a


  

  