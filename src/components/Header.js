import logo from '../logo.svg';
import '../App.css';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useLanguage } from '../hooks/useLanguage';

function Header(){
	const { text, lang, changeLang } = useLanguage();
	
	const handleLanguageSwitch = (language) => {
		changeLang(language);
	}
	
	return(
		<>
			<header className="App-header">
				<div className="row justify-content-center align-items-center">
					<div className="col-2">
						<img src={logo} className="header-logo" alt="logo" />
					</div>
					<div className="col-8">
						<h1>{text.personal_info.name}</h1>
					</div>
					<div className="col-2 d-flex">
						<Icon.Translate className="translate-icon" color="white" size={20} />
						<select className="translate-select" value={lang} onChange={(event) => handleLanguageSwitch(event.target.value)}>
							<option value="en">EN</option>
							<option value="es">ES</option>
						</select>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;