import Image, { ImageProps } from 'next/image'
import styled from '@xstyled/styled-components'

type ImageShape = 'circle' | 'square'
type ShapeImageProps = ImageProps & { shape?: ImageShape }

const ImageWithShape = styled(Image)<{ shape?: ImageShape }>`
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '0')};
`

/**
 * シェイプイメージ
 */
const ShapeImage: React.FC<ShapeImageProps> = (props: ShapeImageProps) => {
  const { shape, ...imageProps } = props

  return <ImageWithShape shape={shape} {...imageProps} />
}

export default ShapeImage
