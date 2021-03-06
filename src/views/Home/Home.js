import React, { useState, useEffect, useRef } from "react";

// import iclic components
import Footer from "@components/Footer";
import Header from "@components/Header";
import MidSection from "@components/MidSection";
import APropos from "@components/APropos";
import MentionL from "@components/MentionL";
import Contact from "@components/Contact";
import SourceLien from "@components/SourceLien";
import SourceDocs from "@components/SourceDocs";
import Covid from "@components/Covid";


function Home() {
  useEffect(() => {
    window.scrollTo(0,0);
 }, [])


 













  const [currentMid, setCurrentMid] = useState();

 




 ////// Liste d'objets contenant les élements affichés sur la midSection

 const [listeElmentMid, setListeElementMid] = useState(
   [
    {
      midSection: "MidSection",
      id: 0,
      objet: MidSection,
      
      
    }
   ]
 )

 ///////////////////////////


  const afficheAPropos = () => {
    setCurrentMid(APropos);
  };

  const afficheMention = () => {
    setCurrentMid(MentionL);
  };

  const afficheContact = () => {
    setCurrentMid(Contact);
  };

  const afficheSourceLien = () => {
    setCurrentMid(SourceLien);
  };

  const afficheSourceDocs = () => {
    setCurrentMid(SourceDocs);
  };

  const afficheCovid = () => {
    setCurrentMid(Covid);
  }

  return (
    <React.Fragment>
      
      <Header
        onPropos={afficheAPropos}
        onMention={afficheMention}
        onContact={afficheContact}
        onSource={afficheSourceLien}
        onDocs={afficheSourceDocs}
        onCovid={afficheCovid}
      />
            <div className="MargeHoriPetite"></div>






{listeElmentMid.map((objet) => {
          return (
            <objet.objet
            key={objet.id}
            ></objet.objet>
          );
        })}









      <div className="MargeHori"></div>

      <Footer className="FooterTest" />
    </React.Fragment>
  );
}

export default Home;
