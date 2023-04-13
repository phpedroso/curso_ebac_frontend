$(document).ready(function() {
	$('#adicionar').click(function() {
		const novaTarefa = $('#tarefa').val();
		if (novaTarefa === '') {
			alert('Por favor, insira uma tarefa.');
			return;
		}
		const novoItem = $('<li></li>');
		novoItem.text(novaTarefa);
		const proximoId = $('#lista-tarefas li').length + 1;
		novoItem.attr('id', 'tarefa-' + proximoId);
		$('#lista-tarefas').append(novoItem);
		$('#tarefa').val('');
	});
	$('#lista-tarefas').on('click', 'li', function() {
		$(this).toggleClass('executada');
	});
});