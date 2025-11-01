import '../App.css';
import '../styles/ExperienceTimeline.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-chrono/dist/style.css';
import { assets } from '../assets/assets.js';
import React from 'react';
import { useLanguage } from '../hooks/useLanguage.js';
import { Chrono } from 'react-chrono';

function ExperienceTimeline(){
	const { text } = useLanguage();
	const items = [];
	
	text.experience.forEach((job) => {
		var jobFunctions = [];
		
		jobFunctions.push(job.description);
		if(job.functions){
			job.functions.forEach((item) => {
				jobFunctions.push("• " + item);
			});
		}
		
		items.push({
			title: job.company,
			cardTitle: job.position,
			cardSubtitle: job.company + " (" + job.dates + ")",
			cardDetailedText: jobFunctions,
			media: {
				type: 'IMAGE',
				source: {
					url: assets[job.company_logo]
				},
				name: job.company
			},
			url: job.company_link
		});
	});
	
	return(
		<div className="px-2">
			<h1>{text.titles.experience}</h1>
			<Chrono
				items={items} 
				mode="alternating"
				layout={{pointSize:50}}
				content={{readMore: true}}
				interaction={{keyboardNavigation: false, cardHover: true}}
				media={{height:120,align:'center',fit:'scale-down'}}
				display={{toolbar: { enabled: false }}} >
				
				<div className="chrono-icons">
					{text.experience.map((job) => (
						<img className="timeline-point-logo" src={assets[job.company_logo]} alt={job.company} />
					))}
				</div>	
			</Chrono>
		</div>
	);
}

export default ExperienceTimeline;