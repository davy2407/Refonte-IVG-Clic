import React , {useState,useEffect} from "react";




import "./ConsultationModel.css";


function ConsultationModel(props) {

 
  const [listeElCon,setListeElCon] = useState(props.onElCons.listeElementsConsulations)
  console.log(listeElCon);
  const [currentBloc, setCurrentBloc] = useState([listeElCon[0]])
  
 


  const afficheSuite = (iden) => {
    let id = iden;
    let newId = id + 1;
    setCurrentBloc([listeElCon[newId]]);
    
  }


 

  return (
      <div className="Consultation">
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
        </div>
          
         

      </div>
    
  );






  
 
}

export default ConsultationModel;
