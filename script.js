function calcular(){
    const altura = document.querySelector(".altura").value;
    const peso = document.querySelector(".peso").value;
    

    let calc = parseInt(peso / (altura * altura));
    
    if(calc < 18.5){
        alert("Magreza, seu IMC é de:" + calc);
    }
    else if(calc >= 18.5 && calc < 25){
        alert("Normal, seu IMC é de:" + calc);
    }
    else if(calc >= 25 && calc < 30){
        alert("Sobrepeso, seu IMC é de:" + calc);
    }
    else if(calc >=30 && calc < 40){
    alert('Obesidade, seu IMC é de: ' + calc);
    }
    else 
        alert('Obesidade Grave')
}