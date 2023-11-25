import "bootstrap/dist/css/bootstrap.min.css"
import Tarjeta from "./components/Tarjeta"
import { useState, useEffect } from "react"


const App = () => { 

    let modeloPersona = {
        nombre: "Elias",
        correo: "eliasmorenoh@gmail.com"
    }

    //** Use State*/
    const [numero, setNumero] = useState(0);
    const [persona, setPersona] = useState(modeloPersona);
    const [nombre, setNombre] = useState("Elias");

    
    const EscribirNombre = () => {
        setNombre(nombre == "Elias" ? "Juan" : "Elias")
    }

    //** Use Efect*/

    useEffect(() => {
        console.log(nombre)
        console.log(numero)
    },[])

    return (
        <div className="container-fluid">
            <h1>Valor actual del n&uacute;mero {numero}</h1>
            <button onClick={() => setNumero(numero+1)}>Suma + 1</button>
            <br></br>
            <br></br>
            <p>Nombre = {persona.nombre}</p>
            <p>Correo Electr&oacute;nico = {persona.correo}</p>
            <button onClick={() => setPersona({
                ...persona,
                correo: "otrocorreo@gmail.com"
            })}>Cambiar Correo Electr&oacute;nico</button>

            <br></br>
            <br></br>

            <h1>El nombre actual es: { nombre}</h1>
            <button onClick={() => EscribirNombre() }>Cambiar Nombre</button>
            {/*<div className="row justify-content-sm-center">*/}
                {/*<div className="col-sm-4">*/}
                {/*    <Tarjeta />*/}
                {/*    <Tarjeta*/}
                {/*        titulo="Soy El&iacute;as"*/}
                {/*        descripcion="Mi descripci&oacute;n"*/}
                {/*    />*/}
                {/*    <Tarjeta*/}
                {/*        textbutton="Mas informaci&oacute;n"*/}
                {/*    />*/}
                {/*    <Tarjeta />*/}
                {/*    <Tarjeta />*/}
                {/*    <Tarjeta />*/}
                {/*</div>*/}
            {/*</div>*/}
        </div>
    )
}

export default App