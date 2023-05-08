$(document).ready(function(){
    $("#btnSesion").click(function(){
        let usuario = $("#inpUsuario").val()
        let clave = $("#inpClave").val()
        $.ajax({
            url: "../php/usuario.php",
            data: {
                "usuario" : usuario,
                "clave" : clave
            },
            type: "GET",
            success: function(datos){
                if (datos = "error") {
                    
                } else {
                    
                }
            },
        })
    })
})

