import React, { useState } from 'react'
import styled from 'styled-components'

const monthAbbreviationDictionary = {Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April', May: 'May', Jun: 'June', Jul: 'July', Aug: 'August', Sep: 'September', Oct: 'October', Nov: 'November', Dec: 'December'}
const monthDayLengthDictionary = {
  'January': 31,
  'February': 28,
  'March': 31,
  'April': 30,
  'May': 31,
  'June': 30,
  'July': 31,
  'August': 31,
  'September': 30,
  'October': 31,
  'November': 30,
  'December': 31
}
const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export function parseMonthFromDate(dateString) {
	const monthName = monthAbbreviationDictionary[dateString.split(' ')[1]]
	return monthName
}
export function maxDaysInMonthAndNextMonth(monthName) {
  const maxDaysInCurrentMonth = monthDayLengthDictionary[monthName]
  return maxDaysInCurrentMonth
}
export function nextMonth(month) {
	const nextMonthString = monthList[(monthList.indexOf(month)+1)]
	return nextMonthString
}
export function previousMonth(month) {
	const previousMonthString = monthList[(monthList.indexOf(month)-1)]
	return previousMonthString
}
export function scheduledShiftsSubtitleStringBuilder(currentDate) {
	/* example 
		 input: September Thu Sep 16 2021 10:29:46 GMT-0700 (Pacific Daylight Time)
		 output: September 16
	*/
	const returnValue = monthAbbreviationDictionary[currentDate.split(' ')[1]] + ' ' + currentDate.split(' ')[2]
	return returnValue
}

const Header = styled.div`
  cursor: pointer;
  text-align: center;
  grid-column: 2 / span 1;
  margin-bottom: 5em;
`
const CalendarContainerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0rem .5rem;
`
const CalendarContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
export default function CalendarContainer({playerTurn, resetButton}) {
	var myDate = new Date()
	var calendarEndDate = new Date()
	calendarEndDate.setDate(calendarEndDate.getDate() + 28)
	const myDay = myDate.getDay()
	const calendarDateInitialNumber = myDate.toString().split(' ')[2]
  const [calendarData, setCalendarData] = useState(Array(28).fill(null))
  const handleClick = position => {
    if (calendarData[position] != null)
      return
	}
  var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const currentDay = weekday[myDay]
  const weekdayIndex = weekday.indexOf(currentDay)
  return (
		<CalendarContainerWrapper>
			<CalendarScheduledShifts
				calendarDateInitialNumber={calendarDateInitialNumber}
				currentDayOfTheWeek={currentDay}
				currentDate={myDate.toString()}
				calendarEndDate={calendarEndDate.toString()}
			/>
			<CalendarContainerDiv>
				<CalendarWeekdayHeader weekday={weekday} weekdayIndex={weekdayIndex} />
    		<Calendar
					calendarData={calendarData}
					calendarDateInitialNumber={calendarDateInitialNumber}
					calendarMonthMaximumDays={maxDaysInMonthAndNextMonth(parseMonthFromDate(myDate.toString()))}
					currentMonth={myDate.toString().split(' ')[2]}
					nextMonth={nextMonth(myDate.toString().split(' ')[2])}
					previousMonth={previousMonth(myDate.toString().split(' ')[2])}
					day={myDay}
					handleClick={handleClick}
				/>
			</CalendarContainerDiv>
		</CalendarContainerWrapper>
	)
}
const CalendarScheduledShiftsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	color: #1e2023;
`
const CalendarScheduledShiftsTitleDiv = styled.div`
	display: flex;
	color: #808080;
`
const CalendarScheduledShiftsSubtitleDiv = styled.div`
	display: flex;
	color: #808080;
`
function CalendarScheduledShifts({ calendarEndDate, calendarDateInitialNumber, currentDayOfTheWeek, currentDate }) {
	const dateRangeBegin = scheduledShiftsSubtitleStringBuilder(currentDate)
	const dateRangeEnd = scheduledShiftsSubtitleStringBuilder(calendarEndDate)
	return (
		<CalendarScheduledShiftsWrapper>
			<CalendarScheduledShiftsTitleDiv>{`Scheduled Shifts`}</CalendarScheduledShiftsTitleDiv>
			<CalendarScheduledShiftsSubtitleDiv>{`${dateRangeBegin} - ${dateRangeEnd}`}</CalendarScheduledShiftsSubtitleDiv>
		</CalendarScheduledShiftsWrapper>
	)
}
const CalendarWeekdayHeaderWrapper = styled.div`
  width: 100%;
  height: 4vw;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 3px;
  background-color: #1e2023;
	border-bottom: 3px solid #ffffff;
	span {
		color: #ffffff;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
function CalendarWeekdayHeader({weekday, weekdayIndex}) {
	return <CalendarWeekdayHeaderWrapper>
	{
		[...Array(7)].map((elementInArray, index) => {
			if(weekdayIndex+index >= 7) {
				const indexSum = weekdayIndex+index-7
				return (
					<span key={index}>{weekday[indexSum].charAt(0)}</span>
				)
			} else if(weekdayIndex+index < 7) {
				return (
					<span key={index}>{weekday[weekdayIndex+index].charAt(0)}</span>
				)
			}
		})
	}
	</CalendarWeekdayHeaderWrapper>
}

const CalendarWrap = styled.main`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	grid-gap: 3px;
	background-color: #ffffff;
	border-bottom: white solid;
	border-left: #fff;
	border-right: #fff;
`
const DayOfWeek = styled.div``
function Calendar({ calendarData, calendarDateInitialNumber, calendarMonthMaximumDays, currentMonth, day, handleClick }) {
	var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	const currentDay = weekday[day]
	const weekdayIndex = weekday.indexOf(currentDay)
	const printWeekDayHeaders = () => {
		for(var i = 0; i < 7; i++) {
    	return <span>weekday[weekdayIndex+i].charAt(0)</span>
    }
	}
	return (
    	<CalendarWrap>
    	{calendarData && calendarData.map((dateMarker, index) => {
				let dateNumber = parseInt(calendarDateInitialNumber) + index
				const isCurrentDate = dateNumber === calendarDateInitialNumber
				if (calendarMonthMaximumDays >= dateNumber) {
      		return <CalendarSquare
                	index={index}
									isCurrentDate={isCurrentDate}
                	key={index}
                	dateNumber={dateNumber}
                	handleClick={handleClick}
     						/>
				} else {
					dateNumber = (parseInt(calendarDateInitialNumber) + index) - calendarMonthMaximumDays;
					return <CalendarSquare
                  index={index}
									isCurrentDate={isCurrentDate}
                  key={index}
                  dateNumber={dateNumber}
                  handleClick={handleClick}
                />
				}
    	})}
    	</CalendarWrap>
	)
}
const SquareDiv = styled.div`
	background-color: #ffffff;
	color: #1e2023;
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 100%;
	min-height: 5.472rem;
	max-height: 5.472rem;
`
const SquareActiveDiv = styled.div`
	color: aquamarine;
	background-color: green;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1em;
	min-width: 100%;
	min-height: 5.472rem;
	max-height: 5.472rem;
`
function CalendarSquare({ index, isCurrentDate, handleClick, dateNumber }) {
  const onClick = (index) => {
    handleClick(index)
  }
	if(isCurrentDate == true) {
  	return (
    	<SquareActiveDiv onClick={() => onClick(index)} >
      	<DateMarker type={dateNumber} />
    	</SquareActiveDiv>
  	)
	} else {
  	return (
    	<SquareDiv onClick={() => onClick(index)} >
      	<DateMarker type={dateNumber} />
    	</SquareDiv>
  	)
	}
}
const DateMarkerDiv = styled.div`
  background-color: #1e2023;
	color: #808080;
	display: flex;
	align-items: center;
	justify-content: center;
  text-align: center;
  font-size: 2vw;
	width: 100%;
	height: 100%;
`
const DateMarker = ({ type }) => {
	return (
		<DateMarkerDiv>{type}</DateMarkerDiv>
	)
}
