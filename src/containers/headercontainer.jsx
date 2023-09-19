import React from 'react'
import {Link} from "react-router-dom"
import {Container,Base,Buttonlink} from "../components/header/styles/header"
export default function Headercontainer({bg=true,children,...restProps})
{
    return (
        <Container {...restProps}>
           
                {children}
         
        </Container>
    )
}
Headercontainer.Base=function Headercontainerbase({children,...restProps}) {
    return <Base>{children}</Base>
    
}
Headercontainer.Logo=function Headercontainerlogo({to,children,...restProps}) {
    return (<Link to={to}>{children}</Link>)
    
}
Headercontainer.Buttonlink=function Headercontainerlogo({to,children,...restProps}) {
    return <Buttonlink to={to}>{children}</Buttonlink>
    
}

