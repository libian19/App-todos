import './TodoMsj.css'

function TodoMsj({completed, total}) {
   return(
    
    completed === total ? 
    <p className='msj-user'>
      Felicitaciones, completaste todas las tareas
    </p>
    : 
    <p className='msj-user'>
      Adelante, puedes hacerlo...
    </p>
  );
}

export {TodoMsj}