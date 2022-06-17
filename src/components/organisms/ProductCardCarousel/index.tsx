import Flex from 'components/layout/Flex'

interface ProductCardCarouselProps {
  children?: React.ReactNode
}

/**
 * 商品カードカルーセル
 */
const ProductCardCarousel: React.FC<ProductCardCarouselProps> = ({
  children,
}: ProductCardCarouselProps) => {
  return (
    <Flex overflow={{ base: 'scroll', md: 'hidden' }} width="100%">
      {children}
    </Flex>
  )
}

export default ProductCardCarousel
