/** @format */
import styled from 'styled-components';
import myPicture_450w from '../assets/michael_450w.webp'
import myPicture_800w from '../assets/michael_800w.webp'

const WelcomeBody = styled.div`
	display: block;
	display: flex;
	justify-content: space-evenly;
  padding-top: 30vh;

  .intro {
    width: 40vw;
  }
  .imageSide {
    width: 30vw;
  }

	h1 {
			font-family: Raleway;
			font-size: 75px;
			font-weight: bold;
			/* line-height: 105.66px; */
			text-align: left;
			margin: 0;
		}

	h2 {
		font-family: Raleway;
		font-size: 64px;
		font-weight: 400;
		line-height: 85px;
		text-align: left;
    color: #916FF0;
    margin: 0;
	}
  .hello {
    font-family: Raleway;
		font-size: 31px;
		font-weight: 700;
		line-height: 46.96px;
		text-align: left;
    margin: 0;
  }
  .tagLine {
    font-family: Raleway;
    font-size: 31px;
    font-weight: 400;
    /* line-height: 47px; */
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
    /* width: 70% */
  }

  #profilePicture {
    box-shadow: 25px -25px #916FF0;
    width: 400px;
  }
  @media screen and (max-width: 600px) {
    justify-content: center;
    padding-top: 15vh;
    flex-direction: column;
    width: 90vw;


    .imageSide {
      /* display: none; */
      width: unset;
      margin: auto;
    }
    #profilePicture {
      width: 225px;
      margin-top: 10vh;
    }
    .intro {
      width: 100%;
      padding-left: 20px;
    }

  	h1 {
			font-size: 40px;
		}

    h2 {
      font-size: 30px;
      line-height: 44px;
    }

    .hello {
      font-size: 20px;
      line-height: 30px;
    }

    .tagLine {
      font-size: 18px;
    }
  }
`;

const Welcome = () => {

	return (
		<>
			<WelcomeBody>
				<div className='intro'>
          <p className='hello'>Hello, I'm</p>
          <h1>Michael Bonini</h1>
          <h2>Software Engineer</h2>
          <p className='tagLine'>Skilled at thinking outside the box and approaching problems with a fresh line of thinking.</p>
        </div>
        <div className='imageSide'> 
          {/* <img srcSet="../assets/michael_450w.webp , ../assets/michael_800w.webp 2x" alt="image of Me" id="profilePicture" ></img> */}
          <img 
          id="profilePicture" 
          alt="image of Me" 
          srcSet={`${myPicture_450w} 450w, ${myPicture_800w} 800w`} 
          sizes="(min-width: 620px) 400px, 225px"
          src={myPicture_800w}
          />
        </div>
			</WelcomeBody>
		</>
	);
};

export default Welcome;
