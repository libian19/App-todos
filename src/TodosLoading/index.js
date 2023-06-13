import React from "react";
import './TodosLoading.css';
import { ReactComponent as LoadingSVG } from "./cargando.svg";

function TodosLoading() {
  return (
    <div className="container">
      <LoadingSVG
      className="loading"
      />
    </div>
  )
}

export {TodosLoading}