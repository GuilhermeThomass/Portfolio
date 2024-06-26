import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95vh;
  scroll-snap-align: center;
`

export const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 24px;
  color: ${props => props.theme.fontColor};
  border: 2px solid ${props => props.theme.fontColor};
  border-radius: 10px;
  padding: 10px 25px;
  background: transparent;
`
export const Left = styled.div`
  width: 25vw;
  height: 50vh;
  gap:20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 12px 6px;
`
export const Rigth = styled.div`
  width: 15vw;
`
export const InputDesc = styled.textarea`
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
export const InputEmail = styled.input`
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
export const Titlle = styled.h1`
`
export const Button = styled.button`
  color: ${props => props.theme.body};
  font-size: large;
  border: 2px solid ${props => props.theme.fontColor};
  border-radius: 10px;
  padding: 10px 25px;
  background: ${props=>props.theme.fontColor};
  text-decoration: none;
  &:active{
    box-shadow: 2px 2px 15px ${props => props.theme.fontColor};
  }
  &:focus{
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.fontColor};
    opacity: 0.5;
  }
  &:hover{
    cursor: pointer;
  }
`