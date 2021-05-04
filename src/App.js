import "./App.scss";
import Title from "./Components/Title/Title";
import Card from "./Components/Card/Card";
import { messages } from "./assets/localization";

function App() {
	const userLang = navigator.userLang || navigator.language;

	function getLocalization(local) {
		return messages[local];
	}

	function getUniqueId() {
		const min = Math.ceil(0);
		const max = Math.floor(999);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	const content = getLocalization(userLang.slice(0, 2));
	const { title, mainTitle, mainSubtitle, source } = content;
	const rules = content.rules;

	return (
		<div className="app app--background">
			<div className="app__title">
				<Title header={title} mainTitle={mainTitle} mainSubtitle={mainSubtitle} />
			</div>
			<div className="app__content">
				<div className="app__rules-list">
					{rules.map((item, index) => {
						return (
							<div className="app__rules-item">
								<Card
									key={getUniqueId()}
									number={index + 1}
									title={item.title}
									description={item.description}
									sourceTitle={source}
									source={item.source}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
