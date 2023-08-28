import { Meta, StoryObj } from '@storybook/react'

import Link, { LinkProps } from './'

const meta: Meta<LinkProps> = {
  title: 'Molecules/Link',
  tags: ['autodocs'],
  component: Link,
  argTypes: {}
}

export default meta

export const Primary: StoryObj<LinkProps> = {
  args: {
    children: 'Link',
    href: '/'
  }
}
