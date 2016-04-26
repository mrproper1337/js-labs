var fillArray = function(name,arr){
    while(true || arr.length > 15){
        var input = prompt('fill '+name+' array');
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
var uniteUniqe = function(arr1,arr2){
    for(var i = 0;i < arr2.length;i++)
        if(!isContain(arr1,arr2[i]))
            arr1.push(arr2[i]);
};
var array1 = [],array2 = [];
fillArray('arrray 1',array1);
fillArray('arrray 2',array2);
var res = [];
uniteUniqe(res,array1);
uniteUniqe(res,array2);
alert(res+'');