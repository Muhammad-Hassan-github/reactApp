import React from 'react';
import './App.css';
import MainComponent from '../Components/MainComponent/mainComponent';
import MyProvider from '../Provider/provider';
const MyContext = React.createContext();
function App() {
	return (
		<MyProvider>

			<div className="mobileRotat">
				<div className="phone">
				</div>
				<div className="message">
					Please rotate your device!
			</div>
			</div>

			<div className="main">
				
				<MainComponent />
				  
			</div>
		</MyProvider>
	);
}

export default App;
