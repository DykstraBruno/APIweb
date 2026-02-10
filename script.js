//Ouvir o evento de quando o usuario sair do campo de CEP
document.getElementById('cep').addEventListener('blur', function(evento)=> {
    const elemento = evento.target;
    const cepInformado = elemento.value;

//validar o CEP
if (!(cepInformado.lenght ===8))
    return;

//Fazer busca no viaCEP

fetch('https:viacep.com.br/ws/${cepinformado}/json')
    .then(response => resnpose.json())
    .then(data => {
        //processamento da página
    if(!data.error){
        document.getElementById('logradouro').value =data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('estado').value = data.uf;

    }else{
        alert("CEP não encontrado")
    }
    })
    .catch(error => console.error("Erro ao buscar o CEP> " , error));

    )

}
//Fazer busca no VIACEP

//Preencher os campos de endereço com os dados retornados