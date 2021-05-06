import React , {useState,useEffect} from "react";

import { Button } from "react-bootstrap";
import {Form} from "react-bootstrap";




import "./BlocAcc.css";


function BlocAcc(props) {

    const [ currentAcc, setCurrentAcc] =useState({
        titre : "Personne accompagnante ",
        value : "",
        reponse : 0
      });
    


    const recupRadioAcc = (e) => {
        let reponse = {
          titre: "Accompagnant(e) : ",
          value: e.target.value,
          reponse : 1
        };
        setCurrentAcc(reponse);
        
      }
    




  return (
    <div className="BlocConsultationStyle">
        <h2>
        Personne accompagnante
        </h2>


        <label>
      <Form>
      <div key={`acc-radio`} className="mb-3" onChange={(e)=>{recupRadioAcc(e);}}>
      <Form.Check 
        type='radio'
        id={`accOui`}
        label={`Oui`}
        value="Oui"
        name="accompagant"
      />

<Form.Check 
        type='radio'
        id={`accNon`}
        label={`Non`}
        value="Non"
        name="accompagant"
      />
      </div>
      </Form>
        
      </label>



            <Button variant="info" className="BouttonSuivant" onClick={()=>{
              props.suite(props.keys);
            }}>Suivant</Button>
            </div>
    
  );






  
 
}

export default BlocAcc;
