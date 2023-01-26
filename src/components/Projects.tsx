/** @format */
import styled from 'styled-components';
import {projectList} from '../assets/project_list';

type ProjectProps = {
  name: string;
  tech: string;
  description: string;
  github: string;
  url: string;
  image: string;
}


const ProjectCardBody = styled.div`
  background-color: black;
  display: flex;
  box-shadow: #352367 0px 2px 8px 2px;

  h6 {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    margin: 0px 0px 5px 0px;

  }
  p {
    display: inline;
    font-family: 'Open Sans';
    color: lightgrey;
    font-size: 17px
  }

  a {
    color: white;
    text-decoration: none;
  }
  .projectDetails {
    padding: 35px;
    /* margin: auto 0px; */
  }
  .projectImage {
    height: 250px;
  }
  .subTitle {
    font-weight: bold;
    color: white;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    .projectDetails {
      padding: 25px;
      margin: auto;
    }
	}

  @media only screen and (max-width: 2000px) {
    .projectDetails {
      padding: 20px;
    }
	}

  @media only screen and (min-width: 2600px) {
    .projectImage {
      height: 300px;
    }
	}
`;

// function ProjectCard ({name, tech, description,github, url, image}: ProjectProps) {
function ProjectCard (project: ProjectProps) {

	return (
		<>
			<ProjectCardBody>
        <img className='projectImage' src={project.image} alt='project screenshot' /> 
        <div className='projectDetails'>
          <h6>{project.name}</h6>
          <p className='subTitle' >Tech Stack:</p> <p>{project.tech} </p>
          <br/>
          <p className='subTitle' style={{marginTop:"15px"}}>Description: </p> <p> {project.description} </p>
          <br/>
          <br/>
          <a id='github' href={project.github}>View on GitHub</a> <p> || </p> <a id='website' href={project.url}>View the Website</a> 
        </div>
      </ProjectCardBody>
		</>
	);
};

const ProjectBody = styled.div`
  width: 80vw;
  margin: auto;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 70px;
  }
  li {

  }

  h3 {
			font-family: Raleway;
			font-size: 31px;
			font-weight: 600;
			line-height: 60px;
			text-align: left;
			margin-bottom: 40px;
		}
  @media only screen and (max-width: 600px) {
    width: 90vw;
    h3{
      font-size: 25px;
    }
	}
`;

const Projects = () => {
	let projects = projectList.map((project) =>
    // console.log(project.name)
    <li>< ProjectCard name={project.name} tech={project.tech} description={project.description} github={project.github} url={project.url} image={project.image} /></li> 
    );
  
	return (
		<>
			<ProjectBody>
        <h3 id='projects'>MY PROJECTS</h3>
        <ul>{projects}</ul>
      </ProjectBody>
		</>
	);
};

export default Projects;
