let sendButton = document.getElementById("btnSend");
let logo = document.getElementById("logo");
let loginB = document.getElementById("loginB");
let regB = document.getElementById("regB");

logo.onclick = () => {

    var content = "<p class='errorDiv Bebas'>Esto es un <strong class='sText'>LOGO</strong></p>"
    document.getElementById("resultado").innerHTML = content;
}

loginB.onclick = () => {

    var content = "<p class='errorDiv Bebas'>Esto es un boton de <strong class='sText'>LOGIN</strong></p>"
    document.getElementById("resultado").innerHTML = content;
}

regB.onclick = () => {

    var content = "<p class='errorDiv Bebas'>Esto es un boton de <strong class='sText'>REGISTRAR</strong></p>"
    document.getElementById("resultado").innerHTML = content;
}

sendButton.onclick = () => {
    formulary();

};

function formulary () {
    
    let userID = document.getElementById("userID").value;
    let pw = document.getElementById("pwID").value;
    let formID = document.getElementById("logFORM");

    if (userID == ""){

        var content = "<p class='errorDiv Bebas'>El Campo <strong class='sText'>USER</strong> esta vacio!</p>";
        document.getElementById("resultado").innerHTML = content;
        return false;
    }
    else{
        document.getElementById("resultado").innerHTML = "";
    }

    if (pw == ""){

        var content = "<p class='errorDiv Bebas'>El Campo <strong class='sText'>PASSWORD</strong> esta vacio!</p>";
        document.getElementById("resultado").innerHTML = content;
        return false;
    }
    else{

        document.getElementById("resultado").innerHTML = "";
        }

    let info = `<p class=' errorDiv Bebas'>USER ID: <strong class='sText'>${userID}</strong><br>PASSWORD: <strong class='sText'>${pw}</strong></p>`  
    document.getElementById("resultado").innerHTML = info;


    
    // formID.submit(); para enviar el formulario

}
