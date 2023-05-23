import './TodoItem.css';

function TodoItem(props) {
  return (
  <li className='item'>

    <span className={`icon icon-check ${props.completed && "icon-check--active"}`}>
      V
    </span>

    <p className={`item-p ${props.completed && "item-p--completed"}`}>
      {props.text}
    </p>

    <span className='icon icon-delete'>X</span>

  </li>
  )
}
export { TodoItem };