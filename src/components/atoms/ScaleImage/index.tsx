import Image, { ImageProps } from 'next/image'
import styled from 'styled-components'
import { Responsive } from 'types'
import { toPropValue } from 'utils/styles'

type ScaleImageProps =
  | Omit<ImageProps, 'quality'> & {
      containerWidth?: Responsive<string>
      containerHeight?: Responsive<string>
    }

const ScaleEffectImageContainer = styled.div<{
  width: Responsive<string>
  height: Responsive<string>
}>`
  overflow: hidden;
  ${({ width, theme }) => toPropValue('width', width, theme)}
  ${({ height, theme }) => toPropValue('height', height, theme)}
`

const ScaleEffectImage = styled(Image)`
  transition: transform 0.5s linear;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }
`

/**
 * スケールイメージ
 */
const ScaleImage = ({
  containerWidth,
  containerHeight,
  ...props
}: ScaleImageProps) => (
  <ScaleEffectImageContainer
    width={containerWidth ?? `${props.width}` ?? '320px'}
    height={containerHeight ?? `${props.height}` ?? '320px'}
  >
    <ScaleEffectImage
      quality="85"
      alt={props.alt ?? 'Product Image'}
      height={props.height ?? 320}
      width={props.width ?? 320}
      {...props}
    />
  </ScaleEffectImageContainer>
)

export default ScaleImage
