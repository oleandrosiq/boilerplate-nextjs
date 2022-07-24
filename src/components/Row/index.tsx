// External Libraries
import React, { HTMLAttributes } from 'react'

// Styles
import { Container, ContainerProps } from './styles'

type Props = ContainerProps & HTMLAttributes<HTMLDivElement>

export const Row: React.FC<Props> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>
}
