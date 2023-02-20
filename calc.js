function displayNum(num){
    if(num=='!'){
        if(result.value[0]=='-'){
            result.value=result.value.slice(1);
        }else{
result.value='-'+result.value;
        }    
    }else{
    result.value=result.value+num;
    }
}

function evaluateExpr(){
    result.value=eval(result.value);
}
function allClear(){
    result.value='';
}

function backSpace(){
    result.value=result.value.slice(0, -1);
}
function percentage(){
    result.value=result.value/100;
}