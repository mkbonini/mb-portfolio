/** @format */
import styled from 'styled-components';

const Main = styled.div`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const ProjectContainer = styled.div`
	width: 40vw;
	height: 10vh;
	background-color: white;
	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		color: slategray;
		list-style-type: none;
		margin: 0;
		padding: 0;
		height: 100%;
		li {
			padding: 10px;
			&:hover {
				background-color: whitesmoke;
			}
		}
	}
`;

function Projects() {
	return (
		<Main>
			<ProjectContainer>
				<ul>
					<li>Personal</li>
					<li>3D Printing</li>
					<li>School</li>
					<li>Work</li>
				</ul>
			</ProjectContainer>
		</Main>
	);
}

export default Projects;
