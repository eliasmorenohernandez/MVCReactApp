using System;
using System.Collections.Generic;

namespace MVCReactApp.Models;

public partial class Empleado
{
    public int IdEmpledo { get; set; }

    public string? Nombre { get; set; }

    public string? Correo { get; set; }

    public string? Direccion { get; set; }

    public string? Telefono { get; set; }
}
