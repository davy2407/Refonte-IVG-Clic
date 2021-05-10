import React , {useState,useEffect} from "react";

import {Form} from "react-bootstrap";
import GuideIVG from "@assets/pdf/GuideIvgPatiente.pdf";
import newPdfIcon from "@assets/images/PDFicon.svg";






import "./BlocGuideIVG.css";


function BlocGuideIVG(props) {

    const [currentDossier, setCurrentDossier] = useState({
        titre : "Dossier guide IVG remis ",
        value : "",
        reponse : 0
      });
    
    const [ classIcon, setClassIcon] = useState("iconPDFNew");

    const [ hoverIcon, setHoverIcon] = useState("iconPDFNewHover");

    const [ globalClassIcon, setGlobalCassIcon] = useState(classIcon);


    


      const recupRadioGuide = (e) => {
        let reponse = {
          titre : "Contexte de l’IVG évoqués :",
          value : e.target.value,
          reponse : 1
        };
        setCurrentDossier(reponse);
        props.ajoute(reponse);

      }
        
    

  return (
    <div className="BlocConsultationStyle">
             <h2>Dossier guide IVG remis :</h2>
      <Form>
      <div key={`guide-radio`} className="mb-3" onChange={(e)=>{recupRadioGuide(e);}}>
      <Form.Check 
        type='radio'
        id={`guideOui`}
        label={`Oui`}
        value="Oui"
        name="guideIVG"
      />

<Form.Check 
        type='radio'
        id={`guideNon`}
        label={`Non`}
        value="Non"
        name="guideIVG"
      />
      </div>
      </Form>


      <br></br>
      
      <br></br>
      <div className="docContainer">
      <p> 
      <a className="NewDocContainer"  href={GuideIVG} target="_blank">
      <input
        onMouseEnter={()=>{
          setGlobalCassIcon(hoverIcon);
          
        }}
        onMouseOut={()=>{
          setGlobalCassIcon(classIcon);
        }}
        className={globalClassIcon}
        type="image"
        src={newPdfIcon}
      />
        PDF Guide IVG
      </a>
          </p>

      </div>

      </div>


    
  );






  
 
}

export default BlocGuideIVG;
