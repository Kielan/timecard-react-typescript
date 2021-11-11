import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import React, { useState } from 'react'
import { theme } from '../theme'
import { AppHeader, AppFooter } from './index'

const SelfServiceWrapper = styled.div`
  align-items: center;
  background-color: ${theme.colors.backgroundDarker};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Arial', sans-serif;
`
/*
change initial useState value sets initial CSS
pseudo class but the styled radio
requires double click
removed e.preventDefault from onChange handle
*/
export default function SelfService() {
  const [isToggle, setIsToggle] = useState(false)
	const toggleState = (toggleValue) => {
		setIsToggle(toggleValue)
	}
	return (
		<SelfServiceWrapper>
			<AppHeader />
				<ToggleSwitch
					isToggle={isToggle}
					leftLabel={"Availability"}
					rightLabel={"Max Hours"}
					toggleStateLeft={() => toggleState(false)}
					toggleStateRight={() => toggleState(true)}
				/>
				{!isToggle ? <AvailabilityListView /> : <button>Login</button>}
				<FixedButton onClick={() => console.log('propose change onClick')}>{`Propose Change`}</FixedButton>
			<AppFooter />	
		</SelfServiceWrapper>
	)
}

const ToggleSwitchField = styled.form`
  padding: 40px;
  overflow: hidden;
  height: 40px;
  margin-top: 100px;
`
const ToggleSwitchInput = styled.input`
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
  	&:checked + label {
		  background-color: ${theme.colors.backgroundLighter};
    	color: #fff;
    	box-shadow: none;
  	}
		&:unchecked + label {
		  background-color: ${theme.colors.backgroundLighter};
  		color: rgba(0, 0, 0, 0.6);
		}			
`
const ToggleSwitchLabel = styled.label`
  display: inline-block;
  width: 100px;
  background-color: ${theme.colors.backgroundLight};
  color: ${theme.colors.textLight};
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  text-shadow: none;
  padding: 14px 34px;
  border: 1px solid rgba(0, 0, 0, 0.2);
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
function ToggleSwitch({isToggle, leftLabel, name, rightLabel, toggleStateLeft, toggleStateRight}) {
    return (
      <ToggleSwitchField>
        <ToggleSwitchInput
          checked={isToggle == false}
          id={"switch_left"}
          name={"switchToggle_left"}
          type="radio"
          value={leftLabel}
          onChange={(e) => {
            toggleStateLeft()
          }}
        />
        <ToggleSwitchLabel htmlFor={'switch_left'}>
          {leftLabel}
        </ToggleSwitchLabel>
        <ToggleSwitchInput
          checked={isToggle == true}
          id={"switch_right"}
          name={"switchToggle_right"}
          type="radio"
          value={rightLabel}
          onChange={(e) => {
            toggleStateRight()
          }}
        />
        <ToggleSwitchLabel htmlFor={'switch_right'}>
          {rightLabel}
        </ToggleSwitchLabel>
      </ToggleSwitchField>
    )
}
const AvailabilityTable = styled.div`
	width: 680px;
	padding-bottom: 200px;
`
const AvailabilityRow = styled.div`
	background: ${(props) => props.lightBackground ? theme.colors.backgroundLighter : theme.colors.backgroundDark};
	display: flex;
	justify-content: space-between;
	padding-left: 6px;
	padding-right: 6px;
`
const AvailabilityHeader = styled.h4`
  color: ${theme.colors.green};
`
const AvailabilityParagraph = styled.p`
  color: ${theme.colors.textLight};
`
function AvailabilityListView({}) {
	return (
		<AvailabilityTable>
			<AvailabilityRow>
				<AvailabilityHeader>{`Sunday`}</AvailabilityHeader>
				<AvailabilityParagraph>{`No Availability Specified`}</AvailabilityParagraph>
			</AvailabilityRow>
			<AvailabilityRow lightBackground={true}>
				<AvailabilityHeader>{`Monday`}</AvailabilityHeader>
				<AvailabilityParagraph>{`No Availability Specified`}</AvailabilityParagraph>
			</AvailabilityRow>
			<AvailabilityRow>
				<AvailabilityHeader>{`Tuesday`}</AvailabilityHeader>
				<AvailabilityParagraph>{`No Availability Specified`}</AvailabilityParagraph>
			</AvailabilityRow>
			<AvailabilityRow lightBackground={true}>
				<AvailabilityHeader>{`Wednesday`}</AvailabilityHeader>
				<AvailabilityParagraph>{`No Availability Specified`}</AvailabilityParagraph>
			</AvailabilityRow>
			<AvailabilityRow>
				<AvailabilityHeader>{`Thursday`}</AvailabilityHeader>
				<AvailabilityParagraph>{`No Availability Specified`}</AvailabilityParagraph>
			</AvailabilityRow>
			<AvailabilityRow lightBackground={true}>
				<AvailabilityHeader>{`Friday`}</AvailabilityHeader>
				<AvailabilityParagraph>{`No Availability Specified`}</AvailabilityParagraph>
			</AvailabilityRow>
			<AvailabilityRow>
				<AvailabilityHeader>{`Saturday`}</AvailabilityHeader>
				<AvailabilityParagraph>{`No Availability Specified`}</AvailabilityParagraph>
			</AvailabilityRow>
		</AvailabilityTable>
	)
}

const FixedButton = styled.button<ButtonComponentProps>`
  padding: 5px 12px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  background-color: ${theme.colors.green}; 
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
  position: fixed;
  bottom: 180px;
  right: 0;
	left: 50%;
	transform: translateX(-50%);
	height: 40px;
  width: 500px;      /* Give it the desired width */ 
  margin: auto;      /* Center it */
  max-width: 100%;   /* Make it fit window if under 500px */ 
	z-index: 20;
`
export type ButtonComponentProps = {
  children?: HTMLCollection | string,
  onClick: (e?: React.MouseEvent) => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonComponent = ({ onClick, children, ...otherProps }: ButtonComponentProps) => {
  return (
    <FixedButton onClick={onClick} {...otherProps}>{children}</FixedButton>
  );
}
