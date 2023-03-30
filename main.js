const form=document.getElementById('form-validar');
const campoA=document.getElementById('campo-a');
const campoB=document.getElementById('campo-b');

let formEValido = false;

function validaCampos() {
    if (campoB.value > campoA.value) {
        return formEValido=true;
       
    } else {
        return formEValido=false;
    };
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    validaCampos();

    if (formEValido)  {
        const mensagem = `Valor do campo B (${campoB.value}) é maior que o valor do campo A (${campoA.value})`;
        const containerMensagem = document.querySelector('.system-message');
        containerMensagem.innerHTML = mensagem;
        containerMensagem.style.display='block';
        containerMensagem.style.background='#27ae60';
        campoA.value='';
        campoB.value='';
    } else {
        const mensagem = `Valor do campo A (${campoA.value}) é maior ou igual ao valor do campo B (${campoB.value})`;
        const containerMensagem = document.querySelector('.system-message');
        containerMensagem.innerHTML = mensagem;
        containerMensagem.style.display='block';
        containerMensagem.style.background='red';
        campoA.value='';
        campoB.value='';

    }
 });