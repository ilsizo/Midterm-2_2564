let i = 0 ;


function myFunction(imgs) {
    i = i + 1 ;
    const link_img = [
        "http://i.imgur.com/L34Fib6.jpg" ,
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d"
    ];
        
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = link_img[i%2];
    expandImg.parentElement.style.display = "block";
  }