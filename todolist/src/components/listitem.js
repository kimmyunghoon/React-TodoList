import React from 'react';
import '../index.css';
function Items ({id,text,checked,onToggle, onRemove }) { 
  
    return (
    
            <div className="items" id={id}>
                
             <input className="ch" type="checkbox" onChange={() => 
                onToggle(id)}  checked={checked}/>
                {
                    !checked&&<div className="text" >{text}</div>
                }
                 {
                    checked&&<div className="textch" >{text}</div>
                }
           <button className="bt" onClick={() =>onRemove(id)}>삭제</button>
        </div>
    );

}

export default Items;