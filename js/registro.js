$(document).ready(function() {

        cantControles();
        manipulacionFecha();
        mostrarCodSolucion();
        kitBasico();
        BorrarkitBasico();
        convertirMayuscula();
        registrarMaterial();
        $("#cont__codSolucion").css("display", "none");


        $("#txtCodSolucion").blur(function(){
          if($('#txtCodSolucion').val() =='PC02'||$('#txtCodSolucion').val() =='pc02' ){
            $('#txtConectorOpt').val(1);
          }else{
            $('#txtConectorOpt').val('');
          }
        })
     
});

// registro material
function registrarMaterial(){
          const formulario = document.getElementById('formMaterial');
            formulario.addEventListener('submit',async(e)=>{
              e.preventDefault();
              if(validaciones()==false){
                return false;
              }else{
                //  si correcto validaciones entoinces: 
                 tamañoDrop =  $('#cbxDrop').val();
                try {                 
                    if(tamañoDrop ==50){
                      var  drop50 = 1;
                      var drop80  = '';
                      var drop100 = '';
                      var drop150 = '';
                      var drop220 = '';
                    }else if(tamañoDrop ==80){
                        var drop50  = '';
                        var drop80  = 1;
                        var drop100 = '';
                        var drop150 = '';
                        var drop220 = '';
                    }else if(tamañoDrop ==100){
                        var drop50  = '';
                        var drop80  = '';
                        var drop100 = 1;
                        var drop150 = '';
                        var drop220 = '';
                    }else if(tamañoDrop ==150){
                        var drop50  = '';
                        var drop80  = '';
                        var drop100 = '';
                        var drop150 = 1;
                        var drop220 = '';
                    }else if(tamañoDrop ==220){
                        var drop50  = '';
                        var drop80  = '';
                        var drop100 = '';
                        var drop150 = '';
                        var drop220 = 1;
                    }
                    const respuesta =await fetch('https://sheet.best/api/sheets/1683b0bb-4cf3-43a1-98b5-088e2a8aaea6',{
                        method:'POST',
                        mode : 'cors',
                        headers:{
                            'Content-Type':'application/json',
                        },
                        body:JSON.stringify({
                            'FECHA':formulario.txtFecha.value,
                            'SOT': formulario.txtSot.value,
                            'TRABAJO': formulario.cbxTrabajo.value,
                            'TECNICO': formulario.cbxTecnico.value,
                            'CODIGO DE SOLUCION':formulario.txtCodSolucion.value,
                            'N° DE CINTILLO':formulario.txtCodSolucion.value,
                            'CODIGO DE SOLUCION':formulario.txtNumCintillo.value,
                            'EQUIPOS':formulario.cbxDetalleOnt.value,
                            'SERIE EMTA':formulario.txtSerieOnt.value,
                            'DECOS':formulario.cbxDetalleIptv.value,
                            'SERIE DECO 1':formulario.txtSerie1.value,
                            'SERIE DECO 2':formulario.txtSerie2.value,
                            'SERIE DECO 3':formulario.txtSerie3.value,
                            'SERIE DECO 4':formulario.txtSerie4.value,
                            'SERIE DECO 5':formulario.txtSerie5.value,
                            
                            'CONTROL':formulario.cbxTipoControles.value,
                            'CANTIDAD DE CONTROLES':formulario.txtCantidadControles.value,
                            'HDMI':formulario.txtCantidadHdmi.value,
                            'TELEFONO':formulario.cbxTelefono.value,
                            'CABLE UTP':formulario.txtUtp.value,
                            'CONECTOR RJ-45':formulario.txtConectorRj45.value,
                            'CONECTORRJ-11':formulario.txtConectorRj11.value,
                            'ROSETA TELEFONICA':formulario.txtRosetaTel.value,
                            'CHAPA Q':formulario.txtChapaQ.value,
                            'CHAPA P':formulario.txtChapaP.value,

                            'CINTILLO ROJO':formulario.txtCintilloRojo.value,
                            'DROP 50':drop50,
                            'DROP 80':drop80,
                            'DROP 100':drop100,
                            'DROP 150':drop150,
                            'DROP 220':drop220,
                            'CONECTOR OPTICO':formulario.txtConectorOpt.value,
                            'ROSETA OPTICA':formulario.txtRosetaOpt.value,
                            'CABLE FIBRA':formulario.txtCableFibra.value,
                        })
                    });
                    const contenido = await respuesta.json();
                    console.log(contenido);
                } catch (error) {
                    console.log(error);
                }
              }
          });
}






// teclear mayuscula
function convertirMayuscula(){
  $(".UpperCase").on("keypress", function () {
    $input=$(this);
    setTimeout(function () {
     $input.val($input.val().toUpperCase());
    },50);
   })
}




   function manipulacionFecha(){
    var flag1 = true;
    var flag2 = true;
    $(document).on('keyup','[id=fecha]',function(e){
        if($(this).val().length == 2 && flag1) {
            $(this).val($(this).val()+"/");
            console.log(flag1)
            flag1 = true;
        } else if($(this).val().length == 5 && flag1) {
            $(this).val($(this).val()+"/2024");
            flag1 = true;
        }
      
    });
   }


   function cantControles(){
    $("select[name=cbxTipoControles]").change(function(){
      let serieIptv1 = $('#txtSerie1').val();
      let serieIptv2 = $('#txtSerie2').val();
      let serieIptv3 = $('#txtSerie3').val();
      let serieIptv4 = $('#txtSerie4').val();
      let serieIptv5 = $('#txtSerie5').val();
      let valor =$(this).val();
      if(valor =='AMCO'){ 
      
        contadorIPTV = 0;
        contadoirRJ45 = 0;
        if(serieIptv1.length > 0){
            // alert('tiene digitos');
            contadorIPTV = contadorIPTV + 1;
            contadoirRJ45 = contadoirRJ45 +2;
        }
        if(serieIptv2.length > 0){
          // alert('tiene digitos');
             contadorIPTV = contadorIPTV + 1;
             contadoirRJ45 = contadoirRJ45 +2;
         }
        if(serieIptv3.length > 0){
          // alert('tiene digitos');
            contadorIPTV = contadorIPTV + 1;
            contadoirRJ45 = contadoirRJ45 +2;
        }
        if(serieIptv4.length > 0){
          // alert('tiene digitos');
            contadorIPTV = contadorIPTV + 1;
            contadoirRJ45 = contadoirRJ45 +2;
        }
        if(serieIptv5.length > 0){
          // alert('tiene digitos');
            contadorIPTV = contadorIPTV + 1;
            contadoirRJ45 = contadoirRJ45 +2;
        }


        // cantidadControles.val(contadorIPTV);
        // txtCantidadHdmi.val(contadorIPTV);;

        $('#txtCantidadControles').val(contadorIPTV);
         $('#txtCantidadHdmi').val(contadorIPTV);
         $('#txtConectorRj45').val(contadoirRJ45);

      

      }
    });
 }




   function mostrarCodSolucion(){
      $("select[name=cbxTrabajo]").change(function(){
        // alert($('select[name=cbxTrabajo]').val());
        // $('input[name=valor1]').val($(this).val());
        let valor =$(this).val();
        if(valor=='MANTENIMIENTO'){
          // codSolucion.val('ooo');
          // console.log('hola');
          $("#cont__codSolucion").css("display", "block");
        }else{
          $("#cont__codSolucion").css("display", "none");
        }
      });
    
   }

   function kitBasico(){
      $( "#btnKitBasico" ).on( "click", function(e) {
        event.preventDefault(e);
            $('#txtUtp').val(10);
            $('#txtConectorRj45').val(2);
            $('#txtChapaQ').val(2);
            $('#txtCintillos').val(1);
            $('#txtConectorOpt').val(1);
            $('#txtRosetaOpt').val(1);
            $('#txtCableFibra').val(1);
      } );

   }

   
   function BorrarkitBasico(){
    $( "#btnBorrarKit" ).on( "click", function(e) {
      event.preventDefault(e);
          $('#txtUtp').val('');
          $('#txtConectorRj45').val('');
          $('#txtChapaQ').val('');
          $('#txtCintillos').val('');
          $('#txtConectorOpt').val('');
          $('#txtRosetaOpt').val('');
          $('#txtCableFibra').val('');
    } );

 }

 function validaciones(){
      let fecha = $('#txtFecha').val();
      let sot = $('#txtSot').val();
      let tipoTrabajo = $('#cbxTrabajo').val();
      let tecnico = $('#cbxTecnico').val();
      let codSolucion = $('#txtCodSolucion').val();
      let numCintillo = $('#txtNumCintillo').val();





      let ont = $('#cbxDetalleOnt').val();
      let serieOnt = $('#txtSerieOnt').val();

      let iptv = $('#cbxDetalleIptv').val();
      let serieIptv1 = $('#txtSerie1').val();
      let serieIptv2 = $('#txtSerie2').val();
      let serieIptv3 = $('#txtSerie3').val();
      let serieIptv4 = $('#txtSerie4').val();
      let serieIptv5 = $('#txtSerie5').val();

      let tipoControles = $('#cbxTipoControles').val();
      let cantidadControles = $('#txtCantidadControles').val();
      let txtCantidadHdmi = $('#txtCantidadHdmi').val();

      let tipoTelefono = $('#cbxTelefono').val();

      let cableUtp = $('#txtUtp').val();
      let conectorRJ45 = $('#txtConectorRj45').val();
      let conectorRJ11 = $('#txtConectorRj11').val();
      let rosetaTel = $('#txtRosetaTel').val();
      let chapaQ = $('#txtChapaQ').val();
      let chapaP = $('#txtChapaP').val();
      let cintilloRojo = $('#txtCintillos').val();

      let drop = $('#cbxDrop').val();

      let conectorOPT = $('#txtConectorOpt').val();
      let rosetaOPT = $('#txtRosetaOpt').val();
      let cableFibra = $('#txtCableFibra').val();



        const miFecha = document.querySelector('#txtFecha').value;
        if(validarFecha(miFecha)) {
          // errorToast("Error",'Llenar correctamente lñe campo fecha',''); 
          // return true;
        } else {
          errorToast("Error",'Llenar correctamente lñe campo fecha.','','');
            return false;
        }

        if(sot.length < 8 || sot.length > 8 ){
          errorToast("Error",'Llenar correctamente el campo Sot.','','');
          return false
        }

         
        if(tipoTrabajo == 0){
          errorToast("Error",'Seleccionar Tipo Trabajo.','','');
          return false
        }

        if(tecnico == 0){
          errorToast("Error",'Seleccionar un técnico.','','');
          return false
        }

        if($("#cont__codSolucion").css("display")=='block'){
            if(codSolucion.length<=0){
              errorToast("Error",'Ingresar cod. Solución.','','');
              return false;
            }
        }

        if(tipoTrabajo =='INSTALACION'){
              if(ont ==0){
                errorToast("Error",'Seleccione un ONT','','');
                return false;
              }

              if(serieOnt.length<=0){
                errorToast("Error",'Registre serie por favor.','','');
                return false;
              }
  
        }

        if(tipoTrabajo =='INSTALACION' || codSolucion =='PC02' ){
              if(drop==0){
                errorToast("Error",'Seleccione un DROP.','','');
                return false;
              }
        }

      

          // contadorIPTV = 0;
          // contadoirRJ45 = 0;
          // if(serieIptv1.length > 0){
          //     // alert('tiene digitos');
          //     contadorIPTV = contadorIPTV + 1;
          //     contadoirRJ45 = contadoirRJ45 +2;
          // }
          // if(serieIptv2.length > 0){
          //   // alert('tiene digitos');
          //      contadorIPTV = contadorIPTV + 1;
          //      contadoirRJ45 = contadoirRJ45 +2;
          //  }
          // if(serieIptv3.length > 0){
          //   // alert('tiene digitos');
          //     contadorIPTV = contadorIPTV + 1;
          //     contadoirRJ45 = contadoirRJ45 +2;
          // }
          // if(serieIptv4.length > 0){
          //   // alert('tiene digitos');
          //     contadorIPTV = contadorIPTV + 1;
          //     contadoirRJ45 = contadoirRJ45 +2;
          // }
          // if(serieIptv5.length > 0){
          //   // alert('tiene digitos');
          //     contadorIPTV = contadorIPTV + 1;
          //     contadoirRJ45 = contadoirRJ45 +2;
          // }


          // cantidadControles.val(contadorIPTV);
          // txtCantidadHdmi.val(contadorIPTV);;

          // $('#txtCantidadControles').val(contadorIPTV);
          //  $('#txtCantidadHdmi').val(contadorIPTV);
          //  $('#txtConectorRj45').val(contadoirRJ45);


    


 }  





//  FuncionValidar FECHA
const DATE_REGEX = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/
const CURRENT_YEAR = new Date().getFullYear()
const validarFecha = (birthDate) => {
        /* Comprobar formato dd/mm/yyyy, que el no sea mayor de 12 y los días mayores de 31 */
        if (!birthDate.match(DATE_REGEX)) {
          errorToast("Error",'Llenar correctamente lñe campo fecha','');
          return false
        }
        
        /* Comprobar los días del mes */
        const day = parseInt(birthDate.split('/')[0])
        const month = parseInt(birthDate.split('/')[1])
        const year = parseInt(birthDate.split('/')[2])
        const monthDays = new Date(year, month, 0).getDate()
        if (day > monthDays) {
          // errorToast("Error",'Llenar correctamente lñe campo fecha','');
          return false
        }
        
        /* Comprobar que el año no sea superior al actual*/
        if (year > CURRENT_YEAR) {

          return false
        }
        return true
}

// FIN VALIDAR FECHA



   
    