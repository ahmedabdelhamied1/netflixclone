import React from "react";
import { Container ,Inner,Item,Title,Subtitle,Image,Frame} from "../components/jumbotron/styles/jumbotron";
export default function JumbotronC({children,...restProps})
{
   return (
    <Container>
        <Inner { ...restProps}>
            {children}
        </Inner>
    </Container>
   )
}

JumbotronC.Container=function JumbotronContainer({children,...resProps})
{
    return (<Container {...resProps}>{children}</Container>)
}
JumbotronC.Inner=function JumbotronInner({children,...resProps})
{
    return (<Inner {...resProps}>{children}</Inner>)
}
JumbotronC.Item=function JumbotronItem({children,...resProps})
{
    return (<Item {...resProps}>{children}</Item>)
}

JumbotronC.Frame=function JumbotronItem({children,...resProps})
{
    return (<Frame {...resProps}>{children}</Frame>)
}
JumbotronC.Title=function JumbotronTitle({children,...resProps})
{
    return (<Title {...resProps}>{children}</Title>)
}
JumbotronC.Subtitle=function JumbotronSubtitle({children,...resProps})
{
    return (<Subtitle {...resProps}>{children}</Subtitle>)
}
JumbotronC.Image=function JumbotronImage({...resProps})
{
    return (<Image  {...resProps}/>)
}
