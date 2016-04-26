var questions = [
    {q:'борщец или котлетосы?\n1. борщец\n2. котлетосы\n3. борщец и котлетосы',a:3},
    {q:'как сдать тек?\n1. никак\n2. спеть песню\n3. распечатать сердечко',a:1},
    {q:'Денис любит информатику?\n1. да\n2. очень\n3. любит',a:0}
];
var result = 0;
for(var i = 0;i < questions.length; i++){
    var answer = parseInt(prompt(questions[i].q));
    if(answer === questions[i].a){
        result += 100/questions.length;
        alert('верно');
    }
    else alert('неверно');
}
alert('Ваш результат: '+parseInt(result)+'% - Вы Игорь');