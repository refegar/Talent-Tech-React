
const TablaFila = ({productos}) => {

  
  return (
 <tr>
        <td scope='row'>{productos.nombre}</td>
        <td>{productos.categoria}</td>
        <td>{productos.precio}</td>
        <td>
            <button className="btn btn-primary me-2">Ver</button>
            <button className="btn btn-warning me-2">Editar</button>
            <button className="btn btn-danger me-2">Borrar</button>
        </td>
    </tr>
  )
}

export default TablaFila