import React, {  useEffect, useState } from "react";
import "./MidSection.css";

// import AppCore from "@components/AppCore";
import QuestionStart from "@components/QuestionStart";
import TxtStart from "@components/textApp/TextAcceuil";
import TextNonPro from "@components/textApp/NonPro";
import QuestionMetier from "@components/Questions/QuestionModal/QuestionMetier";
import QuestionConvention from "@components/Questions/QuestionModal/QuestionConvention";
import QuestionConsultationConv from "@components/Questions/QuestionModal/QuestionConsultationConv";
import QuestionMajeurMineur from "@components/Questions/QuestionModal/QuestionMajeurMineur";
import QuestionAnonyme from "@components/Questions/QuestionModal/QuestionAnonyme";
import QuestionPreaNoConvNoAtt from "@components/Questions/QuestionModal/QuestionPreaNoConvNoAtt";
import QuestionConsulationNoConv from "@components/Questions/QuestionModal/QuestionConsulationNoConv";
import NoConvNoConsultation from "@components/Reponses/NoConvNoConsultation";
import QuestionAttestationFormation from "@components/Questions/QuestionModal/QuestionAttestationFormation";
import NoConsultationNoAttInfo from "@components/Reponses/NoConsultationNoAttInfo";








function MidSection(props) {

  useEffect(() => {
    window.scrollTo(0,0);
 }, [])













 const [toggle, setToggle] = useState(false)


 const handleClick = () => {
  setToggle(!toggle)
}









  

 ///// liste d'objet contenant les texte de démarrages à afficher




 const [ listeText, setListeText] = useState(
   [
     {
       name : "TextAcceuil",
       objet : TxtStart,
       id : 0,
       toggle : toggle
     },

     {
       name : "Texte Non Pros",
       objet : TextNonPro,
       id : 1,
       toggle : toggle

     }

   ]

  )


  ////////////////////////////////////////

  //// liste contenant le texte affiché (1 seul objet)
  const [ currentText, setCurrentText] = useState(
    [listeText[0]]
  )

  ////////////////////////////////////////
   /// fonction gérant l'affichage des textes acceuils et non professionel



   const changeTexteNonPro = () => {
    let objetAAjouter =  listeText[1];


    setCurrentText([objetAAjouter]);
  };


  ///////////////////////////

  ////// affiche texte acceuil
  const changeTexteAcc = () => {
    let objetAAjouter =  listeText[0];


    setCurrentText([objetAAjouter]);
  };

  /////////////////////////


  ///// fonction gérant l'affichage question métier

  const changeQuestionMetier = () => {
    let objetAAjouter =  listeQuestionPre[1];


    setCurrentQuestionPre([objetAAjouter]);
  };






  //////////////////////////////////

  ///// fonction affiche question convention 
  const changeQuestionConv = () => {
    let objetAAjouter =  listeQuestionPre[2];


    setCurrentQuestionPre([objetAAjouter]);
  };


  //////////////////////////////


  /////// affiche la question consultation quand conventionné (5 consultation)

  const changeQuestionConsultationConv = () => {
    let objetAAjouter =  listeQuestionPre[3];


    setCurrentQuestionPre([objetAAjouter]);
  };

  ////////////////////////////////////////////


  /////////// fonction affiche question majeure ou mineure
  const changeQuestionMajMin = () => {
    let objetAAjouter =  listeQuestionPre[4];


    setCurrentQuestionPre([objetAAjouter]);
  };


  //////////////////////////////////////


  /////// fonction affiche question anonyme
  const changeQuestionAno = () => {
    let objetAAjouter =  listeQuestionPre[5];


    setCurrentQuestionPre([objetAAjouter]);
  };


  /////////////////////////


  /////// affiche question prélable à ivg sans convention ni attestation
  const changeQuestionPreNoConvNoAtt = () => {
    let objetAAjouter =  listeQuestionPre[6];


    setCurrentQuestionPre([objetAAjouter]);
  };

  /////////////////////////////


  /////fonction affiche question consultation sans convention ( 2 consultations proposées)

  const changeQuestionConsulationNoConv = () => {
    let objetAAjouter =  listeQuestionPre[7];


    setCurrentQuestionPre([objetAAjouter]);
  };


  //////////////////

  //// fonction affiche la reponse si pas de convention ni consultation demandée 
  const changeReponseNoConvNoConsult = () => {
    let objetAAjouter =  listeQuestionPre[8];


    setCurrentQuestionPre([objetAAjouter]);
  };
  ///////////////////////


  ////// fonction affichant la question attestation de formation 
  const changeQuestionAttestation = () => {
    let objetAAjouter =  listeQuestionPre[9];


    setCurrentQuestionPre([objetAAjouter]);
  };
  //////////////////////////////////


  ///// fonction qui échange la reponse envoyé si pas de consultation demandée , sans convention ni attestation
  const changeReponseInfo = () => {
    let liste = listeQuestionPre;
    liste[8]= liste[10];
    setListeQuestionPre(liste);
  }
  ///////////////////////////////////



  /////// fonctionaffiche la question start 
  const afficheStart = () => {
    let objetAAjouter =  listeQuestionPre[0];


    setCurrentQuestionPre([objetAAjouter]);

  }
  ///////////////


  ////// fonction recup la consulation demandée + state affilié
  const recupConsult = (event) => {
    let id = event.target.id;
    setConsultationSelect(id);
  }



 const [ consultationSelect, setConsultationSelect] = useState();
 /////////////////////////

 ////////// fonction recup si patiente majeure ou mineure + satte affilié
 const recupMajMin = (event) => {
  let id = event.target.id;
  setMajMinSelect(id);
}

const [ majMinSelect, setMajMinSelect] = useState();

/////////////////////////////

 ////////// fonction recup si patiente anonyme ou non + state affilié
 const recupAno = (event) => {
  let id = event.target.id;
  setAnoSelect(id);
  
}

const [ AnoSelect, setAnoSelect] = useState();

/////////////////////////////



/////////// fonction recup id est selectionne consulation à afficher 

const selectConsultation = (event, idCons, idMaj) => {
  let idConsultation = idCons;
  let idMajMin = idMaj;
  let idAno = event.target.id;
  console.log(idConsultation,"+",idMajMin,"+",idAno)

  if (idConsultation=="1"&&idMajMin=="1"&&idAno=="1") {
    console.log("PREMIERE CONSULTATION");
    
  }
}
////////////////////

  //// liste contenant les question pré consultation (ou reponses si pas de consultations)


  const [ listeQuestionPre, setListeQuestionPre] = useState(
    [
      {
        name : "Question Start",
        id : 0, 
        objet : QuestionStart,
        fonction : {
          nonPro : changeTexteNonPro,
          pro : changeQuestionMetier,
          proTxt : changeTexteAcc
        },
        toggle : toggle

      },
      {
        name : "Question Métier",
        id : 1,
        objet : QuestionMetier,
        toggle : toggle,
        fonction : {
          animation : handleClick,
          convention : changeQuestionConv,
          demandeAttestation : changeQuestionAttestation,
          retour : afficheStart
        }

      },
      {
        name : "Question Convention",
        id : 2,
        objet : QuestionConvention,
        toggle : toggle,
        fonction : {
          consulationOui : changeQuestionConsultationConv,
          conventionNOn : changeQuestionPreNoConvNoAtt,
          retour : changeQuestionMetier
        }

      },
      {
        name : "Question Consultation Conventionné",
        id : 3,
        objet : QuestionConsultationConv,
        toggle : toggle,
        fonction : {
          questionMajMin : changeQuestionMajMin,
          recupId : recupConsult
        }
      },
      {
        name : "Question Majeure Mineure",
        id : 4,
        objet : QuestionMajeurMineur,
        toggle : toggle,
        fonction : {
          questionAno : changeQuestionAno,
          recupId : recupMajMin
        }
      },
      {
        name : "Question Anonyme/Non Anonyme",
        id : 5,
        objet : QuestionAnonyme,
        toggle : toggle,
        fonction : {
          recupId : recupAno,
          selection : selectConsultation
        }
      },
      {
        name : "Question préalable à l'ivg sans attestation ni convention",
        id : 6,
        objet : QuestionPreaNoConvNoAtt,
        toggle : toggle,
        fonction : {
          afficheConsultationNoConv : changeQuestionConsulationNoConv,
          afficheTest : changeReponseNoConvNoConsult

        }
      },
      {
        name : "Question Consultation Non Conventionné",
        id : 7,
        objet : QuestionConsulationNoConv,
        toggle : toggle,
        fonction : {
          questionMajMin : changeQuestionMajMin,
          recupId : recupConsult
        }
      },
      {
        name : "Si pas de convention ni consultation",
        id : 8,
        objet : NoConvNoConsultation,
        toggle : toggle
      },
      {
        name : "Question attestation formation",
        id : 9,
        objet : QuestionAttestationFormation,
        toggle : toggle,
        fonction : {
          convention : changeQuestionConv,
          conventionNOn : changeQuestionPreNoConvNoAtt,
          changeReponseFin : changeReponseInfo


        }
      },
      {
        name : "Si pas d'attestation, convention ni consultation",
        id : 10,
        objet : NoConsultationNoAttInfo,
        toggle : toggle
      }

    ]
  )






  /////////////////




  ////// state contenant la question (active) affichée à l'écran


  const [currentQuestionPre, setCurrentQuestionPre] = useState(
    [listeQuestionPre[0]]
  )

  ////////////////////////



 








  return (
    <div className="Mid">
    
      
      <div className="BorderApp"></div>
            {/* <div className="Marge"></div> */}
            <div className="Core">
              {/* <QuestionStart 
                onNonProfessionel={changeTexteNonPro}
                
              >

              </QuestionStart> */}
              {currentQuestionPre.map((objet) => {
                return (
                  <objet.objet
                  key={objet.id}
                  onFonction={objet.fonction}
                  onIdCons={consultationSelect}
                  onIdMaj={majMinSelect}>

                  </objet.objet>
                )
              })}
              
              

              <div className="ContainerTextes">
              {currentText.map((objet) => {
          return (
            <objet.objet 
            key = {objet.id}
            toggle = {toggle}
              
            ></objet.objet>
          );
        })}

              </div>
              <div className="CoreInfo"></div>
            </div>

      
      
      {/* <div className="Marge"></div> */}
      <div className="BorderApp"></div>
      

    </div>
  );
}

export default MidSection;
