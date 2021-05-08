import "./Wave.scss";

function Wave() {
	return (
		<div className="wave">
			<svg
				viewBox="0 0 1440 120"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				<linearGradient id="linear-gradient">
					<stop offset="0%" stopColor="#fad0c4" />
					<stop offset="100%" stopColor="#ffd1ff" />
				</linearGradient>
				<path
					fill="url(#linear-gradient)"
					d="M 0 0 C 197.5 0 197.5 97 395 97 L 395 97 L 395 0 L 0 0 Z M 394 97 C 556 97 556 25 718 25 L 718 25 L 718 0 L 394 0 Z M 717 25 C 902 25 902 114 1087 114 L 1087 114 L 1087 0 L 717 0 Z M 1086 114 C 1263 114 1263 0 1440 0 L 1440 0 L 1440 0 L 1086 0 Z"
					strokeWidth="0"
				></path>{" "}
			</svg>
		</div>
	);
}

export default Wave;
