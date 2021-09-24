import React, { useState } from 'react'
import styled from 'styled-components'

const NextShiftWrapper = styled.div`
	margin: 0rem .5rem;
	h1 {
		color: #808080;
	}
`
const NextShiftGrid = styled.div`
	display: grid;
  grid-template-columns: .15fr 1fr;
	span {
		display: block;
		color: #808080;
	}
`
const NextShiftVisualGraphicWrapper = styled.div`
	span {
		color: #808080;
	}
`
const TimeBegin = styled.span`
	padding-top: 1rem;
`
const TimeEnd = styled.span`
	padding-bottom: 1rem;
`
const NextShiftVisualGraphicWrapperSection1 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
const NextShiftVisualGraphicWrapperSection2 = styled.div`
	background: repeating-linear-gradient(0deg, #808080, #808080 1px, #1e2023 1px, #1e2023 9px);
	min-height: 12rem;
	display: flex;
	justify-content: center; 
`
const NextShiftVisualGraphicTimeBox = styled.div`
	min-height: 4rem;
	border-radius: .2rem;
	background-color: green;
	margin-bottom: 2rem;
	margin-top: 2rem;
	max-width: 90%;
	min-width: 90%;
	span {
		color: #ffffff;
		display: block;
		padding-left: 0.7rem;
		padding-top: 0.3rem;
	}
`
export default function NextShift() {
	return (
		<NextShiftWrapper>
			<h1>{`Next Shift`}</h1>
			<NextShiftVisualGraphicWrapper>
			<span>{`starts at Tue 8/31 3:00PM to 10:00PM`}</span>
			<NextShiftGrid>
				<NextShiftVisualGraphicWrapperSection1>
					<TimeBegin>{`3:00pm`}</TimeBegin>
					<TimeEnd>{`10:00pm`}</TimeEnd>	
				</NextShiftVisualGraphicWrapperSection1>
				<NextShiftVisualGraphicWrapperSection2>
					<NextShiftVisualGraphicTimeBox>
						<span>{`#202157`}</span>			
					</NextShiftVisualGraphicTimeBox>
				</NextShiftVisualGraphicWrapperSection2>
			</NextShiftGrid>
			</NextShiftVisualGraphicWrapper>
		</NextShiftWrapper>
	)
}
