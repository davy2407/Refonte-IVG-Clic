import React , {useState,useEffect} from "react";

import {Form} from "react-bootstrap";




import "./BlocDecouverte.css";


function BlocDecouverte(props) {

    const [currentMode, setCurrentMode] = useState({
        titre : "Mode de découverte de la grossesse ",
        value : "",
        reponse : 0
      });
    

    const recupRadioMode = (e) => {
        let reponse = {
          titre : "Mode de découverte de la grossesse :",
          value : e.target.value,
          reponse : 1
        };
        setCurrentMode(reponse);
      }

   




  return (
    <div className="BlocConsultationStyle">
      <h2>Mode de découverte de la grossesse </h2>
      <br></br>
      <Form>
      <div key={`uri-radio`} className="mb-3" onChange={(e)=>{recupRadioMode(e);}}>
      <Form.Check 
        type='radio'
        id={`uriTest`}
        label={`Test Urinaire`}
        value="Test Urinaire"
        name="mode"
      />

<Form.Check 
        type='radio'
        id={`sangTest`}
        label={`Test Sanguin`}
        value="Test Sanguin"
        name="mode"
      />
      <Form.Check 
        type='radio'
        id={`echoRe`}
        label={`Échographie`}
        value="Échographie"
        name="mode"
      />
      <Form.Check 
        type='radio'
        id={`CliRe`}
        label={`Clinique`}
        value="Clinique"
        name="mode"
      />
      </div>
      </Form>

       
           
            </div>
    
  );






  
 
}

export default BlocDecouverte;
