import { useEffect, useState } from 'react'
import Formulario from '../../componets/Formulario'
import Tabla from '../../componets/Tabla'

const UseEffect = () => {


const [productos, setproductos] = useState(null)

useEffect(() => {
getProductos() 
}, [])

//console.log('Los productos son: ',productos)

const getProductos = async ()=>{

const response = await fetch('http://localhost:3000/productos')

try {

if(!response.ok) throw new Error('Error en el servidor api')
    const dataProductos = await response.json()
    setproductos(dataProductos) // Actualizamos datos
    
} catch (error) {
console.log(error)
}

}

  return (
 <>
   <Formulario/>
   <Tabla productos={productos}/>
 </>
  )
}

export default UseEffect