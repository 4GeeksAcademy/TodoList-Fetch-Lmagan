import React from "react";
import { useState , useEffect } from "react";


const NotebookList = () => {
    const [items, setItems] = useState([
      { text: 'Terminar proyecto', marked: false },
      { text: 'Hacer la compra', marked: false },
      { text: 'Ir al gimnasio', marked: false }
    ]);
    const [inputValue, setInputValue] = useState('');
  
    const AddItem = () => {
      if (inputValue.valueOf() !== '') {
        setItems([...items, { text: inputValue, marked: false }]);
        setInputValue('');
      }
    };
  
    const DeleteAllItem = (index) => {
      setItems(items.filter((i) => i == index));
    };
  
    const DeleteItem = (index) => {
      setItems(items.filter((_, i) => i !== index));
    };
  
    const MarkItem = (index) => {
      setItems(
        items.map((item, i) =>
          i === index ? { ...item, marked: !item.marked } : item
        )
      );
    };
  
    return (
      <div className="notebook">
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyUp={(e) => { if (e.key === 'Enter') { AddItem() }}}
            placeholder="New Task!"
            className="notebook-input"
          />
          <button onClick={AddItem} className="add-button">Añadir</button>
          <button onClick={() => DeleteAllItem(items)} className="deleteAll-button">Delete all</button>
        </div>
        <ul className="notebook-list">
          {items.map((item, index) => (
            <li key={index} className={`notebook-item ${item.marked ? 'marked' : ''}`}>
              {item.text}
              <button onClick={() => MarkItem(index)} className="mark-button"><i class="fa-solid fa-check"></i></button>
              <button onClick={() => DeleteItem(index)} className="delete-button"><i class="fa-solid fa-x"></i></button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default NotebookList