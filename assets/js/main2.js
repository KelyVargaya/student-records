+function () {
    // Elementos
    var botonAgregar = document.getElementById("agregar");
    var botonMostrar = document.getElementById("mostrar");
    var botonTopTecnico = document.getElementById("filtrar");
    var resultado = document.getElementById("contenedor-estudiantes");
    
    // Evento Click - Agregar
    var eventoAgregar = function (e) {
        e.preventDefault();
        var estudiante = agregarEstudiante();
        resultado.innerHTML = mostrar(estudiante);
    };
    
    var eventoMostrar = function (e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        resultado.innerHTML = mostrarLista(estudiantes);
    };
    
    var eventoTopTecnico = function (e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        var estudiantesTopTecnico = topTecnico(estudiantes);
        resultado.innerHTML = mostrarLista(estudiantesTopTecnico);
    };
    
    var eventoTopHSE = function (e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        var estudiantesTopHSE = topHSE(estudiantes);
        resultado.innerHTML = mostrarLista(estudiantesTopHSE);
    };
    
    // Manejadores de eventos
    botonAgregar.addEventListener("click", eventoAgregar);
    botonMostrar.addEventListener("click", eventoMostrar);
    botonTopTecnico.addEventListener("click", eventoTopTecnico);
}();

