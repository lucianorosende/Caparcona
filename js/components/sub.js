class Subscription {

    constructor(email, name, surname){

        const data = [
            this.email = email,
            this.name = name,
            this.surname = surname,
            this.format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            this.nameFormat = /^[A-Za-z ]+$/
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
                Nombre: this.name,
                Apellido: this.surname
            }

            

            localStorage.setItem("formulario_sub", JSON.stringify(infoS));

            if(!this.email.match(this.format)){

                Swal.fire({
                    icon: 'error',
                    text: 'Colocaste mal tu email'
                    
                })

            }
            else if(!this.name.match(this.nameFormat) || !this.surname.match(this.nameFormat) ){
                Swal.fire({
                    icon: 'error',
                    text: 'El nombre o apellido no puede tener numeros!'
                    
                })

            }
            else if(this.name.length < 4){  
                Swal.fire({
                    icon: 'error',
                    text: `El nombre ${this.name} es muy corto!`
                    
                })
            }
            else if(this.surname.length < 4){  
                Swal.fire({
                    icon: 'error',
                    text: `El apellido ${this.surname} es muy corto!`
                    
                })
            }
            else{
                Swal.fire(
                    
                    'Felicidades!',
                    'Te suscribiste!',
                    'success'
                    
                )
                this.dataLog();
            }
            $(".sub-change").html("");
            $(".sub-change").append(`<p class='successDiv Bebas'>TE SUSCRIBISTE!</p>`);
               


    }

    dataLog(){

        let dataSaved = JSON.parse(localStorage.getItem("formulario_sub"));
        console.log("Los datos del formulario");
        console.log(dataSaved);

    }
    
}    

export default Subscription;