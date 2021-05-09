import React , {useState,useEffect} from "react";

import {Form} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocConsultationPsy.css";


function BlocConsultationPsy(props) {

    const [ currentConsultation, setCurrentConsultation] = useState({
        titre : "Consultation psycho-sociale  obligatoirement proposée ",
        value : "",
        reponse : 0
      });


      const recupRadioPsycho = (e) => {
        let reponse = {
          titre : "Consultation psycho-sociale proposée : ",
          value : e.target.value,
          reponse : 1
        };
        setCurrentConsultation(reponse);
      }



      const returnInfo = () => {
        return (
          <div className="BulleInfo">
            <p>
            Elle n’est pas obligatoire pour les personnes majeures. Mais obligation légale de la proposer.  Délai de 48h de réflexion avant de signer le consentement après la consultation psycho-sociale.
    
            </p>
            <br></br>
            <p>Elle peut avoir lieu : </p>
            <br></br>
            <ul>
              <li>
                dans un établissement d’information, de consultation ou de conseil
                familial 
              </li>
              <li>dans un centre de planification ou d’éducation familiale</li>
              <li>dans un service social ou un autre organisme agréé</li>
            </ul>
            <br></br>
          </div>
        );
      };
    
      const [txtPsycho, setTxtPsycho] = useState(() => returnInfo());
    
      const [currentInfoPsycho, setCurrentInfoPsycho] = useState("");
    
      const affichageTxtPsycho = () => {
        let txtAEnlever = currentInfoPsycho;
        let txtAAfficher = txtPsycho;
        setCurrentInfoPsycho(txtAAfficher);
        setTxtPsycho(txtAEnlever);
      };
    
      const [logoAffichePsycho, setLogoAffichePsycho] = useState(LightOff);
    
      const [logoNonAffichePsycho, setLogoNonAffichePsycho] = useState(LightOn);
    
      const changementCouleurSVGPsycho = () => {
        let currentLampe = logoAffichePsycho;
        let currentCache = logoNonAffichePsycho;
        setLogoNonAffichePsycho(currentLampe);
        setLogoAffichePsycho(currentCache);
        affichageTxtPsycho();
      };        



  return (
    <div className="BlocConsultationStyle">
      <h2>Consultation psycho-sociale proposée</h2>
      <br></br>
      <Form>
      <div key={`conPsy-radio`} className="mb-3" onChange={(e)=>{recupRadioPsycho(e);}}>
      <Form.Check 
        type='radio'
        id={`conPsyOui`}
        label={`Oui`}
        value="Oui"
        name="PsychoSo"
      />

<Form.Check 
        type='radio'
        id={`conPsyNon`}
        label={`Non`}
        value="Non"
        name="PsychoSo"
      />
      </div>
      </Form>

      <br></br>
      <input
        onClick={changementCouleurSVGPsycho}
        className="Lampe"
        type="image"
        src={logoAffichePsycho}
      />
      <br></br>
      <div className="ContainerBulle">{currentInfoPsycho}</div>
      <br></br>
            </div>
    
  );


}

export default BlocConsultationPsy;
