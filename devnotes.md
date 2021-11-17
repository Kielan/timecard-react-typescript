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

components/react-simple-modal.tsx
line 140

const modalTransitions = useModalTransition(transition, isOpen);

returns function renderTransitions(render)

but in source package folder useModalTransition(transition, isOpen);

returns an Array
[{item: false, key: 0, props: { transform: {}, opacity: {}}, state: "enter""}] 

react-spring's useTransition(isOpen, null, ModalTransitionConfig[transition])

[x] attempt a version downgrade to ^8.0.27 from ^9.3.0

package now returns an array

the children array in react-simple-modal is logged in ModalContainer

In the Example the children array is

rsm-fixed rsm-inset-0 rsm-m-4 sm:rsm-m-8 rsm-flex rsm-justify-center rsm-items-center rsm-z-40


[ ] attempt matching the directory structure of react-simple-modal rather than a single file to see if react context populates
