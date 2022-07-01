import Flex from 'components/layout/Flex'

interface ProductCardCarouselProps {
  children?: React.ReactNode
}

/**
 * 商品カードカルーセル
 */
const ProductCardCarousel = ({ children }: ProductCardCarouselProps) => {
  return (
    <Flex overflow={{ base: 'scroll', md: 'hidden' }} width="100%">
      {children}
    </Flex>
  )
}

export default ProductCardCarousel
