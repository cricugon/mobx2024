import React from "react";
import {inject, observer} from "mobx-react"
import arepasStore from "./stores/ArepasStore";
class Menu extends React.Component {
    nombreRef = React.createRef();
    fotoRef = React.createRef();
    
    render(){
       
        return <div>
            <h1>Tengo en total {arepasStore.numeroArepas} arepas</h1>
            <button onClick={()=>{
                    arepasStore.borrarArepa();
                }}> Borrar
                </button>
            <form onSubmit={e=>{
                e.preventDefault();
                arepasStore.agregarArepa({
                    nombre:this.nombreRef.current.value,
                    foto: this.fotoRef.current.value
                })
                e.target.reset();
            }}>
                <input 
                type="text"
                placeholder="Foto URL de arepa"
                required
                ref={this.fotoRef}
                >
                </input>
                <input 
                type="text"
                placeholder="Nombre de la arepa"
                required
                ref={this.nombreRef}
                >
                </input>
               <button type="submit">Guardar Arepa</button>
            </form>
            <ul>
                {arepasStore.arepas.map(arepa=> (
                    <li key={arepa.nombre}>
                        <h2>{arepa.nombre}</h2>
                        <img
                        src={arepa.foto}
                        alt={arepa.nombre}
                        style={{maxWidth: "150px"}}
                        >
                        </img>

                    </li>
                ))}
            </ul>

            </div>
    }
}
export default inject("ArepasStore")(observer(Menu));