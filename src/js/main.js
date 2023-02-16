let cep = document.querySelector('#cep');
cep.focus();

const showData = (result) => {
    for (const field in result) {
        if (document.querySelector('#' + field)) {
            document.querySelector('#' + field).value = result[field];

        }
    }
}

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response => {
            response.json()
                .then(data => showData(data))
        })
        .catch(e => console.log("Deu erro: " + e));
})



function clearSearch() {
    const btn = document.querySelector('.limpar').addEventListener('click', () => {
        document.querySelector('#cep').value = '';
        document.querySelector('#logradouro').value = '';
        document.querySelector('#bairro').value = '';
        document.querySelector('#localidade').value = '';
        document.querySelector('#uf').value = '';
        cep.focus();
    })
}
clearSearch()


function closeWindow() {
    const btnClosed = document.querySelector('.sair').addEventListener('click', () => {
        window.close();
    });
};
closeWindow()