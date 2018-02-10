$(document).ready(function () {
    $("#demo").click(function (evento) {
        var campo =$('#metros').val();
        if(campo===''){
            $("#alerta").fadeIn();
        }
        else{
            $("#ventana").fadeIn(200);
            $("#alerta").fadeOut();
            $("#demo").css("display","none");
            $("#metros").attr('disabled','disabled');  
            actualizar();
        }
    });
    function actualizar(){ 
        $("#actualizar").css("display","block");   
        $("#actualizar").click(function(evento){
        $("#actualizar").fadeOut();
        location.reload();
  });
}
});

// script que oculta datos pagina