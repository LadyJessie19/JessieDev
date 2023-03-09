const input = document.getElementById('input')
const ranger = document.getElementById('ranger')
let numAnterior = 0
let operacaoClicada = ''
const morfar = '332393'

function pressButton(key){ 
    input.className = 'active'   
    if(isNaN(key)){
        if(key !== '='){
           operacaoClicada = key
           numAnterior = input.value
           input.value = ''
        } else {
            if(input.value !== morfar){
                input.value = operation(operacaoClicada, numAnterior, input.value)
            } else{
                ranger.className = 'power'
            }
        }
      } else {
        input.value = input.value + key
      }
    }

function operation(key, num1, num2){
    switch (key) {
        case '+':
            return Number(num1) + Number(num2);
        case '-':
            return Number(num1) - Number(num2);
        case '*':
            return Number(num1) * Number(num2);
        case '/':
            return Number(num1) / Number(num2);
        default:
            return 0;
    }
}
function action(key){
    switch (key) {
        case 'C':
            input.value = ''
            input.className = 'inactive'
            ranger.className = 'hidden'
            break;
        case 'CE':
            const viewer = input.value;
            input.value = viewer.substring(0, viewer.length -1);
            break;
        case '.':
            input.value = input.value + '.'
        break;
    }
}

