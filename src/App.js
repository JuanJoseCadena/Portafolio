import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useLanguage } from './hooks/useLanguage.js';
import Header from './components/Header.js';
import ExperienceTimeline from './components/ExperienceTimeline.js';
import Portfolio from './components/Portfolio.js';
import Education from './components/Education.js';

function App() {
  const { text } = useLanguage();
  
  return (
	<>
		<div className="App">
			<Header />
			<h1>{text.personal_info.name}</h1>
			<h5>{text.personal_info.title}</h5>
			<Portfolio />
			<ExperienceTimeline />
			<Education />
			<div className="mt-5 mb-5">z</div>
		</div>
	</>
  );
}

export default App;
