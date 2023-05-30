import React from 'react';
import { Container } from 'react-bootstrap';
import Typed from 'react-typed';
import profileImage from '../../assets/images/DSC_0682 - Copy.jpg';

function About() {
    return(
        <>
        <section id="about" className="about">
            <Container className='row upper-container'> 
                <div className="image-container">
                    <img className="col-lg-6 col-md-12 m-auto profile-pic" src={profileImage} alt="Jackson McCarthy" />
                    <h1 className="intro-title">Hello, I'm</h1>
                    <h1 className="intro-name">Jackson McCarthy</h1>
                </div>
                <div className='text-slider-div'>
                    <span className="intro-text-slider">
                        <Typed
                        strings={[
                            "Full Stack Web Developer",
                            
                        ]}
                        typeSpeed={50}
                
                        />
                    </span>
                </div>
            </Container>
            <div className="inner container">
                <div className="row">
                    <div className="about-description col-lg-6 col-md-12">
                        <p>
                            I am a Full Stack Developer based out of Central CT. 
                        </p>
                        <p>
                            Since I was young I've always been fascinated with programming and techology.
                            At the start of the pandemic I made a huge life decision to leave my full time career and switch paths to focus on coding. I recently received my certification as a full-stack MERN Web Developer from the UCONN School of Engineering .
                        </p>
                        <p>
                            My other pursuits have always included a life long occupation with mathematics and it's implementation in order to create and discover unique and fascinating truths. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}



export default About;