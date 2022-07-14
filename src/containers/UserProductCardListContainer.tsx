import Link from 'next/link'
import { Fragment } from 'react'
import ProductCard from 'components/organisms/ProductCard'
import ProductCardList from 'components/organisms/ProductCardList'
import useSearch from 'services/products/use-search'
import type { ApiContext, Product } from 'types'

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
}

interface UserProductCardListContainerProps {
  /**
   * 商品を所有するユーザーID
   */
  userId: number
  /**
   * 初期で表示する商品リスト
   */
  products?: Product[]
}

/**
 * ユーザー商品カードリストコンテナ
 */
const UserProductCardListContainer = ({
  userId,
  products,
}: UserProductCardListContainerProps) => {
  // ユーザーの所持する商品
  const { products: userProducts } = useSearch(context, {
    userId,
    initial: products,
  })

  return (
    <ProductCardList numberPerRow={6} numberPerRowForMobile={2}>
      {userProducts.map((p) => (
        <Fragment key={p.id}>
          <Link href={`/products/${p.id}`} passHref>
            <a>
              {/* 商品カード */}
              <ProductCard
                variant="small"
                title={p.title}
                price={p.price}
                imageUrl={p.imageUrl}
              />
            </a>
          </Link>
        </Fragment>
      ))}
    </ProductCardList>
  )
}

export default UserProductCardListContainer
