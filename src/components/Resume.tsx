/** @format */
import { useState } from 'react';
import styled from 'styled-components';
const PDF = require('../assets/resume.pdf');

const ResumeBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 10vh;
  width: 80%;
  height: 70vh;
  h3 {
			font-family: Raleway;
			font-size: 31px;
			font-weight: 600;
			line-height: 60px;
			text-align: left;
			margin: 0px 0px 5vh 0px;
		}
  @media screen and (max-width: 600px) {

  }
`;

const Resume = () => {

	return (
		<>
			<ResumeBody>
        <h3 id='resume'>RESUME</h3>
        <iframe
          title='mikes-resume'
          src={PDF}
          height='85%'
        ></iframe>
			</ResumeBody>
		</>
	);
};

export default Resume;
