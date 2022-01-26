let sendButton = document.getElementById("btnSend");

sendButton.onclick = () => {
    formulary();
};

function formulary () {
    
    let email = document.getElementById("email").value;
    let userID = document.getElementById("userID").value;
    let pw = document.getElementById("pwID").value;
    let formID = document.getElementById("logFORM");

    if (email == ""){

        var content = "<p class='errorDiv Bebas'>El Campo Email esta vacio!</p>";
        document.getElementById("resultado").innerHTML = content;
        return false;
    }
    else{
        document.getElementById("resultado").innerHTML = "";
    }

    if (userID == ""){

        var content = "<p class='errorDiv Bebas'>El Campo USER esta vacio!</p>";
        document.getElementById("resultado").innerHTML = content;
        return false;
    }
    else{
        document.getElementById("resultado").innerHTML = "";
    }

    if (pw == ""){

        var content = "<p class='errorDiv Bebas'>El Campo PASSWORD esta vacio!</p>";
        document.getElementById("resultado").innerHTML = content;
        return false;
    }
    else{

        document.getElementById("resultado").innerHTML = "";
    }

    saveData(email, userID, pw);

    var content = "<p class='successDiv Bebas'>Los datos se guardaron correctamente!</p>"
    document.getElementById("resultado").innerHTML = content;

    loadData();


    // formID.submit();
    // let info = `<p class=' errorDiv Bebas'>USER ID: <strong class='sText'>${userID}</strong><br>PASSWORD: <strong class='sText'>${pw}</strong></p>`  
    // document.getElementById("resultado").innerHTML = info;

}

function saveData (email, userID, pw){

    let infoS = {
        email: email,
        ID: userID,
        password: pw
    }
    localStorage.setItem("formulario_register", JSON.stringify(infoS));

}

function loadData(){

    let dataSaved = JSON.parse(localStorage.getItem("formulario_register"));
    console.log(dataSaved);

}