import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";





import "./BlocAcc.css";


function BlocAcc(props) {

    const [ currentRep, setCurrentRep] =useState({
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
        setCurrentRep(reponse);

        
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
        props.ajoute(currentRep);
        props.suite(props.keys);
             
            }}>Suivant</Button>


           
            </div>
    
  );






  
 
}

export default BlocAcc;
