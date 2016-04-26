var mounthes = [
    {name:'январь',day:0},
    {name:'февраль',day:31},
    {name:'март',day:59},
    {name:'апрель',day:90},
    {name:'май',day:120},
    {name:'июнь',day:151},
    {name:'июль',day:181},
    {name:'август',day:212},
    {name:'сентябрь',day:243},
    {name:'октябрь',day:273},
    {name:'ноябрь',day:314},
    {name:'декабрь',day:334}
];

var p = prompt('Введите число/месяц/\"тип\" года\nнапример: 12/январь/високосный').split('/');
var input = {
    day:parseInt(p[0]),
    month:p[1],
    type:p[2] === 'високосный'
};
var extra = 0;
for(var j = 0;j < mounthes.length;j++){
    if(input.type && j > 1)
        extra++;
    if(mounthes[j].name === input.month)
        alert('Сейчас '+(input.day + mounthes[j].day + extra)+' день года');
}
