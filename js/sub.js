$("#btnSend").click(() => {

    let data = [
        $("#email").val(),
        $("#name").val(),
        $("#surname").val()
    ]

    for(let i = 0; i < data.length; i++){

        if (data[i] == ""){
            Swal.fire({
                icon: 'error',
                text: 'Faltan datos para completar!'
                
              })
            return false;

        }

    }        
    dataCheck(data[0], data[1], data[2]);
    dataLog();

});

function dataCheck (email, name, surname){

    let infoS = {
        Email: email,
        Nombre: name,
        Apellido: surname
    }

    localStorage.setItem("formulario_sub", JSON.stringify(infoS));

    if ($("#btnSend").html() === "Suscribirse"){
        Swal.fire(
            
            'Felicidades!',
            'Te suscribiste!',
            'success'
            
          )
       }
    $(".sub-change").html("");
    $(".sub-change").append(`<p class='successDiv Bebas'>TE SUSCRIBISTE!</p>`);
}

 function dataLog(){


   let dataSaved = JSON.parse(localStorage.getItem("formulario_sub"));
   console.log("Los datos del formulario");
   console.log(dataSaved);
   
    
    
    
 }
