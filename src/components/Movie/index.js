import React, { useEffect, useRef, useState } from "react";
import { services } from "../../services";
import * as S from "./styles";

const Movie = ({ movie, isLargeRow, openCallback }) => {
	// WILL MOUNT
	let posterSrc = null;
	if (isLargeRow) {
		posterSrc = `${services.imagesConfig.base_url}${services.imagesConfig.poster_sizes[3]}${movie.poster_path}`;
	} else {
		posterSrc = `${services.imagesConfig.base_url}${services.imagesConfig.backdrop_sizes[0]}${movie.backdrop_path}`;
	}

	const handleClick = () => {
		openCallback(movie);
	};
	return (
		<S.Movie
			title={movie.title ? movie.title : movie.original_title}
			className={`movie ${isLargeRow ? "--large" : "--normal"}`}
			onClick={handleClick}>
			<img
				className='movie__poster'
				src={posterSrc}
				alt={movie.title ? movie.title : movie.original_title}
			/>
			{!isLargeRow ? (
				<div className='movie__title'>
					{movie.title
						? movie.title
						: movie.name || movie.original_title || movie.original_name}
				</div>
			) : null}
		</S.Movie>
	);
};

export default Movie;

// function Movie({ movie, isLargeRow, option }) {
// 	const [hoverRef, isHover] = useHover();
// 	const modalRef = useRef(null);
// 	const posterSrc = isLargeRow
// 		? `${option.base_url}${option.poster_sizes[3]}${movie.poster_path}`
// 		: `${option.base_url}${option.poster_sizes[2]}${movie.poster_path}`;

// 	useEffect(() => {
// 		// if (isHover) {
// 		// 	console.table([
// 		// 		hoverRef.current.getBoundingClientRect().width,
// 		// 		hoverRef.current.getBoundingClientRect().height,
// 		// 		hoverRef.current.getBoundingClientRect().top,
// 		// 		hoverRef.current.getBoundingClientRect().left,
// 		// 	]);
// 		// 	modalRef.current.setCoords({
// 		// 		width: hoverRef.current.getBoundingClientRect().width,
// 		// 		height: hoverRef.current.getBoundingClientRect().height,
// 		// 		top: hoverRef.current.getBoundingClientRect().top + window.pageYOffset,
// 		// 		left: hoverRef.current.getBoundingClientRect().left,
// 		// 		right: hoverRef.current.getBoundingClientRect().right,
// 		// 	});
// 		// 	modalRef.current.open();
// 		// }
// 	}, [isHover]);
// 	return (
// 		<div
// 			title={movie.title ? movie.title : movie.original_title}
// 			className='row__poster'
// 		>
// 			<img
// 				className='poster'
// 				src={posterSrc}
// 				alt={movie.title ? movie.title : movie.original_title}
// 				ref={hoverRef}
// 			/>
// 			{/* <div className='content'>
// 				<div className='title'>
// 					{movie.title
// 						? movie.title
// 						: movie.name || movie.original_title || movie.original_name}
// 				</div>
// 			</div> */}
// 			{/* <Modal ref={modalRef}>
// 				<img
// 					className='poster'
// 					src={posterSrc}
// 					alt={movie.title ? movie.title : movie.original_title}
// 				/>
// 				<div className='modal__content'>SOME TEXT</div>
// 			</Modal> */}
// 		</div>
// 	);
// }
