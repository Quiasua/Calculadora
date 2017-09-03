/*Bolas del menu*/
 $(document).ready(function(){
    $('#myModal').modal('show');

    document.getElementById("ocultar").style.display = "none";
    document.getElementById("ocultar2").style.display = "none";
    document.getElementById("ocultar3").style.display = "none";
    document.getElementById("ocultar4").style.display = "none";
    $('#cerrar').click(function() {
        document.getElementById("ocultar").style.display = "block";
        document.getElementById("ocultar2").style.display = "block";
        document.getElementById("ocultar3").style.display = "block";
        document.getElementById("ocultar4").style.display = "block";
        $('#slider').addClass('animated bounceInLeft');
        $('#slider2').addClass('animated fadeInDown');
        $('#slider3').addClass('animated lightSpeedIn');
        $('#slider4').addClass('animated slideInUp');
 });
});