
const Formulario = () => {
  return (
    <div className="w-50 m-auto pt-4">
        <form>
         <label htmlFor="lbNombre" className="form-label">Nombre</label>
         <input type="text" name="nombre" id="lbNombre" className="form-control" />
         <label htmlFor="lbCategoria" className="form-label mt-2">Categoria</label>
         <select name="categorias" id="categorias" className="form-control ">
         <option value="">Seleccionar...</option>
         <option value="Alimentos">Alimentos</option>
         <option value="Lácteos">Lácteos</option>
         <option value="Limpieza">Limpieza</option>
         <option value="Snacks">Snacks</option>
         <option value="Carnes">Carnes</option>
         <option value="Bebidas">Bebidas</option>
         </select>
        <label htmlFor="lbPrecio" className="form-label mt-2">Precio</label>
        <input type="number" name="lbPrecio" id="lbPrecio" className="form-control mb-4" />
        <button type='submit' className="btn btn-info me-3">Actualiza/Editar</button>
        <button type='submit' className="btn btn-danger">Reset</button>
        </form>
    </div>
  )
}

export default Formulario