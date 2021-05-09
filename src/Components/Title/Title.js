import "./Title.scss";
import LangControl from "../LangControl/LangControl";

function Title(props) {
	const { header, title, subtitle } = props;
	return (
		<div className="title-component">
			<LangControl changeLang={props.changeLang} />

			<h1 className="title-component__main-title">{header}</h1>

			<h2 className="title-component__main-subtitle">{title}</h2>

			<h3 className="title-component__description">{subtitle}</h3>
		</div>
	);
}

export default Title;
