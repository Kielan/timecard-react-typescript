import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { theme } from '../theme'
import NextShift from '../components/NextShift'
import { Notifications } from '../components/Notifications'

function Home() {
	return (
		<HomeContainer>
			<NextShift />
			<Notifications />
		</HomeContainer>
	)
}

export default Home;
