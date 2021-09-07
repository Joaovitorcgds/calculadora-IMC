//pegando os elementos
    let altura = document.querySelector(".altura");
    let peso = document.querySelector(".peso");
    let resultado = document.querySelector(".resultado");


function calcular(){ 
    // calculo do imc
    let calc = parseFloat((peso.value / (altura.value * altura.value)).toFixed(2));

    // condições 
    if(calc < 18.5){
        resultado.innerHTML = "Magreza, seu IMC é de:" + calc;
    }
    else if(calc >= 18.5 && calc < 25){
        resultado.innerHTML = "Normal, seu IMC é de:"  + calc;
    }
    else if(calc >= 25 && calc < 30){
        resultado.innerHTML = "Sobrepeso, seu IMC é de:" + calc;
    }
    else if(calc >=30 && calc < 40){
        resultado.innerHTML = "Obesidade, seu IMC é de:" + calc;
    }
    else
        resultado.innerHTML = "Obesidade Grave, seu IMC é de:" + calc;
}

function limpar(){
    let altura1 = document.querySelector(".altura").value;
    let peso1 = document.querySelector(".peso").value;

    
    altura1.innerText = "";
    peso1.innerText = "";
    resultado.innerHTML = "";
}