import React from 'react'
import rolam from '../assets/rolamkep.png'
import "./rolam.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from "react-icons/io5";
import { FaGithubSquare, FaLinkedin, FaCode } from "react-icons/fa";
import ScrollAnimation from './ScrollAnimation'
import Skills from './Skills'

function Rolam() {

  return (
    <div className='rolam-container' id='rolam' >
      <ScrollAnimation>
      <div className="rolam-content">
        <div className="rolam-text">
          <p>Bemutatkozom</p>
          <h2>Rólam</h2>
          <p>Balogh Dávid vagyok, Junior szoftverfejlesztő. Már fél éve aktívan részt veszek a szakmában. Szívügyem a backend fejlesztés, és kifejezetten élvezem a Java nyelvvel történő programozást.

            Szenvedélyem az új technológiák és programnyelvek felfedezése, ami állandó motivációt jelent a szakmai fejlődésem szempontjából. Az elmúlt időszakban folyamatosan bővítettem tudásomat és készségeimet, mindig törekedve arra, hogy a lehető legjobb minőségű és hatékonyabb szoftvereket hozzam létre.

            Emellett egy másik szenvedélyem a horgászat, amely kiválóan kiegészíti a számítástechnika világát. Ez a hobbi segít megtartani az egyensúlyt az intenzív szoftverfejlesztés közben, és hozzájárul a kreativitásom és a problémamegoldó képességem fejlődéséhez.

            Szakmai tapasztalatommal és elkötelezettségemmel készen állok új kihívásokra a szoftvertervezés és -fejlesztés terén.</p>
          <div className="social">
            <a href="https://github.com/Florex001" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className='github'/>
            </a>
            <a href="https://www.linkedin.com/in/d%C3%A1vid-balogh-646438239/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='linkedin'/>
            </a>
          </div>
        </div>
        <div className="rolam-image">
          <img src={rolam} alt="Balogh Dávid" />
        </div>
      </div>
      </ScrollAnimation>
      <div className="tanulmanyok-content">
        <div className="rolam-text" >
          <p>Végzettségek</p>
          <h2>Tanulmányaim</h2>
        </div>
        <div className="rolam-career">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#5F7ADB', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #5F7ADB' }}
              date="2017 Szeptember - 2021 Június"
              iconStyle={{ background: '#5F7ADB', color: '#fff' }}
              icon={<IoSchool />}
            >
              <h3 className="vertical-timeline-element-title">Irodai informatikus</h3>
              <h4 className="vertical-timeline-element-subtitle">V. István Katolikus Közgazdasági és Informatikai Szakközépiskola, Árpád-házi Szent Margit Ált.isk.ó</h4>
              <p>
                Iskola címe: Kazinczy F. út 12., 3980 Sátoraljaujhely (Magyarország)
                Iskola webhelye: https://www.katolikuskeri.hu/
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2017 Szeptember - 2021 Június"
              contentStyle={{ background: '#A2B2EE', color: '#fff' }}
              iconStyle={{ background: '#5F7ADB', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #A2B2EE' }}
              icon={<IoSchool />}
            >
              <h3 className="vertical-timeline-element-title light">Érettségi</h3>
              <h4 className="vertical-timeline-element-subtitle light">V. István Katolikus Közgazdasági és Informatikai Szakközépiskola, Árpád-házi Szent Margit Ált.isk.ó</h4>
              <p className='light'>
                Iskola címe: Kazinczy F. út 12., 3980 Sátoraljaujhely (Magyarország)
                Iskola webhelye: https://www.katolikuskeri.hu/
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#5F7ADB', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #5F7ADB' }}
              date="2021 Szeptember - 2023 Május"
              iconStyle={{ background: '#5F7ADB', color: '#fff' }}
              icon={<IoSchool />}
            >
              <h3 className="vertical-timeline-element-title">Szoftverfejlsztő és -tesztelő</h3>
              <h4 className="vertical-timeline-element-subtitle">Szent István Katolikus Technikum és Gimnázium</h4>
              <p>
                Iskola címe: Kazinczy F. út 12., 3980 Sátoraljaujhely (Magyarország)
                Iskola webhelye: https://www.katolikuskeri.hu/
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <div className="tanulmanyok-content">
        <div className="rolam-text" >
          <p>Munkahely</p>
          <h2>Tapasztalataim</h2>
        </div>
        <div className="rolam-career">
          <VerticalTimeline>
          <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018. November 03. - 2018. November 21"
                contentStyle={{ background: '#A2B2EE', color: '#fff' }}
                iconStyle={{ background: '#5F7ADB', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A2B2EE' }}
                icon={<FaCode />}
            >
              <h3 className="vertical-timeline-element-title light">3D Modellező</h3>
              <h4 className="vertical-timeline-element-subtitle light">DGM Dynamics, IT Services and IT Consulting</h4>
              <p className='light'>
                Erasmus+
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#5F7ADB', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #5F7ADB' }}
                date="2022. Május 01. - 2022. Május 22."
                iconStyle={{ background: '#5F7ADB', color: '#fff' }}
                icon={<FaCode />}
            >
              <h3 className="vertical-timeline-element-title">Adatbázis kezelő / Web Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">DGM Dynamics, IT Services and IT Consulting</h4>
              <p>
                Erasmus+
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2023. Július 01. -"
                contentStyle={{ background: '#A2B2EE', color: '#fff' }}
                iconStyle={{ background: '#5F7ADB', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #A2B2EE' }}
                icon={<FaCode />}
            >
              <h3 className="vertical-timeline-element-title light">Szoftverfejlesztő</h3>
              <h4 className="vertical-timeline-element-subtitle light">Programont</h4>
              <p className='light'>
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <div className="kepessegek-content">
        <div className="rolam-text">
          <p>Technológiák</p>
          <h2>Képességeim</h2>
        </div>
        <ScrollAnimation>
        <div className="rolam-skills">
          <Skills/>
        </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Rolam