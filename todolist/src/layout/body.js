import React from 'react';
import '../layout.css';
function Body ({form,Items}) { 
    return (
        <div  >
        <section className="main">
            {form}
        </section >
        <section className="main_list">
             {Items}
       </section >
       </div>
    );

}
export default Body;