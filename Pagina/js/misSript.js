
function contenidoCanvasSesion() {
    return "<div>" +
        "<p><label for='inpUsuario'>Usuario</label></p>" +
        "<input type='text' name='usuario' id='inpUsuario' class='form-control'>" +
        "<p><label for='inpClave'>Clave</label></p>" +
        "<input type='password' name='inpClave' id='inpClave' class='form-control'>" +
        "<a href='#' class='btn btn-sesion my-4' id='btnSesion'>Iniciar sesión</a>" +
        "<p class='fw-bold fs-6'>¿Aún no tienes cuenta? , regístrate <a href='./registro.html' class='text-azul'>aquí</a></p>" +
        "<div id='errorSesion' class='text-red'></div>" +
        "</div>"
}

function contenidoCanvasSesionIniciada() {
    return "<div>" +
        "<div class='col-3 rounded-circle bg-negroFooter text-white' id='letraIcono'></div>" +
        "<div id='contenidoTxtCanvas' class='col-9 fw-bold text-negroFooter'></div>" +
        "</div>"
}

function configuracionPerfil() {
    return "<div class='row'>" +
        "<div class='col-3'><div class='rounded-circle' id='icono'></div></div>" +
        "<div class='col-9 row'>" +
        "<div class='col-8' id='nombre'></div>" +
        "<div class='col-4' id='localidad'></div>" +
        "</div>" +
        "</div>"
}


$(document).ready(function () {

    $("#logo").click(function () {
        location.href = "./index.html"
    })

    if (localStorage.getItem('usuario') != null) {
        $('#sesion').html(localStorage.getItem('usuario'))
        $("#contenidoCanvas").append(contenidoCanvasSesionIniciada())
        $("#contenidoTxtCanvas").text(`Hola ${localStorage.getItem("usuario")}, bienvenido a R-tracker`)
        $("#contenidoCanvas").append(configuracionPerfil())
        $.ajax({
            url: "./Php/infoUsuario.php",
            data: {
                "usuario": localStorage.getItem("usuario")
            },
            type: "GET",
            success: function (datos) {
                $("#nombre").text(datos.nombreUsuario)
                alert("bien")
            },
            error: function (e) {
                console.log(e)
            }
        })

    } else {
        $('#sesion').text('Iniciar sesión')
        $("#contenidoCanvas").append(contenidoCanvasSesion())
        $('#btnSesion').click(function () {
            let usuario = $('#inpUsuario').val()
            alert(usuario)
            let clave = $('#inpClave').val()
            $.ajax({
                url: './Php/usuario.php',
                data: {
                    'usuario': usuario,
                    'clave': clave
                },
                type: 'POST',
                success: function (datos) {
                    if (datos == false) {
                        $('#errorSesion').text('No se ha encontrado el usuario o la contraseña')
                    } else {
                        localStorage.setItem('usuario', usuario)
                        location.href = "index.html"
                    }
                },
                error: function (e) {
                    alert('Error al cargar el usuario y la contraseña')
                    console.log(e)
                }
            })
        })

    }

    //Iniciar sesión



    //Registrarse




})

