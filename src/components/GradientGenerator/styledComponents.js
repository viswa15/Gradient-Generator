import styled from 'styled-components'

export const BgContainer = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(${props => props.gradient});
  margin: 0;
  width: 100vw;
  padding: 20px;
`

export const Heading = styled.h1`
  font-size: 35px;
  color: #ededed;
  margin-bottom: 20px;
  text-align: center;
`

export const SubHeading = styled.p`
  color: #ffffff79;
  font-size: 22px;
  margin-bottom: 20px;
`

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

export const ColorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

export const InputContainer = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ColorLabel = styled.p`
  color: #ededed;
  font-size: 16px;
`

export const ColorInput = styled.input`
  height: 50px;
  width: 85px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

export const GenerateButton = styled.button`
  border: none;
  background-color: #00c9b7;
  color: #1e293b;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`
