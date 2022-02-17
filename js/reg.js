$("#btnSend").click(() => {

    let data = [
        $('#userID').val(),
        $("#pwID").val(),
        $("#email").val()
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

function dataCheck (userID, pw, email){

    let infoS = {
        Email: email,
        Id: userID,
        Password: pw
    }

    localStorage.setItem("formulario_reg", JSON.stringify(infoS));

    if ($("#btnSend").html() === "Registrarse"){
        Swal.fire(
            
            'Felicidades!',
            'Te registraste!',
            'success'
            
          )
       }
    $(".reg-change").html("");
    $(".reg-change").append(`<p class='successDiv Bebas'>YA ESTAS REGISTRADO!</p>`);
}

 function dataLog(){


   let dataSaved = JSON.parse(localStorage.getItem("formulario_reg"));
   console.log("Los datos del formulario");
   console.log(dataSaved);
   
    
    
    
 }