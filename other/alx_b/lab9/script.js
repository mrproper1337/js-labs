var fillArray = function(arr){
    while(true || arr.length > 15){
        var input = prompt('Введите массив: ');
        if(!input)break;
        arr.push(parseInt(input));
    }
};
var isContain = function(arr,val){
    for(var i = 0;i < arr.length;i++)
        if(arr[i] === val)
            return true;
    return false;
};
var makeUniqe = function(arr,res){
    for(var i = 0;i < arr.length;i++)
        if(!isContain(res,arr[i]))
            res.push(arr[i]);
};
var array = [], res = [];
fillArray(array);
makeUniqe(array,res);
alert(res+'');