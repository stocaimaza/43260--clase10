import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';



const ItemDetail = ({id, nombre, precio, img, stock}) => {
  //1) Creamos un estado con la cantidad de productos agregados. 

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //2) Creamos una función manejadora de la cantidad: 

  const manejadorCantidad = (cantidad)  => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  }

  return (
    <div>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime numquam dolore natus ipsa molestiae facere assumenda. Voluptas omnis magni saepe, consequatur atque dolorem eius ipsum est quis porro neque quibusdam!</p>
        <img src={img} alt={nombre} />
        {
          //Acá empleamos la lógica del montaje y desmontaje de componentes. 
        }

        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail