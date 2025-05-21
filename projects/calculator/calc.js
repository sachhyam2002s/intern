let firstnumber = ''
let secondnumber = ''
let operator = ''

function append (value) {
    if (!operator){
        firstnumber += value
        display(firstnumber)
    }else{
        secondnumber += value
        display(secondnumber)
    }
}
function setOperator(op){
    if(firstnumber !== ""){
        operator = op;
        display(firstnumber + ' ' +operator)
    }
}
function calculate(){
    let num1 = parseFloat(firstnumber)
    let num2 = parseFloat(secondnumber)
    let result = 0

    switch (operator) {
        case '-':
            result = num1 - num2
            break;
        case '+':
            result = num1 + num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num2 !==0 ? num1 / num2 : 'error'
            break;
        default:
            result = "Error"
            break;
    }
    display(result)
    firstnumber = result.toString()
    secondnumber = ''
    operator = ''
}

function clearAll(){
    firstnumber = '';
    secondnumber = '';
    operator = '';
    display('')
}
function display (value){
    document.getElementById('display').value = value
}