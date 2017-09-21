class puntajes{
    constructor(){
        /*Array donde se almacenara nuestras estudiantes*/
        this.estudiantes=[];
    }
capturas(){
    $("#agregar").click(()=>{this.agregar()});
    $("#mostrar").click(()=>{this.filtrar(estudiantes)});
    $("#filtrar").click(()=>{this.empleabilidad()});
    $("#empleabilidad").click(()=>{this.empleabilidad});
}

/*Boton 1 - Agrega estudiamtes*/
agregar(){
    let nombre = prompt("Ingrese Nombre de Alumna: ", "Escriba Aqui");
	let tecnico = prompt("Ingrese el Porcentaje Tecnico de Alumna: ", "Escriba Aqui");
	let habilidades = prompt("Ingrese el Porcentaje HSE: ", "Escriba Aqui");
    let estudiante= {
           nombre_alumna:nombre,
           puntos_tecnicos:parseInt(tecnico),
           puntos_habilidades:parseInt(habilidades),
           estado: "ACTIVA",
       };
    this.estudiantes.push(estudiante);
	this.mostrarAlumnas(this.estudiantes[this.estudiantes.length-1]);
}

/*Boton 2 - Muestra todas las estudiante*/
 mostrarAlumnas(alum){
	if(alum){
		$("#contenedor-estudiantes").empty();
		$("#contenedor-estudiantes").append(`<div id=cajita><h2>${alum.nombre_alumna}</h2>
                                            <p>Puntos Tecnicos: ${alum.puntos_tecnicos}%</p>
                                            <p>Puntos HSE:      ${alum.puntos_habilidades}%</p>
                                            <p>Estado:          ${alum.estado}</p></div>`);
	}
}

/*Boton 3 - Filtra a todas las estudiamtes que tengan un puntaje menor al 70%*/
filtrar(array){
	$("#contenedor-estudiantes").empty();
	array.map(function(alum){
		$("#contenedor-estudiantes").append(`<div id=cajita><h2>${alum.nombre_alumna}</h2>
                                             <p>Puntos Tecnicos:${alum.puntos_tecnicos}%</p>
                                             <p>Puntos HSE:     ${alum.puntos_habilidades}% </p>
                                             <p>Estado:         ${alum.estado}</p></div>`);
	});
}

/*Boton 4 - Muestra a las estudiantes que son empleables con un puntaje mayor del 70% */
empleabilidad(){
	estudiantes = estudiantes.filter(function(alum){
		return (alum.puntos_tecnicos + alum.puntos_habilidades)/2 >= 70;    
	});
	filtrar(estudiantes);

}
}

var recordPuntaje = new puntajes();
recordPuntaje.capturas();