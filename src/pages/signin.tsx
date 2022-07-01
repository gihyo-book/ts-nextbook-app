import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import AppLogo from 'components/atoms/AppLogo'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import Layout from 'components/templates/Layout'
import SigninFormContainer from 'containers/SigninFormContainer'

const SigninPage: NextPage = () => {
  const router = useRouter()
  // 認証後のイベントハンドラ
  const handleSignin = async (err?: Error) => {
    if (!err) {
      // サインインに成功し、クエリが指定されている場合はそのURLに移動。
      // デフォルトはトップページに移動。
      const redurectTo = (router.query['redirect_to'] as string) ?? '/'

      console.log('Redirecting', redurectTo)
      await router.push(redurectTo)
    }
  }

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Flex
          width="400px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box marginBottom={2}>
            <AppLogo />
          </Box>
          <Box width="100%">
            {/*
              サインインフォームコンテナ
              SigninFormのユーザー名・パスワードから認証APIを呼び出し、
              onSigninコールバックが呼び出される
            */}
            <SigninFormContainer onSignin={handleSignin} />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default SigninPage
