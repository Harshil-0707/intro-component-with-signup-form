const emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

document.getElementById('btn').onclick = () =>{
    const input = document.querySelectorAll("input");
    for(let i = 0;i < input.length;i++){
        if(!input[i].value){
            input[i].classList.add("error");
            empty(input[i].id);
        }else{
            input[i].classList.remove("error");
            full(input[i].id);
        }

        if(i == 2 && !input[2].value.match(emailFormat)){
            input[i].classList.add("error");
            empty(input[i].id);
        }
    }
};

function empty(inputName){ 
    document.getElementById(inputName).style.borderColor = "hsl(0, 100%, 74%)";
    document.getElementById(inputName).nextElementSibling.style.display = "block";
}

function full(inputName){
    document.getElementById(inputName).nextElementSibling.style.display = "none";
    document.getElementById(inputName).style.borderColor = "hsl(246, 25%, 77%)";
}