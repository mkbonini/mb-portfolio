/** @format */
import { useState } from 'react';
import styled from 'styled-components';
import myPicture from '../assets/michael.png'

const WelcomeBody = styled.div`
	display: block;
	display: flex;
	justify-content: center;
  margin-top: 20vh;
  margin-bottom: 10vh;
	/* height: 80px; */
  .intro {
    width: 40vw;
  }
	h1 {
			font-family: Raleway;
			font-size: 90px;
			font-weight: 700;
			line-height: 105.66px;
			text-align: left;
			margin: 0;
		}

	h2 {
		font-family: Raleway;
		font-size: 80px;
		font-weight: 400;
		line-height: 93.92px;
		text-align: left;
    color: #916FF0;
    margin: 0;
	}
  .hello {
    font-family: Raleway;
		font-size: 40px;
		font-weight: 700;
		line-height: 46.96px;
		text-align: left;
    margin: 0;
  }
  .tagLine {
    font-family: Raleway;
    font-size: 40px;
    font-weight: 400;
    line-height: 47px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
  }
  img {
    box-shadow: 45px -45px #916FF0
  }
	/* @media only screen and (max-width: 900px) {
		display: none;
	} */
`;

const Welcome = () => {

	return (
		<>
			<WelcomeBody>
				<div className='intro'>
          <p className='hello'>Hello, I'm</p>
          <h1>Michael Bonini</h1>
          <h2>Software Engineer</h2>
          <p className='tagLine'>lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum</p>
        </div>
        <div className='imageSide'> 
          <img src={myPicture} alt="image of Me" width={475}></img>
        </div>
			</WelcomeBody>
		</>
	);
};

export default Welcome;
