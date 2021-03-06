import "./LangControl.scss";

function LangControl(props) {
	return (
		<ul className="lang">
			<li className="lang__item">
				<button onClick={() => props.changeLang("ru")}>π·πΊ</button>
			</li>
			<li className="lang__item">
				<button onClick={() => props.changeLang("en")}>πΊπΈ</button>
			</li>
		</ul>
	);
}

export default LangControl;
