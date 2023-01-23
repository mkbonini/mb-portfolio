/** @format */
import { useState } from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Projects from '../views/Projects';
import Resume from '../views/Resume';
import Contact from '../views/Contact';
import Home from '../views/Home';

const NavBody = styled.div`
	display: block;
	display: flex;
	justify-content: space-between;
	height: 80px;
	h4 {
			font-family: Sen;
			font-size: 50px;
			font-weight: 400;
			line-height: 60px;
			letter-spacing: 0em;
			text-align: left;

			margin: 0;
			padding: 10px 0px 0px 56px; 

		}
	h5 {
		font-family: Raleway;
		font-size: 30px;
		font-weight: 500;
		line-height: 35px;
		letter-spacing: 0em;
		text-align: center;

	}
	ul {
		display: flex;
		justify-content: flex-end;
		width: 100vw;
		align-items: center;
		list-style-type: none;
		margin: 0;
		padding: 0;
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
	@media only screen and (max-width: 900px) {
		display: none;
	}
`;

const MobileNav = styled.div`
	display: none;
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
	const history = useHistory();
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
							<li
								onClick={() => {
									history.push('/');
									setClicked(false);
								}}
							>
								<Link to='/'>Home</Link>
							</li>
							<li
								onClick={() => {
									history.push('/projects');
									setClicked(false);
								}}
							>
								<Link to='/projects'>Projects</Link>
							</li>
							<li
								onClick={() => {
									history.push('/resume');
									setClicked(false);
								}}
							>
								<Link to='/resume'>Resume</Link>
							</li>
							<li
								onClick={() => {
									history.push('/contact');
									setClicked(false);
								}}
							>
								<Link to='/contact'>Contact</Link>
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
			{/* <Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/projects'>
					<Projects />
				</Route>
				<Route path='/resume'>
					<Resume />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
			</Switch> */}
		</>
	);
};

export default Navbar;
