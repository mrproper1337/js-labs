var sqr = function (x){return x*x;};
var sqrt = function(x){return Math.sqrt(x);};
var pointInCircle = function(x,y,circle){
    return sqrt(sqr(x-circle.x)+sqr(y-circle.y)) < circle.r;
};
var pointInSquare = function(x,y,square){
    return !!(x > square.x &&
    x < square.x + square.r &&
    y > square.y &&
    y < square.y + square.r);
};
var getFigureOverlay = function(f){
    return ([[f.x,f.y],[f.x+f.r,f.y],[f.x,f.y+f.r],[f.x+f.r,f.y+f.r]]);
};
var overlayInFigure = function(insideFigure,outsideFigure,checkOverlay){
    var o = getFigureOverlay(insideFigure);
    return(
    checkOverlay(o[0][0],o[0][1],outsideFigure),
    checkOverlay(o[1][0],o[1][1],outsideFigure),
    checkOverlay(o[2][0],o[2][1],outsideFigure),
    checkOverlay(o[3][0],o[3][1],outsideFigure));
};
var calc = function(circle,square){
    if(overlayInFigure(square,circle,pointInCircle))
        alert('квадрат внутри');
    else
    if(overlayInFigure(circle,square,pointInSquare))
        alert('круг внутри');
    else
        alert('нет общих точек');
};
var getInput = function(){
    for(var j = 0;j < 6;j ++){
        input[j] = document.input[j].val();
        if(input[j] < 0)throw Error('at: '+(j+1)+'\ninput numbers can\'t be < 0');
    }
    return input;
};


var check = true;
do{
    try{
        //var i = getInput();
        var c = {//circle
            x:i[0],
            y:i[1],
            r:i[2]
        };
        var s = {//square
            x:i[3],
            y:i[4],
            r:i[5]
        };
        //let's draw it
        $('#circle')
            .css('left', (c.x- c.r)+'px')
            .css('topn', (c.y- c.r)+'px')
            .css('height', (c.r*2)+'px')
            .css('width', (c.r*2)+'px');
        $('#square')
            .css('left', s.x+'px')
            .css('topn', s.y+'px')
            .css('height', s.r+'px')
            .css('width', s.r+'px');
        calc(c,s);
    }catch(e){
        alert(e);
    }
    check = confirm('continue?');
}while(check);