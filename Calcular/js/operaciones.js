$(document).ready(function(){ //Funcion al momento de recargar la página
    
  // Metodo GET JSON para traer lista de colores
  $.getJSON('http://35.184.175.53:8080/Calculadora/api/Calculadora/ochentaColores', function(data) {
    var html = ''; //Varaible para imprimir
    var html2 = ''; //Variable para imprimir
    var len = data.length; //Varible para contador
    for (var i = -0; i < len; i++) { //for para traer la lista de colores
        html += '<li data-original-index=' + [i] + '><a  id="valor" tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="label ' + data[i].especificacion + '">&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp' + data[i].nombre + '  ' + data[i].especificacion + '<span class="glyphicon glyphicon-ok check-mark"></span></a>';
        html2 += '<option id="valor" value="'+data[i].dosificacion+'" data-content="' + '"<span class="label ' + data[i].especificacion + '">&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;' + data[i].nombre + '  ' + data[i].especificacion + '</option>';
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

$('select#coloresDesmol').on('change',function(){//Funcion para seleccionar la dosificacion del option que 											viene por valor
    var demoldante = $(this).val(); //Variable para guardar dosificacion 
    $("#resultadodesmol,#resultadoDesmolResultado,#resultadoDesmolResultadototal").empty(); //jquery para limpiar los datos de los paneles
    var metro = $('input#metros').val(); //variable del dato de ingreso de metros cuadrados
    var datometro=parseFloat(metro); //variable r1 para operacion que guardo metros cuadrados
    var datodemoldante=parseFloat(demoldante);	//variable r2 para operacion que guardo dosificacion
    datometro=datometro*datodemoldante; //operacion de multiplicacion
    var resultadodesmoldante =parseFloat(datometro); 
    $('#resultadodesmol').append(resultadodesmoldante," Kg");	
        var ciclo=0;
        var ciclo2=0;
        var ciclo3=0;
            while(resultadodesmoldante>=20){
                resultadodesmoldante=resultadodesmoldante-20;
                ciclo++;
            }
            console.log(ciclo);
            if (resultadodesmoldante>=1 && resultadodesmoldante<=14) {
                    ciclo3++;
                    $('#resultadoDesmolResultadototal').append(ciclo3," bulto de 10KG");
                }   if(resultadodesmoldante>=15 && resultadodesmoldante<=19){
                        ciclo2++;
                        ciclo=ciclo+ciclo2;
                    }
        $('#resultadoDesmolResultado').append(ciclo," cuñete de 20KG");
    });
    $('input#metros').on('change',function(){//Funcion para seleccionar la dosificacion del option que                                          viene por valor
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
                while(resultado>=20){
                    resultado=resultado-20;
                    ciclo++;
                }if (resultado>=1 && resultado<=14) {
                        ciclo3++;
                        $('#resultadoRetardantetotal').append(ciclo3," Garrafa de 10KG");
                    }   if(resultado>=15 && resultado<=19){
                            ciclo2++;
                            ciclo=ciclo+ciclo2;
                        }
            $('#resultadoRetardante').append(ciclo," Garrafa de 20KG");      
    });
    $('input#centimetros').on('change',function(){
        var datosencentimetros=$(this).val();
        var datosenmetros= $('input#metros').val();
            $('input#valor1').on('change',function(){//Funcion para seleccionar la dosificacion del option que                                  viene por valor
                $('#resultadoFibracontre').empty(); //jquery para limpiar los datos de los paneles
                var valorprimario=$(this).val();
                if (datosencentimetros>=1 && datosencentimetros<=9) {
                    datosenmetros=datosenmetros*datosencentimetros;
                    datosenmetros=datosenmetros/10;
                    datosenmetros=datosenmetros*valorprimario;
                    datosenmetros=Math.round(datosenmetros);// para aproximar el dato
                    $('#resultadoFibracontre').append(datosenmetros," Kilogramos");   
                }if(datosencentimetros>=10 && datosencentimetros<=99){
                    datosenmetros=datosenmetros*datosencentimetros;
                    datosenmetros=datosenmetros/100;
                    datosenmetros=datosenmetros*valorprimario;
                    datosenmetros=Math.round(datosenmetros);// para aproximar el dato
                    $('#resultadoFibracontre').append(datosenmetros," Kilogramos");
                    }if(datosencentimetros>=100 && datosencentimetros<=999){
                        datosenmetros=datosenmetros*datosencentimetros;
                        datosenmetros=datosenmetros/1000;
                        datosenmetros=datosenmetros*valorprimario;
                        datosenmetros=Math.round(datosenmetros);// para aproximar el dato
                        $('#resultadoFibracontre').append(datosenmetros," Kilogramos");
                        }if(datosencentimetros>=1000 && datosencentimetros<=9999){
                            datosenmetros=datosenmetros*datosencentimetros;
                            datosenmetros=datosenmetros/10000;
                            datosenmetros=datosenmetros*valorprimario;
                            datosenmetros=Math.round(datosenmetros);// para aproximar el dato
                            $('#resultadoFibracontre').append(datosenmetros," Kilogramos");
                        }
            }); 
                $('input#valor2').on('change',function(){//Funcion para seleccionar la dosificacion del option que                                          viene por valor
                $('#resultadoFibracontre').empty(); //jquery para limpiar los datos de los paneles
                var valorsecundario=$(this).val();
                if (datosencentimetros>=1 && datosencentimetros<=9) {
                datosenmetros=datosenmetros*datosencentimetros;
                datosenmetros=datosenmetros/10;
                datosenmetros=datosenmetros*valorsecundario;
                datosenmetros=Math.round(datosenmetros);// para aproximar el dato
                $('#resultadoFibracontre').append(datosenmetros," Kilogramos");   
                }if(datosencentimetros>=10 && datosencentimetros<=99){
                    datosenmetros=datosenmetros*datosencentimetros;
                    datosenmetros=datosenmetros/100;
                    datosenmetros=datosenmetros*valorsecundario;
                    datosenmetros=Math.round(datosenmetros);// para aproximar el dato
                    $('#resultadoFibracontre').append(datosenmetros," Kilogramos");
                    }if(datosencentimetros>=100 && datosencentimetros<=999){
                        datosenmetros=datosenmetros*datosencentimetros;
                        datosenmetros=datosenmetros/1000;
                        datosenmetros=datosenmetros*valorsecundario;
                        datosenmetros=Math.round(datosenmetros);// para aproximar el dato
                        $('#resultadoFibracontre').append(datosenmetros," Kilogramos");
                        }if(datosencentimetros>=100 && datosencentimetros<=999){
                            datosenmetros=datosenmetros*datosencentimetros;
                            datosenmetros=datosenmetros/1000;
                            datosenmetros=datosenmetros*valorsecundario;
                            datosenmetros=Math.round(datosenmetros);// para aproximar el dato
                            $('#resultadoFibracontre').append(datosenmetros," Kilogramos");
                        }   
                });
                $('input#valor3').on('change',function(){//Funcion para seleccionar la dosificacion del option que                                          viene por valor
                $('#resultadoFibracontre').empty(); //jquery para limpiar los datos de los paneles
                var valortercero=$(this).val();
                if (datosencentimetros>=1 && datosencentimetros<=9) {
                    datosenmetros=datosenmetros*datosencentimetros;
                    datosenmetros=datosenmetros/10;
                    datosenmetros=datosenmetros*valortercero;
                    datosenmetros=Math.round(datosenmetros);// para aproximar el dato
                    $('#resultadoFibracontre').append(datosenmetros," Kilogramos");   
                        }if(datosencentimetros>=10 && datosencentimetros<=99){
                            datosenmetros=datosenmetros*datosencentimetros;
                            datosenmetros=datosenmetros/100;
                            datosenmetros=datosenmetros*valortercero;
                            datosenmetros=Math.round(datosenmetros);// para aproximar el dato
                            $('#resultadoFibracontre').append(datosenmetros," Kilogramos");
                    }if(datosencentimetros>=100 && datosencentimetros<=999){
                        datosenmetros=datosenmetros*datosencentimetros;
                        datosenmetros=datosenmetros/1000;
                        datosenmetros=datosenmetros*valortercero;
                        datosenmetros=Math.round(datosenmetros);// para aproximar el dato
                        $('#resultadoFibracontre').append(datosenmetros," Kilogramos");
                        }if(datosencentimetros>=100 && datosencentimetros<=999){
                            datosenmetros=datosenmetros*datosencentimetros;
                            datosenmetros=datosenmetros/1000;
                            datosenmetros=datosenmetros*valortercero;
                            datosenmetros=Math.round(datosenmetros);// para aproximar el dato
                            $('#resultadoFibracontre').append(datosenmetros," Kilogramos");
                        }
                }); 
    });//fin del input
    $('input#metros').on('change',function(){
    var valormetrocuadrado=$(this).val();
        
        $('button#valorSellamate').on('click',function(){
           
            var valorsella=$(this).val();
            valormetrocuadrado=valormetrocuadrado*valorsella;
            valormetrocuadrado=Math.round(valormetrocuadrado);
            valormetrocuadrado=valormetrocuadrado.toFixed(2);
            $('#resultadoSella').append(valormetrocuadrado," Kg"); 
                var ciclo=0;
                var ciclo2=0;
                var ciclo3=0;
                while(valormetro>=20){
                    valormetrocuadrado=valormetrocuadrado-20;
                    ciclo++;
                }if (valormetrocuadrado>=1 && valormetrocuadrado<=14) {
                        ciclo3++;
                        $('#resultadoSellatotal').append(ciclo3," Garrafa de 10KG");
                    }   if(valormetrocuadrado>=15 && valormetrocuadrado<=19){
                            ciclo2++;
                            ciclo=ciclo+ciclo2;
                        }
            $('#resultadoSellacontre').append(ciclo," Garrafa de 20KG");
        });
           
           $('button#valorSellamate').on('click',function(){
            var valorsella=$(this).val();
            valormetrocuadrado=valormetrocuadrado*valorsella;
            valormetrocuadrado=Math.round(valormetro);
            valormetrocuadrado=valormetrocuadrado.toFixed(2);
            $('#resultadoSella').append(valormetrocuadrado," Kg"); 
                var ciclo=0;
                var ciclo2=0;
                var ciclo3=0;
                while(valormetrocuadrado>=20){
                    valormetrocuadrado=valormetrocuadrado-20;
                    ciclo++;
                }if (valormetrocuadrado>=1 && valormetrocuadrado<=14) {
                        ciclo3++;
                        $('#resultadoSellatotal').append(ciclo3," Garrafa de 10KG");
                    }   if(valormetrocuadrado>=15 && valormetrocuadrado<=19){
                            ciclo2++;
                            ciclo=ciclo+ciclo2;
                        }
            $('#resultadoSellacontre').append(ciclo," Garrafa de 20KG");
        });
                $('button#valorSellamate').on('click',function(){
            var valorsella=$(this).val();
            valormetrocuadrado=valormetrocuadrado*valorsella;
            valormetrocuadrado=Math.round(valormetrocuadrado);
            valormetrocuadrado=valormetrocuadrado.toFixed(2);
            $('#resultadoSella').append(valormetrocuadrado," Kg"); 
                var ciclo=0;
                var ciclo2=0;
                var ciclo3=0;
                while(valormetrocuadrado>=20){
                    valormetrocuadrado=valormetrocuadrado-20;
                    ciclo++;
                }if (valormetrocuadrado>=1 && valormetrocuadrado<=14) {
                        ciclo3++;
                        $('#resultadoSellatotal').append(ciclo3," Garrafa de 10KG");
                    }   if(valormetrocuadrado>=15 && valormetrocuadrado<=19){
                            ciclo2++;
                            ciclo=ciclo+ciclo2;
                        }
            $('#resultadoSellacontre').append(ciclo," Garrafa de 20KG");
        });
    });
validarCualquierNumero();
});	
function validarCualquierNumero(){
        $(".numeric").numeric();
        $(".integer").numeric(false, function() { alert("Integers only"); this.value = ""; this.focus(); });
        $(".positive").numeric({ negative: false }, function() { alert("No negative values"); this.value = ""; this.focus(); });
        $(".positive-integer").numeric({ decimal: false, negative: false }, function() { alert("Positive integers only"); this.value = ""; this.focus(); });
        $(".decimal-2-places").numeric({ decimalPlaces: 2 });
        $(".decimal-3-places").numeric({ decimalPlaces: 3 });
}