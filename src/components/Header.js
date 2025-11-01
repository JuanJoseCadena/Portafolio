import logo from '../logo.svg';
import '../App.css';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import * as Icon from 'react-bootstrap-icons';
import ReactCountryFlag from 'react-country-flag';
import { useLanguage } from '../hooks/useLanguage';

function Header(){
	const { text, lang, changeLang } = useLanguage();
	
	return(
		<>
			<header className="App-header">
				<div className="row justify-content-center align-items-center">
					<div className="col-sm-12 col-lg-2 mt-2 mb-2">
						<img src={logo} className="header-logo" alt="logo" />
					</div>
					<div className="col-sm-12 col-lg-8 mt-2 mb-2">
						<h1>{text.personal_info.name}</h1>
					</div>
					<div className="col-sm-12 col-lg-2 mt-2 mb-2">
						<Dropdown>
							<Dropdown.Toggle className="translate-select">
								<Icon.Translate className="translate-icon" color="white" size={20} />
								<span>{lang.toUpperCase()}</span>
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item className="translate-option" onClick={() => changeLang("es")}>
									<ReactCountryFlag className="translate-flag" countryCode="ES" title="ES" svg />
									<span>ES</span>
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item className="translate-option" onClick={() => changeLang("en")}>
									<ReactCountryFlag className="translate-flag" countryCode="US" title="EN" svg />
									<span>EN</span>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;