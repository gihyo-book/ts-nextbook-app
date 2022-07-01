import { ComponentMeta } from '@storybook/react'
import Breadcrumb from './index'
import BreadcrumbItem from 'components/atoms/BreadcrumbItem'

export default { title: 'Molecules/Breadcrumb' } as ComponentMeta<
  typeof Breadcrumb
>

export const Standard = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="#">Top</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="#">Clothes</a>
    </BreadcrumbItem>
    <BreadcrumbItem>Item</BreadcrumbItem>
  </Breadcrumb>
)
