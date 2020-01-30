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

// var d = new Date();
// d.setFullYear(2020);
// document.getElementById("Date").innerHTML = d;


  

  