import * as React from 'react'
import styled from 'styled-components'

interface SeparatorProps {
  children?: React.ReactNode
}

const getMargin = ({ children }: SeparatorProps) => (children ? '.50em' : '0em')

/**
 * セパレーター
 */
const Separator = styled.div<SeparatorProps>`
  height: 22px;
  color: #e5e7eb;
  display: flex;
  align-items: center;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #e5e7eb;
  }

  &::before {
    margin-right: ${getMargin};
  }

  &::after {
    margin-left: ${getMargin};
  }
`

export default Separator
