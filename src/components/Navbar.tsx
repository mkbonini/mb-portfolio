/** @format */
import React,{ useState, useEffect } from 'react';
// import { Route, Switch, Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
// import Projects from '../views/Projects';
// import Resume from '../views/Resume';
// import Contact from '../views/Contact';
// import Home from '../views/Home';

const NavBody = styled.div`
	display: block;
	display: flex;
	justify-content: space-between;
	height: 80px;

	h4 {
			font-family: Sen;
			font-size: 40px;
			font-weight: 400;
			line-height: 60px;
			letter-spacing: 0em;
			text-align: left;

			margin: 0;
			padding: 12px 0px 0px 56px; 

		}
	h5 {
		font-family: Raleway;
		font-size: 22px;
		font-weight: 650;
		line-height: 35px;
		letter-spacing: 0em;
		text-align: center;

		:hover {
			border-bottom: 3px solid white;
		}
	}
	ul {
		display: flex;
		justify-content: flex-end;
		width: 100vw;
		align-items: center;
		list-style-type: none;
		margin: 0;
		padding: 0px 50px 0px 0px;
	}
	li {
		min-width: 70px;
		font-size: 18px;
		height: 100%;
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		&:hover {
			font-weight: 700;
			cursor: pointer;
		}
	}
	a {
		text-decoration: none;
	}

	.scrolled{
  position: fixed;
  top: 0;
  left: 0;
  background-color: lightblue;
}
	@media only screen and (max-width: 900px) {
		display: none;
	}
`;

const MobileNav = styled.div`
	display: none;
	/* position: fixed; */
	@media only screen and (max-width: 900px) {
		display: block;
		display: flex;
		justify-content: flex-end;
		height: 65px;
		i {
			padding: 20px;
			font-size: 25px;
		}
		
		ul {
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			text-decoration: none;
			list-style-type: none;
			margin: 0;
			padding: 3rem;
		}
		li {
			font-size: 28px;
			height: 100%;
			padding: 10px 0px;
			display: flex;
			justify-content: flex-start;
		}
		a {
			text-decoration: none;
		}
	}
`;

const FlyoutMenu = styled.div`
	height: 100vh;
	background-color: whitesmoke;
	position: absolute;
	top: 65px;
	width: 100%;
`;

const Navbar = () => {
	const [clicked, setClicked] = useState(false);

	const toggleClicked = () => {
		if (clicked) {
			setClicked(false);
		} else {
			setClicked(true);
		}
	};
	return (
		<>
			<MobileNav>
				<i className='fas fa-bars' onClick={() => toggleClicked()} />
				{clicked && (
					<FlyoutMenu>
						<ul>
							<li >
								<h5>Projects</h5>
							</li>
							<li>
								<h5>About</h5>
							</li>
							<li>
								<h5>Resume</h5>
							</li>
							<li >
								<h5>Contact</h5>
							</li>
						</ul>
					</FlyoutMenu>
				)}
			</MobileNav>
			<NavBody>
				<div className='initials'>
					<h4>MB</h4>
				</div>
				<ul>
					<li >
						<h5>Projects</h5>
					</li>
					<li>
						<h5>About</h5>
					</li>
					<li>
						<h5>Resume</h5>
					</li>
					<li >
						<h5>Contact</h5>
					</li>
				</ul>
			</NavBody>
		</>
	);
};

export default Navbar;
