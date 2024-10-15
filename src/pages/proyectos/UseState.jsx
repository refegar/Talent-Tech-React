import  { useState } from 'react'

const UseState = () => {
 
  const valorInicial = 0
  const [contador, setcontador] = useState(valorInicial)

  const handleAumentar = () =>{
    setcontador(contador + 1)
  }

  const handleDecrementar = () =>{
    setcontador(contador - 1)
  }

  const handleReset = () =>{
    setcontador(valorInicial)
  }

  return (
<>
    <div className='text-center pt-5'>
    <h1 className='pb-4'>Valor Contador: {contador}</h1>
   
   <button onClick={handleAumentar} className="btn btn-info me-2" o>Incrementar</button>
   <button onClick={handleDecrementar} className="btn btn-warning me-2">Decrementar</button>
   <button onClick={handleReset} className="btn btn-danger">Reset</button>
    </div>
</>
  )
}

export default UseState