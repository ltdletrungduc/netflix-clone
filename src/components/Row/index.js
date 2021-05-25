import React, { useState, useEffect, useRef } from "react";
import useHover from "../../hooks/useHover";
import { axios, services } from "../../services";
import "./styles.css";
import Slider from "../Slider";
import Slider2 from "../Slider/index2";
import Modal from "../Modal";
import Portal from "../Portal";

function Row({ title, fetchUrl, isLargeRow }) {
	let flickityOption = {
		// options, defaults listed

		accessibility: false,
		// enable keyboard navigation, pressing left & right keys

		adaptiveHeight: false,
		// set carousel height to the selected slide

		autoPlay: false,
		// advances to the next cell

		cellAlign: "left",
		// alignment of cells, 'center', 'left', or 'right'
		// or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

		cellSelector: undefined,
		// specify selector for cell elements

		contain: false,
		// will contain cells to container
		// so no excess scroll at beginning or end
		// has no effect if wrapAround is enabled

		draggable: false,

		dragThreshold: 3,
		// number of pixels a user must scroll horizontally to start dragging
		// increase to allow more room for vertical scroll for touch devices
		// NOT EFFECT if draggable: false

		freeScroll: false,
		// enables content to be freely scrolled and flicked
		// without aligning cells

		friction: 0.5,
		// smaller number = easier to flick farther

		groupCells: true,
		// group cells together in slides

		initialIndex: 0,
		// zero-based index of the initial selected cell

		percentPosition: false,
		// sets positioning in percent values, rather than pixels
		// Enable if items have percent widths
		// Disable if items have pixel widths, like images

		prevNextButtons: true,
		// creates and enables buttons to click to previous & next cells

		pageDots: false,
		// create and enable page dots

		resize: true,
		// listens to window resize events to adjust size & positions

		rightToLeft: false,
		// enables right-to-left layout

		setGallerySize: false,
		// sets the height of gallery
		// disable if gallery already has height set with CSS

		watchCSS: false,
		// watches the content of :after of the element
		// activates if #element:after { content: 'flickity' }

		wrapAround: false,
		// at end of cells, wraps-around to first for infinite scrolling
	};
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [movies, setMovies] = useState([]);
	const option = services.imagesConfig;
	const url = `${services.API_base_url}${fetchUrl}`;
	useEffect(() => {
		const fetchData = async () => {
			setError(false);
			try {
				const request = await axios(url);
				setMovies(request.data.results);
				setIsLoaded(true);
			} catch (error) {
				setIsLoaded(true);
				setError(true);
			}
		};
		fetchData();
	}, [url]);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<div className={`row ${isLargeRow ? "--large" : "--normal"}`}>
				<h2 className='row__title'>{title}</h2>
				{/* <Slider
					className='row__posters'
					data-flickity='{ "setGallerySize": false }'
				>
					{movies.map((movie) => (
						<Movie
							movie={movie}
							isLargeRow={isLargeRow}
							option={option}
							key={movie.id}
						></Movie>
					))}
				</Slider> */}
				<Slider2 className='row__posters' options={flickityOption}>
					{movies.map((movie) => (
						<Movie
							movie={movie}
							isLargeRow={isLargeRow}
							option={option}
							key={movie.id}
						></Movie>
					))}
				</Slider2>
			</div>
		);
	}
}

function Movie({ movie, isLargeRow, option }) {
	const [hoverRef, isHover] = useHover();
	const modalRef = useRef(null);
	const posterSrc = isLargeRow
		? `${option.base_url}${option.poster_sizes[3]}${movie.poster_path}`
		: `${option.base_url}${option.poster_sizes[2]}${movie.poster_path}`;

	useEffect(() => {
		// if (isHover) {
		// 	console.table([
		// 		hoverRef.current.getBoundingClientRect().width,
		// 		hoverRef.current.getBoundingClientRect().height,
		// 		hoverRef.current.getBoundingClientRect().top,
		// 		hoverRef.current.getBoundingClientRect().left,
		// 	]);
		// 	modalRef.current.setCoords({
		// 		width: hoverRef.current.getBoundingClientRect().width,
		// 		height: hoverRef.current.getBoundingClientRect().height,
		// 		top: hoverRef.current.getBoundingClientRect().top + window.pageYOffset,
		// 		left: hoverRef.current.getBoundingClientRect().left,
		// 		right: hoverRef.current.getBoundingClientRect().right,
		// 	});
		// 	modalRef.current.open();
		// }
	}, [isHover]);
	return (
		<div
			title={movie.title ? movie.title : movie.original_title}
			className='row__poster'
		>
			<img
				className='poster'
				src={posterSrc}
				alt={movie.title ? movie.title : movie.original_title}
				ref={hoverRef}
			/>
			{/* <div className='content'>
				<div className='title'>
					{movie.title
						? movie.title
						: movie.name || movie.original_title || movie.original_name}
				</div>
			</div> */}
			{/* <Modal ref={modalRef}>
				<img
					className='poster'
					src={posterSrc}
					alt={movie.title ? movie.title : movie.original_title}
				/>
				<div className='modal__content'>SOME TEXT</div>
			</Modal> */}
		</div>
	);
}

export default Row;
