import { ComponentMeta } from '@storybook/react'
import Separator from './index'

export default { title: 'Atoms/Separator' } as ComponentMeta<typeof Separator>

export const Standard = () => (
  <>
    <Separator>or</Separator>
    <Separator>and</Separator>
    <Separator />
  </>
)
