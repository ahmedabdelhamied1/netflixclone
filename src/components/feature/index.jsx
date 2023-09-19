import React from 'react'
import {Container,Title,Text} from "../feature/styles/feature"
export default function Feature({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}
Feature.Title=function Featuretitle({children,...restProps})
{
    return (<Title>{children}</Title>)
}
Feature.Text=function Featuretext({children,...restProps})
{
    return (<Text>{children}</Text>)
}