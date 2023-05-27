
function contenidoCanvasSesion() {
    return "<div>" +
        "<p><label for='inpUsuario'>Usuario</label></p>" +
        "<input type='text' name='usuario' id='inpUsuario' class='form-control'>" +
        "<p><label for='inpClave'>Clave</label></p>" +
        "<input type='password' name='inpClave' id='inpClave' class='form-control'>" +
        "<div id='errorSesion' class='text-rojo mt-3'></div>" +
        "<a href='#' class='btn btn-sesion my-4' id='btnSesion'>Iniciar sesión</a>" +
        "<p class='fw-bold fs-6'>¿Aún no tienes cuenta? , regístrate <a href='./registro.html' class='text-azul'>aquí</a></p>" +
        "</div>"
}

function getTarjetas() {
    return "<div class='card col-md-3 col-10 p-0 my-2'>" +
        "<img src='./imagnes/fotoBadajoz.jpg' class='card-img-top img-fluid' alt='...'>" +
        "<div class='card-body'>" +
        "<h5 class='card-title'></h5>" +
        "<p class='card-text'></p>" +
        "<div class='text-center'>" +
        "" +
        "</div></div>" +
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

function loader() {
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
                    $(".card-title").eq(i).html(respuesta[i].nombreCarrera + "  <div class='verModal d-inline rounded-circle'><i class='bi bi-info-circle'></i></div>")
                    $(".card-text").eq(i).text(`Localización : ${respuesta[i].localizacion}`)
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

    $("#inicio").click(function () {
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
                if (datos.codTipoUsuario == 1) {
                    $("#nombre").append(`<p class='text-secondary m-0 fw-bolder fs-2 text-center' id='tipoUsuario'>Organizador</p>`)
                } else {
                    $("#nombre").append(`<p class='text-secondary m-0 fw-bolder fs-2 text-center' id='tipoUsuario'>Corredor</p>`)
                }
                $("#loader").remove()
                $("#icono").text(datos.usuario.substring(0, 1).toUpperCase())
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
            let clave = $('#inpClave').val()
            $.ajax({
                url: './Php/usuario.php',
                data: {
                    'usuario': usuario,
                    'clave': clave
                },
                type: 'POST',
                success: function (datos) {
                    alert(datos)
                    if (datos == "false") {
                        $('#errorSesion').text('No se ha encontrado el usuario o la contraseña')
                    } else if (datos == "true") {
                        localStorage.setItem('usuario', usuario)
                        location.reload()
                    } else {
                        $('#errorSesion').text('Error en el inicio')
                    }
                },
                error: function (e) {
                    alert('Error al cargar el usuario y la contraseña')
                    console.log(e)
                }
            })
        })

    }

    //Mostrar diferente segun tipo

    if (localStorage.getItem("usuario") != null) {
        let organizador
        $.ajax({
            url: "./Php/tipoUsuario2.php",
            data: { "usuario": localStorage.getItem("usuario") },
            type: 'POST',
            success: function (datos) {
                if (datos == "organizador") {
                    $("#clasificaciones").after(`<a class="nav-link active  text-whiteSmoke" href="#" id="organizar">Organizar Carreras</a>`)
                    $("#cabecera").css("background-color", "black")
                } else if (datos == "corredor") {
                    $("#cabecera").css("background-color", "blue")
                }
            }
        })
    }



    //Boton de cerrar sesion

    $("#cerrarSesion").click(function () {
        localStorage.clear()
        $("#organizar").remove()
        location.reload()
    })


})

//Modal con la información de las carreras y para apuntarse

$(document).on("click", ".verModal", function () {
    let carrera = $(this).parent().text()
    $.ajax({
        url: "./Php/getCarrera.php",
        data: { "nombreCarrera": carrera },
        type: 'POST',
        dataType: 'json',
        success: function (respuesta) {
            $("#tituloModal").text(respuesta.nombreCarrera)
            $("#fechaModal").text(`Fecha de la carrera : ${respuesta.fechaCarrera}`)
            $("#estadoModal").text(`Estado : ${respuesta.estado}`)
            $("#numsModal").text(`${respuesta.numParticipantes} / ${respuesta.maxParticipantes}`)
            $("#longitudModal").text(`Longitud : ${respuesta.longitud} km`)
            $("#desnivelModal").text(`Desnivel : ${respuesta.desnivel} %`)
            $("#modoModal").text(`Modo de inscripción : ${respuesta.modoInscripcion}`)
            $("#tipoModal").text(`Tipo de carrera : ${respuesta.tipoCarrera}`)
            if (respuesta.estado != "disponible") {
                $("#inscribirse").toggleClass("disable")
            }
        },
        error: function (e) {
            console.log(e)
        }
    })
    $("#modalCarreras").modal("show")
})

$(document).on("click", "#inscribirse", function () {
    let usuario = localStorage.getItem("usuario")
    let carrera = $("#tituloModal").text()
    if (usuario == null) {
        $("#txtModalInscripcion").empty()
        $("#modalCarreras").modal("hide")
        $("#txtModalInscripcion").append(`<h2 class='text-rojo'><i class="bi bi-exclamation-circle-fill"></i></i> Debes iniciar sesión para inscribirte!!</h2>`)
        $("#modalInscripcion").modal("show")
    } else if($("#tipoUsuario").text()=="Organizador"){
        $("#txtModalInscripcion").empty()
        $("#modalCarreras").modal("hide")
        $("#txtModalInscripcion").append(`<h2 class='text-rojo'><i class="bi bi-exclamation-circle-fill"></i></i> No puedes inscribirte siendo organizador!!</h2>`)
        $("#modalInscripcion").modal("show")
    } else {
        alert(a)
        $.ajax({
            url: "../Php/inscribirse.php",
            data: { "usuario": usuario, "carrera": carrera },
            type: 'POST',
            success: function (respuesta) {
                if (respuesta == 1) {
                    $("#txtModalInscripcion").empty()
                    $("#txtModalInscripcion").append(`<h2 class='text-azul'><i class="bi bi-check-circle-fill"></i> Inscrito correctamente</h2>`)
                    $("#modalInscripcion").modal("show")
                }
            },
            error: function (e) {
                console.log(e)
            }
        })
    }
})


