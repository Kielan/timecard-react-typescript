import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { theme } from '../theme'
import { ImageContainer } from './index'

const HomepageH1 = styled.h1`
	font-weight: 700;
	font-size: 1rem;
`
const HomepageNotificationContainer = styled.div`
	font-weight: 700;
`
const HomepageNotificationH6 = styled.h6`
	font-size: 1rem;
	font-weight: 700;
`
const HomepageNotificationTimeLabelSpan = styled.span`
	font-size: 0.8rem;
	font-weight: 400;
`
function LayersPopup() {
	return (
		<div>
			<Notifications

			/>
			<HomepageNotificationH1>{`My Links`}</HomepageNotificationH1>
			<HomepageLink
				alt={'iboh'}
				className={'HomepageLink'}
				imageSrc={'/bellicon.svg'}
				linkText={'iBOH'}
			/>
			<HomepageLink
				alt={'learningcenter'}
				className={'HomepageLink'}
				imageSrc={'/bellicon.svg'}
				linkText={'Learning Center'}
			/>
			<HomepageLink
				alt={'pantrytools'}
				className={'HomepageLink'}
				imageSrc={'/bellicon.svg'}
				linkText={'Pantry Tools'}
			/>
		</div>	
	)
}
function Notifications() {
	return (
			<HomepageNotificationContainer>
			<HomepageH1>{`See All Notifications`}</HomepageH1>
				<HomepageNotificationList>
				<HomepageNotificationH6>{`We Are One Panera News`}</HomepageNotificationH6>
				<HomepageNotificationTimeLabelSpan>{`a day ago`}</HomepageNotificationTimeLabelSpan>
				<HomepageNotificationList>
			</HomepageNotificationContainer>
	)
}
const HomepageLinkA = styled.a`
	border: 1px solid;
	border-radius: 0.2rem;
`
const HomepageLinkSpan = styled.a`
	font-size: 1.2rem;
	color: ${theme.colors.textLight};
`
function homepageLink({alt, className='', imageSrc, linkText, margin=''}) {
	return (
		<HomepageLinkA>
			<ImageContainer
            imageSrc={imageSrc}
            className={className}
            alt={alt}
            margin={margin}
			/>
			<HomepageLinkSpan>{linkText}</HomepageLinkSpan>				
		</HomepageLinkA>
	)
}
