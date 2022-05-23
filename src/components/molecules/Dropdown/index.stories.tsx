import { ComponentMeta, ComponentStory } from '@storybook/react'
import Dropdown from './index'

export default {
  title: 'Molecules/Dropdown',
  argTypes: {
    options: {
      control: { type: 'array' },
      description: 'オプション',
      table: {
        type: { summary: 'array' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: { type: 'text' },
      description: '値',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: 'onChangeイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
  options: [
    { value: null, label: '-' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
  ],
  placeholder: 'Please select items from the list',
}

export const InitialValue = Template.bind({})
InitialValue.args = {
  options: [
    { value: null, label: '-' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
  ],
  placeholder: 'Please select items from the list',
  value: 'one',
}

export const Many = Template.bind({})
Many.args = {
  options: Array.from(Array(20), (_v, k) => {
    return { value: k.toString(), label: k.toString() }
  }),
  placeholder: 'Please select items from the list',
}
