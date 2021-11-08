import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'
import { theme } from '../theme'
import { AppHeader, AppFooter } from './index'

const ToggleSwitchField = styled.form`
	padding: 40px;
	overflow: hidden;
	height: 800px;
	margin-top: 250px;
`
const ToggleSwitchInput = styled.input`
	  position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
		&:checked + label {
  		background-color: #1955a5;
			color: #fff;
  		box-shadow: none;
		}
`
const ToggleSwitchLabel = styled.label`
	display: inline-block;
	width: 100px;
	background-color: #e4e4e4;
	color: rgba(0, 0, 0, 0.6);
	font-size: 14px;
	font-weight: normal;
	text-align: center;
	text-shadow: none;
	padding: 6px 14px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
	transition: all 0.1s ease-in-out;
	&:hover {
		cursor: pointer;
	}
	&:first-of-type {
  	border-radius: 4px 0 0 4px;
	}
	&:last-of-type {
		border-radius: 0 4px 4px 0;
	}
`
function ToggleSwitch({checked, isToggle, leftLabel, name, rightLabel, toggleState, setIsToggle}) {
//  	const [isToggle, setIsToggle] = useState(false)
    return (
      <ToggleSwitchField>
        <ToggleSwitchInput
					checked={!isToggle}
          id={"switch_left"}
          name={"switchToggle"}
					type="radio"
					value={leftLabel}
					onChange={toggleState}
        />
        <ToggleSwitchLabel htmlFor={name}>
					{leftLabel}
        </ToggleSwitchLabel>
        <ToggleSwitchInput
					checked={isToggle}
          id={"switch_right"}
          name={"switchToggle"}
					type="radio"
					value={rightLabel}
					onChange={toggleState}
        />
        <ToggleSwitchLabel htmlFor={name}>
					{rightLabel}
        </ToggleSwitchLabel>
      </ToggleSwitchField>
    )
}

const SelfServiceWrapper = styled.div`
  align-items: center;
  background-color: ${theme.colors.backgroundDarker};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Arial', sans-serif;
`

export default function SelfService() {
  const [isToggle, setIsToggle] = useState(false)
	function toggleState() {
		setIsToggle(!isToggle)
		console.log('isToggle after setIsToggle', isToggle)
	}
	return (
		<SelfServiceWrapper>
			<AppHeader />
				<ToggleSwitch
					isToggle={isToggle}
					leftLabel="Availability"
					rightLabel="Max Hours"
					toggleState={toggleState}
				/>
			<AppFooter />	
		</SelfServiceWrapper>
	)
}
