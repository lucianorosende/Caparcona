$("#btnSend").click(() => {

    let data = {

        user: $('#userID').val(),
        pw: $("#pwID").val(),
        email: $("#email").val(),
        name: $("#name").val(),
        surname: $("#surname").val()

    }

    if (data.email == ""){

        $("#resultado").html("<p class='errorDiv Bebas'>El Campo Email esta vacio!</p>").hide().fadeIn(800);
        return false;
        
    }

    else if (data.name == ""){

        $("#resultado").html(`<p class='errorDiv Bebas'>El Campo NOMBRE esta vacio!</p>`).hide().fadeIn(800);
        return false;
    }

    else if (data.surname == ""){

        $("#resultado").html(`<p class='errorDiv Bebas'>El Campo APELLIDO esta vacio!</p>`).hide().fadeIn(800);
        return false;   
    }

    else if (data.user == ""){
        $("#resultado").html(`<p class='errorDiv Bebas'>El Campo USER esta vacio!</p>`).hide().fadeIn(800);
        return false;

    }

    else if (data.pw == ""){
        $("#resultado").html("<p class='errorDiv Bebas'>El Campo PASSWORD esta vacio!</p>").hide().fadeIn(800);
        return false;
    }

    else{
        $("#resultado").html("");
    }

    saveData(data.email, data.name, data.surname, data.user, data.pw);

    $("#resultado").html("<p class='successDiv Bebas'>Los datos se guardaron correctamente!</p>").hide().fadeIn(800, () => {console.log("Estos son tus datos del Formulario")}).delay(2000).slideUp();


    loadData();
    
    
});

function saveData (email, name, surname, userID, pw){

    let infoS = {
        Email: email,
        Nombre: name,
        Apellido: surname,
        ID: userID,
        password: pw
    }
    localStorage.setItem("formulario_login", JSON.stringify(infoS));

}

function loadData(){


    let dataSaved = JSON.parse(localStorage.getItem("formulario_login"));
    setTimeout(() => {console.log(dataSaved)}, 1500);
    
}
