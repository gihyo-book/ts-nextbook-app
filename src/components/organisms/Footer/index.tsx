import Link from 'next/link'
import styled from '@xstyled/styled-components'
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
        <Box minWidth={{ _: 1, md: '120px' }} pr={{ _: 0, md: 1 }}>
          <nav>
            <Box mb={2}>
              <Link href="/" passHref>
                <Anchor as="a">トップ</Anchor>
              </Link>
            </Box>
            <Box mb={2}>
              <Link href="/" passHref>
                <Anchor as="a">採用</Anchor>
              </Link>
            </Box>
            <Box mb={2}>
              <Link href="/" passHref>
                <Anchor as="a">お知らせ</Anchor>
              </Link>
            </Box>
          </nav>
        </Box>
        <Box minWidth={{ _: 1, md: '120px' }} pr={{ _: 0, md: 1 }}>
          <nav>
            <Box mb={2}>
              <Link href="/" passHref>
                <Anchor as="a">利用規約</Anchor>
              </Link>
            </Box>
            <Box mb={2}>
              <Link href="/" passHref>
                <Anchor as="a">プライバシーポリシー</Anchor>
              </Link>
            </Box>
            <Box mb={2}>
              <Link href="/" passHref>
                <Anchor as="a">配送と返品</Anchor>
              </Link>
            </Box>
          </nav>
        </Box>
        <Box minWidth={{ _: 1, md: '120px' }}>
          <nav>
            <Anchor as="a" href="https://github.com/" target="_blank">
              <GitHubIcon size={22} />
            </Anchor>
          </nav>
        </Box>
      </Flex>
      <Box pt={3} pb={2}>
        <Text>© 2021 Gijutsuhyoronsha Co., Ltd.. All rights reserved.</Text>
      </Box>
    </footer>
  )
}

export default Footer
