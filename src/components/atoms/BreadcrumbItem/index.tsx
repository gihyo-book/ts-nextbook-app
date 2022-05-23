import styled from 'styled-components'

/**
 * パンくずリスト要素
 */
const BreadcrumbItem = styled.li`
  list-style: none;
  display: inline;

  &:not(:first-child) {
    &::before {
      content: '/';
      color: ${({ theme }) => theme.colors.gray};
      padding: 0px 8px;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.gray};
    &:hover {
      text-decoration: underline;
    }
  }
`

export default BreadcrumbItem
