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
		<div className="row justify-content-center align-items-stretch py-5">
			<h1>{text.titles.portfolio}</h1>
			{text.portfolio.map((project, index) => (
				<div key={index} className="col-sm-12 col-lg-4 px-4 d-flex">
					<Card className="portfolio-card w-100">
						<Card.Img className="portfolio-card-img" variant="top" src={assets[project.project_logo]} />
						<Card.Body className="d-flex flex-column">
							<Card.Title>{project.project_name}</Card.Title>
							<Card.Text>{project.description}</Card.Text>
							<div className="tech-badges mt-auto">
								<h5>{text.inner_text.used_technologies}</h5>
								<div className="d-flex flex-wrap justify-content-center">
									{project.used_technologies.map((technology, idx) => (
										<div key={idx} className="tech-badge">
											<img src={assets[technology]} alt={technology} />
											<span>{technology}</span>
										</div>
									))}
								</div>
							</div>
							<a href={project.access_link} target="_blank" rel="noopener noreferrer">
								<Button variant="primary" className="mt-3">{text.inner_text.visit}</Button>
							</a>
						</Card.Body>
					</Card>
				</div>
			))}
		</div>
	);
}

export default Portfolio;