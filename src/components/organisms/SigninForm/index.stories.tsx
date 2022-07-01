import { ComponentMeta, ComponentStory } from '@storybook/react'
import SigninForm from './index'

export default {
  title: 'Organisms/SigninForm',
  argTypes: {
    onSignin: {
      description: 'サインインボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof SigninForm>

const Template: ComponentStory<typeof SigninForm> = (args) => (
  <SigninForm {...args} />
)
export const Form = Template.bind({})
