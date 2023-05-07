import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
  

    return (
      <section className="banner" id="home">
       <Container>
             <Row className="align-items-center">    
                <Col xs={12} md={6} xl={7} >
                  <span className="tagline" >Wolcome to my portfolio</span>
                     <h1> {`Hi I'm Joel Alejandro`} <span className="wrap">{Text}</span> </h1>
                    <p>I'm a Full Stack Web Developer , I'm skilled in Front End and Back End , I'm able to develop responsive websites</p>
                    <button onClick={()=> console.log('connetc')} > Let's connect<ArrowRightCircle size={25}/> </button>
                </Col>
                <Col xs={12} md={6} xl={5} >
                 <img src={headerImg} alt="Header image" />  
                </Col>
             </Row>
        </Container>

      </section>  
    )
    }
