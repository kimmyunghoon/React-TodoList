
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Header from '../layout/header.js';
import Body from '../layout/body.js';
import Form from '../components/Form.js';
import List from '../components/List.js';
import '../layout.css';
function App () { 
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    
   useEffect(() =>{
     /**
      * state 상태 감시 가능.
      */
      if(todos){
        console.log(todos);
      }
      return () => {
        alert("return");
      };
   },[todos] )
    const  useCallback = () =>{

    }

    const useMemo = ()=>{

    } 

    const handleCreate = () => {
        setTodos([
            ...todos,
            {
              id: todos.length,
              text: input,
              checked: false
            }
          ]);

          setInput("")
    }
    const  handleKeyPress = (e) =>{
    if(e.key === 'Enter') {
        handleCreate();
      }
      }
  const handleChange = (e) => {
      
      setInput(e.target.value) // input 의 다음 바뀔 값
  }
  
    const onToggle = (id) =>{
        if(todos.length>0)
        {
        const newList = todos.map((item) => {
            if (item.id === id) {
              const updatedItem = {
                ...item,
                checked: !item.checked,
              };
       
              return updatedItem;
            }
       
            return item;
          });
       
          setTodos(newList);
        }
    }

    const onRemove = (id) =>{
        if(todos.length>0)
        {
            setTodos(todos=>todos = todos.filter(todos => todos.id !== id)
            );
        }
    }

        return (
        
            <main className="main_container">
                <Header title="ToDoList" />
                <Body form={
                <Form  
                value={input}
                onKeyPress={handleKeyPress}
                onChange={handleChange}
                onCreate={handleCreate}/>} 
                Items={<List todos={todos} onToggle={onToggle} onRemove={onRemove}/>}/>
            </main>
        );
    
}

export default App;
