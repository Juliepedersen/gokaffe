
    var box = document.getElementById('box');
    window.onmousemove = function(e){
        var x = - e.clientx/5;
        var y = - e.clienty/5;

        box.style.backgroundPositionX = x + 'px';
        box.style.backgroundPositionY = y + 'px';
    }