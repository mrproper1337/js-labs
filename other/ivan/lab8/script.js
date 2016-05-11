var topn = 128,bottomn = 0;
if(!confirm('Ваш возраст больше '+topn+' лет?')){
    for(var j = 0;j < 6;j++){
        var middle = bottomn+(topn-bottomn)/2;
        if(confirm('Ваш возраст больше(или равен)'+middle+' лет'))
            bottomn = middle;
        else
            topn = middle;
    }
    if(confirm('Ваш возраст равен '+topn+' ?'))
        alert('Ваш возраст '+topn);
    else
        alert('Ваш возраст '+bottomn);
}else alert('Неправильный ввод');

