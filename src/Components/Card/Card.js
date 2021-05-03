import "./Card.scss";

function Card(props) {
	const { number, title, description, sourceTitle, source } = props;
	return (
		<div className="card">
			<div className="card__number">{number}</div>
			<div className="card__content">
				<h3 className="card__title">{title}</h3>
				<p className="card__description">{description}</p>
				{source ? (
					<p className="card__source">
						<a href="source" className="card__link">
							{sourceTitle}
						</a>
					</p>
				) : null}
			</div>
		</div>
	);
}

export default Card;
