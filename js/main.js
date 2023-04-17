$(document).ready(function() {

    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate( {
        rules: { 
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        }, 
        messages : {
            nome: 'Por favor, digite o seu nome completo',
            telefone : 'Digite um telefone válido',
            email: 'Digite um e-mail válido',
            cpf: 'Por favor, verifique os números de seu CPF',
            endereco: 'O endereço por pode ficar em branco',
            cep: 'CEP não pode ficar em branco'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
            console.log(camposIncorretos);
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})