
const Calculator = document.querySelector("#calculator");

let evaluate = "";
Calculator.addEventListener('click', function(event){
    const clickedKey = event.target.closest('button');
    
    const display = document.querySelector('#display');
    if(clickedKey.id=="="){
        evaluate = display.value;
        display.value = eval(evaluate);
    }
    else if(clickedKey.id=="AC"){
        display.value = "";
        evaluate="";
    }
    else if(clickedKey.id =="**"||clickedKey=="*"){

    }
    else if (clickedKey.classList.contains("operations") && clickedKey.id!="(" && clickedKey.id!=")") 
    {
        display.value += " " + clickedKey.id + " ";
    }
    else{
        display.value += clickedKey.id;
    }
});