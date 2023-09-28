import React from 'react'
import {Container,Formcontent,Title,Text,Smalltext,Checkbox,Button,Input,Help, Error} from "../../components/forms/styles/forms"
export default function Form({children,...restProps}) {
   return (
    <Container>
        {
            children
        }
    </Container>
   ) 
}
Form.Formcontent=function FormContent({children,...restProps})
{
    return <Formcontent {...restProps}>{children}</Formcontent>
}
Form.Title=function FormTitle({children,...restProps})
{
    return <Title {...restProps}>{children}</Title>
}
Form.Text=function FormText({children,...restProps})
{
    return <Text {...restProps}>{children}</Text>
}
Form.Smalltext=function FormSmalltext({children,...restProps})
{
    return <Smalltext {...restProps}>{children}</Smalltext>
}
Form.Button=function FormButton({children,...restProps})
{
    return <Button {...restProps}>{children}</Button>
}
Form.Help=function FormHelp({children,...restProps})
{
    return <Help {...restProps}>{children}</Help>
}
Form.Checkbox=function FormCheckbox({...restProps})
{
    return <Checkbox {...restProps}/>
}
Form.Input=function FormInput({...restProps})
{
    return <Input {...restProps}/>
}
Form.Error=function FormError({children,...restProps})
{
    return <Error>{children}</Error>
}
