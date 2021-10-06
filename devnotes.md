import SVG from "react-inlinesvg"
import radio from "./radio.svg"

yarn add react-inlinesvg

interface SVGProps {
	color: string;
}
const StyledSVG = styled(SVG)<SVGProps>`
	width: 24px;
	height: 13pz;
	& path {
		fill ${({ color }) => color};
	}
`;

return <StyledSVG color={color} src={radio} />;
