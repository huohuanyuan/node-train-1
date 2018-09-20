var globalVariable = 'this is global variable';

function globalFunction(){
    var locaVariable = 'this is local variable';
    console.log('vist global/local variable')
    console.log(globalVariable);
    console.log(locaVariable);
    globalVariable ='this is changed variable';
    console.log(globalVariable);
    function localFunction(){
        var innerLocalVariable = 'this is inner local variable';
        console.log('visit global/local/innerLocal variable');
        console.log(globalVariable);
        console.log(locaVariable);
        console.log(innerLocalVariable);
    }
    localFunction()
}
globalFunction()