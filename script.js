window.onload = function() {
    let btn=document.getElementById("btn");
    //console.log(btn);
    btn.onclick= function(e) {
        //console.log(btn);
        e.preventDefault();
        btn.classList.add('hide');
    }
   btn.classList.add('visible');
    console.log(btn);
} 