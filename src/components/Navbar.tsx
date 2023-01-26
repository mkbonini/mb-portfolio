/** @format */
import React,{ useState,} from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";

const NavBody = styled.div`
	height: 80px;
	position: fixed;
	background-color: #050C27;
	width: 100%;
	h4 {
			font-family: Sen;
			font-size: 40px;
			font-weight: 400;
			line-height: 60px;
			letter-spacing: 0em;
			text-align: left;
			margin: 0;
		}
	ul {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		list-style-type: none;
		margin: 0;
		padding: 0;
		gap: 20px
	}
	li {
		min-width: 70px;
		font-family: Raleway;
		font-size: 22px;
		font-weight: 650;
		line-height: 35px;
		letter-spacing: 0em;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		&:hover {
			font-weight: 700;
			cursor: pointer;
			border-bottom: 3px solid white;
		}
	}
	a {
		text-decoration: none;
		color: white;
	}

	.nav {
		display: flex;
		justify-content: space-between;
		top: 0;
		padding: 15px 55px 0px 55px;

	}
	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

const MobileNav = styled.div`
	display: none;
	/* position: fixed; */
	@media only screen and (max-width: 600px) {
		display: flex;
		justify-content: flex-end;
		height: 65px;
		position: fixed;
		width: 100%;
		background-color: #050C27;
		left: 0px;
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
			padding: 0;
		}
		li {
			font-size: 28px;
			height: 100%;
			padding: 10px 0px;
			display: flex;
			justify-content: flex-start;
			color: #916FF0;
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
	left: 0px;
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
				<div className='nav'>
					<i className='fas fa-bars' onClick={() => toggleClicked()} />
					{clicked && (
						<FlyoutMenu>
							<ul>
								<li>
									<Link activeClass="active" smooth spy to="projects" offset={-50} onClick={() => toggleClicked()} >
										Projects
									</Link>
								</li>
								<li >
									<Link activeClass="active" smooth spy to="about" offset={-50} onClick={() => toggleClicked()}>
										About
									</Link>
								</li>
								<li>
									<Link activeClass="active" smooth spy to="resume" offset={-50} onClick={() => toggleClicked()}>
										Resume
									</Link>
								</li>
								<li>
									<Link activeClass="active" smooth spy to="contact" offset={-50} onClick={() => toggleClicked()}>
										Contact
									</Link>
								</li>
							</ul>
						</FlyoutMenu>
					)}
				</div>
			</MobileNav>
			<NavBody>
				<div className='nav'>
					<div className='initials'>
						<h4>MB</h4>
					</div>
					<ul>
						<li >
							<Link activeClass="active" smooth spy to="projects" offset={-85}>
								Projects
							</Link>
						</li>
						<li>
							<Link activeClass="active" smooth spy to="about" offset={-85}>
								About
							</Link>
						</li>
						<li>
							<Link activeClass="active" smooth spy to="resume" offset={-85}>
								Resume
							</Link>
						</li>
						<li >
							<Link activeClass="active" smooth spy to="contact" offset={-85}>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</NavBody>
		</>
	);
};

export default Navbar;
