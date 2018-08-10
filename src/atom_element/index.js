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
    ${ ({ width }) => width !== undefined && ' width:' + width + 'px;'}
    ${ ({ height }) => height !== undefined && ' height:' + height + 'px;'}    
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

export const LI = styled.li`
     margin:0;
     padding:0;
     list-style:none;
     ${ ({ display }) => display !== undefined && ' display:' + display}
     ${ ({ width }) => width !== undefined && ' width:' + width}
`
export const UL = styled.ul`
     margin:0;
     padding:0;
     display:flex;
     flex-wrap:wrap;
`
export const P = styled.p`
     margin:0;
     padding:0;
`

export const Button = styled.button`
    margin:0;
    padding:0;
    text-align:center;
    border:none;
    display: ${ ({ display }) => display || 'block'};
`
export const Input = styled.input`
   border:none;
   padding:0;
   margin:0;
`

export const Img = styled.img`
  border:none;  
`



//占位容器
export const PlaceHolder = styled.div`
   
`