"use strict";

// Array de objetos dos alunos
var alunos = [{
  nome: 'Paulo',
  nota: 5
}, {
  nome: 'Maria',
  nota: 7
}, {
  nome: 'Janaina',
  nota: 8
}, {
  nome: 'Isabela',
  nota: 6
}, {
  nome: 'Lucas',
  nota: 4
}];

// Função para retornar os alunos com nota maior ou igual a 6
function alunosAprovados(arr) {
  return arr.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Chamada da função para obter os alunos aprovados
var alunosAprovadosArray = alunosAprovados(alunos);

// Imprimindo os alunos aprovados
console.log(alunosAprovadosArray);