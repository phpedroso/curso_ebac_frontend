<?php 
require("conexao.php");
date_default_timezone_set('America/Sao_Paulo');

$perfil=$_COOKIE['areafinal'];
$id=$_GET['id'];

$sql2="select * from tb_theflash where id=$id";
$rs_fct2 = mysqli_query($conexao,$sql2);
$row_fct2 = mysqli_fetch_assoc($rs_fct2);

?>
<div class="container-fluid">
<div class="d-sm-flex align-items-center justify-content-between mb-4">
	<h1 class="h3 mb-0 text-gray-800">Acerto de Facilidades - Cliente: <?php echo $row_fct2['login'];?> - Login: <?php echo $row_fct2['novologin'];?></h1>
</div>
<div class="card shadow mb-4">
	<div class="card-header py-3">
		<h6 class="m-0 font-weight-bold text-primary">Atualizado em <?php echo Date("d/m/Y H:i");?></h6> 
	</div>
	<div class="card-body">
		<div class="table-responsive">
			<table class="table table-bordered table-sm" id="dataTable" width="90%" cellspacing="0">
				<thead align="center">
					<tr>
						<th>ID Cliente</th>
						<th>Login Cliente</th>
						<th>Data/Hora do Registro</th>
						<th>Endereço</th>
						<th>CTOP</th>
						<th>Porta</th>
						<th>Ação</th>
					</tr>
				</thead>
				<tbody>
  <?php 
  	require("conexaoixc.php");
    $cor="#FFFFFF";
	do{
		
		$idcliente=$row_fct2['login'];
		$login=$row_fct2['novologin'];
		$dthr_registro=substr($row_fct2['dthr_resposta'],8,2).'/'.substr($row_fct2['dthr_resposta'],5,2).'/'.substr($row_fct2['dthr_resposta'],0,4).' '.substr($row_fct2['dthr_resposta'],11,5);
		$ctop=$row_fct2['ctop'];
		$porta=$row_fct2['porta'];
		$obsengenharia=$row_fct2['observacao_engenharia'];
		
		$sql="select 
			tbc.endereco,
			tbc.complemento,
			tbc.bairro
			from su_oss_chamado as tbc    
			where tbc.id_cliente=$idcliente
			order by tbc.id desc limit 1;";
		$rs_fct = mysqli_query($conexaoixc,$sql);
		$row_fct = mysqli_fetch_assoc($rs_fct);
		$endereco=$row_fct['endereco'].'<br>'.$row_fct['complemento'].'<br>'.$row_fct['bairro'];
		
	?>
	</form>
	<form name="f1" method="POST" action="registra_acertofac.php">
		<input type="hidden" name="idcadastro" value="<?php echo $id;?>">
		<tr> 
			<td nowrap bgcolor=<?php echo $cor ;?> class="text-center"><?php echo $idcliente;?></td>
			<td nowrap bgcolor=<?php echo $cor ;?> class="text-center"><?php echo $login;?></td>
			<td nowrap bgcolor=<?php echo $cor ;?> class="text-center"><?php echo $dthr_registro;?></td>
			<td  bgcolor=<?php echo $cor ;?> class="text-left"><?php if($perfil=='ENGENHARIA'){echo $endereco;}else{echo $obsengenharia;}?></td>
			<td nowrap bgcolor=<?php echo $cor ;?> class="text-center"><?php echo $ctop;?></td>
			<td nowrap bgcolor=<?php echo $cor ;?> class="text-center"><?php echo $porta;?></td>
			
			<td nowrap bgcolor=<?php echo $cor ;?> rowspan="2" class="text-center"><?php echo '<select name="acao"><option selected>CADASTRADO</option><option>CORRIGIR</option></select><br><br><input type="image" src="img/ok.png" width="48" title="Finalizar">';?></td>
		</tr>
		<tr> 
			<td nowrap colspan="6" bgcolor=<?php echo $cor ;?> class="text-center"><textarea name="infoengenharia" class="form-control" placeholder="Caso tenha informações relevantes, digite nesse campo"><?php echo strtoupper($row_fct2['textoenviado']).' - '.$row_fct2['observacao_operacao'];?></textarea></td>
		</tr>
 
  <?php 
	if ($cor=="#E7EEEE"){$cor= "#FFFFFF";}else{	$cor= "#E7EEEE";}	
  } while ($row_fct2 = mysqli_fetch_assoc($rs_fct2)) ;?>
	
		</form>
	</table>
</body>