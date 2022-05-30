import Link from 'next/link'
import styled from 'styled-components'
import { GitHubIcon } from 'components/atoms/IconButton'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

/**
 * フッター
 */
const Footer: React.FC = () => {
  return (
    <footer>
      <Flex flexDirection={{ _: 'column', md: 'row' }}>
        <Box
          minWidth={{ base: 'var(--size-1)', md: '120px' }}
          paddingRight={{ base: '0px', md: 'var(--size-1)' }}
        >
          <nav>
            <Box marginBottom="var(--size-2)">
              <Link href="/" passHref>
                <Anchor as="a">トップ</Anchor>
              </Link>
            </Box>
            <Box marginBottom="var(--size-2)">
              <Link href="/" passHref>
                <Anchor as="a">採用</Anchor>
              </Link>
            </Box>
            <Box marginBottom="var(--size-2)">
              <Link href="/" passHref>
                <Anchor as="a">お知らせ</Anchor>
              </Link>
            </Box>
          </nav>
        </Box>
        <Box
          minWidth={{ base: 'var(--size-1)', md: '120px' }}
          paddingRight={{ base: '0px', md: 'var(--size-1)' }}
        >
          <nav>
            <Box marginBottom="var(--size-2)">
              <Link href="/" passHref>
                <Anchor as="a">利用規約</Anchor>
              </Link>
            </Box>
            <Box marginBottom="var(--size-2)">
              <Link href="/" passHref>
                <Anchor as="a">プライバシーポリシー</Anchor>
              </Link>
            </Box>
            <Box marginBottom="var(--size-2)">
              <Link href="/" passHref>
                <Anchor as="a">配送と返品</Anchor>
              </Link>
            </Box>
          </nav>
        </Box>
        <Box minWidth={{ base: 'var(--size-1)', md: '120px' }}>
          <nav>
            <Anchor as="a" href="https://github.com/" target="_blank">
              <GitHubIcon size={22} />
            </Anchor>
          </nav>
        </Box>
      </Flex>
      <Box paddingTop="var(--size-3)" paddingBottom="var(--size-2)">
        <Text>© 2021 Gijutsuhyoronsha Co., Ltd.. All rights reserved.</Text>
      </Box>
    </footer>
  )
}

export default Footer
