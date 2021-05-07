import "./LangControl.scss";

function LangControl(props) {
	return (
		<ul className="lang">
			<li className="lang__item">
				<button onClick={() => props.changeLang("ru")}>🇷🇺</button>
			</li>
			<li className="lang__item">
				<button onClick={() => props.changeLang("en")}>🇺🇸</button>
			</li>
		</ul>
	);
}

export default LangControl;
