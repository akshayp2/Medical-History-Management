import React,{useState} from 'react';


const RadioButtons =() =>{
const[radio,setRadio] = useState("Client");

    return(
    <div class="form-check form-check-inline">

    <br/>
    <br/>
    <br/>
    
    
    <lable class="form-check-input"  >Client:</lable>
     <input type ="radio"
     checked={radio==="Client"}
        value="Client"
        onChange={(e)=>{setRadio(e.target.value)}}/><br/>
   
    <lable class="form-check-input" >Patient:</lable>
     <input type ="radio"
     checked={radio==="Patient"}
        value="Patient"
        onChange={(e)=>{setRadio(e.target.value)}}/><br/>
  
    <lable class="form-check-input" >Guest:</lable>
    <input type ="radio"
    checked={radio==="Guest"}
       value="Guest"
       onChange={(e)=>{setRadio(e.target.value)}}/><br/>

    </div>
    );
    }
export default RadioButtons;