/** @format */
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

const AppContainer = styled.div`
	/* max-height: 100vh; */
	/* overflow: hidden; */
	background-color: #050C27;
	color: white;
`;
function App() {
	return (
		<AppContainer>
			<Navbar />
			<Welcome />
		</AppContainer>
	);
}

export default App;
