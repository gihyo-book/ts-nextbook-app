import styled from '@xstyled/styled-components'
import Flex from 'components/layout/Flex'

const BreadcrumbRoot = styled(Flex)`
  list-style: none;
  padding: 0px;
  margin: 0px;
`

/**
 * パンくずリスト
 */
const Breadcrumb: React.FC = ({ children }: { children?: React.ReactNode }) => {
  return <BreadcrumbRoot as="ol">{children}</BreadcrumbRoot>
}

export default Breadcrumb
