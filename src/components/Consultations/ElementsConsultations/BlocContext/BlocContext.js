import React , {useState,useEffect} from "react";

import {Form} from "react-bootstrap";




import "./BlocContext.css";


function BlocContext(props) {

    const [currentContext, setCurrentContext] = useState({
        titre : "Contexte biopsychosocial favorable",
        value : "",
        reponse : 0
      });


      const recupRadioContexte = (e) => {
        let reponse = {
          titre: "Contexte Biopsychosocial favorable : ",
          value: e.target.value,
          reponse : 1
        };
        setCurrentContext(reponse);
      };


      const warningContexte = () => {
        return (
          <p className="Red">
            Consultation psycho-sociale à proposer ! 
      
      
          </p>
        )
      };
      
      
      const [ blocWarningContext, setBlocWarningContexte] = useState(()=>warningContexte());
      
      const afficheWarningContexte = () => {
        setCurrentWarningContexte(blocWarningContext);
      }
      
      
      
      
      const [currentWarningContexte, setCurrentWarningContexte] = useState("");
      
      
      
      
    




  return (
    <div className="BlocConsultationStyle">
      <h2>Contexte biopsychosocial favorable :</h2>


        <Form>
      <div key={`psyCho-radio`} className="mb-3" onChange={(e)=>{recupRadioContexte(e);}}>
      <Form.Check 
        type='radio'
        id={`psyChoOui`}
        label={`Oui`}
        value="Oui"
        name="contexte"
      />

<Form.Check 
        type='radio'
        id={`psyChoNon`}
        label={`Non`}
        value="Non"
        name="contexte"
        onClick={afficheWarningContexte}
      />
      </div>
      </Form>
    <div>{currentWarningContexte}</div>




      





    
      <br></br>

    



           
            </div>
    
  );






  
 
}

export default BlocContext;
