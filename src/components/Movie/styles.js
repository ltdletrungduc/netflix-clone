import styled from "styled-components";

export const Movie = styled.div`
	margin-right: 10px;
	width: calc(calc(100vw - 120px - 60px) / 6);
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	margin-bottom: 30px;
	overflow: hidden;
	.movie__poster {
		width: 100%;
	}
	.movie__title {
		font-size: 15px;
		line-height: 1.5;
		font-weight: 700;
		overflow-wrap: break-word;
		text-align: center;
		margin-top: 10px;
	}
	&.--large {
		width: calc(calc(100vw - 120px - 60px) / 6);
		margin-bottom: 60px;
	}
`;
