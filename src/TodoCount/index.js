import './TodoCount.css'

function TodoCount({completed, total}){
  return (
    <h1 className='contador'>Has completado <span>{completed}</span> de <span>{total}</span> Todos</h1>
  )
}

export {TodoCount};