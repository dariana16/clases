import React from 'react'
import { useState, useEffect } from 'react'


    
const pizza = () => {

    const [pedido, setPedido] = useState('')

    useEffect(() => {
        console.log('Se montó el componente de función')
        setTimeout(() => {
             setPedido('-Pizzas')
        }, 2000)
        return () => {

            //const eliminarPedido= () => {setPedido('')}
            console.log('Se desmontó el componente de función')
        }
     }, [])
 



  return (
    <div>

      <h2>{pedido}</h2> 

      <button onClick={() =>{setPedido('')}}>Cancelar el pedido</button> 
    </div>
  )
}

export default pizza