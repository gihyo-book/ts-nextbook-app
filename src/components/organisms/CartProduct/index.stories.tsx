import { ComponentMeta, ComponentStory } from '@storybook/react'
import CartProduct from './index'

export default {
  title: 'Organisms/CartProduct',
  argTypes: {
    id: {
      control: { type: 'number' },
      description: '商品ID',
      table: {
        type: { summary: 'number' },
      },
    },
    title: {
      control: { type: 'text' },
      description: '商品名',
      table: {
        type: { summary: 'string' },
      },
    },
    imageUrl: {
      control: { type: 'text' },
      description: '商品画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    price: {
      control: { type: 'number' },
      description: '価格（円）',
      table: {
        type: { summary: 'number' },
      },
    },
    onBuyButtonClick: {
      description: 'onBuyButtonClickイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
    onRemoveButtonClick: {
      description: 'onRemoveButtonClickイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof CartProduct>

const Template: ComponentStory<typeof CartProduct> = (args) => (
  <CartProduct {...args} />
)

export const NiceShoes = Template.bind({})
NiceShoes.args = {
  id: 1,
  imageUrl: '/images/sample/1.jpg',
  title: 'ナイスシューズ',
  price: 3200,
}
