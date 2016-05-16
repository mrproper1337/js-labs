var e = {};
e.func = prompt('Введите функцию:');
e.lb = parseFloat(prompt('Введите левую границу'));
e.rb = parseFloat(prompt('Введите правую границу'));
e.acc = parseFloat(prompt('Введите точность'));
var lbo = e.lb,rbo = e.rb;
var calc = function(x){
    return eval(e.func);
};
var bisec = function(e){
    var count = 0;
    do{
        var nb = (e.lb + e.rb)/2;
        if(calc(nb) < 0)e.lb = calc(nb);
        else e.rb = calc(nb);
        console.log('res '+ calc(nb));
        count++;
    }while(Math.abs(e.lb- e.rb)< e.acc || count <= 10);
};
if(e.func !== '' &&
    e.lb !== '' &&
    e.rb !== '' &&
    e.acc !== '' &&
    e.lb <= e.rb
        ){
    bisec(e);
    alert('корень '+e.func+' на промежутке \n('+ lbo+' ; '+ rbo+') = '+e.lb);
    }else alert('wrong input');
//Math.pow(x,3) - x -2


