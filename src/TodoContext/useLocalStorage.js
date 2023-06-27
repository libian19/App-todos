import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem('itemName');
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem('itemName', JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  },);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }
  return { item, saveItem, loading, error };
}

export { useLocalStorage }

/*
const defTodos = [
  {text: 'Estudiar programación', completed: true},
  {text: 'Hacer las compras', completed: true},
  {text: 'Hacer los quehaceres de la casa', completed: false},
  {text: 'Ir a caminar 1 hora', completed: false}
];
localStorage.setItem('itemName', JSON.stringify(defTodos));
*/