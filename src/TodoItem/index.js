import './TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon.js';
import { DeleteIcon } from '../TodoIcon/DeleteIcon.js';

function TodoItem(props) {
  return (
  <li className='item'>

    <CompleteIcon
      completed={props.completed}
      onComplete={props.onComplete}
    />
   
    <p className={`item-p ${props.completed && "item-p--completed"}`}>
    {props.text}
    </p>

    <DeleteIcon
      onDelete={props.onDelete}
    />
  
  </li>
  );
}
export { TodoItem };