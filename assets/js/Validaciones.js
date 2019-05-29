function validar() {
	if ($('#txtNombre').val().length == 0) {
		$('#txtNombre').css({ 'backgroundColor': 'red' });
	}
	if ($('#txtEmail').val().length == 0){
		$('#txtEmail').css({ 'backgroundColor': 'red' });
	}
	if ($('#txtTelefono').val().length == 0) {
		$('#txtTelefono').css({ 'backgroundColor': 'red' });
	}
}
$("#btnRegresar").click(function() {
	$("#txtEmail").val("");
	$("#txtNombre").val("");
	$("#txtTelefono").val("");
	$("#chck1").prop('checked',false);
	$("#chck2").prop('checked',false);
	$("#chck3").prop('checked',false);
	$("#chck4").prop('checked',false);
	$('#txtNombre').css({ 'backgroundColor': 'transparent' });
	$('#txtEmail').css({ 'backgroundColor': 'transparent' });
	$('#txtTelefono').css({ 'backgroundColor': 'transparent' });

});

$("#btnGuardar").click(function() {
	validar();
	ValCorreo();
});

function consumir(){
	$(document).ready(function() {
		var texto;
		texto += '<tr>'
		texto += '<td>id</td>'
		texto += '<td>Nombre Completo</td>'
		texto += '<td>Correo</td>'
		texto += '<td>Avatar</td>'
		texto += '</tr>';
		$.ajax({
			url: "https://reqres.in/api/users?page=2"
		}).then(function(data) {
			$.each( data.data, function( key, value ) {
				texto += '<tr>';
				texto += '<td>'+data.data[key].id+'</td>';
				texto += '<td>'+data.data[key].first_name+" "+data.data[key].last_name+'</td>';
				texto += '<td>'+data.data[key].email+'</td>';
				texto += '<td> <img src='+data.data[key].avatar+'></td>';
				texto += '</tr>';
				$("#tblEjercicio").html(texto);
			});
		});
	});
}

function soloLetras(e){
	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key).toLowerCase();
	letras = " áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
	especiales = "8-37-39-46";

	tecla_especial = false
	for(var i in especiales){
		if(key == especiales[i]){
			tecla_especial = true;
			break;
		}
	}

	if(letras.indexOf(tecla)==-1 && !tecla_especial){
		return false;
	}
}

function soloNumeros(e){
	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key).toLowerCase();
	numeros = "1234567890";
	especiales = "8-37-39-46";

	tecla_especial = false
	for(var i in especiales){
		if(key == especiales[i]){
			tecla_especial = true;
			break;
		}
	}

	if(numeros.indexOf(tecla)==-1 && !tecla_especial){
		return false;
	}
	if ($('#txtTelefono').val().length == 10) {
		alert("Exedio el numero permitido");
	}
}

function ValCorreo(e){
	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key).toLowerCase();
	letras = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ@.";
	especiales = "8-37-39-46";

	tecla_especial = false
	for(var i in especiales){
		if(key == especiales[i]){
			tecla_especial = true;
			break;
		}
	}

	if(letras.indexOf(tecla)==-1 && !tecla_especial){
		return false;
	}
}
$( document ).ready(function() {
	consumir();
});