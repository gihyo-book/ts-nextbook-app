import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import AppLogo from 'components/atoms/AppLogo'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import Layout from 'components/templates/Layout'
import ProductFormContainer from 'containers/ProductFormContainer'
import { useAuthContext } from 'contexts/AuthContext'
import { useAuthGaurd } from 'utils/hooks'

const SellPage: NextPage = () => {
  const router = useRouter()
  const { authUser } = useAuthContext()

  const handleSave = (err?: Error) => {
    if (authUser && !err) {
      // 成功したら、ユーザーページに移動
      router.push(`/users/${authUser.id}`)
    }
  }

  // 認証ガード
  useAuthGaurd()

  return (
    <Layout>
      <Flex py={{ _: 2, md: 4 }} px={{ _: 2, md: 0 }} justifyContent="center">
        <Flex
          w="800px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box display={{ _: 'none', md: 'block' }} mb={2}>
            <AppLogo />
          </Box>
          <Box w="100%">
            {/*
              商品投稿フォームコンテナ
              商品情報を入力し、プロダクトAPIを通じて商品を保存
            */}
            <ProductFormContainer onSave={handleSave} />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default SellPage
