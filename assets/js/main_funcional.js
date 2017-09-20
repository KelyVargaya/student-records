/*Array donde se almacenara nuestras estudiantes*/
var estudiantes=[];

$("#agregar").click(agregar);
$("#mostrar").click(()=>{filtrar(estudiantes)});
$("#filtrar").click(empleabilidad);
$("#empleabilidad").click(empleabilidad);

/*Boton 1 - Agrega estudiamtes*/
function agregar(){
	var nombre = prompt("Ingrese Nombre de Alumna: ", "Escriba Aqui");
	var tecnico = prompt("Ingrese el Porcentaje Tecnico de Alumna: ", "Escriba Aqui");
	var habilidades = prompt("Ingrese el Porcentaje HSE: ", "Escriba Aqui");
    var estudiante= {
           nombre_alumna:nombre,
           puntos_tecnicos:parseInt(tecnico),
           puntos_habilidades:parseInt(habilidades),
           estado: "ACTIVA",
       };
       estudiantes.push(estudiante);
	mostrarAlumnas(estudiantes[estudiantes.length-1]);
}

/*Boton 2 - Muestra todas las estudiante*/
function mostrarAlumnas(alum){
	if(alum){
		$("#contenedor-estudiantes").empty();
		$("#contenedor-estudiantes").append(`<div id=cajita><h2>${alum.nombre_alumna}</h2>
                                            <p>Puntos Tecnicos: ${alum.puntos_tecnicos}%</p>
                                            <p>Puntos HSE: ${alum.puntos_habilidades}%</p>
                                            <p>Estado: ${alum.estado}</p></div>`);
	}
}

/*Boton 3 - Filtra a todas las estudiamtes que tengan un puntaje menor al 70%*/
function filtrar(array){
	$("#contenedor-estudiantes").empty();
	array.map(function(alum){
		$("#contenedor-estudiantes").append(`<div id=cajita><h2>${alum.nombre_alumna}</h2>
                                             <p>Puntos Tecnicos: ${alum.puntos_tecnicos}%</p>
                                             <p>Puntos HSE: ${alum.puntos_habilidades}% </p>
                                             <p>Estado: ${alum.estado}</p></div>`);
	});
}

/*Boton 4 - Muestra a las estudiantes que son empleables con un puntaje mayor del 70% */
function empleabilidad(){
	estudiantes = estudiantes.filter(function(alum){
		return (alum.puntos_tecnicos + alum.puntos_habilidades)/2 >= 70;    
	});
	filtrar(estudiantes);

}





/*var estudiantes = [];
function obtenerListaEstudiantes() {
    // Retornar la lista de estudiantes
return estudiantes;
}

function agregarEstudiante() {
    var nombre = prompt("Ingrese Nombre de Alumna: ", "Escriba Aqui");
    var tecnico = prompt("Ingrese el Porcentaje Tecnico de Alumna: ", "Escriba Aqui");
    var habilidades = prompt("Ingrese el Porcentaje HSE: ", "Escriba Aqui");
    var estudiante= {
           nombre_alumna:nombre,
           // parseInt para que reconosca solo numeros
           puntos_tecnicos:parseInt(tecnico),
           puntos_habilidades:parseInt(habilidades),
       };
       estudiantes.push(estudiante);
       return estudiante;
}

function mostrar(estudiante) {
    var resultado = "";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre_alumna+ "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntos_tecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntos_habilidades + "</p>";
    return resultado;
}

function mostrarLista(estudiantes) {
        var mostrarAlumna ="";
        for(var i in estudiantes){
            mostrarAlumna += mostrar(estudiantes[i]);
        }
        return mostrarAlumna;
}
*/

