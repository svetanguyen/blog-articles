import styled from "styled-components";
import BannerImage from '../../../public/banner.webp'
export const BannerWrapper = styled.div`
	background-color: ${props => props.theme.bannerBg};
	height: 170vw;
	align-items: center;
	margin-bottom: 4rem;
	background-repeat: no-repeat;
	background-image: url(${BannerImage.src});
	background-position: center 125%;
	background-size: 100%;
	padding-top: 3rem;
	img {
		width: 100%;
		height: auto;
	}
	@media (min-width: 768px) {
		height: 120vw;
	}
	@media (min-width: 1024px) {
		height: 39vw;
		display: flex;
		background-position: right center;
		background-size: auto 100%;
		img {
			width: auto;
		}
	}
`;

export const BannerContent = styled.div`
	margin-left: 7.69231%;
	width: 84.6154%;
	padding-top: 4rem;
	text-align: center;
	@media (min-width: 768px) {
		margin-left: 12.5%;
		width: 75%;
	}
 	@media (min-width: 1024px) {
		padding-top: 0;
		text-align: left;
		width: 44%;
		margin-left: 8.33333%;
	}
	@media (min-width: 1440px) {
		margin-left: 8.33333%;
		width: 50%;
	}
`
