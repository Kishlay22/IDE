import React from 'react';
import Select from 'react-select';
import '../Styles/Navbar.css';

const Navbar = ({ userLang, setUserLang, userTheme,
	setUserTheme}) => {
	const languages = [
		{ value: "c", label: "C" },
		{ value: "cpp", label: "C++" },
		{ value: "python", label: "Python" },
		{ value: "java", label: "Java" },
	];
	const themes = [
		{ value: "vs-dark", label: "Dark" },
		{ value: "light", label: "Light" },
	]
	return (
		<div className="navbar">
			<h1>Lab based Project</h1>
			<Select id='lang'  options={languages} value={userLang}
				onChange={(e) => setUserLang(e.value)}
				placeholder={userLang} />
			<Select options={themes} value={userTheme}
				onChange={(e) => setUserTheme(e.value)}
				placeholder={userTheme} />
			<div>kishlay455@gmail.com </div>	
		</div>
	)
}

export default Navbar
