class Login {

    constructor(user, pw){

        const data = [
            this.user = user,
            this.pw = pw
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

        let regInfo = JSON.parse(localStorage.getItem("formulario_reg"));

        if(regInfo.Usuario === this.user){
            Swal.fire({
                icon: 'error',
                text: 'Colocaste mal tus datos!'
                
              })
            if(regInfo.Password === this.pw){
                Swal.fire(
            
                    'Felicidades!',
                    'Te has logeado!',
                    'success'
                    
                    )
                $(".log-change").html("");     
                $(".log-change").append(`<p class='successDiv Bebas'>Bienvenido <span class=''>${regInfo.Usuario}!</span></p>`);
                
        }
        } 

        else {
            Swal.fire({
                icon: 'error',
                text: 'Colocaste mal tus datos!'
                
              })

        }

    }

    
}    
    


$("#btnSend").click(() => {

    const log = new Login($('#userID').val(),$("#pwID").val());
});








