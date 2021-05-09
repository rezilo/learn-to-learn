import "./Footer.scss";

function Footer(props) {
	const translation = {
		ru: {
			inspiredBy: "Эта страничка вдохновлена <a href='https://fixsleep.link'>этим сайтом</a>",
			sourceCode: "Исходный код проекта <a href='https://github.com/rezilo/learn-to-learn'>открыт</a> ♥️",
		},
		en: {
			inspiredBy: "This page is inspired by <a href='https://fixsleep.link'>this site</a>",
			sourceCode: "This is <a href='https://github.com/rezilo/learn-to-learn'>open-source</a> ♥️",
		},
	};
	return (
		<section className="footer">
			<p className="inspiration" dangerouslySetInnerHTML={{ __html: translation[props.lang].inspiredBy }}></p>
			<p className="github" dangerouslySetInnerHTML={{ __html: translation[props.lang].sourceCode }}></p>
		</section>
	);
}

export default Footer;
