import React from 'react'
import TablaFila from "./TablaFila"
import WaitSpinner from "./waitSpinner"



const Tabla = ({productos}) => {
  
  return (
  <>
 
 <div className='w-100 m-auto mt-5 fs-5 '>
        <table className='table'>
       <thead className="text-center">
        {
   productos ? (
  
    productos.map((producto)=>(
     
           <>
           <tr>
               <th>Nombre</th>
               <th>Categoria</th>
               <th>Precio</th>
               <th>Acciones</th>
           </tr>
           <TablaFila 
           productos={producto}
           />
           </>
     
    ))
   ):(<WaitSpinner/>)
}
</thead>
      
      </table>
      </div>
  
 

  </>
  )
}

export default Tabla