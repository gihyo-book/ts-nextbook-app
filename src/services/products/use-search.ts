import useSWR from 'swr'
import type { ApiContext, Category, Condition, Product } from 'types'

export type UseSearchProps = {
  category?: Category
  conditions?: Condition[]
  userId?: number
  sort?: keyof Omit<Product, 'owner'>
  order?: 'asc' | 'desc'
  page?: number // TODO
  limit?: number // TODO
  initial?: Product[]
}

export type UseSearch = {
  products: Product[]
  isLoading: boolean
  isError: boolean
}

const useSearch = (
  context: ApiContext,
  {
    category,
    userId,
    conditions,
    initial,
    sort = 'id',
    order = 'desc',
  }: UseSearchProps = {},
): UseSearch => {
  const path = `${context.apiRootUrl.replace(/\/$/g, '')}/products`
  const params = new URLSearchParams()

  category && params.append('category', category)
  userId && params.append('owner.id', `${userId}`)
  conditions &&
    conditions.forEach((condition) => params.append('condition', condition))
  sort && params.append('_sort', sort)
  order && params.append('_order', order)
  const query = params.toString()
  const { data, error } = useSWR<Product[]>(
    query.length > 0 ? `${path}?${query}` : path,
  )

  return {
    products: data ?? initial ?? [],
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useSearch
