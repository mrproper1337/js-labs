document.main.calc.onclick = function(){
    var func = document.main.function.value;
    var lb = document.main.leftBorder.value;
    var rb = document.main.rightBorder.value;
    var acc = document.main.acc.value;

    if(func !== '' &&
        lb !== '' &&
        rb !== '' &&
        acc !== '' &&
        lb <= rb){

    }else alert('wrong input');
};

