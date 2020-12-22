// Element has class
function hasClass(el, cls) {
    var has = false;
    el.classList.forEach(function(c){
        if (c == cls) has = true; return;
    }); return has;
}
