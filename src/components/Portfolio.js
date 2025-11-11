import '../App.css';
import '../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { assets } from '../assets/assets.js';
import { useLanguage } from '../hooks/useLanguage.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Portfolio(){
	const { text } = useLanguage();
	
	return(
		<div className="row justify-content-center align-items-center">
			<h1>{text.titles.portfolio}</h1>
			{text.portfolio.map((project) => (
				<div className="col-sm-12 col-lg-4 px-4">
					<Card className="justify-content-center align-items-center">
						<Card.Img className="portfolio-card-img" variant="top" src={assets[project.project_logo]} />
						<Card.Body>
							<Card.Title>{project.project_name}</Card.Title>
							<Card.Text>{project.description}</Card.Text>
							<div className="row justify-content-center align-items-center">
								<h5>{text.inner_text.used_technologies}</h5>
								{project.used_technologies.map((technology) => (
									<div className="col-6 justify-content-center align-items-center">
										<img className="card-inner-img" src={assets[technology]} alt={technology} />
										<p>{technology}</p>
									</div>
								))}
							</div>
							<a href={project.access_link} target="_blank" rel="noopener noreferrer"><Button variant="primary">{text.inner_text.visit}</Button></a>
						</Card.Body>
					</Card>
				</div>
			))}
		</div>
	);
}

export default Portfolio;