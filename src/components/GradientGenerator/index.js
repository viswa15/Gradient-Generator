import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  BgContainer,
  ColorsContainer,
  InputContainer,
  Heading,
  SubHeading,
  ColorLabel,
  ColorInput,
  GenerateButton,
  ButtonList,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientBtn: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientVal: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onChangeFirstColor = event => {
    this.setState({
      firstColor: event.target.value,
    })
  }

  onChangeSecondColor = event => {
    this.setState({
      secondColor: event.target.value,
    })
  }

  generateGradientBtn = () => {
    const {activeGradientBtn, firstColor, secondColor} = this.state
    this.setState({
      gradientVal: `to ${activeGradientBtn},${firstColor},${secondColor}`,
    })
  }

  onClickGradientBtn = value => {
    this.setState({activeGradientBtn: value})
  }

  render() {
    const {activeGradientBtn, firstColor, secondColor, gradientVal} = this.state

    return (
      <BgContainer gradient={gradientVal} data-testid="gradientGenerator">
        <Heading>Generate a CSS Color Gradient</Heading>
        <SubHeading>Choose Direction</SubHeading>
        <ButtonList className="buttons-list">
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              gradientItemDetails={each}
              isActive={activeGradientBtn === each.value}
              onClickGradientBtn={this.onClickGradientBtn}
            />
          ))}
        </ButtonList>
        <SubHeading>Pick the Colors</SubHeading>
        <ColorsContainer>
          <InputContainer>
            <ColorLabel>{firstColor}</ColorLabel>
            <ColorInput
              type="color"
              value={firstColor}
              onChange={this.onChangeFirstColor}
            />
          </InputContainer>
          <InputContainer>
            <ColorLabel>{secondColor}</ColorLabel>
            <ColorInput
              type="color"
              value={secondColor}
              onChange={this.onChangeSecondColor}
            />
          </InputContainer>
        </ColorsContainer>
        <GenerateButton onClick={this.generateGradientBtn} type="button">
          Generate
        </GenerateButton>
      </BgContainer>
    )
  }
}

export default GradientGenerator
