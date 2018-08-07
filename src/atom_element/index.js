// import * as React from 'react'
import styled from 'styled-components'

export const Icon = styled.i`
    display:${({ display }) => display || 'block'};
    width: ${ ({ width }) => width}px;
    height:${ ({ height }) => height}px;
    background: url('${({ url }) => url}') center center /    ${({ width }) => width}px  ${({ height }) => height}px no-repeat;
`

export const Text = styled.span`
    display:${({ display }) => display || 'block'};
    width: ${ ({ width }) => width}px;
    height:${ ({ height }) => height}px;
    line-height:${ ({ lineHeight }) => lineHeight}px;
    text-align: ${ ({ align }) => align};
    font-size: ${ ({ size }) => size}px;
    color: ${ ({ color }) => color};
`

export const Title = styled.h1`
    margin:0;
    display:${({ display }) => display || 'block'};
    width: ${ ({ width }) => width}px;
    height:${ ({ height }) => height}px;
    line-height:${ ({ lineHeight }) => lineHeight}px;
    text-align: ${ ({ align }) => align};
    font-size: ${ ({ size }) => size}px;
    color: ${ ({ color }) => color};
    font-weight: ${ ({ weight }) => weight || 'normal'};
`

//占位容器
export const PlaceHolder = styled.div`
   
`