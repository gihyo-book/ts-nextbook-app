import type { ApiContext } from 'types'
import { fetcher } from 'utils'

export type PurchaseParams = {
  /**
   * 購入する商品ID
   */
  productId: number
}

/**
 * 購入API（商品購入）
 * @param context APIコンテキスト
 * @param params 商品ID
 * @returns 購入結果のメッセージ
 */
const purchase = async (
  context: ApiContext,
  params: PurchaseParams,
): Promise<{ message: string }> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/purchases`, {
    method: 'POST',
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(params),
  })
}

export default purchase
