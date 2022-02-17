$("#btnSend").click(() => {

    let data = [
        $('#userID').val(),
        $("#pwID").val()
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

    loginCheck();
});

function loginCheck (){
    
    let regInfo = JSON.parse(localStorage.getItem("formulario_reg"));
    
    
        if(regInfo.Id === $('#userID').val()){
            Swal.fire({
                icon: 'error',
                text: 'Colocaste mal tus datos!'
                
              })
            if(regInfo.Password === $("#pwID").val()){
                Swal.fire(
            
                    'Felicidades!',
                    'Te has logeado!',
                    'success'
                    
                    )
                $(".log-change").html("");     
                $(".log-change").append(`<p class='successDiv Bebas'>Bienvenido <span class=''>${regInfo.Id}!</span></p>`);
                
        }
        } 
        else {
            Swal.fire({
                icon: 'error',
                text: 'Colocaste mal tus datos!'
                
              })

        }
       }
    
    










