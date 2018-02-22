$(document).ready(function(){ //Funcion al momento de recargar la página
    
  // Metodo GET JSON para traer lista de colores
  $.getJSON('http://35.184.175.53:8080/Calculadora/api/Calculadora/ochentaColores', function(data) {
    var html = ''; //Varaible para imprimir
    var html2 = ''; //Variable para imprimir
    var len = data.length; //Varible para contador
    for (var i = -0; i < len; i++) { //for para traer la lista de colores
        html += '<li data-original-index=' + [i] + '><a  id="valor" tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="label ' + data[i].especificacion + '">&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp' + data[i].nombre + '  ' + data[i].especificacion + '<span class="glyphicon glyphicon-ok check-mark"></span></a>';
        html2 += '<option id="valor" value="'+data[i].dosificacion+'" data-content="' + '"<span class="label ' + data[i].especificacion + '"></span>' + data[i].nombre + '  ' + data[i].especificacion + '</option>';
    }
    $('.dropdown-menu.inner ').append(html);
    $('#colores').append(html2);
    $('#coloresDesmol').append(html2); //Juan //Imprimir listado de colores en Desmoldantes 
});
$('select#colores').on('change',function(){//Funcion para seleccionar la dosificacion del option que 											viene por valor
    var valor = $(this).val(); //Variable para guardar dosificacion 
    $("#resultado,#resultado2,#dosificacion").empty(); //jquery para limpiar los datos de los paneles
    var valor2 = $('input#metros').val(); //variable del dato de ingreso de metros cuadrados
    console.log(valor,valor2);
    var r1=parseFloat(valor2); //variable r1 para operacion que guardo metros cuadrados
    var r2=parseFloat(valor);	//variable r2 para operacion que guardo dosificacion
    r1=r1*r2; //operacion de multiplicacion
    var respuesta =parseFloat(r1) 
    respuesta=r1/25;
        if (respuesta % 1 == 0) {
            $('#resultado').append(r1," Kg");	
            $('#resultado2').append(respuesta," bulto de 25KG");
            $('#dosificacion').append(valor," Kg");
        }else{
            respuesta=Math.round(respuesta);// para aproximar el dato
            $('#resultado').append(r1," Kg");	
            $('#resultado2').append(respuesta," bulto de 25KG");
            $('#dosificacion').append(valor," Kg");
        } 
});
$('select#coloresDesmol').on('change',function(){//Funcion para seleccionar la dosificacion del option que 
    var metro = $('input#metros').val(); //variable del dato de ingreso de metros cuadrados
    var demoldante = 0.25;
    $("#resultadodesmol,#resultadoDesmolResultado,#resultadoDesmolResultadototal").empty(); //jquery para limpiar los datos de los paneles
    
    var datometro=parseFloat(metro); //variable r1 para operacion que guardo metros cuadrados
    var datodemoldante=parseFloat(demoldante);	//variable r2 para operacion que guardo dosificacion
    datometro=datometro*datodemoldante; //operacion de multiplicacion
    var resultadodesmoldante =parseFloat(datometro); 
    $("#resultadodesmol").append(resultadodesmoldante," Kg");
        var ciclo=0;
        var ciclo2=0;
        var ciclo3=0;
            while(resultadodesmoldante>=20){
                resultadodesmoldante=resultadodesmoldante-20;
                ciclo++;
            }
                if (resultadodesmoldante>=1 && resultadodesmoldante<=14.9) {
                    ciclo3++;
                }if(resultadodesmoldante>=15 && resultadodesmoldante<=19.9){
                    ciclo2++;
                    ciclo=ciclo+ciclo2;
                }
                $('#resultadoDesmolResultado').append(ciclo," cuñete de 20KG");
                $('#resultadoDesmolResultadototal').append(ciclo3," bulto de 10KG");
    });
    $('input#metros').on('change',function(){//Desmoldante liquido
        var metrosliquido =$(this).val();
        var dosificacionliquido= 0.25;
        var demoldanteliquido;
        demoldanteliquido=metrosliquido*dosificacionliquido;
        demoldanteliquido=parseFloat(demoldanteliquido);
        $("#desmolconcreteliquido").append(demoldanteliquido," Litros");
        $("#hidroconcrete").append(demoldanteliquido," Litros");
        var ciclo=0;
        var ciclo2=0;
        var ciclo3=0;
            while(demoldanteliquido>=20){
                demoldanteliquido=demoldanteliquido-20;
                ciclo++;
            }if(demoldanteliquido>=1 && demoldanteliquido<=14.9){
                ciclo3++;    
            }if(demoldanteliquido>=15 && demoldanteliquido<=19.9){
                ciclo2++;
                ciclo=ciclo+ciclo2;    
            }
            $("#demolliquidodiez").append(ciclo3," Garrafa de 10LT");
            $("#demolliquidoveinte").append(ciclo," Garrafa de 20LT");
            $("#hidroconcretediez").append(ciclo3," Garrafa de 10LT");
            $("#hidroconcreteveinte").append(ciclo," Garrafa de 20LT");
    });
    $('input#metros').on('change',function(){//Funcion para seleccionar la dosificacion del option que              viene por valor
        var metros= $(this).val();  //variable del dato de ingreso de metros cuadrados
        var datonuevemetros=9;
        var calcular=parseFloat(metros);
        var resultado=parseFloat(calcular);
        calcular = metros / datonuevemetros;
        resultado = Math.round(calcular);
        calcular = calcular.toFixed(2);
            $('#resultadoretardante').append(calcular," Litros"); 
                var ciclo=0;
                var ciclo2=0;
                var ciclo3=0;
                if(resultado<=19){
                    ciclo3++;
                    $('#resultadoRetardantetotal').append(ciclo3," Garrafa de 10KG");
                    $('#resultadoRetardante').append(ciclo," Garrafa de 20KG");  
                }
                else{
                    while(resultado>=20){
                        resultado=resultado-20;
                        ciclo++;
                    }   if (resultado>=1 && resultado<=14.9) {
                            ciclo3++;
                            $('#resultadoRetardantetotal').append(ciclo3," Garrafa de 10KG");
                        }if(resultado>=15 && resultado<=19.9){
                            ciclo2++;
                            ciclo=ciclo+ciclo2;
                            $('#resultadoRetardantetotal').append(ciclo3," Garrafa de 10KG");
                        }
                     $('#resultadoRetardante').append(ciclo," Garrafa de 20KG");      
                }                
    });
    $('input#centimetros').on('change',function(){
        var datosencentimetros=$(this).val();
        var datosenmetros= $('input#metros').val();
            
        $('input#valor1').on('change',function(){//Funcion para seleccionar la dosificacion del option que                                  viene por valor
                $('#resultadoFibracontre').empty(); //jquery para limpiar los datos de los paneles
                var valorprimario=$(this).val();
                var datosMetrosvalor1= datosenmetros;
                if (datosencentimetros>=1 && datosencentimetros<=9) {
                    datosMetrosvalor1=((datosMetrosvalor1*datosencentimetros)/10)*valorprimario;
                    datosMetrosvalor1=Math.round(datosMetrosvalor1);// para aproximar el dato
                    $('#resultadoFibracontre').append(datosMetrosvalor1," Kilogramos");   
                }if(datosencentimetros>=10 && datosencentimetros<=99){
                    datosMetrosvalor1=((datosMetrosvalor1*datosencentimetros)/100)*valorprimario;
                    datosMetrosvalor1=Math.round(datosMetrosvalor1);// para aproximar el dato
                    $('#resultadoFibracontre').append(datosMetrosvalor1," Kilogramos");
                    }if(datosencentimetros>=100 && datosencentimetros<=999){
                        datosMetrosvalor1=((datosMetrosvalor1*datosencentimetros)/1000)*valorprimario;
                        datosMetrosvalor1=Math.round(datosMetrosvalor1);// para aproximar el dato
                        $('#resultadoFibracontre').append(datosenmetros," Kilogramos");
                        }if(datosencentimetros>=1000 && datosencentimetros<=9999){
                            datosMetrosvalor1=((datosMetrosvalor1*datosencentimetros)/10000)*valorprimario;
                            datosMetrosvalor1=Math.round(datosMetrosvalor1);// para aproximar el dato
                            $('#resultadoFibracontre').append(datosenmetros," Kilogramos");
                        }
            }); 
                $('input#valor2').on('change',function(){//Funcion para seleccionar la dosificacion del option que                                          viene por valor
                $('#resultadoFibracontre').empty(); //jquery para limpiar los datos de los paneles
                var valorsecundario=$(this).val();
                var datosMetrosvalor2=datosenmetros;
                if (datosencentimetros>=1 && datosencentimetros<=9) {
                    datosMetrosvalor2=((datosMetrosvalor2*datosencentimetros)/10)*valorsecundario;
                    datosMetrosvalor2=Math.round(datosMetrosvalor2);// para aproximar el dato
                    $('#resultadoFibracontre').append(datosMetrosvalor2," Kilogramos");   
                }if(datosencentimetros>=10 && datosencentimetros<=99){
                    datosMetrosvalor2=((datosMetrosvalor2*datosencentimetros)/100)*valorsecundario;
                    datosMetrosvalor2=Math.round(datosMetrosvalor2);// para aproximar el dato
                    $('#resultadoFibracontre').append(datosMetrosvalor2," Kilogramos");
                    }if(datosencentimetros>=100 && datosencentimetros<=999){
                        datosMetrosvalor2=((datosMetrosvalor2*datosencentimetros)/1000)*valorsecundario;
                        datosMetrosvalor2=Math.round(datosMetrosvalor2);// para aproximar el dato
                        $('#resultadoFibracontre').append(datosenmetros," Kilogramos");
                        }if(datosencentimetros>=1000 && datosencentimetros<=9999){
                            datosMetrosvalor2=((datosMetrosvalor2*datosencentimetros)/10000)*valorsecundario;
                            datosMetrosvalor2=Math.round(datosMetrosvalor2);// para aproximar el dato
                            $('#resultadoFibracontre').append(datosenmetros," Kilogramos");
                        }   
                });
                $('input#valor3').on('change',function(){//Funcion para seleccionar la dosificacion del option que                                          viene por valor
                $('#resultadoFibracontre').empty(); //jquery para limpiar los datos de los paneles
                var valortercero=$(this).val();
                var datosMetrosvalor3=datosenmetros;
                if (datosencentimetros>=1 && datosencentimetros<=9) {
                    datosMetrosvalor3=((datosMetrosvalor3*datosencentimetros)/10)*valortercero;
                    datosMetrosvalor3=Math.round(datosMetrosvalor3);// para aproximar el dato
                    $('#resultadoFibracontre').append(datosMetrosvalor3," Kilogramos");   
                }if(datosencentimetros>=10 && datosencentimetros<=99){
                    datosMetrosvalor3=((datosMetrosvalor3*datosencentimetros)/100)*valortercero;
                    datosMetrosvalor3=Math.round(datosMetrosvalor3);// para aproximar el dato
                    $('#resultadoFibracontre').append(datosMetrosvalor3," Kilogramos");
                    }if(datosencentimetros>=100 && datosencentimetros<=999){
                        datosMetrosvalor3=((datosMetrosvalor3*datosencentimetros)/1000)*valortercero;
                        datosMetrosvalor3=Math.round(datosMetrosvalor3);// para aproximar el dato
                        $('#resultadoFibracontre').append(datosenmetros," Kilogramos");
                        }if(datosencentimetros>=1000 && datosencentimetros<=9999){
                            datosMetrosvalor3=((datosMetrosvalor3*datosencentimetros)/10000)*valortercero;
                            datosMetrosvalor3=Math.round(datosMetrosvalor3);// para aproximar el dato
                            $('#resultadoFibracontre').append(datosenmetros," Kilogramos");
                        }
                }); 
    });//fin del input
    $('input#metros').on('change',function(){
    var valormetrocuadrado=$(this).val();
        $('button#valorSellamate').on('click',function(){
           $("#resultadoSella,#resultadoSellaveinte,#resultadoSelladiez").empty(); //jquery para limpiar los datos de los paneles   
            var metrosella =valormetrocuadrado;
            var valorsella=$(this).val();
            metrosella=metrosella*valorsella;
            metrosella=Math.round(metrosella);
            metrosella=metrosella.toFixed(2);
            $('#resultadoSella').append(metrosella," Kg"); 
                var ciclo=0;
                var ciclo2=0;
                var ciclo3=0;
                while(metrosella>=20){
                    metrosella=metrosella-20;
                    ciclo++;
                }
                if (metrosella>=1 && metrosella<=14) {
                    ciclo3++;
                    $('#resultadoSelladiez').append(ciclo3," Garrafa de 10KG");
                }if(metrosella>=15 && metrosella<=19){
                    ciclo2++;
                    ciclo=ciclo+ciclo2;
                    }
                $('#resultadoSellaveinte').append(ciclo," Garrafa de 20KG");        
    });
           $('button#valorSellalustre').on('click',function(){
            $("#resultadoSella,#resultadoSellaveinte,#resultadoSelladiez").empty(); //jquery para limpiar los datos de los paneles     
            var sellametro =valormetrocuadrado;   
            var valorsella=$(this).val();
            sellametro=sellametro*valorsella;
            sellametro=Math.round(sellametro);
            sellametro=sellametro.toFixed(2);
            $('#resultadoSella').append(sellametro," Kg"); 
                var ciclo=0;
                var ciclo2=0;
                var ciclo3=0;
                while(sellametro>=20){
                    sellametro=sellametro-20;
                    ciclo++;
                }if (sellametro>=1 && sellametro<=14) {
                    ciclo3++;
                    $('#resultadoSelladiez').append(ciclo3," Garrafa de 10KG");
                    }if(sellametro>=15 && sellametro<=19){
                        ciclo2++;
                        ciclo=ciclo+ciclo2;
                    }
            $('#resultadoSellaveinte').append(ciclo," Garrafa de 20KG");  
            });
                $('button#valorSellasemilustre').on('click',function(){
                $("#resultadoSella,#resultadoSellaveinte,#resultadoSelladiez").empty(); //jquery para limpiar los datos de los paneles    
                var metrosellamate= valormetrocuadrado;
                var valorsella=$(this).val();
                metrosellamate=metrosellamate*valorsella;
                metrosellamate=Math.round(metrosellamate);
                metrosellamate=metrosellamate.toFixed(2);
                $('#resultadoSella').append(metrosellamate," Kg"); 
                    var ciclo=0;
                    var ciclo2=0;
                    var ciclo3=0;
                    while(metrosellamate>=20){
                        metrosellamate=metrosellamate-20;
                        ciclo++;
                    }if (metrosellamate>=1 && metrosellamate<=14) {
                            ciclo3++;
                            $('#resultadoSelladiez').append(ciclo3," Garrafa de 10KG");
                        }   if(metrosellamate>=15 && metrosellamate<=19){
                                ciclo2++;
                                ciclo=ciclo+ciclo2;
                            }
                $('#resultadoSellaveinte').append(ciclo," Garrafa de 20KG");
                });
    });
    validarCualquierNumero();
    $(window).resize(function css(){     
        if($(window).width() == 991){
           $("#bordetitulo").removeClass("col-sm-3").addClass("col-sm-2");
           $("#inputtitulo").removeClass("col-sm-6").addClass("col-sm-8"); 
        }
        if($(window).width() == 767){
           $("#bordetitulo").removeClass("col-sm-2");
           $("#inputtitulo").removeClass("col-sm-8"); 
           
        }

    });
});	
function validarCualquierNumero(){
        $(".numeric").numeric();
        $(".integer").numeric(false, function() { alert("Integers only"); this.value = ""; this.focus(); });
        $(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });
        $(".positive-integer").numeric({ decimal: false, negative: false }, function() { alert("Positive integers only"); this.value = ""; this.focus(); });
        $(".decimal-2-places").numeric({ decimalPlaces: 2 });
        $(".decimal-3-places").numeric({ decimalPlaces: 3 });
}

