let sendButton = document.getElementById("btnSend");

sendButton.onclick = () => {
    formulary();
};

function formulary () {
    
    let userID = document.getElementById("userID").value;
    let pw = document.getElementById("pwID").value;
    let formID = document.getElementById("logFORM");

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

    saveData(userID, pw);

    var content = "<p class='successDiv Bebas'>Los datos se guardaron correctamente!</p>"
    document.getElementById("resultado").innerHTML = content;

    loadData();


    // formID.submit();
    // let info = `<p class=' errorDiv Bebas'>USER ID: <strong class='sText'>${userID}</strong><br>PASSWORD: <strong class='sText'>${pw}</strong></p>`  
    // document.getElementById("resultado").innerHTML = info;

}

function saveData (userID, pw){

    let infoS = {

        ID: userID,
        password: pw
    }
    localStorage.setItem("formulario_login", JSON.stringify(infoS));

}

function loadData(){

    let dataSaved = JSON.parse(localStorage.getItem("formulario_login"));
    console.log(dataSaved);

}

// let logo = document.getElementById("logo");
// let loginB = document.getElementById("loginB");
// let regB = document.getElementById("regB");

// logo.onclick = () => {

//     var content = "<p class='errorDiv Bebas'>Esto es un <strong class='sText'>LOGO</strong></p>"
//     document.getElementById("resultado").innerHTML = content;
// }

// loginB.onclick = () => {

//     var content = "<p class='errorDiv Bebas'>Esto es un boton de <strong class='sText'>LOGIN</strong></p>"
//     document.getElementById("resultado").innerHTML = content;
// }

// regB.onclick = () => {

//     var content = "<p class='errorDiv Bebas'>Esto es un boton de <strong class='sText'>REGISTRAR</strong></p>"
//     document.getElementById("resultado").innerHTML = content;
// }