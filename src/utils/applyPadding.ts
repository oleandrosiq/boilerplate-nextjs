// External Libraries
import { css } from 'styled-components'

// Types
import { IPadding } from './types'

export const applyPadding = (props: IPadding) => {
  return css`
    padding-bottom: ${props.paddingBottom || '0'};
    padding-right: ${props.paddingRight || '0'};
    padding-left: ${props.paddingLeft || '0'};
    padding-top: ${props.paddingTop || '0'};
  `
}