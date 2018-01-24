
$(document).ready(function () {
    $("#demo").click(function (evento) {
        var campo =$('#metros').val();
        if(campo===''){
            $("#alerta").fadeIn();
        }
        else{
            $("#ventana").fadeIn(200);
            $("#alerta").fadeOut();
        }
    });
});

// script que oculta datos pagina