import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import AppLogo from 'components/atoms/AppLogo'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import Layout from 'components/templates/Layout'
import SigninFormContainer from 'containers/SigninFormContainer'

const SigninPage: NextPage = () => {
  const router = useRouter()
  // 認証後のコールバック
  const handleSignin = async (err?: Error) => {
    if (!err) {
      // サインインに成功し、クエリが指定されていたらそのURLに移動。
      // デフォルトはトップページに移動。
      const redurectTo = (router.query['redirect_to'] as string) ?? '/'

      console.log('Redirecting', redurectTo)
      await router.push(redurectTo)
    }
  }

  return (
    <Layout>
      <Flex
        paddingTop="var(--size-spaces-2)"
        paddingBottom="var(--size-spaces-2)"
        paddingLeft={{ base: 'var(--size-spaces-2)', md: '0px' }}
        paddingRight={{ base: 'var(--size-spaces-2)', md: '0px' }}
        justifyContent="center"
      >
        <Flex
          width="400px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box marginBottom="var(--size-spaces-2)">
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
