import React, { useState, useEffect } from "react";
import { axios, services } from "../../services";
import "./styles.css";
import { ReactComponent as PlayIcon } from "../../assets/icon/play.svg";
import { ReactComponent as InfoIcon } from "../../assets/icon/info.svg";

function Banner({ fetchUrl }) {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [movie, setMovie] = useState([]);
	const option = services.imagesConfig;
	const url = `${services.API_base_url}${fetchUrl}`;
	useEffect(() => {
		const fetchData = async () => {
			setError(false);
			try {
				const request = await axios(url);
				setMovie(
					request.data.results[
						Math.floor(Math.random() * request.data.results.length - 1)
					]
				);
				setIsLoaded(true);
			} catch (error) {
				setIsLoaded(true);
				setError(true);
			}
		};
		fetchData();
	}, [url]);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		const styleBG = {
			backgroundImage: ` url("${option.base_url}${
				option.backdrop_sizes[option.backdrop_sizes.length - 1]
			}${movie?.backdrop_path}")`,
			backgroundSize: "cover",
			backgroundPosition: "center center",
			backgroundRepeat: "no-repeat",
		};
		return (
			<div className='banner' style={styleBG}>
				<div className='container'>
					<div className='banner__contents'>
						<h1 className='banner__title'>
							{movie?.title || movie?.name || movie?.original_name}
						</h1>
						<p className='banner__description'>
							{truncate(movie?.overview, 300)}
						</p>
						<div className='banner__buttons'>
							<button className='banner__button'>
								<PlayIcon></PlayIcon>
								<span>Watch</span>
							</button>
							<button className='banner__button'>
								<InfoIcon></InfoIcon>
								<span>More Info</span>
							</button>
						</div>
					</div>
				</div>
				<div className='banner__footer'></div>
			</div>
		);
	}
}

export default Banner;
