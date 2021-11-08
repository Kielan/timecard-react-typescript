import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styled from 'styled-components'
import { theme } from '../theme'
import NextShift from '../components/NextShift'
import Calendar from '../components/Calendar'

const HomeWrapper = styled.div`
  align-items: center;
	background-color: ${theme.colors.backgroundDarker};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Arial', sans-serif;
`
const HomeMain = styled.main`
  padding: 3rem 0;
  flex: 1;
  display: grid;
	grid-template-rows: 1fr 1.5fr;
	margin-top: 3rem;
  row-gap: 3rem;
	width: 100%;
`
const HomeHeader = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	min-height: 5rem;
	background-color: ${theme.colors.backgroundDarkest};
	display: grid;
	grid-template-columns: auto auto auto;
	grid-template-rows: auto;
	grid-template-areas:
		"headerGap header headerMenu"
		"headerLower headerLower headerLower";
`
const LogoSpan = styled.span`
  height: 1em;
  margin-left: 2.5rem;
`
const HomeSelfService = styled.div`
	background-color: ${theme.colors.green};
	display: flex;
`
const HomeHeaderTitleContainer = styled.div`
	grid-area: header;
	left: auto;
	right: auto;
	position: relative;
	display: flex;
	justify-content: center;
`
const HomeHeaderTitle = styled.div`
	color: #808080;
	font-size: 4rem;
`
const HomeHeaderTitleBold = styled.div`
	color: #ffffff;
	font-weight: 700;
	font-size: 4rem;
`
const HomeHeaderTitleMenuRight = styled.div`
	display: flex;
	grid-area: headerMenu;
	justify-content: flex-end;
	position: absolute;
	right: 0;
	margin-top: 1.2rem;
`
const HomeHeaderTitleLowerRow = styled.div`
	color: ${theme.colors.textLight};
	font-size: 1.6rem;
	grid-area: headerLower;
	display: flex;
	justify-content: center;
`
const HomeHeaderTitleMenuIconA = styled.div`
	color: #808080;
	height: 1.75rem;
	width: 1.75rem;
`
const HomeHeaderTitleMenuImage = styled.image`
	color: white;
	height: 1.75rem;
	width: 1.75rem;
`
const SVGContainerDiv = styled.div`
	text-align: center;
	margin-top: 20px;
`
export function AppHeader() {
	return (
		<>
			<HomeHeader>
				<HomeHeaderTitleContainer>
					<HomeHeaderTitle>The</HomeHeaderTitle>
					<HomeHeaderTitleBold>Pantry</HomeHeaderTitleBold>
				</HomeHeaderTitleContainer>
				<HomeHeaderTitleMenuRight>
					<ImageContainer
						imageSrc={'/layersicon.svg'}
						className={'MenuRightChild'}
						alt={'LayersIcon'}
						margin={'0 1rem 0 0'}
					/>
					<ImageContainer
						imageSrc={'/bellicon.svg'}
						className={'MenuRightChild'}
						alt={'BellIcon'}
						margin={'0 1rem 0 0'}
					/>
					<ImageContainer
						imageSrc={'/usericon.svg'}
						className={'MenuRightChild'}
						alt={'ProfileIcon'}
						margin={'0 1rem 0 0'}
					/>
				</HomeHeaderTitleMenuRight>
				<HomeHeaderTitleLowerRow>{`Self Service`}</HomeHeaderTitleLowerRow>
			</HomeHeader>
		</>
	)
}
const ShiftsAvailability = styled.div`
	display: flex;
`
const HomeFooter = styled.footer`
	display: flex;
	flex-direction: column;
  grid-area: footer;
  background-color: #808080;
	flex: 1;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  min-width: 100%;
`
const HomeFooterTopRow = styled.div`
	background-color: ${theme.colors.backgroundLight};
	display: flex;
	flex: 1;
	min-height: 3.2rem;
	min-width: 100%;
`
const HomeFooterBottomRow = styled.div`
	display: flex;
	min-width: 100%;
`
export function AppFooter() {
	return (
      <HomeFooter>
				<HomeFooterTopRow>
					<HomeFooterTopRowSection
						alt={'LayersIcon'}
						className={'MenuRightChild'}
						imageSrc={'/calendaricon.svg'}
						label={'Shifts'}
						path={'shifts'}
					/>
						<HomeFooterTopRowSection
							alt={'LayersIcon'}
							className={'FooterTopRowClockImage'}
							imageSrc={'/clockicon.svg'}
							label={'Availability'}
							path={'availability'}
						/>
				</HomeFooterTopRow>
				<HomeFooterBottomRow>
					<HomeFooterBottomRowSection
							imageSrc={'/homeicon.svg'}
							alt={'HomeIcon'}
							className={'FooterBottomRowImage'}
							label={'Home'}
							path={'home'}
					/>
					<HomeFooterBottomRowSection
							imageSrc={'/calendaricon.svg'}
							alt={'CalendarIcon'}
							className={'FooterBottomRowImage'}
							label={'Self Service'}
							path={'selfservice'}
					/>
				</HomeFooterBottomRow>
      </HomeFooter>
	)
}
const HomeFooterTopRowSectionContainer = styled.div`
	align-items: center;
	background-color: ${theme.colors.backgroundLight};
	color: ${theme.colors.textLight};
	cursor: pointer;
	display: flex;
	flex: 1;
	padding-left: 1rem;
	max-width: 12rem;
`
const HomeFooterTopRowSectionSpan = styled.span`
	display: block;
	font-weight: 900;
	font-size: 1.3rem;
`
function HomeFooterTopRowSection({ alt, className, imageSrc, label, path }) {
	return (
    			<Link href={path}>
						<HomeFooterTopRowSectionContainer>
		     			<ImageContainer
              	imageSrc={imageSrc}
              	className={className}
              	alt={alt}
								margin={'0 20px 0 0'}
          		/>
          		<HomeFooterTopRowSectionSpan>{label}</HomeFooterTopRowSectionSpan>
						</HomeFooterTopRowSectionContainer>
					</Link>
	)	
}

const HomeFooterBottomRowSectionContainer = styled.div`
	align-items: center;
	background-color: ${theme.colors.backgroundLight};
	color: ${theme.colors.textLight};
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: center;
	padding-left: 1rem;
	height: 4.5rem;
	background-color: ${theme.colors.green};
	margin-bottom: 1.5rem;
`
const HomeFooterBottomRowSectionSpan = styled.span`
	display: block;
	font-weight: 500;
	font-size: 0.8rem;
	margin-top: 2px;
	margin-bottom: 1rem;
`
function HomeFooterBottomRowSection({ alt, className, imageSrc, label, path }) {
	return (
		<Link href={path}>
			<HomeFooterBottomRowSectionContainer>
    		<ImageContainer
					color={theme.colors.greenFade}
      		imageSrc={imageSrc}
        	alt={alt}
        	className={className}
					height={36}
					width={36}
					margin={'20px 0 0 0'}
      	/>
      	<HomeFooterBottomRowSectionSpan>{label}</HomeFooterBottomRowSectionSpan>
			</HomeFooterBottomRowSectionContainer>
		</Link>
	)
}
export default function Home() {
	const scheduledShifts = [new Date(), new Date(), new Date()]
//  const [showOverlay, setShowOverlay] = React.useState(false)
  return (
    <HomeWrapper>
      <Head>
        <title>Timecard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<AppHeader />
      <HomeMain>
				<NextShift />
        <Calendar />
      </HomeMain>
			<AppFooter />
    </HomeWrapper>
  )
}
const ImageContainerDiv = styled.div`
	align-items: center;
	cursor: pointer;
	display: flex;
	justify-content: center;
	margin: ${props => props.margin};
	text-align: center;
`
export function ImageContainer({ color, imageSrc, className, alt, width=32, height=26, margin }) {
	return (
		<ImageContainerDiv
			margin={margin}
		>
    	<Image
				src={imageSrc}
				className={className}
				alt={alt}
				width={width}
				height={height}
			/>
		</ImageContainerDiv>
	)
}
