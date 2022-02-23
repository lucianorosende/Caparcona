class Subscription {

    constructor(email, name, surname){

        const data = [
            this.email = email,
            this.name = name,
            this.surname = surname
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
        this.dataLog();

    }

    dataCheck(){

            let infoS = {
                Email: this.email,
                Nombre: this.name,
                Apellido: this.surname
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

    dataLog(){

        let dataSaved = JSON.parse(localStorage.getItem("formulario_sub"));
        console.log("Los datos del formulario");
        console.log(dataSaved);

    }
    
}    
    


$("#btnSend").click(() => {

    new Subscription($("#email").val(),$("#name").val(),$("#surname").val());
});