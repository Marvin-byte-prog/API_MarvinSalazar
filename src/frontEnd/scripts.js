const formEquipos = document.getElementById("equipo");

formEquipos.addEventListener("submit", (event) =>{
    event.preventDefault();
    let NombreEquipo = document.getElementById("NombreEquipo").value;
    let Ranking = document.getElementById("Ranking").value;
    let CopasGanadas = document.getElementById("CopasGanadas").value
    let Informacion = document.getElementById("Informacion").value
    let Grupo = document.getElementById("Grupos").value
    if(Grupo == "B"){
        Grupo = 2;
    }
    let RegistroEquipo = {NombreEquipo: NombreEquipo, Ranking: Ranking, CopasGanadas: CopasGanadas, Informacion: Informacion, Grupo: Grupo}
    let registroJson = JSON.stringify(RegistroEquipo)
    console.log(registroJson)

    // fetch('http://localhost:3000/equipos', {
    // method: 'POST',
    // body: registroJson
    // })
})