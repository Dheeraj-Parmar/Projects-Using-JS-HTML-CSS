let buttons = document.querySelectorAll('button') ;
let input = document.querySelector('input') ;

let string = "";
let arr = Array.from(buttons) ;

arr.forEach(value => {
    value.addEventListener('click', (a) => {
        if(a.target.innerHTML == '=') {
            try {
                string = eval(string)
                input.value = string ;}
            catch(error) {
                input.value = 'ERROR' ;
            }
        }

        else if (a.target.innerHTML == 'AC') {
            string = "" ;
            input.value = string ;
            
        } else if (a.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1)
            input.value = string ;
        }
        
        else {
        string += a.target.innerHTML ;
        input.value = string ; }
    })

}) ;
