import "./LangControl.scss";

function LangControl(props) {
	const onLangChange = (lang) => {
		console.log(lang);
	};
	return (
		<ul className="lang">
			<li className="lang__item">
				<button onClick={() => onLangChange("ru")}>🇷🇺</button>
			</li>
			<li className="lang__item">
				<button onClick={() => onLangChange("en")}>🇺🇸</button>
			</li>
		</ul>
	);
}

export default LangControl;
