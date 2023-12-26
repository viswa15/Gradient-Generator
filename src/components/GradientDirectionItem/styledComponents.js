import styled from 'styled-components'

export const GradientListEl = styled.li`
  list-style-type: none;
  margin-right: 20px;
`

export const GradientBtn = styled.button`
  border: none;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  width: 80px;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  @media screen and (max-width: 767px) {
    width: 140px;
  }
`
