let sendBtn = document.getElementById("btnSend");


sendBtn.onclick = () => {

    formulary();

};

function formulary () {

    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;

    if (email == ""){

        var content = "<p class='errorDiv Bebas'>El Campo Email esta vacio!</p>";
        document.getElementById("resultado").innerHTML = content;
        return false;
    }
    else{
        document.getElementById("resultado").innerHTML = "";
    }
    
    if (name == ""){

        var content = "<p class='errorDiv Bebas'>El Campo nombre esta vacio!</p>";
        document.getElementById("resultado").innerHTML = content;
        return false;
    }
    else{

        document.getElementById("resultado").innerHTML = "";
    }

    if (surname == ""){

        var content = "<p class='errorDiv Bebas'>El Campo apellido esta vacio!</p>";
        document.getElementById("resultado").innerHTML = content;
        return false;
    }
    else{

        document.getElementById("resultado").innerHTML = "";
    }

    saveData(email, name, surname);

    var content = "<p class='successDiv Bebas'>Los datos se guardaron correctamente!</p>"
    document.getElementById("resultado").innerHTML = content;

    loadData();

}

function saveData (email, name, surname){

    let infoS = {

        Email: email,
        Nombre: name,
        Apellido: surname
    }

    localStorage.setItem("formulario_suscripcion", JSON.stringify(infoS));

}

function loadData(){

    let dataSaved = JSON.parse(localStorage.getItem("formulario_suscripcion"));
    console.log(dataSaved);

}