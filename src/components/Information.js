import '../App.css';
import '../styles/Information.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { assets } from '../assets/assets.js';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';
import { useLanguage } from '../hooks/useLanguage';

function Information(){
	const { text } = useLanguage();
	
	const iconData = [
		{ icon: <Icon.Linkedin />, link: text.icon_links.linkedin },
		{ icon: <Icon.Github />, link: text.icon_links.github },
		{ icon: <Icon.Whatsapp />, link: text.icon_links.whatsapp },
		{ icon: <Icon.EnvelopeAtFill />, link: text.icon_links.email }
	]
	
	return (
		<>
			<div className="row justify-content-center align-items-center">
				<div className="col-sm-12 col-lg-6">
					<h1>{text.personal_info.name}</h1>
					<h5>{text.personal_info.title}</h5>
					{iconData.map((item) => (
						<a className="profile-icon" href={item.link} target="_blank" rel="noopener noreferrer">
							{item.icon}
						</a>
					))}
					<p>{text.personal_info.description}</p>
				</div>
				<div className="col-sm-12 col-lg-6">
					<div className="img-container">
						<img className="profile-photo" src={assets.colsubsidio} alt={text.personal_info.name} />
					</div>	
					<Button className="cv-button" variant="danger">{text.inner_text.get_cv}</Button>
				</div>
			</div>
			<div className="row justify-content-center align-items-center">
				<h1>Tecnologías utilizadas</h1>
			</div>
		</>
	);
}

export default Information;