let idade = 18
let isHuman = true
let aniversario = "Janeiro"
let nome = "Anthony"
let sobrenome = "Almeida"


if(idade >=18){
    console.log ("Você é maior de idade")
}
else {
    console.log ("Você é menor de idade")
}
if(aniversario == "Janeiro" || aniversario == "Dezembro"){
    console.log ("Neste mês você faz aniversário")
}
else{
    console.log ("Você não faz aniversário neste mês")
}

if(nome[0] == "R" || nome[0] == "r"){
    console.log ("Seu nome se inicia com R")
}
else{
    console.log ("Seu nome não se inicia com R")
}

if(sobrenome.length >=6 || sobrenome.substring(0,1) === "E" || sobrenome.substring(0,1) == "E"){
    console.log ("Seu sobrenome contém mais de 6 letras ou se inicia com a letra E")
}
else{
    console.log ("Seu sobrenome não tem mais de 6 letras ou não se inicia com a letra E")
}