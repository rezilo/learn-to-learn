import "./Card.scss";
import Link from "../Link/Link";

function Card(props) {
	console.log(props);
	const { number, title, description, sourceTitle, source, wrapper } = props;

	return (
		<div className="card">
			<div className="card__number card__number--gradient">{number}</div>
			<div className="card__content">
				<h3 className="card__title">{title}</h3>
				<p className="card__description">{description}</p>
				{source.length ? (
					<div className="card__source">
						<p>{sourceTitle}</p>
						<Link links={source} linkWrapper={wrapper} />
					</div>
				) : null}
			</div>
		</div>
	);
}

export default Card;
