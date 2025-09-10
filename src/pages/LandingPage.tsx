import React from "react";
import Header from "../components/Header/Header";
import TextSection from "../components/TextSection";
import { paragraph } from "../data/paragraph.js"; // array of objects
// import { section } from "../data/section";
import familySelfie from "../assets/familySelfie.jpeg";
import smirkeyNoah from "../assets/smirkeyNoah.jpeg";
import withMomandDad from "../assets/withMomandDad.jpeg";
import sevenMonthsNoah from "../assets/sevenMonthsNoah.jpeg";
import sevenMonths from "../assets/sevenMonths.jpeg";
import staringAtCake from "../assets/staringAtCake.jpeg";
import withMaman from "../assets/withMaman.jpeg";
import withDady from "../assets/withDady.jpeg";
import srawlerNoah from '../assets/srawlerNoah.jpeg'

function LandingPage() {
  return (
    <div className="landingPage">
      <Header />

      <div className="mainContainer">
        <img className="noahImg" src={familySelfie} alt="Noah Janm" />
      </div>

      {/* Render TextSection in order */}
      
      <TextSection
        firstParagraph={paragraph[0].firstParagraph}
        subParagraph={paragraph[0].subParagraph}
      />
      
    

      {/* Example of sectionTwo */}
      <div className="sectionTwo">
        <div className="firstPhoto">
          <img src={smirkeyNoah} alt="Smirkey Noah" />
        </div>
        <div className="photoBackground">
          <img src={withMomandDad} alt="With Mom and Dad" />
        </div>
      </div>
      <TextSection
        firstParagraph={paragraph[1].firstParagraph}
        subParagraph={paragraph[1].subParagraph}
      />

      {/* Video Section */}
      <div className="videoWrapper centered">
        <iframe
          width="80%"
          height="450"
          src="https://www.youtube.com/embed/i2V7C_lLK3g4"
          title="Baby Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <p className="videoSubtitle">
          This is a sweet little message for my baby boy 💙
        </p>
      </div>
      <TextSection
        firstParagraph={paragraph[2].firstParagraph}
        subParagraph={paragraph[2].subParagraph}
      />
      {/* Section Four */}
      <div className="flexSenter sectionFour">
        <div className="verticalCard flexSenter">
          <img src={sevenMonthsNoah} alt="Seven Months Noah" />
          <img src={sevenMonths} alt="Seven Months" />
        </div>
        <div className="singlePic">
          <img src={staringAtCake} alt="Staring at Cake" />
        </div>
       </div>
      <TextSection firstParagraph={paragraph[3].firstParagraph}
      subParagraph={paragraph[3].subParagraph} /> 

      {/* Centered Card */}
  <div className="centeredCardWrapper">
  <div className="centeredCard">
    <img className="img1" src={withMaman} />
    <img className="img2" src={withDady} />
  </div>
</div>

  <div className="finalSection">
    <div className="imgWrapper"><img src={srawlerNoah} alt="StrNoah" /></div>
    <div className="wishWrapper"><p className="wishParagraph">We want our baby to never feel even the tiniest disappointment in his life, nor sense that anything is missing from his heart Our greatest hope is that he grows surrounded by love, guided by kindness, and blessed with opportunities that help him shine. His happiness and fulfillment will always be our greatest purpose..</p></div>
  </div>

    </div>
  );
}

export default LandingPage;
