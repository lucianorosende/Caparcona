$("#btnSend").click(() => {

    let data = [
        $('#userID').val(),
        $("#pwID").val(),
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
    saveData(data[0], data[1], data[2], data[3], data[4]);
    loadData();
    loginScreen();

   
});

function saveData (userID, pw, email, name, surname){

    let infoS = {
        Email: email,
        Nombre: name,
        Apellido: surname,
        Id: userID,
        Password: pw
    }
    localStorage.setItem("formulario_login", JSON.stringify(infoS));

}

 function loadData(){


   let dataSaved = JSON.parse(localStorage.getItem("formulario_login"));
   console.log("Los datos del formulario");
   console.log(dataSaved);
   
    
    
    
 }

function loginScreen(){

   let dataSaved = JSON.parse(localStorage.getItem("formulario_login"));

    if(dataSaved.Apellido){
        Swal.fire(
            
            'Felicidades!',
            'Te has suscrito!',
            'success'
            
            ) 
        } 
   else if (dataSaved.Email){
    Swal.fire(
        
        'Felicidades!',
        'Te registraste!',
        'success'
        
      )
   }

   else if(dataSaved.Id){

    Swal.fire(
        
        'Felicidades!',
        'Te has logeado!',
        'success'
        
      )

   }
   
   $(".log-change").html("");
   $(".log-change").append(`<p class='successDiv Bebas'>Bienvenido <span class=''>${dataSaved.Id}!</span></p>`);
   $(".reg-change").html("");
   $(".reg-change").append(`<p class='successDiv Bebas'>YA ESTAS REGISTRADO!</p>`);
   $(".sub-change").html("");
   $(".sub-change").append(`<p class='successDiv Bebas'>TE SUSCRIBISTE!</p>`);
   
}

   
    
    
    










