import React, {
	useEffect,
	useImperativeHandle,
	useState,
	forwardRef,
	useCallback,
} from "react";
import { createPortal } from "react-dom";
import "./styles.css";
import * as S from "./styles";
import ReactPlayer from "react-player";

const modalElement = document.getElementById("portal-root");
function Modal({ children }, ref) {
	const [isOpen, setIsOpen] = useState(false);
	const [coords, setCoords] = useState({});
	const [play, setPlay] = useState(false);
	// // call it to close the modal

	const close = useCallback(() => {
		setPlay(false);
		setTimeout(() => {
			setIsOpen(false);
		}, 800);
	}, []);
	// // call it to open the modal
	const open = useCallback(() => {
		setIsOpen(true);
		setTimeout(() => {
			setPlay(true);
		}, 800);
	}, []);

	useImperativeHandle(
		ref,
		() => ({
			open,
			close,
			setCoords,
		}),
		[close]
	);

	//   handle ESCAPE key press
	const handleEscape = useCallback(
		(event) => {
			if (event.keyCode === 27) close();
		},
		[close]
	);

	useEffect(() => {
		if (isOpen) document.addEventListener("keydown", handleEscape, false);
		return () => {
			document.removeEventListener("keydown", handleEscape, false);
		};
	}, [handleEscape, isOpen]);

	const urlStatic = "./video.mp4";
	return createPortal(
		isOpen ? (
			<S.StyledDiv
				onMouseLeave={close}
				className='modal'
				width={coords.width}
				height={coords.height}
				top={coords.top}
				left={coords.left}
				right={coords.right}
			>
				{/* <Iframe iframe={iframeConfig} allow='autoplay'></Iframe> */}
				{play ? (
					<ReactPlayer
						width={coords.height * 1.778}
						height={coords.height}
						className='video-player'
						playing
						url={[urlStatic]}
					/>
				) : null}
				<span
					role='button'
					className='modal-close'
					aria-label='close'
					onClick={close}
				>
					x
				</span>
				{children}
			</S.StyledDiv>
		) : null,
		modalElement
	);
}
// function Iframe(props) {
// 	return (
// 		<div
// 			dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
// 		/>
// 	);
// }
export default forwardRef(Modal);
