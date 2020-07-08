function clicou(){
    document.getElementById("agradecimento").innerHTML = "OBRIGADO POR CLICAR";
}
function redirecionar (){
    //window.open("https://carolineassis.dev/");
    window.location.href = "https://carolineassis.dev/";
}

function trocar (elemento){
    elemento.innerHTML = "OBRIGADO POR PASSAR O MOUSE";
}

function voltar (elemento){
    elemento.innerHTML = "passe o mouse aqui";
}
function teste1 (){
    document.getElementById("mouseove").innerHTML = "segunda opção";
}
function teste2 (){
    document.getElementById("mouseove").innerHTML = "Voltando ao normal";
}
function load(){
    alert("pagina carregada")
}
function funcaoChange(elemento){
    console.log(elemento.value);
}
/*function clicou(){
    alert("Obrigad por clicar!")
} */

/*var validar = 0;

function validaIdade(idade){
    if (idade >=18 ){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt ("qual sua idade");
validaIdade(idade)
console.log(validar); */

/* function soma(n1,n2){
    return n1+n2;
}
alert (soma(5,10)); */

/*function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome)
}
alert(setReplace("vai japão", "japão", "Brasil")) */



/*var d = new Date ();
alert(d);

alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes()); */

//repeticao
/*var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};*/
/*var count;
for(count=0;count <= 5; count++){
    console.log(count);
}; */
//condicional
/*var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/

// lista de Dicionário

/*var frutas =[{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome); */

// Dicionário
/*var fruta ={nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor); */ 


/*var nome = "Caroline Assis";
var idade = 26;
var idade2 = 50;
alert(nome + " tem " + idade +  " anos ");
console.log(nome); */

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.toString())
//console.log(lista.reverse());
//console.log(lista.join(" | "));