let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
const val = document.getElementById('btn');
let screenValue = '';
val.addEventListener('click',(e)=>{
    AC = e.target.value;
    if(AC == 'AC'){
        screenValue = "";
        screen.value = screenValue;
    }

})
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText == '*'){
            screenValue += buttonText;
            screen.value = screenValue;
        }else if(buttonText == '='){
            screen.value = eval(screenValue);
        }else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}