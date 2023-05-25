
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
        "<img src='./imagnes/fotoBadajoz.jpg' class='card-img-top img-fluid' alt='...'>" +
        "<div class='card-body'>" +
        "<h5 class='card-title'></h5>" +
        "<p class='card-text'></p>" +
        "<a href='#' class='btn btn-card visitar'>Visitar</a>" +
        "</div>" +
        "</div>"
}

function configuracionPerfil() {
    return "<div class='row'>" +
        "<div class='col-12 text-center rounded-circle p-0' id='icono'></div>" +
        "<div class='col-12 row text-center'>" +
        "<div class='col-12 my-2 text-start' id='nombre'></div>" +
        "" +
        "</div>" +
        "</div><div class='col-12 text-center' id='btnAbajo'><a href='#' class='btn btn-rojo mt-2' id='cerrarSesion'>Cerrar sesión</a></div>"
}

function loader(){
    return "<span class='loader mx-auto my-4 text-center'></span>"
}

$(document).ready(function () {

    //Ocultar el section de las carreras
    $("#carreras").toggleClass("d-none")

    //Ver tarjetas de las carreras

    $("#carrerasVer").click(function () {
        $("#carreras").toggleClass("d-none")
        $.ajax({
            url: "./Php/verCarreras.php",
            type: 'POST',
            dataType: 'json',
            success: function (respuesta) {
                $("#carrerasContenido").empty()
                for (let i = 0; i < respuesta.length; i++) {
                    $("#carrerasContenido").append(getTarjetas())
                    $(".card-title").eq(i).text(respuesta[i].nombreCarrera)
                    $(".card-text").eq(i).text(`Localización : ${respuesta[i].localizacion}`)
                    console.log(respuesta[i])
                }
            },
            error: function (e) {
                console.log(e)
            }
        })
    })

    //Modal con la información de las carreras y para apuntarse

    $(".visitar").click(function(){
        $("#modalCarreras").show()
        $("#txtModalCarreras").append(loader())
        $.ajax({
            url: "./Php/verCarreras.php",
            type: 'POST',
            dataType: 'json',
            success: function (respuesta) {
                $("#carrerasContenido").empty()
                for (let i = 0; i < respuesta.length; i++) {
                    $("#txtModalCarreras").append(getTarjetas())
                    $("#txtModalCarreras").text(`<p>${respuesta[i].nombreCarrera}</p>`)
                    $("#txtModalCarreras").text(`<p>Localización : ${respuesta[i].localizacion}</p>`)
                    $("#txtModalCarreras .loader").remove()
                }
            },
            error: function (e) {
                console.log(e)
            }
        })
    })

    //Recargar la página con el logo

    $("#logo").click(function () {
        location.reload()
    })

    //OffCanvas de la sesión

    if (localStorage.getItem('usuario') != null) {
        $('#sesion').html(localStorage.getItem('usuario'))
        $("#contenidoCanvas").append(configuracionPerfil())
        $.ajax({
            url: "./Php/infoUsuario.php",
            data: {
                "usuario": localStorage.getItem("usuario")
            },
            dataType: 'json',
            type: "POST",
            success: function (datos) {
                if (datos.codTipoUsuario==1) {
                    $("#nombre").append(`<p class='text-secondary m-0 fw-bolder fs-2 text-center'>Organizador</p>`)
                } else {
                    $("#nombre").append(`<p class='text-secondary m-0 fw-bolder fs-2 text-center'>Corredor</p>`)
                }
                $("#loader").remove()
                $("#icono").text(datos.usuario.substring(0,1).toUpperCase())
                $("#nombre").append(`<p class='text-secondary m-0'>Usuario : ${datos.usuario}</p>`)
                $("#nombre").append(`<p class='text-secondary m-0'>Nombre : ${datos.nombreUsuario}</p>`)
                $("#nombre").append(`<p class='text-secondary m-0'>Localidad: ${datos.localidad}</p>`)
                $("#nombre").append(`<p class='text-secondary m-0'>Fecha de nacimiento : ${datos.fechaNacimiento}</p>`)
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
                        location.href = "i.html"
                    }
                },
                error: function (e) {
                    alert('Error al cargar el usuario y la contraseña')
                    console.log(e)
                }
            })
        })

    }

    //Boton de cerrar sesion

    $("#cerrarSesion").click(function () {
        localStorage.clear()
        location.reload()
    })

})

