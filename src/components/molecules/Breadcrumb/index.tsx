import styled from 'styled-components'
import Flex from 'components/layout/Flex'

const BreadcrumbRoot = styled(Flex)`
  list-style: none;
  padding: 0px;
  margin: 0px;
`

interface BreadcrumbProps {
  children?: React.ReactNode
}

/**
 * パンくずリスト
 */
const Breadcrumb = ({ children }: BreadcrumbProps) => {
  return <BreadcrumbRoot as="ol">{children}</BreadcrumbRoot>
}

export default Breadcrumb
