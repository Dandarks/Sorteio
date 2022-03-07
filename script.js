var number = document.getElementById("numeros");
var people = document.getElementById("pessoas");

function numeros () {
    document.getElementById("nSorteado").style.display = "none";
    document.getElementById("h3").innerHTML = "";

    if (people.style.display == "block"){
        people.style.display = "none";
    }
    number.style.display = "block";
}

function sortearNumeros () {
    let n = document.getElementById("qtd").value;
    document.getElementById("qtd").value = "";
    let ns = Math.round(Math.random() * n);

    document.getElementById("nSorteado").style.display = "block";
    document.getElementById("h3").innerHTML = ns;
}

function pessoas () {
    document.getElementById("pSorteado").style.display = "none";
    document.getElementById("pS").innerHTML = "";

    if (number.style.display == "block"){
        number.style.display = "none";
    }
    document.getElementById("pessoas").style.display = "block";
}

var nomes = [];

function adicionar(){
    nomes.push(document.getElementById("names").value);
    document.getElementById("names").value = "";
}

function sortearPessoas (){
    let np = nomes.length;
    let ps = Math.floor(Math.random() * np);

    document.getElementById("pSorteado").style.display = "block";
    document.getElementById("pS").innerHTML = nomes[ps];
}

function limpar () {
    nomes = [];
    document.getElementById("pSorteado").style.display = "none";
}