import "./Link.scss";

function Link(props) {
	return props.links.map((link, i) => {
		return (
			<a href={link} target="_blank" key={i} className="card__link">
				{props.linkWrapper}
			</a>
		);
	});
}

export default Link;
