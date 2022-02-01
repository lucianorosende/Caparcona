$("#btnSend").click(function(){

    let userID = $('#userID').val();
    let pw = $("#pwID").val();
    let email = $("#email").val();
    let name = $("#name").val();
    let surname = $("#surname").val();
    
    if (email == ""){

        $("#resultado").html("<p class='errorDiv Bebas'>El Campo Email esta vacio!</p>");
        return false;
    }
    else{
        $("#resultado").html("");
    }

    if (name == ""){

        $("#resultado").html(`<p class='errorDiv Bebas'>El Campo NOMBRE esta vacio!</p>`);
        return false;
    }
    else{

        $("#resultado").html("");
    }

    if (surname == ""){

        $("#resultado").html(`<p class='errorDiv Bebas'>El Campo APELLIDO esta vacio!</p>`);
        return false;
    }
    else{

        $("#resultado").html("");
    }

    if (userID == ""){
        $("#resultado").html(`<p class='errorDiv Bebas'>El Campo USER esta vacio!</p>`);
        return false;

    }
    else{
         $("#resultado").html("");
    }

    if (pw == ""){
        $("#resultado").html("<p class='errorDiv Bebas'>El Campo PASSWORD esta vacio!</p>");
        return false;
    }
    else{
        $("#resultado").html("");
    }

    saveData(email, name, surname, userID, pw);

    $("#resultado").html("<p class='successDiv Bebas'>Los datos se guardaron correctamente!</p>");

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
    console.log(dataSaved);

}

