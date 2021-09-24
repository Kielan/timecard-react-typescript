import { render, fireEvent, waitForElement } from '@testing-library/react'
import {
	maxDaysInMonth,
	monthAbbreviationDictionary,
	monthDayLengthDictionary,
	monthList,
	nextMonth,
	parseMonthFromDate,
	previousMonth,
	scheduledShiftsSubtitleStringBuilder	
} = from './Calendar.tsx'
/* example 
   input: September Thu Sep 16 2021 10:29:46 GMT-0700 (Pacific Daylight Time)
   output: September 16
*/
describe('date string manipulations', () => {
	it('myDate.toString() is instance of string', () => {
  	const myDate = new Date()
  	expect(myDate.toString()).toBeInstanceOf('string')
	})

	it('maxDaysInMon', () => {
  	const myDate = new Date()
		expect((myDate.toString())).toBeInstanceOf('number')
	})

	it('parse month from date is instance of number', () => {
  	const myDate = new Date()
		expect(parseMonthFromDate(myDate.toString())).toBeInstanceOf('number')
	})

	it('maxDaysInMonth is number', () => {
  	const myDate = new Date()
		expect(parseMonthFromDate(myDate.toString())).toBeInstanceOf('number')
	})
})

