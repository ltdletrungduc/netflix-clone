import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import ModalContext from "./ModalContext";
import Portal from "../Portal";
import * as S from "./styles";

const mockVideoURL = "./video.mp4";

const Modal = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isPlay, setIsPlay] = useState(false);
	const modalRef = useRef(null);

	const open = (movie) => {
		openAnimation();
	};

	const closeAnimation = () => {
		setIsPlay(false);
		setIsOpen(false);
	};

	const openAnimation = () => {
		setIsOpen(true);
		setTimeout(() => {
			setIsPlay(true);
		}, 800);
	};
	const handleClickOut = (events) => {
		const node = modalRef.current;
		if (node && node.contains(events.target)) {
			return;
		}
		closeAnimation();
	};

	//  BLOCK:  handle ESCAPE key press
	const handleEscape = useCallback(
		(event) => {
			if (event.keyCode === 27) closeAnimation();
		},
		[closeAnimation]
	);
	useEffect(() => {
		if (isOpen) {
			document.addEventListener("keydown", handleEscape, false);
			document.addEventListener("mousedown", handleClickOut, false);
		}
		return () => {
			document.removeEventListener("keydown", handleEscape, false);
			document.removeEventListener("mousedown", handleClickOut, false);
		};
	}, [handleEscape, handleClickOut, isOpen]);
	// end of BLOCK

	return (
		<ModalContext.Provider value={open}>
			{isOpen ? (
				<Portal>
					<S.StyledDiv className='modal' ref={modalRef}>
						{isPlay ? (
							<div className='player-wrapper'>
								<ReactPlayer
									className='video-player'
									playing={isPlay}
									width='100%'
									height='100%'
									url={[mockVideoURL]}
								/>
								<span
									role='button'
									className='modal-close'
									aria-label='close'
									onClick={closeAnimation}>
									x
								</span>
							</div>
						) : null}
					</S.StyledDiv>
				</Portal>
			) : null}
			{children}
		</ModalContext.Provider>
	);
};

export default Modal;
