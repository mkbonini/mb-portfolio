/** @format */
import { useState } from 'react';
import styled from 'styled-components';

const AboutBody = styled.div`
	/* display: block; */
	/* display: flex; */
  /* flex-direction: column */
	justify-content: center;
  margin-top: 14vh;
  margin-bottom: 10vh;
  /* width: 80vw */
  
  #about {
    width: 80vw;
    margin: auto;
   }
	h3 {
			font-family: Raleway;
			font-size: 31px;
			font-weight: 600;
			line-height: 60px;
			text-align: left;
			margin: 0;
		}

    .aboutText {
      font-family: Raleway;
			font-size: 18px;
			font-weight: 400;
			text-align: left;
			margin: 0;
    }
	
  @media screen and (max-width: 600px) {
    
  }
`;

const About = () => {

	return (
		<>
			<AboutBody>
        <div id='about'>
          <h3>A LITTLE ABOUT ME</h3>
          <p className='aboutText'>lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsumlorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsumlorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsumlorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsumlorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsumlorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum</p>
        </div>
			</AboutBody>
		</>
	);
};

export default About;
