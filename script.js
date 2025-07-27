
const Calculator = document.querySelector("#calculator");

let evaluate = "";
Calculator.addEventListener('click', function(event){
    const clickedKey = event.target.closest('button');
    
    const display = document.querySelector('#display');
    if(clickedKey.id=="="){
        display.value = eval(evaluate);
    }
    else if(clickedKey.id=="AC"){
        display.value = "";
        evaluate="";
    }
    else if(clickedKey.id =="**"||clickedKey.id=="*"){
        if(clickedKey.id=="**") display.value+="^"
        else if(clickedKey.id=="*") display.value+=" x "
        evaluate+=clickedKey.id;
    }
    else if (clickedKey.classList.contains("operations") && clickedKey.id!="(" && clickedKey.id!=")") 
    {
        display.value += " " + clickedKey.id + " ";
        evaluate += " " + clickedKey.id + " ";
    }
    else{
        display.value += clickedKey.id;
        evaluate+= clickedKey.id;
    }
});