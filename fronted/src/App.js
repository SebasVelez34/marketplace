import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
	<div className="App">
		<BrowserRouter>
			<Navbar/>
			<Main/>
		</BrowserRouter>
		{/* <footer className="Footer">
			<div className="title">© 2020 — bd MarketPlace</div>
		</footer> */}
	</div>
  );
}

export default App;
