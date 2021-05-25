import styled, { keyframes } from "styled-components";

const scale = keyframes`
  from {
    transform: scale(1)
  }

  to {
    transform: scale(1.2, 1.2)
  }
`;
const opacity = keyframes`
from {
    opacity: 1
  }

  to {
    opacity: 0;
  }
`;

export const StyledDiv = styled.div`
	position: absolute;
	width: ${(props) => (props.width ? `${props.width}px` : "100px")};
	height: ${(props) => (props.height ? `${props.height}px` : "100px")};
	top: ${(props) => (props.top ? `${props.top}px` : "0")};
	left: ${(props) => (props.left ? `${props.left}px` : "0")};
	transform-origin: ${(props) =>
		props.left <= 60
			? "left center"
			: props.right <= 60
			? "right center"
			: "center center"};
	animation: ${scale};
	animation-duration: 0.8s;
	animation-fill-mode: forwards;
	/* transform: scale(1.2); */
	transition: 0.8s;
	overflow: hidden;
	z-index: 299;
	&.--open {
		transform: scale(1.2);
	}
	&.--close {
		transform: scale(1);
		.video-player {
			animation-direction: normal;
		}
	}
	.modal-close {
		position: absolute;
		z-index: 2;
		color: white;
		top: 0;
		right: 10px;
		transform: translateX(-50%);
	}
	img.poster {
		width: 100%;
	}
	.video-player {
		opacity: 0;
		animation: ${opacity};
		animation-delay: 0.8s;
		animation-duration: 0.4s;
		animation-fill-mode: forwards;
		animation-direction: reverse;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
	}
	.modal__content {
		position: absolute;
		opacity: 0;
	}
`;
