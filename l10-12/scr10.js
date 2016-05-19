var sqr = function (x){return x*x;};
var sqrt = function(x){return Math.sqrt(x);};
var pointDist = function(x1,y1,x2,y2){
    return Math.sqrt(sqr(x1-x2)+sqr(y1-y2));
};
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
var calc1 = function(circle,square){
    if(overlayInFigure(square,circle,pointInCircle))
        alert('квадрат внутри');
    else
    if(overlayInFigure(circle,square,pointInSquare))
        alert('круг внутри');
    else
        alert('нет общих точек');
};
var checkInput = function(input){
    if(input < 0)throw Error('input numbers can\'t be < 0');
    console.log(input+'   -res');

    return input;
};

document.main.check1.onclick = function(){
    try{
        var c = {//circle
            x:checkInput(document.main.cx1.value),
            y:checkInput(document.main.cy1.value),
            r:checkInput(document.main.cr1.value)
        };
        var s = {//square
            x:checkInput(document.main.sx.value),
            y:checkInput(document.main.sy.value),
            r:checkInput(document.main.sl.value)
        };
        calc1(c,s);
    }catch(e){
        alert(e);
    }
};

document.main2.check2.onclick = function(){
    try{
        var c1 = {//circle
            x:checkInput(document.main2.cx2.value),
            y:checkInput(document.main2.cy2.value),
            r:checkInput(document.main2.cr2.value)
        };
        var c2 = {//circle
            x:checkInput(document.main2.cx3.value),
            y:checkInput(document.main2.cy3.value),
            r:checkInput(document.main2.cr3.value)
        };
        var br = c1.r,sr = c2.r;//bigger rad,smaller rad
        if(c2.r>c1.r){
            br = c2.r;
            sr = c1.r;
        }
        if(pointDist(c1.x,c1.y,c2.x,c2.y) === c1.r+c2.r)
            alert('круги имеют точку касания');
        else if(pointDist(c1.x,c1.y,c2.x,c2.y) > c1.r+c2.r)
            alert('нет общих точек');
        else if(pointDist(c1.x,c1.y,c2.x,c2.y)+sr < br)
            alert('один круг лежит внутри другого круга');
        else
            alert('круги пересекаются');
    }catch(e){
        alert(e);
    }
};