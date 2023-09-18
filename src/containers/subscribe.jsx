import React from 'react'
import { Container,Title,Input,Form,Button,Image } from '../components/subscribe/styles/subcribe'
export default function Subscribe ({children,...restProps})
{
 return <Container>{children}</Container>
}
Subscribe.Container=function Subscribecontainer({children,...restprops})
{
    return <Container>{children}</Container>
}
Subscribe.Title=function Subscribetitle({children,...restprops})
{
    return <Title>{children}</Title>
}
Subscribe.Form=function Subscribeform({children,...restprops})
{
    return <Form>{children}</Form>
}
Subscribe.Input=function Subscribeinput({...restprops})
{
    return <Input {...restprops}/>
}
Subscribe.Button=function Subscribeinput({children,...restprops})
{
    return <Button {...restprops}>{children}</Button>
}
Subscribe.Image=function Subscribeimage({...restprops})
{
    return <Image {...restprops}/>
}
