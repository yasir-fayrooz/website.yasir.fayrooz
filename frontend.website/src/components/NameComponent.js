import React from "react"; 
import './NameComponent.css';
  
class NameComponent extends React.Component{ 
    constructor(){ 
        super(); 
        this.state={

        };
    }
  
    render(){ 
        return ( 
            <div> 
               <b><p>Yasir Fayrooz</p></b>
            </div> 
        ) 
    }
} 

export default NameComponent;