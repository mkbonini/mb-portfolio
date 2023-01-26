/** @format */
import styled from 'styled-components';

const FooterBody = styled.div`
  padding-top: 10vh;
  background-color: #210E59;
	p {
			font-family: Raleway;
			font-size: 18px;
			font-weight: 400;
			/* line-height: 60px; */
			text-align: right;
			margin: 0;
      color: #916FF0;
      padding: 0px 25px 30px 0px;
		}

  @media screen and (max-width: 600px) {
  
  }
`;

const Footer = () => {

	return (
		<>
			<FooterBody>
        <p>Made by Michael Bonini 2023</p>
			</FooterBody>
		</>
	);
};

export default Footer;
