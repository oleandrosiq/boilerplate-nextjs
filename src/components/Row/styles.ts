import styled from 'styled-components'

import { applyMargin } from '../../utils/applyMargin'
import { applyPadding } from '../../utils/applyPadding'
import { IFlexBox, IMargin, IPadding } from '../../utils/types'

export interface ContainerProps
  extends IMargin,
    IPadding,
    Omit<IFlexBox, 'flexDirection'> {
  reverse?: boolean
  backgroundColor?: string
  width?: string
  wrap?: string
  gap?: string
}

export const Container = styled.div<ContainerProps>`
  ${props => applyMargin(props)};
  ${props => applyPadding(props)};

  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  width: ${props => props.width || '100%'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  display: flex;
  gap: ${props => props.gap || '0'};
`
