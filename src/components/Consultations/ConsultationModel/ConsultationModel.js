import React , {useState,useEffect} from "react";

import { Button } from "react-bootstrap";



import "./ConsultationModel.css";


function ConsultationModel(props) {

  



 
  const [listeElCon,setListeElCon] = useState(props.onElCons.listeElementsConsulations)
  const [currentBloc, setCurrentBloc] = useState([listeElCon[0]])
  
 


  const afficheSuite = (iden) => {
    let id = iden;
    let newId = id + 1;
    setCurrentBloc([listeElCon[newId]]);
    
  }



 

  return (
      <div  
            
            className="Consultation">
        <h1>{props.onElCons.titre}</h1>

        <br></br>
        <div>
        {currentBloc.map((objet) => {
          return (
            <objet.objet 
            keys = {objet.id}
            suite = {afficheSuite}
              
            ></objet.objet>
          );
        })}

<Button variant="info" className="BouttonSuivant" onClick={()=>{
                props.onFonction.animation();
                afficheSuite(currentBloc[0].id);
             
            }}>Suivant</Button>
        </div>
          
         

      </div>
    
  );






  
 
}

export default ConsultationModel;
