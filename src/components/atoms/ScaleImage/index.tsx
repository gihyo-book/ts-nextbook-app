import Image, { ImageProps } from 'next/image'
import styled from 'styled-components'
import { layout, LayoutProps, ResponsiveValue } from 'styled-system'

type ScaleImageProps =
  | Omit<ImageProps, 'quality'> & {
      containerWidth?: ResponsiveValue<string>
      containerHeight?: ResponsiveValue<string>
    }

const ScaleEffectImageContainer = styled.div<
  Pick<LayoutProps, 'width' | 'height'>
>`
  overflow: hidden;
  ${layout}
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
