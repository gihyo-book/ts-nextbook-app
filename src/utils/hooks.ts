import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuthContext } from 'contexts/AuthContext'

export const useAuthGuard = (): void => {
  const router = useRouter()
  const { authUser, isLoading } = useAuthContext()

  useEffect(() => {
    // ユーザーが取得できない場合はサインインページにリダイレクト
    if (!authUser && !isLoading) {
      const currentPath = router.pathname

      router.push({
        pathname: '/signin',
        query: {
          redirect_to: currentPath,
        },
      })
    }
  }, [router, authUser, isLoading])
}
