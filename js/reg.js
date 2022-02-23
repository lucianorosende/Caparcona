class Register {

    constructor(user, pw, email){

        const data = [
            this.email = email,
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
        this.dataCheck();
        this.dataLog();

    }

    dataCheck(){

            let infoS = {
                Email: this.email,
                Usuario: this.user,
                Password: this.pw
            }

            localStorage.setItem("formulario_reg", JSON.stringify(infoS));

            if ($("#btnSend").html() === "Registrarse"){
                Swal.fire(
                    
                    'Felicidades!',
                    'Te Registraste!',
                    'success'
                    
                )
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
    


$("#btnSend").click(() => {

    new Register($('#userID').val(),$("#pwID").val(),$("#email").val());
    
});
