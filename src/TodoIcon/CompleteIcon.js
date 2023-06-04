import React from "react";
import { TodoIcon } from './index.js'

function CompleteIcon({completed, onComplete}) {
  return (
    <TodoIcon
      type='check'
      color={completed ? "rgb(223 36 119)" : "white"}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };