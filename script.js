var number = document.getElementById("numeros");
var people = document.getElementById("pessoas");
var nomes = [];

function numeros () {
    document.getElementById("nSorteado").style.display = "none";
    document.getElementById("h3").innerHTML = "";

    if (people.style.display == "block"){
        people.style.display = "none";
        qtd.value = "";
    }
    number.style.display = "block";
    nomes = [];
    document.getElementById("listp").innerHTML = "";

}

function sortearNumeros () {
    var qtd = document.getElementById("qtd");
    if (qtd.value == ""){
        alert("Digite um número");
    } else {
        let n = qtd.value;
        let ns = Math.round(Math.random() * n);

        document.getElementById("nSorteado").style.display = "block";
        document.getElementById("h3").innerHTML = ns;
        }
}

function pessoas () {
    document.getElementById("pSorteado").style.display = "none";
    document.getElementById("pS").innerHTML = "";

    if (number.style.display == "block"){
        number.style.display = "none";
    }
    document.getElementById("pessoas").style.display = "block";
}

document.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        const btn = document.querySelector("#add");
        btn.click();
    }
})

function adicionar(){
    var name = document.getElementById("names");
    if (name.value == ""){
        alert("Digite um nome válido!")
    } else {
        nomes.push(name.value);
        document.getElementById("listp").innerHTML += `<li>${name.value}</li>`;
        name.value = "";
    }
}

function sortearPessoas (){
    if (nomes == ""){
        alert("Insira pelo menos 2 nomes");
        document.getElementById("pSorteado").style.display = "none";      
    } else {
        let np = nomes.length;
        let ps = Math.floor(Math.random() * np);

        document.getElementById("pSorteado").style.display = "block";
        document.getElementById("pS").innerHTML = nomes[ps];
    }
}

function limpar () {
    nomes = [];
    document.getElementById("pSorteado").style.display = "none";
    document.getElementById("listp").innerHTML = "";
}
