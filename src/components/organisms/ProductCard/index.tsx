import styled from 'styled-components'
import ScaleImage from 'components/atoms/ScaleImage'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'

interface ProductCardProps {
  title: string
  price: number
  imageUrl: string
  blurDataUrl?: string
  variant?: 'listing' | 'small' | 'detail'
}

const ProductCardContainer = styled.div`
  position: relative;
`

const ProductCardImage = styled.div`
  z-index: 99;
`

const ProductCardInfo = styled.div`
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
`

/**
 * 商品カード
 */
const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  imageUrl,
  blurDataUrl,
  variant = 'listing',
}: ProductCardProps) => {
  const { size, imgSize } = (() => {
    switch (variant) {
      case 'detail':
        return { size: { _: '320px', md: '540px' }, imgSize: 540 }
      case 'listing':
        return { size: { _: '160px', md: '320px' }, imgSize: 320 }
      default:
        return { size: { _: '160px' }, imgSize: 160 }
    }
  })()

  return (
    <ProductCardContainer>
      {variant !== 'small' && (
        <ProductCardInfo>
          <Box>
            <Text
              as="h2"
              fontSize={{ base: 'size-3', md: 'size-4' }}
              letterSpacing={{ base: 'spacing-3', md: 'spacing-4' }}
              lineHeight={{ base: '32px', md: '48px' }}
              backgroundColor="white"
              margin="0px"
              paddingRight="space-2"
              paddingLeft="space-2"
              paddingTop="0px"
              paddingBottom="0px"
            >
              {title}
            </Text>
            <Text
              as="span"
              fontWeight="bold"
              display="inline-block"
              variant="medium"
              backgroundColor="white"
              fontSize={{ base: 'size-2', md: 'size-3' }}
              letterSpacing={{ base: 'spacing-2', md: 'spacing-3' }}
              margin="0px"
              padding={{ base: 'space-1', md: 'space-2' }}
            >
              {price}円
            </Text>
          </Box>
        </ProductCardInfo>
      )}
      <ProductCardImage>
        {blurDataUrl && (
          <ScaleImage
            src={imageUrl}
            width={imgSize ?? 320}
            height={imgSize ?? 320}
            containerWidth={size}
            containerHeight={size}
            objectFit="cover"
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        )}
        {!blurDataUrl && (
          <ScaleImage
            src={imageUrl}
            width={imgSize ?? 320}
            height={imgSize ?? 320}
            containerWidth={size}
            containerHeight={size}
            objectFit="cover"
          />
        )}
      </ProductCardImage>
      {variant === 'small' && (
        <Box marginTop="space-1">
          <Text as="h2" variant="medium" margin="0px" padding="0px">
            {title}
          </Text>
          <Text as="span" variant="medium">
            {price}円
          </Text>
        </Box>
      )}
    </ProductCardContainer>
  )
}

export default ProductCard
