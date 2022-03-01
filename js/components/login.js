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

      this.loginCheck();  

    }


    loginCheck(){
        let logged = JSON.parse(localStorage.getItem('logHTML')) || [];
        localStorage.setItem("logHTML", JSON.stringify(logged));

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
            let logHTML = `<p class='successDiv Bebas'>Bienvenido <span class=''>${regInfo.Usuario}!</span></p>`
            localStorage.setItem("logHTML", JSON.stringify(logHTML));
            $(".log-change").html("");     
            $(".log-change").html(JSON.parse(localStorage.getItem("logHTML")));        
                
            console.log(`Bienvenido a la pagina ${regInfo.Usuario}!`)
                
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
    

export default Login;






