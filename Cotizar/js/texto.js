
$(document).ready(function () {
    $("#demo").click(function (evento) {
        var campo =$('#metros').val();
        if(campo===''){
            $("#alerta").fadeIn();
        }
        else{
            $("#ventana").fadeIn(200);
            $("#alerta").fadeOut();
            $(document).ready(function(){
                $("#demo").click(function(evento){
                    location.reload();
                });
            });   
            
        }
    });
});

// script que oculta datos pagina