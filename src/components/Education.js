import '../App.css';
import '../styles/Education.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { assets } from '../assets/assets.js';
import { useLanguage } from '../hooks/useLanguage.js';
import Carousel from 'react-bootstrap/Carousel';

function Education(){
	const { text } = useLanguage();
	
	return(
		<div className="row justify-content-center align-items-center px-4">
			<div className="col-sm-12 col-xl-7">
				<h1>{text.titles.education}</h1>
					{text.education.map((study) => (
						<div className="row justify-content-center align-items-center">
							<div className="col-2">
								<img className="study-img" src={assets[study.entity_logo]} alt={study.entity} />
							</div>
							<div className="col-6 text-start">
								<span className="fw-bold">{study.title}</span><br/>
								<span className="fst-italic">
									<a href={study.entity_link} target="_blank" rel="noopener noreferrer">{study.entity}</a>
								</span>
							</div>
							<div className="col-3 text-start">{study.dates}</div>
						</div>
					))}
				</div>
				<div className="col-sm-12 col-xl-5">
					<h1>{text.titles.courses}</h1>
					<Carousel className="container-carousel">
						{text.courses.map((course) => (
							<Carousel.Item className="carousel-slide" interval={3000}>
								<Carousel.Caption className="carousel-text">
									<img className="course-img" src={assets[course.entity_logo]} alt={course.entity} />
									<h3>{course.name}</h3>
									<p><a href={course.entity_link} target="_blank" rel="noopener noreferrer">{course.entity}</a> - {course.date}</p>
								</Carousel.Caption>
							</Carousel.Item>
						))}
					</Carousel>
				</div>
		</div>
	);
}

export default Education;