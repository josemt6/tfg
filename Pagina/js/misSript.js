$(document).ready(function(){

    alert(localStorage.getItem("usuario"))

    //Iniciar sesión

    $("#btnSesion").click(function(){
        let usuario = $("#inpUsuario").val()
        alert(usuario)
        let clave = $("#inpClave").val()
        $.ajax({
            url: "../php/usuario.php",
            data: {
                "usuario" : usuario,
                "clave" : clave
            },
            type: "GET",
            success: function(datos){
                if (datos == false) {
                    $("#errorSesion").text("No se ha encontrado el usuario o la contraseña")
                } else {
                    localStorage.setItem("usuario" , usuario)
                    alert(localStorage.getItem("usuario"))
                }
            },
            error: function(e){
                alert("Error al cargar el usuario y la contraseña")
                console.log(e)
            }
        })
    })

    //Registrarse




})

