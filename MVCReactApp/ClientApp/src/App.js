import "bootstrap/dist/css/bootstrap.min.css"
import { useState, useEffect } from "react"

const App = () => { 
    const [empleados, setEmpleados] = useState([])

    const consumirAPI = async () => {
        const response = await fetch("api/empleado/obtenerEmpleados")
        if (response.ok) {
            const data = await response.json();
            setEmpleados(data);
        }
    }

    useEffect(() => {
        consumirAPI();
    },[])

    return (
        <div className="container-fluid">
            <h5>Lista de empleados</h5>
            <table className="table table-striped">
                <thead>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Direcci&oacute;n</th>
                    <th>Tel&eacute;fono</th>
                </thead>
                <tbody>
                    {
                        empleados.map((empleado) => (
                            <tr key={ empleado.IdEmpleado}>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.correo}</td>
                                <td>{empleado.direccion}</td>
                                <td>{empleado.telefono}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default App