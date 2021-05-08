import "./Link.scss";

function Link(props) {
	console.log(props);
	return props.links.map((link, i) => {
		return (
			<a href={link} key={i} className="card__link">
				{props.linkWrapper}
			</a>
		);
	});
}

export default Link;
