/** @format */
import styled from 'styled-components';
import Navbar from './components/Navbar';

const AppContainer = styled.div`
	max-height: 100vh;
	overflow: hidden;
`;
function App() {
	return (
		<AppContainer>
			<Navbar />
		</AppContainer>
	);
}

export default App;
