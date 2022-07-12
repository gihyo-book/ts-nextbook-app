import useSWR from 'swr'
import type { ApiContext, User } from 'types'

export type UseUserProps = {
  /**
   * 取得するユーザーID
   */
  id: number
  /**
   * 初期状態
   */
  initial?: User
}

export type UseUser = {
  /**
   * 取得するユーザー
   */
  user?: User
  /**
   * ロードフラグ
   */
  isLoading: boolean
  /**
   * エラーフラグ
   */
  isError: boolean
}

/**
 * ユーザーAPI（個別取得）のカスタムフック
 * @param context APIコンテキスト
 * @returns ユーザーとAPI呼び出しの状態
 */
const useUser = (
  context: ApiContext,
  { id, initial }: UseUserProps,
): UseUser => {
  const { data, error } = useSWR<User>(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
  )

  return {
    user: data ?? initial,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useUser
