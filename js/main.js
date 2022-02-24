import Subscription from "./components/sub.js";
import Register from "./components/reg.js";
import Login from "./components/login.js";
import renderClothing from "./components/ropa.js";

$("#btnSend").click(() => {

    if($("#btnSend").html() === "Suscribirse"){

        new Subscription($("#email").val(),$("#name").val(),$("#surname").val());

    }
    else if($("#btnSend").html() === "Registrarse"){

        new Register($('#userID').val(),$("#pwID").val(),$("#email").val());

    }
    else{

        new Login($('#userID').val(),$("#pwID").val());

    }

})

renderClothing();