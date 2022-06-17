import type { ApiContext } from 'types'
import { fetcher } from 'utils'

/**
 * 認証API（サインアウト）
 * @param context APIコンテキスト
 * @returns サインアウトメッセージ
 */
const signout = async (context: ApiContext): Promise<{ message: string }> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signout`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default signout
