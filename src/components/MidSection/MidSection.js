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
import ConsultationModel from "@components/Consultations/ConsultationModel";
import PremiereConsultationMajAno from "@components/Consultations/PremiereConsultationMajAno";
import BlocCovid from "@components/Consultations/ElementsConsultations/BlocCovid";
import BlocDDR from "@components/Consultations/ElementsConsultations/BlocDDR";
import BlocEcho from "@components/Consultations/ElementsConsultations/BlocEcho";
import BlocAcc from "@components/Consultations/ElementsConsultations/BlocAcc";



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
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[0].elementsCon;
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);    
  }
  else if (idConsultation=="1"&&idMajMin=="2"&&idAno=="1"||idConsultation=="1"&&idMajMin=="2"&&idAno=="2") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[1].elementsCon;
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
  }
  else if (idConsultation=="1"&&idMajMin=="1"&&idAno=="2"||idConsultation=="2"&&idMajMin=="1"&&idAno=="2"||idConsultation=="3"&&idMajMin=="1"&&idAno=="2"||idConsultation=="4"&&idMajMin=="1"&&idAno=="2"||idConsultation=="5"&&idMajMin=="1"&&idAno=="2") {
    let objetAAjouter =  listeQuestionPre[12];
    setCurrentQuestionPre([objetAAjouter]);
  }
  else if (idConsultation=="2"&&idMajMin=="1"&&idAno=="1") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[2];
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
  }
  else if (idConsultation=="2"&&idMajMin=="2"&&idAno=="1"||idConsultation=="2"&&idMajMin=="2"&&idAno=="2") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[3];
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
  }
  else if (idConsultation=="3"&&idMajMin=="1"&&idAno=="1") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[4];
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
  }
  else if (idConsultation=="3"&&idMajMin=="2"&&idAno=="1"||idConsultation=="3"&&idMajMin=="2"&&idAno=="2") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[5];
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
  }
  else if (idConsultation=="4"&&idMajMin=="1"&&idAno=="1") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[6];
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
  }
  else if (idConsultation=="4"&&idMajMin=="2"&&idAno=="1"||idConsultation=="4"&&idMajMin=="2"&&idAno=="2") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[7];
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
  }
  else if (idConsultation=="5"&&idMajMin=="1"&&idAno=="1") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[8];
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
  }
  else if (idConsultation=="5"&&idMajMin=="2"&&idAno=="1"||idConsultation=="5"&&idMajMin=="2"&&idAno=="2") {
    let objetAAjouter =  listeQuestionPre[11];
    let elementAAjouter = listeElConsultation[9];
    setCurrentElCons(elementAAjouter);
    setCurrentQuestionPre([objetAAjouter]);
  }
  
}
////////////////////

  //// liste contenant les question pré consultation (ou reponses si pas de consultations)
///  la liste contient aussi les élements consulations


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
      },
      {
        name : "Template Consultation",
        id : 11,
        objet : ConsultationModel
      },
      {
        name : "Prémiere consultation majeure anonyme",
        id : 12,
        objet : PremiereConsultationMajAno
      }

    ]
  )


  /////////////////

  //// liste contenant les élements affichés dans la consultations et state actif

  const [ currentElCons, setCurrentElCons] = useState();

  const [ listeElConsultation, setListeElConsulation] =useState(
    [
      {
        id : 0,
        elementsCon : {
          name : "Première consultation majeure",
          titre : "Première consultation préalable/Premier contact médical Majeure",
          listeElementsConsulations : [
            {
              objet : BlocCovid,
              id : 0
            },
            {
              objet : BlocDDR,
              id : 1
            },
            {
              objet : BlocEcho,
              id : 2
            },
            {
              objet : BlocAcc,
              id : 3
            }
          ]
        }
      },
      {
        id : 1,
        elementsCon : {
          name : "Première consultation mineure",
          trois : "3333",
          quatre : "4444",
          deuxieme : "deuxieme"
        }
      },
      {
        id : 2,
        elementsCon : {
          name : "Deuxième consultation majeure"
          
        }
      },
      {
        id : 3,
        elementsCon : {
          name : "Deuxième consultation mineure"
          
        }
      },
      {
        id : 4,
        elementsCon : {
          name : "Première prise médicamenteuse majeure"
          
        }
      },
      {
        id : 5,
        elementsCon : {
          name : "Première prise médicamenteuse mineure"
          
        }
      },
      {
        id : 6,
        elementsCon : {
          name : "Deuxième prise médicamenteuse majeure"
          
        }
      },
      {
        id : 7,
        elementsCon : {
          name : "Deuxième prise médicamenteuse mineure"
          
        }
      },
      {
        id : 8,
        elementsCon : {
          name : "Troisième temps/ consultation de suivie majeure"
          
        }
      },
      {
        id : 9,
        elementsCon : {
          name : "Troisième temps/ consultation de suivie mineure"
          
        }
      }
    ]
  )
  /////////////

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
                  onIdMaj={majMinSelect}
                  onElCons={currentElCons}>

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
