import Flex from 'components/layout/Flex'

/**
 * 商品カードカルーセル
 */
const ProductCardCarousel: React.FC = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  return (
    <Flex overflow={{ _: 'scroll', md: 'hidden' }} width="100%">
      {children}
    </Flex>
  )
}

export default ProductCardCarousel
