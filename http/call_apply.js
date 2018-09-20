var pet = {
    word:'...',
    speak:function(say){
        console.log(say + ' ' + this.word)
    }
}
pet.speak('Speak');


var dog = {
    word:'wang'
}
pet.speak.call(dog,'Speak')//this指向dog，后面的值是参数列表