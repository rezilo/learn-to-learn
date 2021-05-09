import "./App.scss";
import Title from "./Components/Title/Title";
import Card from "./Components/Card/Card";
import Wave from "./Components/Wave/Wave";
import { messages } from "./assets/localization";
import { useState, useEffect } from "react";

function App() {
	const userLang = navigator.userLang || navigator.language;
	const [lang, setLang] = useState(userLang.slice(0, 2));

	function getLocalization(local) {
		return messages[local];
	}

	function getUniqueId() {
		const min = Math.ceil(0);
		const max = Math.floor(999);
		return (Math.floor(Math.random() * (max - min)) + min).toString();
	}

	function changeLang(lang) {
		setLang(lang);
	}

	const content = getLocalization(lang);
	const { title, mainTitle, mainSubtitle, source, linkWrapper, rules } = content;

	useEffect(() => {
		document.title = title;
	});

	return (
		<div className="app app--background">
			<div className="app__title">
				<Title header={title} title={mainTitle} subtitle={mainSubtitle} changeLang={changeLang} />
			</div>
			<Wave />
			<div className="app__content">
				<div className="app__rules-list">
					{rules.map((item, index) => {
						return (
							<div className="app__rules-item" key={getUniqueId()}>
								<Card
									number={index + 1}
									title={item.title}
									description={item.description}
									sourceTitle={source}
									source={item.source}
									wrapper={linkWrapper}
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
