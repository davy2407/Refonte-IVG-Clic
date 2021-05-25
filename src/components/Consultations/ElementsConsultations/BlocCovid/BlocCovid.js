import React , {useState,useEffect} from "react";

import { Button } from "react-bootstrap";



import "./BlocCovid.css";
import OuiCovid from "@components/textApp/OuiCovid";


function BlocCovid(props) {


    const [txtCovid, setTxtCovid] = useState(OuiCovid);
    const [currentTxt,setCurrentTxt]= useState("");

    const afficheTxt = () => {
        let objetAAjouter = txtCovid;
        setCurrentTxt(objetAAjouter);
    }

 


  return (
    <div className="BlocConsultationStyle">
            <h2>Consultation faite dans le cadre des dispositions du Covid valable jusqu'à la fin de l'état d'urgence sanitaire « (téléconsultation) » :</h2>
            <Button variant="danger" onClick={()=>{
                afficheTxt();
            }}>Oui</Button>
            <br></br>
            <div>{currentTxt}</div>
            <br></br>
            {/* <Button variant="info" className="BouttonSuivant" onClick={()=>{
               props.animation();
              props.suite(props.keys);
             
            }}>Suivant</Button> */}
                  <Button variant="info" className="BouttonSuivant" onClick={()=>{
                props.suite(props.keys);
             
            }}>Suivant</Button>

            </div>
    
  );






  
 
}

export default BlocCovid;
