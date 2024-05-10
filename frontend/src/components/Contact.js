import React from 'react'
import styled from 'styled-components';


const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95vh;
  scroll-snap-align: center;
`
const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 24px;
  color: ${props => props.theme.fontColor};
  border: 2px solid ${props => props.theme.fontColor};
  border-radius: 10px;
  padding: 10px 25px;
  background: transparent;
`
const Left = styled.div`
  width: 25vw;
  height: 50vh;
  gap:20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Rigth = styled.div`
  width: 15vw;
`

const InputDesc = styled.textarea`
  font-size: large;
  height: 30vh;
  resize: none;
  color: ${props => props.theme.fontColor};
  border: 2px solid ${props => props.theme.fontColor};
  border-radius: 10px;
  padding: 10px 25px;
  background: transparent;
  text-decoration: none;
  &:active{
    box-shadow: 2px 2px 15px ${props => props.theme.fontColor} inset;
  }
  &:focus{
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.fontColor};
    opacity: 0.5;
  }
`
const InputEmail = styled.input`
  color: ${props => props.theme.fontColor};
  font-size: large;
  border: 2px solid ${props => props.theme.fontColor};
  border-radius: 10px;
  padding: 10px 25px;
  background: transparent;
  text-decoration: none;
  &:active{
    box-shadow: 2px 2px 15px ${props => props.theme.fontColor} inset;
  }
  &:focus{
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.fontColor};
    opacity: 0.5;
  }
`
const Titlle = styled.h1`
`


function Contact() {

  return (
      <Section>
        <Container>
          <Left>
            <Titlle>Entre em contato</Titlle>
            <InputEmail type='email' placeholder='Email'/>
            <InputDesc type='textarea' placeholder='Descrição'/>
          </Left>
          <Rigth>
          </Rigth>
        </Container>
      </Section>
  )
}

export default Contact