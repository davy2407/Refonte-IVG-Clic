import React , {useState,useEffect} from "react";

import {Form,Button} from "react-bootstrap";
import LightOn from "@assets/images/lightOn.svg";
import LightOff from "@assets/images/lightOff.svg";




import "./BlocTabac.css";


function BlocTabac(props) {

    const [currentTabac, setCurrentTabac]= useState({
        titre : "Tabac ",
        value : "",
        reponse : 0
      });
    
      const [ currentNbTabac, setCurrentNbTabac] = useState({
        titre : "Paquet/Année",
        value : "",
        reponse : 1
      });
    

    const recupRadioTabac = (e) => {
        let reponse = {
          titre: "Tabac : ",
          value: e.target.value,
          reponse : 1
        };
        setCurrentTabac(reponse);
        props.ajoute(reponse);
        if (e.target.value == "Oui") {
          setCurrentNbTabac(
            {
              titre : "Paquet/Année",
              value : "",
              reponse : 0
            }
          );
          
        } else {
          setCurrentNbTabac(
            {
              titre : "",
              value : "",
              reponse : 1
            }
          );
        }
        
      };


      const [nouvelleRecherchePaquet, setNouvelleRecherchePaquet] = useState()
 

      const handleChangePaquet = event => {
        setNouvelleRecherchePaquet(event.currentTarget.value);
      };
    const handleSubmitPaquet = event => {
      event.preventDefault();
      let reponse = {
        titre : "Nombre Paquet : ",
        value : event.currentTarget.value,
        reponse : 1
      };
     setCurrentNbTabac(reponse);
     props.ajoute(reponse);

      
    };
    
    

      const txtWarningContra = () => {
        return (
          <p className="Red">
            Attention contraception !
          </p>
        )
      };
      
      const [blocWarningContra, setBlocWarningContra] = useState(()=> txtWarningContra());
      
      
      const [currentWarningContra, setCurrentWarningContra] = useState("");
      
      
      const afficheWarningContra = () => {
        setCurrentWarningContra(blocWarningContra);
      };

      const submitHandler = (e) => {
        e.preventDefault();
    };


    const returnInfoTabac = () => {
        return (
          <div className="BulleInfo">
            <p>
             Le calcul du tabac en paquet/année peut vous être calculé sur : 
            </p>
    
            <p>
              <a href="http://medicalcul.free.fr/packyear.html" target="_blank" rel="noreferrer noopener" className="Bold" >
              http://medicalcul.free.fr/packyear.html.
              </a>
            </p>
    
            <p>
            1 paquet-année = 1 paquet de cigarette (20 cigarettes) par jour pendant 1 an.
            </p>
    
    
           
          </div>
        );
      };
    
      const [txtTabac, setTxtTabac] = useState(() => returnInfoTabac());
    
      const [currentInfoTabac, setCurrentInfoTabac] = useState("");
    
      const affichageTxtTabac = () => {
        let txtAEnlever = currentInfoTabac;
        let txtAAfficher = txtTabac;
        setCurrentInfoTabac(txtAAfficher);
        setTxtTabac(txtAEnlever);
      };
    
      const [logoAfficheTabac, setLogoAfficheTabac] = useState(LightOff);
    
      const [logoNonAfficheTabac, setLogoNonAfficheTabac] = useState(LightOn);
    
      const changementCouleurSVGTabac = () => {
        let currentLampe = logoAfficheTabac;
        let currentCache = logoNonAfficheTabac;
        setLogoNonAfficheTabac(currentLampe);
        setLogoAfficheTabac(currentCache);
        affichageTxtTabac();
      };
    

    
    
      
      
    

  return (
    <div className="BlocConsultationStyle">
<h2>Tabac :</h2>
      <br></br>
      <Form>
      <div key={`tabac-radio`} className="mb-3" onChange={(e)=>{recupRadioTabac(e);}}>
      <Form.Check 
        type='radio'
        id={`tabacOui`}
        label={`Oui`}
        value="Oui"
        name="Tabac"
        onClick={afficheWarningContra}
      />

<Form.Check 
        type='radio'
        id={`tabacNon`}
        label={`Non`}
        value="Non"
        name="Tabac"
        
      />

      </div>
      </Form>
      <div>{currentWarningContra}</div>


      <br></br>
      
      {/* <input type="text" nom="nbPAquet" id="nbPAquet" onChange={(e)=>{recupNombre(e);}}></input> */}
      <form  onSubmit={(e)=>{
        
        submitHandler(e);
      
     }} >
            <input
                
                value={nouvelleRecherchePaquet}
                onChange={handleChangePaquet}
                type="text"
                placeholder="Paquet/année"
            />
            <Button   value={nouvelleRecherchePaquet} variant="danger" onClick={(e)=> {
              handleSubmitPaquet(e);
            }}>Confirmer</Button>
        </form>
        <input
        onClick={changementCouleurSVGTabac}
        className="Lampe"
        type="image"
        src={logoAfficheTabac}
      />
      <br></br>
      <div className="ContainerBulle">{currentInfoTabac}</div>      </div>
    
  );


}

export default BlocTabac;
