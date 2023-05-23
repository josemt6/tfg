
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

function getTarjetas() {
    return "<div class='card col-md-3 col-10 p-0 my-2'>" +
        "<img src='./imagnes/fotoBadajoz.jpg' class='card-img-top img-fluid' alt='...'>" *
        "<div class='card-body'>" +
        "<h5 class='card-title'>/h5>" +
        "<p class='card-text'></p>" +
        "<a href='#' class='btn btn-card visitar'>Visitar</a>" +
        "</div>" +
        "</div>"
}

function configuracionPerfil() {
    return "<div class='row'>" +
        "<div class='col-12'><div class='rounded-circle' id='icono'></div></div>" +
        "<div class='col-12 row'>" +
        "<div class='col-6' id='nombre'></div>" +
        "<div class='col-6' id='localidad'></div>" +
        "<a href='#' class='btn btn-rojo' id='cerrarSesion'>Cerrar sesión</a></div>" +
        "</div>"
}

function loader() {
    return "<span class='loader' id='loader'></span>"
}

$(document).ready(function () {

    $("#carreras").css("visibility", "hidden")

    $("#logo").click(function () {
        location.href = "./index.html"
    })

    $("body").append(loader())

    $("#cerrarSesion").click(function () {
        localStorage.clear()
        location.href = "index.html"
    })

    if (localStorage.getItem('usuario') != null) {
        $('#sesion').html(localStorage.getItem('usuario'))
        $("#contenidoCanvas").append(configuracionPerfil())
        $("#contenidoCanvas").append(loader())
        $.ajax({
            url: "./Php/infoUsuario.php",
            data: {
                "usuario": localStorage.getItem("usuario")
            },
            type: "GET",
            success: function (datos) {
                let info = datos.split(";")
                $("#loader").remove()
                $("#icono").text(localStorage.getItem("usuario").substring(0, 1))
                $("#nombre").append(`<p class='text-secondary'>${info[1]}</p>`)
                $("#nombre").append(`<p class='text-secondary'>${info[2]}</p>`)
                $("#nombre").append(`<p class='text-secondary'>${info[3]}</p>`)
                $("#localidad").append(`<p class='text-secondary'>${info[4]}</p>`)
                if (info[5] == 1) {
                    $("#localidad").append(`<p class='text-secondary'>Organizador</p>`)
                } else if (info[5] == 2) {
                    $("#localidad").append(`<p class='text-secondary'>Corredor</p>`)
                }

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

