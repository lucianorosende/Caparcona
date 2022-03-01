class Register {

    constructor(user, pw, email){

        const data = [
            this.email = email,
            this.user = user,
            this.pw = pw,
            this.format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            this.lowercase = /[a-z]/g,
            this.uppercase =  /[A-Z]/g,
            this.numbers = /[0-9]/g,
            this.special = /[^a-zA-Z]/g

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

        this.dataCheck();

        

    }

    dataCheck(){

            let infoS = {
                Email: this.email,
                Usuario: this.user,
                Password: this.pw
            }

            localStorage.setItem("formulario_reg", JSON.stringify(infoS));

            if(!this.email.match(this.format)){

                Swal.fire({
                    icon: 'error',
                    text: 'Colocaste mal tu email'
                    
                })

            }
            else if(this.user.match(this.special)){
                Swal.fire({
                    icon: 'error',
                    text: 'El usuario no puede tener caracteres especiales!'
                    
                })
            }
            else if(!this.pw.match(this.lowercase)){
                Swal.fire({
                    icon: 'error',
                    text: 'El Password necesita usar al menos 1 Mayuscula, Minuscula y numeros!'
                    
                })
            
            }
            else if(!this.pw.match(this.uppercase)){
                Swal.fire({
                    icon: 'error',
                    text: 'El Password necesita usar al menos 1 Mayuscula, Minuscula y numeros!'
                    
                })
                
            }
            else if(!this.pw.match(this.numbers)){
                Swal.fire({
                    icon: 'error',
                    text: 'El Password necesita usar al menos 1 Mayuscula, Minuscula y numeros!'
                    
                })
            }
            else if(this.user.length && this.pw.length < 6){  
                Swal.fire({
                    icon: 'error',
                    text: 'El usuario o password son muy cortos!'
                    
                })
            }
            else{
                Swal.fire(
                    
                    'Felicidades!',
                    'Te Registraste!',
                    'success'
                    
                )
                this.dataLog();
            }
            $(".reg-change").html("");
            $(".reg-change").append(`<p class='successDiv Bebas'>YA ESTAS REGISTRADO!</p>`);
               


    }

    dataLog(){

        let dataSaved = JSON.parse(localStorage.getItem("formulario_reg"));
        console.log("Los datos del formulario");
        console.log(dataSaved);

    }
    
}    
    
export default Register;