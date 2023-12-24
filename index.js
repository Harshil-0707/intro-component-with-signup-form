document.getElementById('btn').onclick = () => {

    (document.getElementById('firstName').value)
        ?   full('firstName')
        :   empty('firstName');

    (document.getElementById('lastName').value)
        ?   full('lastName')
        :   empty('lastName');
    
    (document.getElementById('Email').value)
        ?   full('Email')
        :   empty('Email');
    
    (document.getElementById('Password').value)
        ?   full('Password')
        :   empty('Password');
}

function empty(inputName){
    document.getElementById(inputName).nextElementSibling.style.color = "hsl(0, 100%, 74%)";
    document.getElementById(inputName).style.borderColor = "hsl(0, 100%, 74%)";    
}

function full(inputName){
    document.getElementById(inputName).nextElementSibling.style.color = "#fff";
    document.getElementById(inputName).style.borderColor = "hsl(246, 25%, 77%)";
}