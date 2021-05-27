import styled, { keyframes } from "styled-components";

const openAnimation = keyframes`
  from {
   top: 150%;
  }

  to {
   top:50%
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
	position: fixed;
	width: 800px;
	height: 450px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	animation: ${openAnimation};
	animation-duration: 0.8s;
	animation-fill-mode: forwards;
	overflow: hidden;
	z-index: 1;
	.modal-close {
		position: absolute;
		z-index: 2;
		color: white;
		top: 0;
		right: 10px;
		transform: translateX(-50%);
		opacity: 0;
		animation: ${opacity};
		animation-delay: 0.8s;
		animation-duration: 0.4s;
		animation-fill-mode: forwards;
		animation-direction: reverse;
	}
	img.poster {
		width: 100%;
	}
	.player-wrapper {
		position: relative;
		padding-top: 56.25%;
		z-index: 1;
	}
	.video-player {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		animation: ${opacity};
		animation-delay: 0.8s;
		animation-duration: 0.4s;
		animation-fill-mode: forwards;
		animation-direction: reverse;
		z-index: 1;
	}
	.modal__content {
		position: absolute;
		opacity: 0;
	}
`;
