import {GradientListEl, GradientBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientItemDetails, isActive, onClickGradientBtn} = props
  const {displayText, value} = gradientItemDetails
  const onChangeButton = () => {
    onClickGradientBtn(value)
  }

  console.log(isActive)

  return (
    <GradientListEl>
      <GradientBtn onClick={onChangeButton} isActive={isActive} type="button">
        {displayText}
      </GradientBtn>
    </GradientListEl>
  )
}

export default GradientDirectionItem
