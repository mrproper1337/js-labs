var valid = [
    {
        login:'Юрий',
        psw:'1234'
    },
    {
        login:'Александр',
        psw:'4567'
    },
    {
        login:'Максим',
        psw:'7890'
    }
];

var answer = {
    login:prompt('Введите ваш логин : '),
    psw:prompt('Введите ваш пароль')
};
var check = false;
for(var i = 0;i < valid.length; i++){
    if(answer.login === valid[i].login && answer.psw === valid[i].psw){
        alert('Читатель '+answer.login+' зарегистрирован');
        check = true;
        break;
    }
}
if(!check)alert('Имя и/или пароль\nвведены неправильно');