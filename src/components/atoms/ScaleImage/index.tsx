import Image, { ImageProps } from 'next/image'
import styled from 'styled-components'

type ScaleImageProps =
  | Omit<ImageProps, 'quality'> & {
      containerWidth?: number
      containerHeight?: number
    }

const ScaleEffectImageContainer = styled.div<{
  width: number | string
  height: number | string
}>`
  overflow: hidden;
  width: ${({ width }) => `${width}`.replace('px', '')}px
  height: ${({ height }) => `${height}`.replace('px', '')}px
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
const ScaleImage: React.FC<ScaleImageProps> = ({
  containerWidth,
  containerHeight,
  ...props
}: ScaleImageProps) => (
  <ScaleEffectImageContainer
    width={containerWidth ?? props.width ?? 320}
    height={containerHeight ?? props.height ?? 320}
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
