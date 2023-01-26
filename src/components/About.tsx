/** @format */
import { useState, useRef } from 'react';
import styled from 'styled-components';

const AboutBody = styled.div`
	justify-content: center;
  margin-top: 14vh;
  width: 80vw;
  margin: auto;
	h3 {
			font-family: Raleway;
			font-size: 31px;
			font-weight: 600;
			line-height: 60px;
			text-align: left;
			margin: 0;
		}

    .aboutText {
      font-family: 'Open Sans';
			font-size: 20px;
      line-height: 35px;
			font-weight: 400;
			text-align: left;
			margin: 0;
    }
	
  @media screen and (max-width: 600px) {
    margin-top: 10vh;
    width: 90vw;
    h3 {
      font-size: 25px;
    }
    .aboutText {
      font-size: 16px;
      line-height: 25px;
    }
  }
`;

const About = () => {

	return (
		<>
			<AboutBody>
        <div id='about'>
          <h3>A LITTLE ABOUT ME</h3>
          <p className='aboutText'>Full stack software engineer with a passion for creative problem solving. My background in mechanical engineering and manufacturing contributed to my abilities to build interesting projects and work well on a team.</p>
          <br/>
          <p className='aboutText'>My technical experience includes Ruby on Rails, JavaScript, HTML/CSS/SCSS, React, Python, SQL and Postgres. If I am not at my desk coding or gaming you will probably find me outside.  I am living in Colorado so I am constantly called by the Rocky Mountains, speaking of I think I heard something …</p>
        </div>
			</AboutBody>
		</>
	);
};

export default About;
