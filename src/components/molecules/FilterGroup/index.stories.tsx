import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import FilterGroup from './index'

export default {
  title: 'Molecules/FilterGroup',
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'タイトル',
      table: {
        type: { summary: 'string' },
      },
    },
    items: {
      control: { type: 'array' },
      description: 'オプション',
      table: {
        type: { summary: 'array' },
      },
    },
    onChange: {
      description: 'onChangeイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof FilterGroup>

const Template: ComponentStory<typeof FilterGroup> = (args) => {
  const [value, setValue] = useState<string[]>([])
  const handleChange = (value: string[]) => {
    setValue(value)
    args && args.onChange && args.onChange(value)
  }

  return <FilterGroup value={value} onChange={handleChange} {...args} />
}

export const Standard = Template.bind({})
Standard.args = {
  title: 'All categories',
  items: [
    { label: 'Clothes', name: 'clothes' },
    { label: 'Books', name: 'books' },
    { label: 'Shoes', name: 'shoes' },
  ],
}
