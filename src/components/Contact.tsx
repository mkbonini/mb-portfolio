/** @format */
import styled from 'styled-components';
import linkedin from '../assets/linkedin.png'
import email from '../assets/email.png'
import github from '../assets/github.png'

const ContactBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 10vh;
  width: 80%;
  padding-bottom: 20vh;
  /* height: 30vh; */
  h3 {
			font-family: Raleway;
			font-size: 31px;
			font-weight: 600;
			line-height: 60px;
			text-align: left;
			margin: 0;
		}
  h1 {
    font-family: Raleway;
    font-size: 45px;
    font-weight: 700;
    line-height: 50px;
    text-align: center;
    margin: 0;
    padding-top: 7vh;
  }
  h2 {
    font-family: Raleway;
    font-size: 40px;
    font-weight: 400;
    line-height: 60px;
    text-align: center;
    margin: 0;
    color: #916FF0;
  }

  p {
    font-family: Raleway;
    font-size: 18px;
    font-weight: 600;
    /* line-height: 60px; */
    text-align: left;
    margin: 0;
    padding-left: 17px;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    padding-top: 4vh;
  }

  li {
    display: flex;
  }
  img {
    width: 45px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .contactText {
    margin: auto;
  }
  @media screen and (max-width: 600px) {
    ul {
      flex-direction: column;
      gap: 20px;
    }
    .contactText{
      margin: 0;
    }
  }
`;

const Contact = () => {

	return (
		<>
			<ContactBody>
        <h3 id='contact'>CONTACT</h3>
        <div className='contactDetails'>
          <h1>Thanks for viewing my portfolio!</h1>
          <h2>I'd love to chat.</h2>
          <ul>
            <a href='https://www.linkedin.com/in/michael-bonini-187157131/' >
              <li>
                <img src={linkedin} alt='linkedin logo' />
                <div className='contactText'>
                  <p> CONNECT ON </p> <p> LINKEDIN </p>
                </div>
              </li>
            </a>
            <li>
              <img src={email} alt='email icon' />
              <div className='contactText'>
                <p> EMAIL ME AT </p>  <p> MKBONINI@GMAIL.COM </p>
              </div>
            </li>
            <a href='https://github.com/mkbonini'>
              <li>
                <img src={github} alt='github logo' />
                <div className='contactText'>
                  <p> VIEW MY GITHUB </p> <p> PROJECTS </p>
                </div>
              </li>
            </a>
          </ul>
        </div>
			</ContactBody>
		</>
	);
};

export default Contact;
