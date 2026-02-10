//Ouvir o evento de quando o usuario sair do campo de CEP
document.getElementById('cep').addEventListener('blur', function(evento)=> {
    const elemento = evento.target;
    const cepInformado = elemento.value;

//validar o CEP
if (!(cepInformado.lenght ===8)){
    return;


    

}
//Fazer busca no VIACEP

//Preencher os campos de endereço com os dados retornados