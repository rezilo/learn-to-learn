import "./Wave.scss";

function Wave() {
	return (
		<div className="wave">
			{/* <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
				<linearGradient id="linear-gradient" gradientTransform="rotate(0)">
					<stop offset="0%" stopColor="#fad0c4" />
					<stop offset="100%" stopColor="#ffd1ff" />
				</linearGradient>
				<path
					fill="url(#linear-gradient)"
					d="M 0 0 C 197.5 0 197.5 97 395 97 L 395 97 L 395 0 L 0 0 Z M 394 97 C 556 97 556 25 718 25 L 718 25 L 718 0 L 394 0 Z M 717 25 C 902 25 902 114 1087 114 L 1087 114 L 1087 0 L 717 0 Z M 1086 114 C 1263 114 1263 0 1440 0 L 1440 0 L 1440 0 L 1086 0 Z"
					strokeWidth="0"
				></path>
			</svg> */}

			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 1440 320"
			>
				<linearGradient id="linearGradient" gradientTransform="rotate(0)">
					<stop offset="0%" stopColor="#fad0c4" />
					<stop offset="100%" stopColor="#ffd1ff" />
				</linearGradient>
				<path
					fill="url(#linearGradient)"
					fillOpacity="1"
					d="M0,288L21.8,240C43.6,192,87,96,131,48C174.5,0,218,0,262,5.3C305.5,11,349,21,393,53.3C436.4,85,480,139,524,144C567.3,149,611,107,655,90.7C698.2,75,742,85,785,128C829.1,171,873,245,916,277.3C960,309,1004,299,1047,277.3C1090.9,256,1135,224,1178,224C1221.8,224,1265,256,1309,234.7C1352.7,213,1396,139,1418,101.3L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
				></path>
			</svg>
		</div>
	);
}

export default Wave;
