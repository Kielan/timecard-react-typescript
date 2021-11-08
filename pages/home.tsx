import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { theme } from '../theme'
import NextShift from '../components/NextShift'
import Notifications from '../components/Notifications'
import { AppHeader, AppFooter } from './index'

const HomeContainer = styled.div`
  background-color: ${theme.colors.backgroundDarker};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Arial', sans-serif;
`
const MeterContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	height: 10rem;
	background: black;
`
const TopCircle = styled.div`
	background: gray;
	height: 45px;
	width: 90px;
	border-top-left-radius: 90px;
	border-top-right-radius: 90px;
`
const InnerCircle = styled.div`
	background: white;
	height: 60px;
	width: 120px;
	border-top-left-radius: 120px;
	border-top-right-radius: 120px;
`
const OuterCircle = styled.div`
	background: gray;
	height: 100px;
	width: 200px;
	border-top-left-radius: 200px;
	border-top-right-radius: 200px;
`
const Spacing = styled.div`
	margin-top: 8rem;
`
function Home() {
	return (
		<HomeContainer>
			<Spacing />
			<MeterContainer>
				<TopCircle />
				<InnerCircle />
				<OuterCircle />
			</MeterContainer>
			<AppHeader />
			<NextShift />
			<Notifications />
			<AppFooter />
		</HomeContainer>
	)
}

export default Home;
