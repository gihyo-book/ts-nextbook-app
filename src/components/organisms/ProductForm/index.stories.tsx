import { ComponentMeta, ComponentStory } from '@storybook/react'
import ProductForm from './index'

export default {
  title: 'Organisms/ProductForm',
  argTypes: {
    onProductSave: {
      description: '出品ボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof ProductForm>

const Template: ComponentStory<typeof ProductForm> = (args) => (
  <ProductForm {...args} />
)
export const Form = Template.bind({})
