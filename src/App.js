import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useLanguage } from './hooks/useLanguage.js';
import Header from './components/Header.js';
import Information from './components/Information.js';
import ExperienceTimeline from './components/ExperienceTimeline.js';
import Portfolio from './components/Portfolio.js';
import Education from './components/Education.js';

function App() {
  const { text } = useLanguage();
  
  return (
	<>
		<div className="App">
			<Header />
			<Information />
			<Portfolio />
			<ExperienceTimeline />
			<Education />
			<div className="mt-5 mb-5">z</div>
		</div>
	</>
  );
}

export default App;
