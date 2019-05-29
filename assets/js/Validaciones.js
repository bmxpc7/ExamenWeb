function validar() {
	if ($('#txtNombre').val().length == 0) {
		alert("Llene Nombre");
	}
	if ($('#txtEmail').val().length == 0){
		alert("Llene Email");
	}
	if ($('#txtTelefono').val().length == 0) {
		alert("Llene Telefono");
	}
}
$("#btnRegresar").click(function() {
	consumir();
});

$("#btnGuardar").click(function() {
	validar();
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
		alert("Llene Telefono");
	}
    }

$( document ).ready(function() {
	consumir();
});