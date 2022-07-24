// External Libraries
import { css } from 'styled-components'

// Types
import { IMargin } from './types'

export const applyMargin = (props: IMargin) => {
  return css`
    margin-bottom: ${props.marginBottom || '0px'};
    margin-right: ${props.marginRight || '0px'};
    margin-left: ${props.marginLeft || '0px'};
    margin-top: ${props.marginTop || '0px'};
  `
}