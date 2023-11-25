﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MVCReactApp.Models;

namespace MVCReactApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadoController : ControllerBase
    {
        private readonly ReactMvcContext _dbcontext;

        public EmpleadoController(ReactMvcContext dbContext)
        {
            _dbcontext = dbContext;
        }

        [HttpGet]
        [Route("obtenerEmpleados")]
        public IActionResult ObtenerEmpleados()
        {
            List<Empleado> lista = _dbcontext.Empleados.ToList();
            return StatusCode(StatusCodes.Status200OK, lista);
        }
    }
}
