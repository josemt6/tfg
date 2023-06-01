let arrayImgs = ["./imagnes/foto2.jpg", "./imagnes/foto3.jpg", "./imagnes/fotoBadajoz.jpg", "./imagnes/fotoValencia.jpg"]


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

function getCabeceraClas() {
    return `<h2 class="text-center">Clasificacion de la carrera "<span id="spanCarrera"></span>"</h2>
    <div class="row p-1 rounded bg-azul text-white">
    <div class="col-1">Posición</div>
    <div class="col-1">Usuario</div>
    <div class="col-3">Nombre corredor</div>
    <div class="col-2">Fecha de nacimiento</div>
    <div class="col-2">Localidad del corredor</div>
    <div class="col-2">Tiempo de la carrera</div>
    <div class="col-1">Dorsal</div>
</div>`
}

function getTarjetas() {
    return `<div class='card col-md-5 col-10 p-0 my-2 mx-2'>
        <div class='card-img-top'><div class='iconoCards rounded-circle bg-azul'href='#canvasSesion' role='button' aria-controls='canvasSesion' data-bs-toggle='offcanvas'></div></div>
        <div class='card-body'>
        <h5 class='card-title'></h5>
        <p class='card-text'></p>
        <div class='text-center'>
        </div></div>
        </div>`
}

function getMiniTarjetas() {
    return `<div class="card col-4 carreraClasificacion text-center">
    <h3 class="nomCarreraClasificacion"></h3>
    </div>`
}

function getClasificacion() {
    return `<div class="row p-1 rounded">
    <div class="posicion col-1"></div>
    <div class="usuario col-1"></div>
    <div class="nombreCorredor col-3"></div>
    <div class="fechaClasificacion col-2"></div>
    <div class="localidad col-2"></div>
    <div class="tiempo col-2"></div>
    <div class="numero col-1"></div>
</div>`
}

function getListado() {
    return `<div class="row p-1 rounded text-center">
    <div class="carreraLis col-3"></div>
    <div class="localizacionLis col-2"></div>
    <div class="fechaLis col-1"></div>
    <div class="longitudLis col-1"></div>
    <div class="desnivelLis col-1"></div>
    <div class="modoLis col-2"></div>
    <div class="tipoLis col-2"></div>
</div>`
}

function getCabeceraSoliditudes() {
    return `<h2 class="text-center">Solicitudes aceptadas</h2><div class='row'><div class="col-3 my-3 bg-azul text-white">Usuario</div>
    <div class="col-3 my-3 bg-azul text-white">Nombre usuario</div>
    <div class="col-3 my-3 bg-azul text-white">Carrera solicitada</div>
    <div class="col-3 my-3 bg-azul text-white">Acciones</div></div>`
}

function getCabeceraSoliditudesPendientes() {
    return `<h2 class="text-center">Solicitudes pendientes</h2><div class='row'><div class="col-3 my-3 bg-azul text-white">Usuario</div>
    <div class="col-3 my-3 bg-azul text-white">Nombre usuario</div>
    <div class="col-3 my-3 bg-azul text-white">Carrera solicitada</div>
    <div class="col-3 my-3 bg-azul text-white">Acciones</div></div>`
}

function getCabeceraSoliditudesRechazadas() {
    return `<h2 class="text-center">Solicitudes rechazadas</h2><div class='row'><div class="col-3 my-3 bg-azul text-white">Usuario</div>
    <div class="col-3 my-3 bg-azul text-white">Nombre usuario</div>
    <div class="col-3 my-3 bg-azul text-white">Carrera solicitada</div>
    <div class="col-3 my-3 bg-azul text-white">Acciones</div></div>`
}

function getListadoSolicitudes() {
    return `<div class='row'><div class="col-3 my-2 usuarioSol">Usuario</div>
    <div class="col-3 nombreSol my-2">Nombre usuario</div>
    <div class="col-3 carreraSol my-2">Carrera solicitada</div>
    <div class="col-3 codSolicitud my-2 d-none"></div>
    <div class="col-3 my-2"><button class='btn btn-verde btnAceptarSolicitud'><i class="bi bi-check-lg"></i></button><button class='btn btn-rojo btnRechazar mx-1'><i class="bi bi-x-circle"></i></button></div></div>`
}


function getListadoSolicitudesAceptadas() {
    return `<div class='row'><div class="col-3 my-2 usuarioSol">Usuario</div>
    <div class="col-3 nombreSol my-2">Nombre usuario</div>
    <div class="col-3 carreraSol my-2">Carrera solicitada</div>
    <div class="col-3 my-2"><button class='btn btn-verde disabled btnAceptarSolicitud'><i class="bi bi-check-lg"></i></button><button class='btn btn-rojo disabled btnRechazar mx-1'><i class="bi bi-x-circle"></i></button></div></div>`
}

function formularioEditar() {
    return `<div class='rounded bg-white p-5 col-6 offset-3'>
            <h4 class="text-center">Editar registro</h4>
            <label for="modoInscripcion">Modo de inscripcion de la carrera</label>
            <select name="modoInscripcion" class="form-select my-1 modoInscripcionCarrera">
                <option value="normal">Normal</option>
                <option value="solicitud">Solicitud</option>
            </select>
            <label for="fechaCarrera">Fecha carrera</label><input type="date" name="" id="" class="form-control fechaCarrera">
            <div class="text-center">
            <button class="btn btn-azul btnEditar my-2 mx-auto">Editar carrera <i class="bi bi-pencil"></i></button>
            <button class="btn btn-rojo btnCerrar my-2 mx-auto">Cerrar Inscripciones <i class="bi bi-x-circle"></i></button>
            <button class="btn btn-rojo btnFinalizar my-2 mx-auto">Finalizar Carrera <i class="bi bi-card-checklist"></i></button>
            </div></div>`
}

function formularioAdd() {
    return `
            <h4 class="text-center">Añadir registro</h4>
            <label for="nombreCarrera">Nombre carrera</label><input type="text" value="" class="form-control my-1 nombreCarrera">
            <label for="localizacionCarrera">Localizacion</label><input type="text" value="" class="form-control my-1 localizacionCarrera">
            <label for="longitudCarrera">Longitud</label><input type="text" value="" class="form-control my-1 longitudCarrera">
            <label for="desnivelCarrera">Desnivel</label><input type="text" value="" class="form-control my-1 desnivelCarrera">
            <label for="modoInscripcionCarrera">Modo de inscripción</label>
            <select name="modoInscripcion" class="form-select my-1 modoInscripcionCarrera">
                <option value="1">Normal</option>
                <option value="2">Email</option>
            </select>
            <label for="tipoCarrera">Tipo de carrera</label><input type="text" value="" class="form-control my-1 tipoCarrera">
            <label for="fechaCarrera">Fecha carrera</label><input type="date" name="" id="" class="form-control fechaCarrera">
            <label for="recorrido">Recorrido</label><input type="text" value="" class="form-control my-1 recorrido">
            <label for="maximo">Máximo de participantes</label><input type="text" value="" class="form-control my-1 maximo">`
}

function getListadoCarreras() {
    return `<div class="listadoCarreras bg-whiteSmoke row p-2">
        <div class="col-md-6 col-10 d-flex">
            <div class="imgListado bg-negro rounded text-white"></div>
            <div class="especificaciones ms-3 d-flex flex-column justify-content-center">
                <h3 class="nombreListado"></h3>
                <p class="localizacionListado"></p>
                <p class='mensajeEditar'></p>
            </div>
        </div>
        <div class="col-md-6 col-2 d-flex justify-content-end align-items-end">
            <button class="eliminarListado btn btn-rojo mx-2 p-2"><i class="bi bi-trash3"></i></button>
            <button class="editarListado btn btn-azul mx-2 p-2"><i class="bi bi-pencil-square"></i></button>
        </div>
        <div class='bg-azul rounded my-1 p-3 d-none formularioEditar'></div>
    </div>`
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

    //Ocultar los section
    $("#carreras").toggleClass("d-none")
    $("#contenido").toggleClass("d-none")
    $("#clasificacionesCont").toggleClass("d-none")
    $("#listaInscripciones").toggleClass("d-none")
    $("#solicitudesCont").toggleClass("d-none")

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
                    $(".card-img-top").eq(i).append(respuesta[i].Recorrido)
                    $(".card-title").eq(i).html(respuesta[i].nombreCarrera + "  <div class='verModal d-inline rounded-circle'><i class='bi bi-info-circle'></i></div>")
                    $(".card-text").eq(i).text(`Localización : ${respuesta[i].localizacion}`)
                    if (localStorage.getItem("usuario") != null) {
                        $(".iconoCards").eq(i).text($("#icono").text())
                    } else {
                        $(".iconoCards").eq(i).html(`<i class="bi bi-person-fill"></i>`)
                    }
                }
            },
            error: function (e) {
                console.log(e)
            }
        })
    })

    //Recargar la página con el logo y inicio

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
                    $("#clasificaciones").after(`<a class="nav-link active  text-whiteSmoke" href="#" id="solicitudes">Solicitudes</a>`)
                    $("#cabecera").css("background-color", "black")
                } else if (datos == "corredor") {
                    $("#cabecera").css("background-color", "blue")
                    $("#clasificaciones").after(`<a class="nav-link active  text-whiteSmoke" href="#" id="listadoInscripciones">Inscripciones</a>`)
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
            $("#getModo").text(`${respuesta.modoInscripcion}`)
            $("#tipoModal").text(`Tipo de carrera : ${respuesta.tipoCarrera}`)
            if (respuesta.estado == "disponible") {
                $("#inscribirse").attr("class", "btn btn-azul")
            } else if (respuesta.estado == "cerrada") {
                $("#inscribirse").attr("class", "btn btn-azul disabled")
            } else if (respuesta.estado == "finalizada") {
                $("#inscribirse").attr("class", "btn btn-azul disabled")
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
    let modo = $("#getModo").text()
    if (usuario == null) {
        $("#txtModalInscripcion").empty()
        $("#modalCarreras").modal("hide")
        $("#txtModalInscripcion").append(`<h2 class='text-rojo'><i class="bi bi-exclamation-circle-fill"></i></i> Debes iniciar sesión para inscribirte!!</h2>`)
        $("#modalInscripcion").modal("show")
    } else if ($("#tipoUsuario").text() == "Organizador") {
        $("#txtModalInscripcion").empty()
        $("#modalCarreras").modal("hide")
        $("#txtModalInscripcion").append(`<h2 class='text-rojo'><i class="bi bi-exclamation-circle-fill"></i></i> No puedes inscribirte siendo organizador!!</h2>`)
        $("#modalInscripcion").modal("show")
    } else if (modo == "solicitud") {
        //solicitud
        $.ajax({
            url: "./Php/solicitud.php",
            data: { "usuario": localStorage.getItem("usuario"), "carrera": $("#tituloModal").text() },
            type: 'POST',
            success: function (respuesta) {
                if (respuesta == 1) {
                    $("#modalCarreras").modal("hide")
                    $("#txtModalInscripcion").empty()
                    $("#txtModalInscripcion").append(`<h2 class='text-azul'><i class="bi bi-check-circle-fill"></i> Solicitud enviada</h2>`)
                    $("#modalInscripcion").modal("show")
                } else {
                    $("#modalCarreras").modal("hide")
                    $("#txtModalInscripcion").empty()
                    $("#txtModalInscripcion").append(`<h2 class='text-rojo'><i class="bi bi-x-circle"></i> No puedes enviar más de una solicitud!!</h2>`)
                    $("#modalInscripcion").modal("show")
                }
            },
            error: function (e) {
                console.log(e)
            }
        })
        //aqui va el
    } else {
        $.ajax({
            url: "./Php/inscribirse.php",
            data: { "usuario": usuario, "carrera": carrera },
            type: 'POST',
            success: function (respuesta) {
                if (respuesta == 1) {
                    $("#modalCarreras").modal("hide")
                    $("#txtModalInscripcion").empty()
                    $("#txtModalInscripcion").append(`<h2 class='text-azul'><i class="bi bi-check-circle-fill"></i> Inscrito correctamente</h2>`)
                    $("#modalInscripcion").modal("show")
                } else if (respuesta=="false1") {
                    $("#modalCarreras").modal("hide")
                    $("#txtModalInscripcion").empty()
                    $("#txtModalInscripcion").append(`<h2 class='text-rojo'><i class="bi bi-x-circle"></i> No te puedes inscribir otra vez!!</h2>`)
                    $("#modalInscripcion").modal("show")
                } else {
                    $("#modalCarreras").modal("hide")
                    $("#txtModalInscripcion").empty()
                    $("#txtModalInscripcion").append(`<h2 class='text-rojo'><i class="bi bi-x-circle"></i> Se ha llegado al número máximo de participantes!!</h2>`)
                    $("#modalInscripcion").modal("show")
                }
            },
            error: function (e) {
                console.log(e)
            }
        })
    }
})

//Mostrar section de organización y mostrar el listado de carreras de la BD

$(document).on("click", "#organizar", function () {
    $("#contenido").toggleClass("d-none")
    $.ajax({
        url: "./Php/verCarreras.php",
        type: 'POST',
        dataType: 'json',
        success: function (respuesta) {
            $("#lista").empty()
            for (let i = 0; i < respuesta.length; i++) {
                let random = Math.floor(Math.random() * arrayImgs.length)
                $("#lista").append(getListadoCarreras())
                $(".imgListado").eq(i).append(`<img src="${arrayImgs[random]}" alt="">`)
                $(".nombreListado").eq(i).html(respuesta[i].nombreCarrera + " <div class='verModal d-inline rounded-circle'><i class='bi bi-info-circle'></i></div>")
                $(".localizacionListado").eq(i).text(`Localización : ${respuesta[i].localizacion}`)
            }
        },
        error: function (e) {
            console.log(e)
        }
    })
})

//Añadir carrera

$(document).on("click", "#btnAddCarrera", function () {
    $("#txtModalAdd").append(formularioAdd())
    $("#modalAdd").modal("show")
})

$(document).on("click", "#addCarrera", function () {
    let nombre = $("#txtModalAdd").find("input").eq(0).val()
    let localizacion = $("#txtModalAdd").find("input").eq(1).val()
    let longitud = $("#txtModalAdd").find("input").eq(2).val()
    let desnivel = $("#txtModalAdd").find("input").eq(3).val()
    let modoInscripcion = $("#txtModalAdd").find("select").eq(0).val()
    let tipo = $("#txtModalAdd").find("input").eq(4).val()
    let fecha = $("#txtModalAdd").find("input").eq(5).val()
    let recorrido = $("#txtModalAdd").find("input").eq(6).val()
    let maximo = $("#txtModalAdd").find("input").eq(7).val()
    if (nombre != "" && localizacion != "" && longitud != "" && desnivel != "" && modoInscripcion != "" && tipo != "" && fecha != "" && recorrido != "" && maximo != "") {
        $.ajax({
            url: "./Php/addCarrera.php",
            data: {
                "nombre": nombre,
                "localizacion": localizacion,
                "longitud": longitud,
                "desnivel": desnivel,
                "modo": modoInscripcion,
                "tipo": tipo,
                "fecha": fecha,
                "recorrido": recorrido,
                "max": maximo
            },
            type: 'POST',
            success: function (respuesta) {
                if (respuesta == 1) {
                    location.reload()
                } else {
                    alert("Algo ha salido mal!")
                }
            },
            error: function (e) {
                console.log(e)
            }
        })
    } else {
        alert("Debes insertar todos los campos!!")
    }
})

//Eliminar carrera de los listados y de la bd

$(document).on("click", ".eliminarListado", function () {
    let carreraBorrar = $(this).parent().parent().find("div").eq(0).find(".especificaciones").eq(0).find(".nombreListado").eq(0).text()
    $.ajax({
        url: "./Php/eliminarCarrera.php",
        data: { "carrera": carreraBorrar },
        type: 'POST',
        success: function (respuesta) {
            if (respuesta == true) {
                location.reload()
            } else {
                $("#mensajeOrganizar").text("No se ha conseguido borrar la carrera")
                $("#mensajeOrganizar").css("color", "red")
            }
        },
        error: function (e) {
            console.log(e)
        }
    })
})

//Mostrar formulario para editar las carreras

$(document).on("click", ".editarListado", function () {
    $(this).parent().parent().find(".formularioEditar").eq(0).empty()
    $(this).parent().parent().find(".formularioEditar").eq(0).toggleClass("d-none")
    $(this).parent().parent().find(".formularioEditar").eq(0).append(formularioEditar())
})

//Editar carrera

$(document).on("click", ".btnEditar", function () {
    let carreraEditar = $(this).parent().parent().parent().parent().find("div").eq(0).find(".nombreListado").eq(0).text()
    let modoInscripcionEditar = $(this).parent().parent().find("select").eq(0).val()
    let fechaEditar = $(this).parent().parent().find("input").eq(0).val()
    if (modoInscripcionEditar != "" && fechaEditar != "") {
        $.ajax({
            url: "./Php/editarCarrera.php",
            data: {
                "carrera": carreraEditar,
                "modo": modoInscripcionEditar,
                "fecha": fechaEditar,
            },
            type: 'POST',
            success: function (respuesta) {
                $(this).parent().parent().find(".formularioEditar").eq(0).empty()
                $(this).parent().parent().find(".formularioEditar").eq(0).toggleClass("d-none")
                if (respuesta == 1) {
                    $(this).parent().parent().parent().parent().find(".mensajeEditar").eq(0).text("Registro editado correctamente")
                    $(this).parent().parent().parent().parent().find(".mensajeEditar").eq(0).css("color", "blue")
                } else {
                    $(this).parent().parent().parent().parent().find(".mensajeEditar").eq(0).text("No se ha conseguido editar el registro")
                    $(this).parent().parent().parent().parent().find(".mensajeEditar").eq(0).css("color", "red")
                }
                location.reload()
            },
            error: function (e) {
                console.log(e)
            }
        })
    } else {
        $(this).parent().parent().parent().parent().find(".mensajeEditar").eq(0).text("Debes insertar todos los valores!")
        $(this).parent().parent().parent().parent().find(".mensajeEditar").eq(0).css("color", "red")
    }
})

//Establecer estado en inscripciones cerradas

$(document).on("click", ".btnCerrar", function () {
    let carreraCerrar = $(this).parent().parent().parent().parent().find(".nombreListado").eq(0).text()
    $.ajax({
        url: "./Php/cerrarEstado.php",
        data: { "carrera": carreraCerrar },
        type: 'POST',
        success: function (respuesta) {
            if (respuesta == 1) {
                alert("Inscripciones cerradas!")
            }
        },
        error: function (e) {
            console.log(e)
        }
    })
})

//Establecer estado de la carrera en finalizada

$(document).on("click", ".btnFinalizar", function () {
    let carreraCerrar = $(this).parent().parent().parent().parent().find(".nombreListado").eq(0).text()
    $.ajax({
        url: "./Php/finalizarEstado.php",
        data: { "carrera": carreraCerrar },
        type: 'POST',
        success: function (respuesta) {
            if (respuesta == 1) {
                alert("La carrera ha sido finalizada!")
            }
        },
        error: function (e) {
            console.log(e)
        }
    })
})

//Apartado de las clasificaciones

$(document).on("click", "#clasificaciones", function () {
    $("#clasificacionesCont").toggleClass("d-none")
    $.ajax({
        url: "./Php/getCarrerasTerminadas.php",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            for (let i = 0; i < respuesta.length; i++) {
                $("#listadoCarrerasClas").append(getMiniTarjetas())
                $(".nomCarreraClasificacion").eq(i).html(`${respuesta[i].nombreCarrera} <div class='verModal d-inline rounded-circle'><i class='bi bi-info-circle'></i></div> `)
            }
        },
        error: function (e) {
            console.log(e)
        }
    })
})

$(document).on("click", ".carreraClasificacion", function () {
    $("#clasificacionCarrera").toggleClass("d-none")
    let carrera = $(this).find("h3").eq(0).text()
    $.ajax({
        url: "./Php/getClasificacion.php",
        data: { "carrera": carrera },
        type: 'POST',
        dataType: 'json',
        success: function (respuesta) {
            $("#clasificacionCarrera").empty()
            $("#clasificacionCarrera").append(getCabeceraClas())
            $("#spanCarrera").text(carrera)
            for (let i = 0; i < respuesta.length; i++) {
                if (i == 0) {
                    $("#clasificacionCarrera").append(getClasificacion())
                    $(".posicion").eq(i).text(i + 1)
                    $(".usuario").eq(i).text(respuesta[i].usuario)
                    $(".nombreCorredor").eq(i).html(`${respuesta[i].nombreUsuario} <i class="bi bi-trophy-fill text-dorado"></i>`)
                    $(".fechaClasificacion").eq(i).text(respuesta[i].fechaNacimiento)
                    $(".localidad").eq(i).text(respuesta[i].localidad)
                    $(".tiempo").eq(i).text(respuesta[i].tiempo)
                    $(".numero").eq(i).text(respuesta[i].numero)
                } else {
                    $("#clasificacionCarrera").append(getClasificacion())
                    $(".posicion").eq(i).text(i + 1)
                    $(".usuario").eq(i).text(respuesta[i].usuario)
                    $(".nombreCorredor").eq(i).text(respuesta[i].nombreUsuario)
                    $(".fechaClasificacion").eq(i).text(respuesta[i].fechaNacimiento)
                    $(".localidad").eq(i).text(respuesta[i].localidad)
                    $(".tiempo").eq(i).text(respuesta[i].tiempo)
                    $(".numero").eq(i).text(respuesta[i].numero)
                }

            }
        },
        error: function (e) {
            console.log(e)
        }
    })
})

//Listado de inscripciones de un usuario

$(document).on("click", "#listadoInscripciones", function () {
    $("#addUsuario").text(localStorage.getItem("usuario"))
    $("#listaInscripciones").toggleClass("d-none")
    $.ajax({
        url: "./Php/lista.php",
        type: 'POST',
        dataType: 'json',
        data: { "usuario": localStorage.getItem("usuario") },
        success: function (respuesta) {
            for (let i = 0; i < respuesta.length; i++) {
                $("#listadoIns").append(getListado())
                $(".carreraLis").eq(i).html(`${respuesta[i].nombreCarrera} <div class='verModal d-inline rounded-circle'><i class='bi bi-info-circle'></i></div> `)
                $(".localizacionLis").eq(i).text(respuesta[i].localizacion)
                $(".fechaLis").eq(i).text(respuesta[i].fechaCarrera)
                $(".longitudLis").eq(i).text(respuesta[i].longitud)
                $(".desnivelLis").eq(i).text(respuesta[i].desnivel)
                $(".modoLis").eq(i).text(respuesta[i].modoInscripcion)
                $(".tipoLis").eq(i).text(respuesta[i].tipoCarrera)
            }
        },
        error: function (e) {
            console.log(e)
        }
    })
})

//Apartado de las solicitudes

$(document).on("click", "#solicitudes", function () {
    $("#solicitudesCont").toggleClass("d-none")
})

//Mostrar solicitudes aceptadas

$(document).on("click", "#solicitudesAceptadas", function () {
    $.ajax({
        url: "./Php/getSolicitudes.php",
        data: { "tipo": "aceptadas" },
        dataType: 'json',
        type: 'POST',
        success: function (respuesta) {
            $("#listaSolicitudes").empty()
            if (respuesta.length == 0) {
                $("#listaSolicitudes").append(`<h3>No tienes solicitudes aceptadas</h3>`)
            } else {
                $("#listaSolicitudes").append(getCabeceraSoliditudes())
                for (let i = 0; i < respuesta.length; i++) {
                    $("#listaSolicitudes").append(getListadoSolicitudesAceptadas())
                    $(".usuarioSol").eq(i).text(respuesta[i].usuario)
                    $(".nombreSol").eq(i).text(respuesta[i].nombreUsuario)
                    $(".carreraSol").eq(i).text(respuesta[i].nombreCarrera)
                    $(".codSolicitud").eq(i).text(respuesta[i].codSolicitud)
                }
            }
        },
        error: function (e) {
            console.log(e)
        }
    })
})

//Mostrar solicitudes rechazadas

$(document).on("click", "#solicitudesRechazadas", function () {
    $.ajax({
        url: "./Php/getSolicitudes.php",
        data: { "tipo": "rechazadas" },
        dataType: 'json',
        type: 'POST',
        success: function (respuesta) {
            $("#listaSolicitudes").empty()
            if (respuesta.length == 0) {
                $("#listaSolicitudes").append(`<h3>No tienes solicitudes rechazadas</h3>`)
            } else {
                $("#listaSolicitudes").append(getCabeceraSoliditudesRechazadas())
                for (let i = 0; i < respuesta.length; i++) {
                    $("#listaSolicitudes").append(getListadoSolicitudesAceptadas())
                    $(".usuarioSol").eq(i).text(respuesta[i].usuario)
                    $(".nombreSol").eq(i).text(respuesta[i].nombreUsuario)
                    $(".carreraSol").eq(i).text(respuesta[i].nombreCarrera)
                    $(".codSolicitud").eq(i).text(respuesta[i].codSolicitud)
                }
            }
        },
        error: function (e) {
            console.log(e)
        }
    })
})

//Mostrar solicitudes pendientes

$(document).on("click", "#solicitudesPendientes", function () {
    $.ajax({
        url: "./Php/getSolicitudes.php",
        data: { "tipo": "pendientes" },
        dataType: 'json',
        type: 'POST',
        success: function (respuesta) {
            $("#listaSolicitudes").empty()
            if (respuesta.length == 0) {
                $("#listaSolicitudes").append(`<h3>No tienes solicitudes pendientes</h3>`)
            } else {
                $("#listaSolicitudes").append(getCabeceraSoliditudesPendientes())
                for (let i = 0; i < respuesta.length; i++) {
                    $("#listaSolicitudes").append(getListadoSolicitudes())
                    $(".usuarioSol").eq(i).text(respuesta[i].usuario)
                    $(".nombreSol").eq(i).text(respuesta[i].nombreUsuario)
                    $(".carreraSol").eq(i).text(respuesta[i].nombreCarrera)
                    $(".codSolicitud").eq(i).text(respuesta[i].codSolicitud)
                }
            }
        },
        error: function (e) {
            console.log(e)
        }
    })
})

//Aceptar solicitud e inscribir al usuario en la carrera

$(document).on("click", ".btnAceptarSolicitud", function () {
    let codSolicitud = $(this).parent().parent().find(".codSolicitud").eq(0).text()
    let carrera = ""
    let usuario = ""
    $.ajax({
        url: "./Php/getDatos.php",
        data: { "solicitud": codSolicitud },
        dataType: 'json',
        type: 'POST',
        success: function (respuesta) {
            carrera = respuesta.nombreCarrera
            usuario = respuesta.usuario
        },
        error: function (e) {
            console.log(e)
        }
    })
    $.ajax({
        url: "./Php/setAceptada.php",
        data: { "solicitud": codSolicitud, "carrera": carrera, "usuario": usuario },
        dataType: 'json',
        type: 'GET',
        success: function (respuesta) {
            location.reload()
        },
        error: function (e) {
            console.log(e)
        }
    })
})

//Rechazar solicitud

$(document).on("click", ".btnRechazar", function () {
    let codSolicitud = $(this).parent().parent().find(".codSolicitud").eq(0).text()
    $.ajax({
        url: "./Php/serRechazada.php",
        data: { "solicitud": codSolicitud },
        dataType: 'json',
        type: 'POST',
        success: function (respuesta) {
            location.reload()
        },
        error: function (e) {
            console.log(e)
        }
    })
})