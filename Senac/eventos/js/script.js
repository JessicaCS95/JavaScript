//adicionando evento
const btn = document.querySelector("#meu-botao");

/*dois argumentos, tipo de evento e função que vai acontecer após clicar no evento*/

btn.addEventListener("click", function(){
console.log("Clicou!");
});

//Selecionando o campo de entrada e a div de saída
const inputField = document.getElementById('inputField');
const output = document.getElementById('output');

//adicionando o evento keydown ao campo de entrada
inputField.addEventListener("keydown", function(event){
//Exibir qual a tecla foi pressionada
output.textContent = `Você pressionou ${event.key}`;
});

//adicionando o evento keyup ao campo de entrada
inputField.addEventListener("keyup", function(event){
    //Exibir qual a tecla foi pressionada
    output.textContent = `Você pressionou ${event.key}`;
    })