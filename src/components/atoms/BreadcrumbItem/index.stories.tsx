import { ComponentMeta } from '@storybook/react'
import BreadcrumbItem from './index'

export default { title: 'Atoms/BreadcrumbItem' } as ComponentMeta<
  typeof BreadcrumbItem
>

export const Standard = () => (
  <div>
    <BreadcrumbItem>Item 1</BreadcrumbItem>
    <BreadcrumbItem>Item 2</BreadcrumbItem>
    <BreadcrumbItem>Item 3</BreadcrumbItem>
  </div>
)
