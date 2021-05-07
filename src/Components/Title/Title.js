import "./Title.scss";
import LangControl from "../LangControl/LangControl";

function Title(props) {
	return (
		<div className="title-component">
			<LangControl />

			<h1 className="title-component__main-title">Учись учиться</h1>

			<h2 className="title-component__main-subtitle">
				Нам необходимо учиться чтобы оставаться востребованными в любой сфере деятельности. <br />
				Но как это делать эффективно? Для начала нужно научиться учиться! <br />
			</h2>

			<h3 className="title-component__description">
				Ниже список из 10 техник которые позволяют мне вот уже пять лет делать это эффективно.
			</h3>
		</div>
	);
}

export default Title;
