import { useState, useEffect } from 'react';
import es from "../lang/es.json";
import en from "../lang/en.json";

const languages = { en, es };

export function useLanguage(){
	const [ lang, setLang ] = useState("es");
	
	const changeLang = (newLang) => {
		setLang(newLang);
		localStorage.setItem("lang", newLang);
		window.location.reload();
	};
	
	useEffect(() => {
		const savedLang = localStorage.getItem("lang");
		if(savedLang){
			setLang(savedLang);
		}
	}, []);
	
	return { text: languages[lang], lang, changeLang }
}