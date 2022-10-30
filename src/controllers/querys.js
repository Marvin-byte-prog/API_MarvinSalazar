export const queries = {
    ObtenerEquipo: "SELECT * FROM Equipos",
    NuevoEquipo: 'INSERT INTO Equipos (NombreEquipo, Ranking, CopasGanadas, Informacion, CodigoGrupo) values(@NombreEquipo, @Ranking, @CopasGanadas, @Informacion, @CodigoGrupo)',
    BuscarEquipo: 'SELECT * FROM Equipos where CodigoEquipo = @id',
    borrarEquipo: 'Delete from Equipos where CodigoEquipo = @id',
    NuevoEstadio: 'insert into Estadios (NombreEstadio, Capacidad, Descripcion) values (@NombreEstadio, @Capacidad, @Descripcion)',
    BuscarEstadio: 'Select * from Estadios where CodigoEstadio = @id',
    AgregarFecha: 'INSERT INTO Juegos (Fecha, Hora, CodigoEquipo, CodigoEquipo2, CodigoEstadio, CodigoGrupo) values(@Fecha, @Hora, @CodigoEquipo, @CodigoEquipo2, @CodigoEstadio, @CodigoGrupo)',
    BorrarEstadio: 'Delete from Estadios where CodigoEstadio = @id',
    EliminarFecha: 'Delete from Juegos where CodigoJuego = @id'
}