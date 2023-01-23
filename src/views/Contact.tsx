/** @format */
import styled from 'styled-components';

const Main = styled.div`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;xp
	font-size: calc(10px + 2vmin);
	color: white;
	h1 {
		margin-top: -6rem;
		font-size: 25px;
	}
	a {
		color: white;
	}
	i {
		color: white;
		padding-right: 10px;
	}
	div {
		padding-bottom: 10px;
	}
`;
function Contact() {
	return (
		<Main>
			<h1>Reach me at</h1>
			<div>
				<i className='fas fa-envelope-open-text'></i>
				<a href='mailto: mkbonini@gmail.com'> mkbonini@gmail.com</a>
			</div>
			<div>
				<i className='fab fa-linkedin-in'></i>
				<a
					href='https://www.linkedin.com/in/michael-bonini-187157131'
					target='_blank'
					rel='noreferrer'
				>
					linkedin
				</a>
			</div>
		</Main>
	);
}

export default Contact;
