import React from 'react'
import { Container,Inner,Row,Column,Link,Text } from '../components/footer/styles/footer'
export default function Footercontainer({children,...restProps})
{
    return (
        <Container>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}
Footercontainer.Container=function footercontainer({children,...restProps})
{
  return <Container>{children}</Container>
}
Footercontainer.Inner=function Footercontainerinner({children,...restProps})
{
  return <Inner>{children}</Inner>
}
Footercontainer.Row=function Footercontainerrow({children,...restProps})
{
  return <Row>{children}</Row>
}

Footercontainer.Column=function Footercontainercolumn({children,...restProps})
{
  return <Column>{children}</Column>
}
Footercontainer.Link=function Footercontainerinnerlink({children,...restProps})
{
  return <Link {...restProps}>{children}</Link>
}
Footercontainer.Text=function Footercontainerinnertext({children,...restProps})
{
  return <Text {...restProps}>{children}</Text>
}